"use client";

import React, { useState, useEffect } from "react";
import { companyConfig } from "@/config/company";
import { getServiceFormSchema, SERVICE_FORM_SCHEMAS } from "@/config/serviceForms";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Copy,
  Check,
  Mail,
  RotateCcw,
  FileText,
} from "lucide-react";

interface ContactFormProps {
  defaultService?: string;
  originPath?: string;
  segment?: string;
  compact?: boolean;
}

export function ContactForm({
  defaultService = "reno-adviser",
  originPath = "/contato",
  segment = "geral",
  compact = false,
}: ContactFormProps) {
  const canonicalSlug = SERVICE_FORM_SCHEMAS[defaultService] ? defaultService : "reno-adviser";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: canonicalSlug,
    message: "",
    consent: false,
    honeypot: "",
  });

  const [specificValues, setSpecificValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "delivered" | "prepared">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [apiResponse, setApiResponse] = useState<{
    state?: string;
    leadId?: string | null;
    referenceCode?: string;
    whatsappUrl?: string;
    mailtoUrl?: string;
    summary?: string;
    attachmentGuidance?: string;
    message?: string;
  }>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const resolved = SERVICE_FORM_SCHEMAS[defaultService] ? defaultService : "reno-adviser";
    setFormData((prev) => ({ ...prev, service: resolved }));
  }, [defaultService]);

  const currentSchema = getServiceFormSchema(formData.service);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSpecificChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSpecificValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.name || formData.name.trim().length < 2) {
      setErrorMessage("Por favor, informe seu nome completo.");
      return;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      setErrorMessage("Por favor, informe um e-mail válido.");
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setErrorMessage("Por favor, informe um WhatsApp ou telefone válido com DDD.");
      return;
    }

    for (const fieldDef of currentSchema.specificFields) {
      if (fieldDef.required && (!specificValues[fieldDef.name] || !specificValues[fieldDef.name].trim())) {
        setErrorMessage(`Por favor, preencha o campo: ${fieldDef.label.replace(" *", "")}.`);
        return;
      }
    }

    if (!formData.message || formData.message.trim().length < 10) {
      setErrorMessage("Por favor, descreva sua necessidade técnica (mínimo de 10 caracteres).");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("É necessário concordar com a Política de Privacidade (LGPD).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          originPath,
          pageUrl,
          segment,
          specificFields: specificValues,
          enforceSpecificFields: true,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.ok === false) {
        setErrorMessage(data.message || "Verifique os campos preenchidos e tente novamente.");
        setStatus("idle");
        return;
      }

      setApiResponse({
        state: data.state,
        leadId: data.leadId,
        referenceCode: data.referenceCode,
        whatsappUrl: data.whatsappUrl,
        mailtoUrl: data.mailtoUrl,
        summary: data.summary,
        attachmentGuidance: data.attachmentGuidance,
        message: data.message,
      });

      if (data.delivered === true) {
        setStatus("delivered");
      } else {
        setStatus("prepared");
      }
    } catch {
      const fallbackText =
        `${currentSchema.whatsappIntro}\n` +
        `Solicitante: ${formData.name}${formData.company ? ` (${formData.company})` : ""}\n` +
        `E-mail: ${formData.email} | WhatsApp: ${formData.phone}\n` +
        `Detalhamento Técnico: ${formData.message}`;
      setApiResponse({
        state: "payload_validated_message_prepared",
        leadId: null,
        referenceCode: undefined,
        whatsappUrl: `https://api.whatsapp.com/send?phone=${companyConfig.phoneRaw}&text=${encodeURIComponent(
          fallbackText
        )}`,
        mailtoUrl: `mailto:${companyConfig.email}?subject=${encodeURIComponent(
          `Solicitação Técnica Renovera — ${currentSchema.serviceName}`
        )}&body=${encodeURIComponent(fallbackText)}`,
        summary: fallbackText,
        attachmentGuidance: currentSchema.attachmentPolicy.deliveryInstruction,
        message:
          "Mensagem técnica preparada. Escolha abaixo o canal direto oficial (WhatsApp ou E-mail) para enviar sua solicitação.",
      });
      setStatus("prepared");
    }
  };

  const handleCopySummary = async () => {
    if (!apiResponse.summary) return;
    try {
      await navigator.clipboard.writeText(apiResponse.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#DFE7E3] p-6 sm:p-8 shadow-md">
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-widest text-[#0A4B2D] bg-[#E8F0EC] px-2.5 py-1 rounded">
            {currentSchema.serviceName}
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#687873]">
            Formulário Técnico Segmentado
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#033118]">
          {currentSchema.formTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#40504C] mt-1 leading-relaxed">
          {currentSchema.formSubtitle}
        </p>
      </div>

      {status === "delivered" ? (
        <div
          className="bg-[#E8F0EC] border border-[#0A4B2D]/30 rounded-xl p-6 text-center space-y-4"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="w-12 h-12 text-[#137A4E] mx-auto" />
          <div>
            {apiResponse.leadId && (
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A4B2D] bg-white px-2.5 py-1 rounded border border-[#DFE7E3]">
                Registro: {apiResponse.leadId}
              </span>
            )}
            <h4 className="text-lg font-bold text-[#033118] mt-3">
              Solicitação Entregue à Engenharia
            </h4>
            <p className="text-sm text-[#40504C] mt-1">
              {apiResponse.message ||
                "Nossa equipe técnica recebeu os dados preliminares e retornará em horário comercial."}
            </p>
          </div>
          {apiResponse.whatsappUrl && (
            <div className="pt-2">
              <a
                href={apiResponse.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-5 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Também falar agora pelo WhatsApp Oficial
              </a>
            </div>
          )}
        </div>
      ) : status === "prepared" ? (
        <div
          className="bg-[#FFFDF6] border-2 border-[#FED15D] rounded-xl p-6 space-y-5"
          role="region"
          aria-live="polite"
          aria-label="Mensagem técnica preparada para envio"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#033118] text-[#FED15D] flex items-center justify-center flex-shrink-0 mt-0.5">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.7rem] font-mono font-bold uppercase tracking-wider text-[#033118] bg-[#FED15D]/40 px-2 py-0.5 rounded">
                  MENSAGEM PREPARADA PARA ENVIO
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#0A4B2D]">
                  {currentSchema.serviceName}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#033118] mt-1">
                Dados Validados — Envie Agora pelo Canal Oficial
              </h4>
              <p className="text-xs text-[#40504C] mt-1 leading-relaxed">
                {apiResponse.message}
              </p>
            </div>
          </div>

          {apiResponse.summary && (
            <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-lg p-3.5 text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#687873]">
                  Resumo Estruturado da Solicitação ({currentSchema.serviceName})
                </span>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#033118] hover:text-[#0A4B2D]"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#137A4E]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copiado!" : "Copiar texto"}
                </button>
              </div>
              <pre className="text-xs text-[#17221F] whitespace-pre-wrap font-mono leading-relaxed m-0">
                {apiResponse.summary}
              </pre>
            </div>
          )}

          {apiResponse.attachmentGuidance && (
            <div className="bg-[#E8F0EC] border border-[#0A4B2D]/20 rounded-lg p-3 text-xs text-[#033118] flex items-start gap-2">
              <FileText className="w-4 h-4 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
              <span>{apiResponse.attachmentGuidance}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={apiResponse.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-4 w-full flex items-center justify-center gap-2 font-bold"
            >
              <PhoneCall className="w-4 h-4" />
              Enviar pelo WhatsApp Oficial
            </a>
            <a
              href={apiResponse.mailtoUrl}
              className="btn-secondary-dark text-xs py-3 px-4 w-full flex items-center justify-center gap-2 font-bold"
            >
              <Mail className="w-4 h-4" />
              Abrir no Cliente de E-mail
            </a>
          </div>

          <div className="pt-2 border-t border-[#DFE7E3] flex items-center justify-between text-xs text-[#687873]">
            <span>
              WhatsApp Oficial:{" "}
              <strong className="text-[#033118]">{companyConfig.whatsappDisplay}</strong>
            </span>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-1 font-semibold text-[#033118] hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Editar dados
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot anti-spam invisível */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor={`contact-honeypot-${originPath}`}>Não preencha este campo</label>
            <input
              id={`contact-honeypot-${originPath}`}
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label
              htmlFor="contact-service"
              className="block text-xs font-semibold uppercase tracking-wider text-[#033118] mb-1"
            >
              Solução Renô de Interesse *
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-md border-2 border-[#033118]/20 text-sm font-semibold text-[#033118] focus:outline-none focus:border-[#033118] bg-[#F8F8F5]"
            >
              <option value="reno-adviser">
                01 • Renô Adviser™ — Homologação &amp; Reversão de Inversão de Fluxo
              </option>
              <option value="reno-supply">
                02 • Renô Supply — Cotação Técnica de Equipamentos e Kits
              </option>
              <option value="reno-projetos">
                03 • Renô Projetos — Usina Solar Completa Ponta a Ponta
              </option>
              <option value="reno-performance">
                04 • Renô Performance — Monitoramento e Gestão Operacional de Ativos
              </option>
              <option value="reno-invest">
                05 • Renô Invest — Estruturação de Investimentos Solares
              </option>
              <option value="reno-protect">
                06 • Renô Protect — Proteção e Seguro para Sistemas Fotovoltaicos
              </option>
              <option value="reno-engenharia">
                07 • Renô Engenharia — Projetos BT/MT, Subestações, Automação e Bombeamento
              </option>
              <option value="reno-partner">
                08 • Renô Partner — Candidatura de Parceria para Integradores
              </option>
              <option value="reno-energy-hub">
                09 • Renô Energy Hub — Eletropostos AC/DC, Demanda e Média Tensão
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1"
              >
                Nome Completo *
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex.: Eng. Roberto Almeida"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
              />
            </div>
            <div>
              <label
                htmlFor="contact-company"
                className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1"
              >
                Empresa / Integrador / Condomínio
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ex.: SolarTech ou Indústria ABC"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1"
              >
                E-mail *
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="voce@suaempresa.com.br"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1"
              >
                WhatsApp com DDD *
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(19) 99651-4827"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
              />
            </div>
          </div>

          {/* Campos Dinâmicos Específicos da Solução Selecionada */}
          {!compact && currentSchema.specificFields.length > 0 && (
            <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-4 space-y-3.5">
              <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#0A4B2D]">
                Dados Técnicos Específicos — {currentSchema.serviceName}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentSchema.specificFields.map((field) => (
                  <div
                    key={field.name}
                    data-dynamic-field={field.name}
                    className={
                      currentSchema.specificFields.length % 2 === 1 &&
                      field === currentSchema.specificFields[currentSchema.specificFields.length - 1]
                        ? "sm:col-span-2"
                        : ""
                    }
                  >
                    <label
                      htmlFor={`spec-${field.name}`}
                      className="block text-[0.7rem] font-semibold uppercase tracking-wider text-[#40504C] mb-1"
                    >
                      {field.label}
                    </label>
                    {field.type === "select" && field.options ? (
                      <select
                        id={`spec-${field.name}`}
                        name={field.name}
                        required={field.required}
                        value={specificValues[field.name] || ""}
                        onChange={handleSpecificChange}
                        className="w-full px-3 py-2 rounded-md border border-[#DFE7E3] text-xs sm:text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
                      >
                        <option value="">Selecione uma opção...</option>
                        {field.options.map((opt) => (
                          <option key={opt.value} value={opt.label}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={`spec-${field.name}`}
                        type="text"
                        name={field.name}
                        required={field.required}
                        value={specificValues[field.name] || ""}
                        onChange={handleSpecificChange}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2 rounded-md border border-[#DFE7E3] text-xs sm:text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1"
            >
              Resumo da Demanda ou Observações Técnicas *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva brevemente o contexto técnico do seu projeto, parecer de acesso ou necessidade..."
              className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm text-[#17221F] bg-white focus:outline-none focus:border-[#033118]"
            />
          </div>

          {/* Orientação Transparente sobre Documentos Técnicos */}
          <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-lg p-3 text-[0.72rem] text-[#40504C] flex items-start gap-2.5">
            <FileText className="w-4 h-4 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#033118] block">
                Documentos para Avaliação ({currentSchema.attachmentPolicy.acceptedFormatsLabel}):
              </strong>
              <span>{currentSchema.attachmentPolicy.deliveryInstruction}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="contact-consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 rounded border-[#DFE7E3] text-[#033118] focus:ring-[#033118]"
            />
            <label htmlFor="contact-consent" className="text-xs text-[#687873] leading-relaxed">
              Declaro que concordo com o tratamento dos dados informados para atendimento técnico e
              comercial pela Renovera Energias Renováveis Ltda, nos termos da{" "}
              <a href="/privacidade" className="text-[#033118] underline hover:text-[#0A4B2D]">
                Política de Privacidade (LGPD)
              </a>{" "}
              e da{" "}
              <a href="/cookies" className="text-[#033118] underline hover:text-[#0A4B2D]">
                Política de Cookies
              </a>
              .
            </label>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="flex items-center gap-2 p-3 text-xs text-[#B42318] bg-red-50 border border-red-200 rounded-md"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full py-3.5 text-sm font-bold tracking-wide flex items-center justify-center"
          >
            {status === "submitting" ? (
              "Validando Dados Técnicos..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {currentSchema.ctaLabel}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
