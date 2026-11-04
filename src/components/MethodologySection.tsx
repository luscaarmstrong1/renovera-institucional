import React from "react";
import { Search, Compass, FileCheck, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

const methodologySteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Compreensão da necessidade, da infraestrutura existente e das condições técnicas e contratuais da instalação.",
    icon: <Search className="w-5 h-5 text-[#FED15D]" />
  },
  {
    number: "02",
    title: "Análise",
    description: "Avaliação técnica de requisitos, normas aplicáveis (ABNT, PRODIST, ANEEL) e dados de consumo ou geração.",
    icon: <Compass className="w-5 h-5 text-[#FED15D]" />
  },
  {
    number: "03",
    title: "Planejamento",
    description: "Definição de alternativas técnicas, arquitetura do projeto e dimensionamento de infraestrutura ótima.",
    icon: <FileCheck className="w-5 h-5 text-[#FED15D]" />
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Elaboração de diagramas elétricos, cálculos, memoriais técnicos descritivos e peças de protocolo formal.",
    icon: <Wrench className="w-5 h-5 text-[#FED15D]" />
  },
  {
    number: "05",
    title: "Implementação & Suporte",
    description: "Acompanhamento das atividades técnicas, interação com concessionárias e apoio no comissionamento.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FED15D]" />
  },
  {
    number: "06",
    title: "Validação",
    description: "Conferência final de resultados operacionais, entrega de documentação as-built e garantia de conformidade.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#FED15D]" />
  }
];

export function MethodologySection() {
  return (
    <section className="py-24 bg-[#F8F8F5] text-[#17221F] border-b border-[#DFE7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-renovera-dark mb-3">Método Operacional</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#033118] tracking-tight">
            Do diagnóstico à implementação. Uma abordagem completa.
          </h2>
          <p className="mt-3 text-[#40504C] text-base leading-relaxed">
            Metodologia estruturada em 6 fases para garantir previsibilidade técnica, conformidade regulatória e excelência executiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologySteps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#DFE7E3] rounded-lg p-6 relative hover:border-[#033118] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#033118] rounded-md flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-2xl font-bold font-display text-[#DFE7E3]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-[#033118] mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#40504C] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
