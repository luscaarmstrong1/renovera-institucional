import { NextResponse } from "next/server";
import { SITE } from "@/config/site";
import { getServiceFormSchema } from "@/config/serviceForms";

export type LeadLifecycleStatus =
  | "novo_lead"
  | "aguardando_triagem"
  | "contatado"
  | "proposta_enviada"
  | "convertido"
  | "perdido";

export type ApiSubmissionState =
  | "payload_validated_message_prepared"
  | "stored_and_delivered"
  | "provider_accepted"
  | "validation_failed"
  | "blocked_rate_limit"
  | "blocked_spam"
  | "server_error";

export interface LeadRecord {
  id: string | null;
  referenceHash: string;
  createdAt: string;
  updatedAt: string;
  status: LeadLifecycleStatus;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  serviceSlug: string;
  serviceName: string;
  leadCategory: string;
  segment: string;
  originPath: string;
  pageUrl: string;
  utm: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
  specificFields: Record<string, string>;
  message: string;
  consent: boolean;
}

// Proteção best-effort por instância; quando UPSTASH_REDIS_REST_URL estiver configurada, usa rate limit distribuído.
const instanceRateWindow = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;

function sanitizeInput(val: unknown, maxLen = 500): string {
  if (typeof val !== "string") return "";
  return val
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim()
    .slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 14;
}

function resolveClientIdentifier(request: Request): string {
  // Prioriza cabeçalho injetado pela borda da plataforma (Vercel), sem confiar cegamente em x-forwarded-for arbitrário
  const vercelIp = request.headers.get("x-vercel-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ua = (request.headers.get("user-agent") || "ua").slice(0, 64);
  const ip = (vercelIp || realIp || "anonymous").split(",")[0].trim();
  return `${ip}:${ua}`;
}

async function checkRateLimit(clientKey: string): Promise<{ allowed: boolean; mode: "distributed" | "instance_best_effort" }> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (upstashUrl && upstashToken) {
    try {
      const key = `rnv:rl:${encodeURIComponent(clientKey)}`;
      const res = await fetch(`${upstashUrl}/incr/${key}`, {
        headers: { Authorization: `Bearer ${upstashToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        const count = Number(data?.result || 1);
        if (count === 1) {
          await fetch(`${upstashUrl}/expire/${key}/600`, {
            headers: { Authorization: `Bearer ${upstashToken}` },
          });
        }
        return { allowed: count <= RATE_LIMIT_MAX_REQUESTS, mode: "distributed" };
      }
    } catch {
      // Fallback silencioso para memória da instância
    }
  }

  const now = Date.now();
  const current = instanceRateWindow.get(clientKey);
  if (current && now < current.resetAt) {
    if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
      return { allowed: false, mode: "instance_best_effort" };
    }
    current.count += 1;
  } else {
    instanceRateWindow.set(clientKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }
  return { allowed: true, mode: "instance_best_effort" };
}

export async function POST(request: Request) {
  try {
    const clientKey = resolveClientIdentifier(request);
    const rl = await checkRateLimit(clientKey);

    if (!rl.allowed) {
      return NextResponse.json(
        {
          ok: false,
          state: "blocked_rate_limit" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "RATE_LIMIT_EXCEEDED",
          message:
            "Limite de solicitações temporariamente atingido. Por favor, utilize nosso WhatsApp oficial (19) 99651-4827 ou tente novamente em alguns minutos.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Proteção honeypot anti-spam
    const honeypotVal = body.honeypot || body.website;
    if (honeypotVal && String(honeypotVal).trim().length > 0) {
      return NextResponse.json(
        {
          ok: false,
          state: "blocked_spam" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "SPAM_DETECTED",
          message: "Submissão bloqueada pelo filtro anti-spam.",
        },
        { status: 400 }
      );
    }

    const name = sanitizeInput(body.name, 120);
    const company = sanitizeInput(body.company, 120);
    const email = sanitizeInput(body.email, 160).toLowerCase();
    const phone = sanitizeInput(body.phone || body.whatsapp, 40);
    const serviceSlug = sanitizeInput(body.service || "reno-adviser", 80);
    const segment = sanitizeInput(body.segment || "geral", 80);
    const originPath = sanitizeInput(body.originPath || "/contato", 160);
    const pageUrl = sanitizeInput(body.pageUrl || "", 300);
    const message = sanitizeInput(body.message, 2000);
    const consent = Boolean(body.consent);

    if (!name || name.length < 2) {
      return NextResponse.json(
        {
          ok: false,
          state: "validation_failed" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "INVALID_NAME",
          message: "Por favor, informe seu nome completo (mínimo 2 caracteres).",
        },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          state: "validation_failed" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "INVALID_EMAIL",
          message: "Por favor, informe um endereço de e-mail válido.",
        },
        { status: 400 }
      );
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        {
          ok: false,
          state: "validation_failed" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "INVALID_PHONE",
          message: "Por favor, informe um WhatsApp ou telefone válido com DDD.",
        },
        { status: 400 }
      );
    }

    const schema = getServiceFormSchema(serviceSlug);
    const rawSpecific = typeof body.specificFields === "object" && body.specificFields !== null ? body.specificFields : {};
    const sanitizedSpecific: Record<string, string> = {};

    for (const fieldDef of schema.specificFields) {
      const val = sanitizeInput(rawSpecific[fieldDef.name], 300);
      if (fieldDef.required && !val && body.enforceSpecificFields === true) {
        return NextResponse.json(
          {
            ok: false,
            state: "validation_failed" as ApiSubmissionState,
            payloadValidated: false,
            messagePrepared: false,
            stored: false,
            delivered: false,
            code: "MISSING_SERVICE_FIELD",
            field: fieldDef.name,
            message: `Por favor, preencha o campo específico: ${fieldDef.label.replace(" *", "")}.`,
          },
          { status: 400 }
        );
      }
      if (val) {
        sanitizedSpecific[fieldDef.label.replace(" *", "")] = val;
      }
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          state: "validation_failed" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "INVALID_MESSAGE",
          message: "Por favor, descreva sua necessidade técnica com pelo menos 10 caracteres.",
        },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          ok: false,
          state: "validation_failed" as ApiSubmissionState,
          payloadValidated: false,
          messagePrepared: false,
          stored: false,
          delivered: false,
          code: "CONSENT_REQUIRED",
          message: "É necessário concordar com a Política de Privacidade (LGPD) para prosseguir.",
        },
        { status: 400 }
      );
    }

    const nowIso = new Date().toISOString();
    const referenceHash = `REF-${nowIso.slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const specificLines = Object.entries(sanitizedSpecific).map(([k, v]) => `• ${k}: ${v}`);

    const structuredSummary = [
      `Solicição Técnica — ${schema.serviceName}`,
      `Categoria: ${schema.leadCategory} | Origem: ${originPath}`,
      `Solicitante: ${name}${company ? ` (${company})` : ""}`,
      `E-mail: ${email} | WhatsApp: ${phone}`,
      ...(specificLines.length > 0 ? ["--- Dados Específicos do Serviço ---", ...specificLines] : []),
      `--- Detalhamento ---`,
      message,
    ].join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(
      `${schema.whatsappIntro}\n\n${structuredSummary}`
    )}`;

    const mailtoUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Solicitação Técnica Renovera — ${schema.serviceName} (${name})`
    )}&body=${encodeURIComponent(structuredSummary)}`;

    const leadRecord: LeadRecord = {
      id: null,
      referenceHash,
      createdAt: nowIso,
      updatedAt: nowIso,
      status: "novo_lead",
      name,
      company,
      email,
      whatsapp: phone,
      serviceSlug: schema.serviceSlug,
      serviceName: schema.serviceName,
      leadCategory: schema.leadCategory,
      segment,
      originPath,
      pageUrl,
      utm: {
        source: sanitizeInput(body.utmSource, 80),
        medium: sanitizeInput(body.utmMedium, 80),
        campaign: sanitizeInput(body.utmCampaign, 80),
      },
      specificFields: sanitizedSpecific,
      message,
      consent,
    };

    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    let storedInCrm = false;
    let deliveredByEmail = false;
    let persistedLeadId: string | null = null;

    if (crmWebhookUrl) {
      try {
        const hookRes = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...leadRecord,
            status: "aguardando_triagem" as LeadLifecycleStatus,
          }),
        });
        if (hookRes.ok) {
          storedInCrm = true;
          persistedLeadId = `RNV-${nowIso.slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
          leadRecord.id = persistedLeadId;
          leadRecord.status = "aguardando_triagem";
        }
      } catch {
        storedInCrm = false;
      }
    }

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Renovera Site <onboarding@resend.dev>",
            to: [SITE.email],
            reply_to: email,
            subject: `Nova Solicitação Técnica — ${schema.serviceName} — ${name}`,
            text: structuredSummary,
          }),
        });
        if (resendRes.ok) {
          deliveredByEmail = true;
        }
      } catch {
        deliveredByEmail = false;
      }
    }

    // Se houve persistência real (CRM) ou aceitação comprovada pelo provedor de e-mail:
    if (storedInCrm || deliveredByEmail) {
      const finalState: ApiSubmissionState = storedInCrm ? "stored_and_delivered" : "provider_accepted";
      return NextResponse.json({
        ok: true,
        state: finalState,
        payloadValidated: true,
        messagePrepared: true,
        stored: storedInCrm,
        delivered: true,
        rateLimitMode: rl.mode,
        leadId: persistedLeadId,
        leadStatus: leadRecord.status,
        whatsappUrl,
        mailtoUrl,
        summary: structuredSummary,
        message:
          "Sua solicitação técnica foi transmitida com sucesso à central de atendimento da Renovera.",
      });
    }

    // Sem banco/CRM ou e-mail transacional configurado:
    // NUNCA retornar delivered: true nem protocolo definitivo enganoso.
    // Retornar claramente que o payload foi validado e a mensagem técnica foi preparada para envio pelo canal oficial.
    return NextResponse.json({
      ok: true,
      state: "payload_validated_message_prepared" as ApiSubmissionState,
      payloadValidated: true,
      messagePrepared: true,
      stored: false,
      delivered: false,
      rateLimitMode: rl.mode,
      leadId: null,
      referenceCode: referenceHash,
      whatsappUrl,
      mailtoUrl,
      summary: structuredSummary,
      attachmentGuidance: schema.attachmentPolicy.deliveryInstruction,
      message:
        "Dados técnicos validados e mensagem estruturada preparada. Como este ambiente opera sem armazenamento automático de leads, clique abaixo em 'Enviar no WhatsApp Oficial' ou 'Abrir no E-mail' para concluir o envio diretamente à equipe da Renovera.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        state: "server_error" as ApiSubmissionState,
        payloadValidated: false,
        messagePrepared: false,
        stored: false,
        delivered: false,
        code: "SERVER_ERROR",
        message:
          "Não foi possível processar a requisição no momento. Utilize diretamente nosso WhatsApp oficial (19) 99651-4827.",
      },
      { status: 500 }
    );
  }
}
