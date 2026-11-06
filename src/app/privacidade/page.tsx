import React from "react";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { companyConfig } from "@/config/company";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD) | Renovera Energias Renováveis",
  description:
    "Diretrizes de privacidade, governança e tratamento de dados pessoais e técnicos da Renovera Energias Renováveis conforme a LGPD (Lei nº 13.709/2018).",
  alternates: {
    canonical: `${SITE.url}/privacidade`,
  },
};

export default function PrivacidadePage() {
  return (
    <InternalLayoutShell activePath="/privacidade">
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="badge-renovera-dark mb-2">Conformidade Legal &amp; Governança</span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#033118]">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-xs text-[#687873] mt-2">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
          </div>

          <div className="prose max-w-none text-sm text-[#40504C] space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">1. Controladora e Escopo</h2>
              <p>
                A <strong>{companyConfig.legalName}</strong>, sediada em {companyConfig.location}, valoriza a segurança e a privacidade de seus clientes, integradores parceiros, fornecedores e usuários deste website. Esta Política descreve de forma transparente como coletamos, utilizamos e protegemos dados pessoais e documentos técnicos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">2. Coleta de Dados</h2>
              <p>
                Coletamos exclusivamente as informações fornecidas voluntariamente através do formulário de contato institucional ou canais oficiais de atendimento (WhatsApp e e-mail corporativo), incluindo: nome completo, e-mail corporativo, telefone/WhatsApp, empresa, solução de interesse e informações preliminares do projeto elétrico ou parecer de acesso.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">3. Finalidade do Tratamento</h2>
              <p>Os dados coletados são utilizados estritamente para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Retorno técnico-comercial às solicitações de serviços e soluções do portfólio Renô;</li>
                <li>Elaboração de propostas técnicas, estudos preliminares de viabilidade e reavaliações regulatórias;</li>
                <li>Cumprimento de obrigações legais e regulatórias perante conselhos de classe (CREA/CFT), ANEEL e concessionárias de distribuição de energia.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">4. Sigilo Técnico e Não Compartilhamento</h2>
              <p>
                A Renovera não comercializa nem compartilha dados de clientes ou integradores com terceiros para fins publicitários. Faturas de energia, diagramas unifilares e pareceres de acesso são compartilhados exclusivamente com a distribuidora local mediante procuração ou autorização formal no âmbito do processo contratado.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">5. Canais de Atendimento LGPD e Compliance</h2>
              <p>
                Para exercer seus direitos de titular de dados (confirmação, acesso, correção ou eliminação) ou reportar questões de governança e conformidade, utilize nossos canais oficiais:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Atendimento Geral e Privacidade:{" "}
                  <a href={`mailto:${companyConfig.email}`} className="text-[#0A4B2D] underline font-semibold">
                    {companyConfig.email}
                  </a>
                </li>
                <li>
                  Canal de Ética e Compliance:{" "}
                  <a href={`mailto:${companyConfig.complianceEmail}`} className="text-[#0A4B2D] underline font-semibold">
                    {companyConfig.complianceEmail}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </InternalLayoutShell>
  );
}
