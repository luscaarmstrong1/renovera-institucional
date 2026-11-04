"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import { Send, CheckCircle2, AlertCircle, PhoneCall, Shield } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "consultoria-regulatoria",
    message: "",
    consent: false,
    honeypot: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "fallback">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot anti-spam check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("É necessário concordar com a política de privacidade.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        // Se a entrega server-side não estiver configurada com credenciais SMTP, ativamos o fallback transparente
        setStatus("fallback");
      }
    } catch {
      setStatus("fallback");
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}${formData.company ? ` da ${formData.company}` : ""}.\n` +
      `Gostaria de atendimento para: ${formData.service}.\n` +
      `E-mail: ${formData.email} | Telefone: ${formData.phone}\n` +
      `Mensagem: ${formData.message}`
    );
    window.open(`https://wa.me/${companyConfig.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-xl border border-[#DFE7E3] p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-display text-[#033118]">
          Solicitar Atendimento Técnico
        </h3>
        <p className="text-sm text-[#40504C] mt-1">
          Preencha o formulário institucional para avaliação de engenharia ou consultoria regulatória.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-[#E8F0EC] border border-[#0A4B2D]/30 rounded-lg p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#137A4E] mx-auto" />
          <h4 className="text-lg font-bold text-[#033118]">Solicitação Registrada</h4>
          <p className="text-sm text-[#40504C]">
            Agradecemos o contato. Nossa equipe técnica analisará as informações preliminares e retornará em horário comercial.
          </p>
        </div>
      ) : status === "fallback" ? (
        <div className="bg-[#FFF9EA] border border-[#FED15D] rounded-lg p-6 text-center space-y-4">
          <PhoneCall className="w-10 h-10 text-[#033118] mx-auto" />
          <div>
            <h4 className="text-lg font-bold text-[#033118]">Encaminhar via Canal Direto</h4>
            <p className="text-xs text-[#40504C] mt-1 max-w-md mx-auto">
              Sua mensagem está estruturada. Para atendimento com resposta imediata pelo plantão técnico, envie diretamente ao nosso canal oficial no WhatsApp ou por e-mail.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="btn-primary text-xs py-2 px-4 w-full sm:w-auto"
            >
              Abrir WhatsApp da Renovera
            </button>
            <a
              href={`mailto:${companyConfig.email}?subject=Solicitação Técnica - ${formData.service}&body=${encodeURIComponent(
                `Nome: ${formData.name}\nEmpresa: ${formData.company}\nTelefone: ${formData.phone}\n\n${formData.message}`
              )}`}
              className="btn-secondary-dark text-xs py-2 px-4 w-full sm:w-auto"
            >
              Enviar via E-mail
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot anti-spam invisível */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex.: Engenheiro Carlos Silva"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm focus:outline-none focus:border-[#033118] focus:ring-1 focus:ring-[#033118]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1">
                Empresa / Empreendimento
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ex.: Indústria ou Usina"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm focus:outline-none focus:border-[#033118] focus:ring-1 focus:ring-[#033118]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1">
                E-mail Corporativo *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="contato@suaempresa.com.br"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm focus:outline-none focus:border-[#033118] focus:ring-1 focus:ring-[#033118]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1">
                Telefone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm focus:outline-none focus:border-[#033118] focus:ring-1 focus:ring-[#033118]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1">
              Serviço de Interesse *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm focus:outline-none focus:border-[#033118] focus:ring-1 focus:ring-[#033118] bg-white"
            >
              <option value="consultoria-regulatoria">Consultoria Regulatória & Inversão de Fluxo</option>
              <option value="projetos-eletricos">Projetos Elétricos & Subestações</option>
              <option value="energia-solar">Energia Solar Fotovoltaica (MMGD)</option>
              <option value="eletropostos">Eletropostos & Infraestrutura de Recarga</option>
              <option value="automacao">Automação e Controle Energético</option>
              <option value="viabilidade">Estudos Técnicos de Viabilidade</option>
              <option value="outro">Outro Requisito Técnico</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#40504C] mb-1">
              Detalhamento da Necessidade Técnica *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva a demanda, potência estimada, concessionária envolvida ou desafio regulatório..."
              className="w-full px-3.5 py-2.5 rounded-md border border-[#DFE7E3] text-sm focus:outline-none focus:border-[#033118] focus:ring-1 focus:ring-[#033118]"
            />
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 rounded border-[#DFE7E3] text-[#033118] focus:ring-[#033118]"
            />
            <label htmlFor="consent" className="text-xs text-[#687873] leading-relaxed">
              Declaro que concordo com a utilização dos dados fornecidos estritamente para retorno técnico comercial da Renovera, nos termos da Lei Geral de Proteção de Dados (LGPD).
            </label>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 text-xs text-[#B42318] bg-red-50 border border-red-200 rounded-md">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full py-3 text-sm font-semibold tracking-wide"
          >
            {status === "submitting" ? (
              "Processando Requisito Técnico..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submeter Solicitação Técnica
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
