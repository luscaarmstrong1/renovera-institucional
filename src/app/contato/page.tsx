import React from "react";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { companyConfig } from "@/config/company";
import { ContactForm } from "@/components/ContactForm";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { MapPin, Mail, Phone, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato & Canais Institucionais Oficiais | Renovera Energias Renováveis",
  description:
    "Entre em contato com a equipe de engenharia da Renovera Energias Renováveis em São João da Boa Vista - SP. WhatsApp oficial (19) 99651-4827 e contato@renovera.com.br.",
  alternates: {
    canonical: `${SITE.url}/contato`,
  },
};

export default function ContatoPage() {
  return (
    <InternalLayoutShell activePath="/contato">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Canais Institucionais Oficiais</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            Fale com a Equipe de Engenharia da Renovera
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para analisar sua necessidade técnica, avaliar pareceres de conexão (inversão de fluxo) ou estruturar projetos elétricos e usinas solares em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Lado Esquerdo: Dados Oficiais e Atendimento */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-[#DFE7E3] rounded-xl p-8 space-y-6">
                <h2 className="text-xl font-bold font-display text-[#033118]">
                  Informações Institucionais Verificadas
                </h2>
                <ul className="space-y-4 text-sm text-[#40504C]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#033118]">Sede Operacional</strong>
                      <span>{companyConfig.location}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#033118]">WhatsApp Comercial Oficial</strong>
                      <a
                        href={companyConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A4B2D] font-semibold hover:underline"
                      >
                        {companyConfig.whatsappDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#033118]">E-mail Comercial e Técnico</strong>
                      <a
                        href={`mailto:${companyConfig.email}`}
                        className="text-[#0A4B2D] font-semibold hover:underline"
                      >
                        {companyConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#033118]">Canal de Ética e Compliance</strong>
                      <a
                        href={`mailto:${companyConfig.complianceEmail}`}
                        className="text-[#0A4B2D] hover:underline"
                      >
                        {companyConfig.complianceEmail}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#033118]">Horário de Atendimento</strong>
                      <span>{companyConfig.businessHours}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#E8F0EC] border border-[#0A4B2D]/20 rounded-xl p-6 text-xs text-[#033118] space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#137A4E]" />
                  <span>Compromisso de Sigilo Técnico (NDA &amp; LGPD)</span>
                </div>
                <p className="text-[#40504C] leading-relaxed">
                  Todos os memoriais, diagramas unifilares, faturas de energia e cartas de indeferimento compartilhados conosco são tratados sob rigoroso dever de confidencialidade técnica e conformidade com a LGPD.
                </p>
              </div>
            </div>

            {/* Lado Direito: Formulário Funcional */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
