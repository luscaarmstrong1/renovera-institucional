import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, Target, Zap, Cpu, Award } from "lucide-react";

export const metadata = {
  title: "Sobre a Renovera | Engenharia, Estratégia e Soluções Energéticas",
  description: "Conheça a história, o posicionamento e os valores da Renovera Energias Renováveis."
};

export default function SobrePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Institucional da Página Sobre */}
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Institucional</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
            Engenharia, estratégia e conhecimento técnico em cada solução.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A Renovera conecta engenharia elétrica de precisão, inteligência regulatória e foco operacional para garantir que cada projeto seja técnica e economicamente viável.
          </p>
        </div>
      </section>

      {/* Conteúdo Institucional */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge-renovera-dark mb-2">Nossa Missão</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118] mb-4">
                Visão Integrada para Decisões Mais Seguras
              </h2>
              <p className="text-sm sm:text-base text-[#40504C] leading-relaxed mb-4">
                No cenário dinâmico do setor elétrico brasileiro — pautado pelo avanço da Micro e Minigeração Distribuída (MMGD), pelo Marco Legal (Lei 14.300/2022) e por atualizações constantes da ANEEL —, decisões elétricas exigem muito mais do que dimensionamentos isolados.
              </p>
              <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
                Nossa atuação abrange desde o diagnóstico de capacidade em subestações até a fundamentação técnica de recursos contra pareceres de inversão de fluxo e aprovação em concessionárias.
              </p>
            </div>
            <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#033118] text-[#FED15D] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#033118]">Rigor Técnico e Normativo</h3>
                  <p className="text-xs text-[#40504C] mt-1">
                    Todos os projetos seguem estritamente as diretrizes da ABNT (NBR 5410, NBR 14039, NBR 16690, NBR 17019) e dos Procedimentos de Distribuição (PRODIST).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#033118] text-[#FED15D] flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#033118]">Transparência e Responsabilidade</h3>
                  <p className="text-xs text-[#40504C] mt-1">
                    Não fazemos promessas regulatórias vazias. Apresentamos cenários reais, cálculos auditáveis e fundamentações técnicas sólidas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#033118] text-[#FED15D] flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#033118]">Prontidão Tecnológica</h3>
                  <p className="text-xs text-[#40504C] mt-1">
                    Experiência prática na integração de carregadores veiculares de alta potência e sistemas de controle de exportação (Zero Export).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
