import React from "react";
import Link from "next/link";
import { ShieldCheck, FileSpreadsheet, Scale, Layers, HelpCircle, ArrowRight } from "lucide-react";

export function RegulatoryHighlight() {
  return (
    <section className="py-24 engineering-grid text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Argumentação Técnica & Regulatória */}
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-renovera">Especialização Técnica</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
              Conhecimento regulatório para enfrentar desafios de conexão.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              A análise técnica fundamentada é o instrumento essencial para lidar com contestações de inversão de fluxo, exigências desproporcionais de obras e reanálise de orçamentos de conexão perante as concessionárias de energia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2.5 text-[#FED15D] font-bold text-sm mb-1">
                  <Scale className="w-4 h-4" />
                  <span>REN ANEEL 1.000 / Marco Legal</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Avaliação estrita das responsabilidades de rede e prazos regulatórios de atendimento.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2.5 text-[#FED15D] font-bold text-sm mb-1">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Auditoria de Inversão de Fluxo</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Verificação dos dados de carregamento de alimentadores e alternativas técnicas sem ônus.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/solucoes/consultoria-regulatoria"
                className="btn-primary text-sm px-6 py-3 w-full sm:w-auto"
              >
                Solicitar Análise Técnica
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link
                href="/contato"
                className="btn-secondary text-sm px-6 py-3 w-full sm:w-auto"
              >
                Tirar Dúvidas com Especialista
              </Link>
            </div>
          </div>

          {/* Lado Direito: Quadro Conceitual de Auditoria */}
          <div className="lg:col-span-5 bg-[#033118] border border-[#FED15D]/30 rounded-xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FED15D]">
                Roteiro de Contestação
              </div>
              <ShieldCheck className="w-5 h-5 text-[#FED15D]" />
            </div>

            <ol className="space-y-4 text-xs text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FED15D] text-[#033118] font-bold flex items-center justify-center text-[0.65rem] flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-white block text-sm">Recebimento do Parecer de Acesso</strong>
                  Identificação das exigências da concessionária e fundamentação apresentada.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FED15D] text-[#033118] font-bold flex items-center justify-center text-[0.65rem] flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-white block text-sm">Auditoria Técnica de Curva de Carga</strong>
                  Cálculo de fluxo reverso e conferência das alternativas de conexão do PRODIST.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FED15D] text-[#033118] font-bold flex items-center justify-center text-[0.65rem] flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-white block text-sm">Elaboração de Peça Administrativa</strong>
                  Redação de recurso técnico com citação normativa, memórias de cálculo e ART.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FED15D] text-[#033118] font-bold flex items-center justify-center text-[0.65rem] flex-shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-white block text-sm">Acompanhamento e Homologação</strong>
                  Interface técnica com a equipe da concessionária até a resolução conclusiva.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
