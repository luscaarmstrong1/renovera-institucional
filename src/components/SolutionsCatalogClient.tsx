"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RENO_PRODUCTS } from "@/config/site";
import { servicesData } from "@/config/services";
import { SERVICE_LANDING_DETAILS } from "@/config/serviceDetails";
import { ArrowRight, CheckCircle2, Users, Sparkles, Filter } from "lucide-react";

export interface CommercialJourney {
  id: string;
  label: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  productSlugs: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const COMMERCIAL_JOURNEYS: CommercialJourney[] = [
  {
    id: "todos",
    label: "Todas as 9 Soluções Renô",
    shortLabel: "Todas (9)",
    subtitle: "Visão integral do ecossistema técnico e comercial da Renovera",
    description:
      "Explore abaixo todas as nove soluções oficiais da Renovera ou selecione o seu perfil para filtrar as soluções e chamadas de ação específicas para a sua necessidade.",
    productSlugs: [
      "reno-adviser",
      "reno-supply",
      "reno-projetos",
      "reno-performance",
      "reno-invest",
      "reno-protect",
      "reno-engenharia",
      "reno-partner",
      "reno-energy-hub",
    ],
    primaryCta: { label: "Enviar parecer de acesso para análise", href: "/solucoes/reno-adviser" },
    secondaryCta: { label: "Falar com especialista", href: "/contato" },
  },
  {
    id: "integradores",
    label: "Integradores Fotovoltaicos",
    shortLabel: "Integradores",
    subtitle: "Renô Adviser™ + Renô Supply + Renô Partner",
    description:
      "Destrave projetos indeferidos por inversão de fluxo de potência, realize cotações técnicas com verificação de compatibilidade elétrica e cadastre sua equipe para parcerias operacionais de instalação.",
    productSlugs: ["reno-adviser", "reno-supply", "reno-partner"],
    primaryCta: { label: "Enviar projeto indeferido", href: "/solucoes/reno-adviser#solicitar" },
    secondaryCta: { label: "Solicitar cotação técnica", href: "/solucoes/reno-supply#solicitar" },
  },
  {
    id: "empresas",
    label: "Empresas e Indústrias",
    shortLabel: "Empresas & Indústrias",
    subtitle: "Renô Projetos + Renô Engenharia + Renô Energy Hub",
    description:
      "Implantação integrada de usinas fotovoltaicas para Grupo A e Grupo B, projetos elétricos de baixa e média tensão, adequação de subestações e infraestrutura de potência.",
    productSlugs: ["reno-projetos", "reno-engenharia", "reno-energy-hub"],
    primaryCta: { label: "Solicitar estudo de viabilidade", href: "/solucoes/reno-projetos#solicitar" },
    secondaryCta: { label: "Falar com engenharia", href: "/solucoes/reno-engenharia#solicitar" },
  },
  {
    id: "investidores",
    label: "Investidores",
    shortLabel: "Investidores",
    subtitle: "Renô Invest + Renô Performance + Renô Protect",
    description:
      "Estruturação técnica e econômico-financeira de usinas solares, avaliação de terrenos e conexão, acompanhamento operacional de geração e proteção securitária do ativo.",
    productSlugs: ["reno-invest", "reno-performance", "reno-protect"],
    primaryCta: { label: "Avaliar investimento", href: "/solucoes/reno-invest#solicitar" },
    secondaryCta: { label: "Conhecer gestão de ativos", href: "/solucoes/reno-performance#solicitar" },
  },
  {
    id: "condominios",
    label: "Condomínios",
    shortLabel: "Condomínios",
    subtitle: "Renô Projetos + Renô Protect + Renô Energy Hub",
    description:
      "Geração solar para áreas comuns e empreendimentos condominiais, proteção para a usina instalada e infraestrutura segura (NBR 17019) para recarga de veículos elétricos dos condôminos.",
    productSlugs: ["reno-projetos", "reno-protect", "reno-energy-hub"],
    primaryCta: { label: "Avaliar projeto para condomínio", href: "/solucoes/reno-projetos#solicitar" },
    secondaryCta: { label: "Implantar carregador", href: "/solucoes/reno-energy-hub#solicitar" },
  },
  {
    id: "residencias",
    label: "Residências e Rural",
    shortLabel: "Residências",
    subtitle: "Renô Projetos + Renô Protect",
    description:
      "Sistemas fotovoltaicos completos com dimensionamento executivo, homologação junto à distribuidora e cotação de proteção contra eventos climáticos e danos elétricos.",
    productSlugs: ["reno-projetos", "reno-protect"],
    primaryCta: { label: "Solicitar projeto residencial", href: "/solucoes/reno-projetos#solicitar" },
    secondaryCta: { label: "Falar com especialista", href: "/solucoes/reno-protect#solicitar" },
  },
  {
    id: "eletropostos",
    label: "Eletropostos e Frotas",
    shortLabel: "Eletropostos & Frotas",
    subtitle: "Renô Energy Hub + Renô Engenharia + Renô Performance",
    description:
      "Estudos de demanda, adequação de padrão de entrada ou subestação, projetos executivos para carregadores AC (até 22 kW) e DC (30, 60 e 120 kW) e acompanhamento operacional.",
    productSlugs: ["reno-energy-hub", "reno-engenharia", "reno-performance"],
    primaryCta: { label: "Implantar eletroposto", href: "/solucoes/reno-energy-hub#solicitar" },
    secondaryCta: { label: "Avaliar viabilidade", href: "/solucoes/reno-engenharia#solicitar" },
  },
];

// Apenas os 9 serviços canônicos Renô na ordem comercial estratégica
const CANONICAL_SLUGS = [
  "reno-adviser",
  "reno-supply",
  "reno-projetos",
  "reno-performance",
  "reno-invest",
  "reno-protect",
  "reno-engenharia",
  "reno-partner",
  "reno-energy-hub",
];

export function SolutionsCatalogClient() {
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>("todos");

  const activeJourney =
    COMMERCIAL_JOURNEYS.find((j) => j.id === selectedJourneyId) || COMMERCIAL_JOURNEYS[0];

  const canonicalServices = CANONICAL_SLUGS.map((slug) =>
    servicesData.find((s) => s.slug === slug)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const visibleServices = canonicalServices.filter((svc) =>
    activeJourney.productSlugs.includes(svc.slug)
  );

  return (
    <>
      {/* Seletor Interativo das 6 Jornadas Comerciais */}
      <section className="py-14 bg-white border-b border-[#DFE7E3]" id="jornadas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="badge-renovera-dark mb-2 inline-flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                Seis Jornadas Comerciais por Perfil
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118]">
                Selecione seu perfil para filtrar as soluções recomendadas
              </h2>
            </div>
            <Link
              href="/integradores"
              className="inline-flex items-center text-xs font-bold text-[#0A4B2D] hover:underline"
            >
              Acessar Área Exclusiva do Integrador →
            </Link>
          </div>

          {/* Botões de Filtro de Segmento */}
          <div
            role="tablist"
            aria-label="Filtrar soluções por jornada comercial"
            className="flex flex-wrap gap-2"
          >
            {COMMERCIAL_JOURNEYS.map((journey) => {
              const isSelected = journey.id === selectedJourneyId;
              return (
                <button
                  key={journey.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  data-journey-tab={journey.id}
                  onClick={() => setSelectedJourneyId(journey.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    isSelected
                      ? "bg-[#033118] text-[#FED15D] border-[#033118] shadow-sm"
                      : "bg-[#F8F8F5] text-[#40504C] border-[#DFE7E3] hover:border-[#033118] hover:text-[#033118]"
                  }`}
                >
                  {journey.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Painel Contextual da Jornada Ativa */}
          <div
            data-active-journey-panel={activeJourney.id}
            className="bg-[#022417] text-white rounded-2xl p-6 sm:p-8 border border-[#FED15D]/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FED15D]">
                  Jornada Selecionada: {activeJourney.label}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-white/10 text-white font-semibold">
                  {activeJourney.subtitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#D1DFD8] leading-relaxed">
                {activeJourney.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Link
                href={activeJourney.primaryCta.href}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
              >
                {activeJourney.primaryCta.label}
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
              <Link
                href={activeJourney.secondaryCta.href}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {activeJourney.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Editorial das Soluções Filtradas */}
      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {visibleServices.map((svc, idx) => {
            const productMeta = RENO_PRODUCTS.find((p) => p.slug === svc.slug);
            const detail = SERVICE_LANDING_DETAILS[svc.slug];
            const isAdviser = svc.slug === "reno-adviser";

            return (
              <div
                key={svc.slug}
                id={svc.slug}
                data-solution-card={svc.slug}
                className={`rounded-2xl p-6 sm:p-10 shadow-sm transition-all ${
                  isAdviser
                    ? "bg-white border-2 border-[#033118] ring-4 ring-[#FED15D]/20"
                    : "bg-white border border-[#DFE7E3] hover:border-[#033118]"
                }`}
              >
                {isAdviser && (
                  <div className="mb-6 pb-4 border-b border-[#DFE7E3] flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#033118] text-[#FED15D]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Diferencial Estratégico Renovera • Prioridade Comercial Máxima
                    </span>
                    <span className="text-xs font-semibold text-[#0A4B2D]">
                      Especialidade em Inversão de Fluxo de Potência e Pareceres de Acesso
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-bold px-2.5 py-1 bg-[#E8F0EC] text-[#033118] rounded">
                        {detail?.categoryLabel || svc.badge}
                      </span>
                      <span className="text-xs font-bold text-[#687873]">
                        Solução 0{idx + 1}
                      </span>
                      {productMeta?.idealFor && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-[#033118] text-[#FED15D] rounded">
                          <Users className="w-3 h-3" />
                          Público: {productMeta.idealFor.join(", ")}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#033118]">
                      {svc.title}
                    </h3>

                    {detail && (
                      <div className="bg-[#F8F8F5] border-l-4 border-[#0A4B2D] p-3.5 rounded-r-lg">
                        <strong className="text-xs uppercase tracking-wider text-[#0A4B2D] block mb-0.5">
                          Problema Atendido:
                        </strong>
                        <p className="text-xs sm:text-sm font-semibold text-[#17221F]">
                          {detail.problemTitle}
                        </p>
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
                      {svc.fullDescription}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A4B2D] mb-2.5">
                        Serviços e Aplicações Incluídos
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#40504C]">
                        {svc.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#137A4E] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-6 space-y-4">
                    {productMeta?.image && (
                      <div className="overflow-hidden rounded-lg border border-[#DFE7E3] bg-[#033118]">
                        <img
                          src={productMeta.image}
                          alt={svc.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#033118] mb-2">
                        Entregáveis Técnicos
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#40504C]">
                        {svc.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#033118]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 flex flex-col gap-2.5">
                      <Link
                        href={`/solucoes/${svc.slug}#solicitar`}
                        className="btn-primary w-full text-xs py-3 text-center font-bold"
                      >
                        {detail?.primaryCtaLabel || `Solicitar ${svc.title}`}
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                      <Link
                        href={`/solucoes/${svc.slug}`}
                        className="btn-secondary-dark w-full text-xs py-2.5 text-center"
                      >
                        Ver Landing Page Completa, Documentos e FAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
