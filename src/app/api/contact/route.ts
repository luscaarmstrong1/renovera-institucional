import { NextResponse } from "next/server";
import { SITE } from "@/config/site";

// Rate limiting por IP em memória para proteção de endpoint em runtime
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const RATE_LIMIT_MAX_REQUESTS = 8;

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

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "local-client";
    const now = Date.now();

    const rl = rateLimitStore.get(clientIp);
    if (rl && now < rl.resetAt) {
      if (rl.count >= RATE_LIMIT_MAX_REQUESTS) {
        return NextResponse.json(
          {
            success: false,
            delivered: false,
            code: "RATE_LIMIT_EXCEEDED",
            message: "Limite de solicitações temporariamente atingido. Por favor, utilize nosso WhatsApp oficial ou tente novamente em alguns minutos."
          },
          { status: 429 }
        );
      }
      rl.count += 1;
    } else {
      rateLimitStore.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }

    const body = await request.json();

    // Proteção honeypot anti-spam
    const honeypotVal = body.honeypot || body.website;
    if (honeypotVal && String(honeypotVal).trim().length > 0) {
      return NextResponse.json(
        { success: false, delivered: false, code: "SPAM_DETECTED", message: "Submissão bloqueada pelo filtro anti-spam." },
        { status: 400 }
      );
    }

    const name = sanitizeInput(body.name, 120);
    const company = sanitizeInput(body.company, 120);
    const email = sanitizeInput(body.email, 160).toLowerCase();
    const phone = sanitizeInput(body.phone, 40);
    const service = sanitizeInput(body.service || "reno-adviser", 80);
    const message = sanitizeInput(body.message, 2000);
    const consent = Boolean(body.consent);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, delivered: false, code: "INVALID_NAME", message: "Por favor, informe seu nome completo (mínimo 2 caracteres)." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, delivered: false, code: "INVALID_EMAIL", message: "Por favor, informe um endereço de e-mail corporativo ou pessoal válido." },
        { status: 400 }
      );
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, delivered: false, code: "INVALID_PHONE", message: "Por favor, informe um telefone ou WhatsApp válido com DDD." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, delivered: false, code: "INVALID_MESSAGE", message: "Por favor, descreva sua necessidade técnica com pelo menos 10 caracteres." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, delivered: false, code: "CONSENT_REQUIRED", message: "É necessário concordar com a Política de Privacidade (LGPD) para prosseguir." },
        { status: 400 }
      );
    }

    const protocolId = `RNV-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const structuredSummary = [
      `Protocolo Técnico: ${protocolId}`,
      `Solicitante: ${name}${company ? ` (${company})` : ""}`,
      `Solução / Escopo: ${service}`,
      `E-mail: ${email} | WhatsApp/Tel: ${phone}`,
      `Detalhamento Técnico: ${message}`
    ].join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(
      `Olá, equipe técnica da Renovera! Segue minha solicitação estruturada pelo site:\n\n${structuredSummary}`
    )}`;

    const mailtoUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `[${protocolId}] Solicitação Técnica Renovera — ${service}`
    )}&body=${encodeURIComponent(structuredSummary)}`;

    // Envio transacional real caso WEBHOOK_URL ou RESEND_API_KEY estejam configurados
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
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
          subject: `[${protocolId}] Nova Solicitação Técnica — ${name}`,
          text: structuredSummary,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({
          success: true,
          delivered: true,
          mode: "transactional_email",
          protocolId,
          whatsappUrl,
          mailtoUrl,
          summary: structuredSummary,
          message: "Sua solicitação técnica foi transmitida com sucesso à engenharia da Renovera.",
        });
      }
    }

    if (webhookUrl) {
      const hookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          protocolId,
          timestamp: new Date().toISOString(),
          name,
          company,
          email,
          phone,
          service,
          message,
        }),
      });

      if (hookRes.ok) {
        return NextResponse.json({
          success: true,
          delivered: true,
          mode: "webhook_delivered",
          protocolId,
          whatsappUrl,
          mailtoUrl,
          summary: structuredSummary,
          message: "Sua solicitação técnica foi registrada e entregue à central de engenharia.",
        });
      }
    }

    // Sem transporte transacional ativo no ambiente: NUNCA declarar delivered: true.
    // Retornar com transparência os dados validados e canais assistidos oficiais.
    return NextResponse.json({
      success: true,
      delivered: false,
      mode: "assisted_channel",
      fallbackRequired: true,
      protocolId,
      whatsappUrl,
      mailtoUrl,
      summary: structuredSummary,
      message:
        "Seu briefing técnico foi validado e estruturado com protocolo. Como este ambiente opera com encaminhamento assistido direto, conclua o envio em 1 clique pelo WhatsApp Oficial ou E-mail Corporativo abaixo.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        delivered: false,
        code: "SERVER_ERROR",
        message: "Não foi possível processar a requisição no momento. Utilize nosso WhatsApp oficial (19) 99651-4827.",
      },
      { status: 500 }
    );
  }
}
