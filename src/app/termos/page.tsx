import React from "react";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { companyConfig } from "@/config/company";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";

export const metadata: Metadata = {
  title: "Termos de Uso & Compliance | Renovera Energias Renováveis",
  description:
    "Termos e condições de uso das informações técnicas, marcas e canais digitais da Renovera Energias Renováveis Ltda.",
  alternates: {
    canonical: `${SITE.url}/termos`,
  },
};

export default function TermosPage() {
  return (
    <InternalLayoutShell activePath="/termos">
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="badge-renovera-dark mb-2">Termos e Condições de Uso</span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#033118]">
              Termos de Uso e Governança Técnica
            </h1>
            <p className="text-xs text-[#687873] mt-2">
              {companyConfig.legalName} • {companyConfig.location}
            </p>
          </div>

          <div className="prose max-w-none text-sm text-[#40504C] space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar este website institucional da <strong>{companyConfig.legalName}</strong>, o usuário concorda integralmente com as disposições estabelecidas nestes Termos de Uso e em nossa Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">2. Propriedade Intelectual e Linhas de Produto Renô</h2>
              <p>
                Todos os textos técnicos, logotipos, denominações das linhas de serviço (incluindo <em>Renô Adviser™</em>, <em>Renô Projetos</em>, <em>Renô Performance</em>, <em>Renô Engenharia</em>, <em>Renô Protect</em>, <em>Renô Supply</em>, <em>Renô Partner</em>, <em>Renô Invest</em> e <em>Renô Energy Hub</em>), diagramas conceituais e materiais gráficos publicados neste portal são de titularidade exclusiva da Renovera Energias Renováveis Ltda, sendo vedada sua reprodução comercial sem autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">3. Natureza das Informações Técnicas e Regulatórias</h2>
              <p>
                O conteúdo disponibilizado neste website possui finalidade institucional e informativa sobre as metodologias de engenharia e consultoria da Renovera. Pareceres técnicos definitivos, estudos de inversão de fluxo de potência, projetos executivos e memoriais de cálculo dependem de análise individualizada da rede elétrica local, contratação formal e emissão da respectiva Anotação de Responsabilidade Técnica (ART).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">4. Ética, Integridade e Compliance</h2>
              <p>
                A Renovera pauta todas as suas interações com concessionárias de energia, órgãos reguladores (ANEEL), fornecedores e clientes pela estrita legalidade, transparência técnica e conformidade normativa. Qualquer comunicação relativa à integridade corporativa pode ser encaminhada diretamente ao canal{" "}
                <a href={`mailto:${companyConfig.complianceEmail}`} className="text-[#0A4B2D] underline font-semibold">
                  {companyConfig.complianceEmail}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </InternalLayoutShell>
  );
}
