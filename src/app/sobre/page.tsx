import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ShieldCheck, Target, Cpu, Award, Users, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a Renovera | Engenharia, Estratégia e Soluções Energéticas desde 2020",
  description:
    "Conheça a trajetória da Renovera Energias Renováveis desde 2020: +150 usinas entregues, 450+ usinas viabilizadas no Renô Adviser™ (30 MWp em 15 estados) e 100+ usinas no Renô Projetos.",
  alternates: {
    canonical: `${SITE.url}/sobre`,
  },
};

export default function SobrePage() {
  return (
    <InternalLayoutShell activePath="/sobre">
      {/* Hero Institucional da Página Sobre */}
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">
            Institucional • Desde {SITE.officialStats.foundedYear}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            Engenharia, estratégia e conhecimento técnico em cada solução.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fundada em {SITE.officialStats.foundedYear} em {SITE.location}, a Renovera conecta engenharia elétrica de precisão, inteligência regulatória (ANEEL/PRODIST) e gestão operacional 360º para tornar ativos de energia solar técnica e financeiramente seguros.
          </p>
        </div>
      </section>

      {/* Indicadores Oficiais Auditáveis (renovera.com.br) */}
      <section className="py-12 bg-[#033118] text-white border-b border-[#FED15D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FED15D]">
              Resultados Verificados • Histórico Institucional Oficial
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              Métricas Oficiais Consolidadas ({SITE.officialStats.foundedYear} – Presente)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#022417] border border-[#FED15D]/30 rounded-xl p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FED15D] block mb-2">
                Renô Adviser™ (Assessoria Regulatória)
              </span>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                <div>
                  <strong className="text-2xl sm:text-3xl font-bold font-display text-white block">
                    {SITE.officialStats.adviserPlantsSold}
                  </strong>
                  <span className="text-[0.7rem] text-[#D1DFD8]">Usinas Vendidas</span>
                </div>
                <div>
                  <strong className="text-2xl sm:text-3xl font-bold font-display text-[#FED15D] block">
                    {SITE.officialStats.adviserCapacityMWp}
                  </strong>
                  <span className="text-[0.7rem] text-[#D1DFD8]">Capacidade Instalada</span>
                </div>
                <div>
                  <strong className="text-2xl sm:text-3xl font-bold font-display text-white block">
                    {SITE.officialStats.adviserStatesServed}
                  </strong>
                  <span className="text-[0.7rem] text-[#D1DFD8]">Atendidos</span>
                </div>
              </div>
            </div>

            <div className="bg-[#022417] border border-[#FED15D]/30 rounded-xl p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FED15D] block mb-2">
                Renô Projetos (Turnkey 360º)
              </span>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                <div>
                  <strong className="text-2xl sm:text-3xl font-bold font-display text-white block">
                    {SITE.officialStats.projectsPlantsInstalled}
                  </strong>
                  <span className="text-[0.7rem] text-[#D1DFD8]">Usinas Instaladas</span>
                </div>
                <div>
                  <strong className="text-2xl sm:text-3xl font-bold font-display text-[#FED15D] block">
                    {SITE.officialStats.projectsCapacityMWp}
                  </strong>
                  <span className="text-[0.7rem] text-[#D1DFD8]">Potência Instalada</span>
                </div>
                <div>
                  <strong className="text-2xl sm:text-3xl font-bold font-display text-white block">
                    {SITE.officialStats.projectsStatesServed}
                  </strong>
                  <span className="text-[0.7rem] text-[#D1DFD8]">Atendidos</span>
                </div>
              </div>
            </div>

            <div className="bg-[#022417] border border-[#FED15D]/30 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FED15D] block mb-2">
                  Trajetória Institucional
                </span>
                <strong className="text-2xl sm:text-3xl font-bold font-display text-white block">
                  {SITE.officialStats.totalPlantsDelivered} usinas entregues
                </strong>
                <p className="text-xs text-[#D1DFD8] mt-2 leading-relaxed">
                  Expansão contínua em Eletropostos (Renô Energy Hub), Crédito de Carbono e Software SaaS, com equipe multidisciplinar unindo engenharia elétrica, direito regulatório e gestão de ativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Institucional & História */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge-renovera-dark mb-2">Nossa História &amp; Propósito</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118] mb-4">
                Visão Integrada para Decisões Energéticas Seguras
              </h2>
              <p className="text-sm sm:text-base text-[#40504C] leading-relaxed mb-4">
                Desde 2020, a Renovera atua na transição energética brasileira com foco em engenharia aplicada. No cenário dinâmico da Micro e Minigeração Distribuída (MMGD), regido pela Lei 14.300/2022 e pelas Resoluções Normativas da ANEEL (REN 1.000 e REN 1.059), projetos de energia exigem muito mais do que fornecimento de equipamentos.
              </p>
              <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
                Nossa estrutura reúne engenheiros eletricistas, especialistas em regulação tarifária, gestores de suprimentos e consultores técnico-comerciais para atender integradores solares, indústrias, investidores, condomínios, residências e operadores de eletropostos em todo o Brasil.
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
                    Todos os projetos e pareceres seguem estritamente as diretrizes da ABNT (NBR 5410, NBR 14039, NBR 16690, NBR 17019, NBR 5419) e dos Procedimentos de Distribuição (PRODIST Módulo 3 e Módulo 8).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#033118] text-[#FED15D] flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#033118]">Transparência e Auditabilidade</h3>
                  <p className="text-xs text-[#40504C] mt-1">
                    Não fazemos promessas regulatórias irreais. Apresentamos cenários fundamentados, memória de cálculo auditável e emissão de ART em todas as entregas de engenharia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#033118] text-[#FED15D] flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#033118]">Frentes de Inovação e Expansão</h3>
                  <p className="text-xs text-[#40504C] mt-1">
                    Atuação em infraestrutura para recarga de veículos elétricos (Renô Energy Hub), estruturação de créditos de carbono e ferramentas digitais para gestão de ativos solares.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pilares de Valor + Equipe Multidisciplinar */}
          <div className="border-t border-[#DFE7E3] pt-14">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="badge-renovera-dark mb-2">Cultura &amp; Governança</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118]">
                Os 3 Pilares Institucionais da Renovera
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-6 space-y-3">
                <Award className="w-7 h-7 text-[#0A4B2D]" />
                <h3 className="text-lg font-bold font-display text-[#033118]">
                  1. Engenharia sem Improviso
                </h3>
                <p className="text-xs sm:text-sm text-[#40504C] leading-relaxed">
                  Projetos executivos detalhados, seletividade de proteção calculada e conformidade com os padrões de entrada das distribuidoras brasileiras.
                </p>
              </div>

              <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-6 space-y-3">
                <Users className="w-7 h-7 text-[#0A4B2D]" />
                <h3 className="text-lg font-bold font-display text-[#033118]">
                  2. Parceria com Integradores e Clientes
                </h3>
                <p className="text-xs sm:text-sm text-[#40504C] leading-relaxed">
                  Atuamos como braço técnico e regulatório para integradores solares (Renô Adviser™ e Renô Partner) e como gestora 360º para empresas e investidores.
                </p>
              </div>

              <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-6 space-y-3">
                <Compass className="w-7 h-7 text-[#0A4B2D]" />
                <h3 className="text-lg font-bold font-display text-[#033118]">
                  3. Inteligência Regulatória e Mercado
                </h3>
                <p className="text-xs sm:text-sm text-[#40504C] leading-relaxed">
                  Domínio prático da Lei 14.300/2022, análise de inversão de fluxo de potência, enquadramento tarifário e transição para o Mercado Livre de Energia.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final da Página Sobre */}
          <div className="bg-[#033118] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FED15D]">
                Ecossistema Completo
              </span>
              <h3 className="text-2xl font-bold font-display">
                Conheça as 9 Soluções Oficiais do Portfólio Renô
              </h3>
              <p className="text-xs sm:text-sm text-[#D1DFD8] max-w-xl">
                Explore o escopo técnico, entregáveis e normas aplicáveis de cada frente de atuação da Renovera.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/solucoes"
                className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
              >
                Ver Portfólio Renô
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Falar com a Equipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
