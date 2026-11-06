import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE, RENO_PRODUCTS } from "@/config/site";
import { servicesData } from "@/config/services";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfólio de Soluções Renô (9 Soluções Oficiais) | Renovera Energias Renováveis",
  description:
    "Conheça as 9 soluções oficiais da Renovera: Renô Adviser™, Renô Projetos, Renô Performance, Renô Engenharia, Renô Protect, Renô Supply, Renô Partner, Renô Invest e Renô Energy Hub.",
  alternates: {
    canonical: `${SITE.url}/solucoes`,
  },
};

const CLIENT_SEGMENTS = [
  {
    id: "integradores",
    title: "Integradores Solares",
    subtitle: "Destrave conexões e escale sua operação",
    description:
      "Assessoria regulatória em pareceres de inversão de fluxo, central de compras com validação de engenharia e parceria para execução de obras de maior porte.",
    idealProducts: "Renô Adviser™ + Renô Supply + Renô Partner",
  },
  {
    id: "empresas",
    title: "Empresas, Comércio e Indústrias",
    subtitle: "Redução de custos energéticos e confiabilidade",
    description:
      "Implantação turnkey de usinas solares, adequação de cabines primárias em média tensão e gestão ativa 24/7 da geração.",
    idealProducts: "Renô Projetos + Renô Performance + Renô Engenharia",
  },
  {
    id: "investidores",
    title: "Investidores em Energia",
    subtitle: "Estruturação técnica e rentabilidade de longo prazo",
    description:
      "Modelagem de usinas de geração distribuída para locação, análise de viabilidade regulatória, O&M contínuo e proteção patrimonial.",
    idealProducts: "Renô Invest + Renô Performance + Renô Protect",
  },
  {
    id: "condominios",
    title: "Condomínios Residenciais e Logísticos",
    subtitle: "Geração compartilhada e infraestrutura segura",
    description:
      "Projetos fotovoltaicos para áreas comuns, rateio de créditos de energia, seguro técnico e infraestrutura para recarga de veículos elétricos.",
    idealProducts: "Renô Projetos + Renô Protect + Renô Energy Hub",
  },
  {
    id: "residencias",
    title: "Residências de Alto Padrão e Rural",
    subtitle: "Autonomia energética com engenharia certificada",
    description:
      "Sistemas solares personalizados, proteção contra surtos, seguro completo do equipamento e acompanhamento pós-obra.",
    idealProducts: "Renô Projetos + Renô Protect + Renô Engenharia",
  },
  {
    id: "eletropostos",
    title: "Eletropostos e Frotas Corporativas",
    subtitle: "Infraestrutura de recarga veicular AC e DC",
    description:
      "Estudos de demanda, adequação de entrada em média/baixa tensão, quadros exclusivos segundo a NBR 17019 e balanceamento dinâmico OCPP.",
    idealProducts: "Renô Energy Hub + Renô Engenharia",
  },
];

export default function SolucoesPage() {
  return (
    <InternalLayoutShell activePath="/solucoes">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Portfólio Oficial • 9 Soluções Renô</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            Soluções Técnicas com Rigor Normativo e Visão 360º
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Atuação completa desde a assessoria regulatória em pareceres de acesso até a engenharia executiva, gestão 360º de obras, suprimentos, proteção de usinas e eletropostos.
          </p>
        </div>
      </section>

      {/* Matriz Oficial: Soluções por Perfil de Cliente */}
      <section className="py-16 bg-white border-b border-[#DFE7E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-renovera-dark mb-2">Jornada por Segmento</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118]">
              Qual é o seu perfil? Encontre a solução Renô ideal
            </h2>
            <p className="text-xs sm:text-sm text-[#40504C] mt-2">
              Mapeamento oficial das soluções da Renovera de acordo com a necessidade técnica e comercial de cada segmento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_SEGMENTS.map((seg) => (
              <div
                key={seg.id}
                className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-6 flex flex-col justify-between hover:border-[#033118] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#033118] text-[#FED15D]">
                      {seg.title}
                    </span>
                    <Users className="w-4 h-4 text-[#0A4B2D]" />
                  </div>
                  <h3 className="text-base font-bold font-display text-[#033118] mb-2">
                    {seg.subtitle}
                  </h3>
                  <p className="text-xs text-[#40504C] leading-relaxed mb-4">
                    {seg.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#DFE7E3]">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#687873] block mb-1">
                    Combinação Recomendada:
                  </span>
                  <span className="text-xs font-bold text-[#0A4B2D]">
                    {seg.idealProducts}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista Completa dos 9 Produtos Renô */}
      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((svc) => {
            const productMeta = RENO_PRODUCTS.find((p) => p.slug === svc.slug);
            return (
              <div
                key={svc.slug}
                id={svc.slug}
                className="bg-white border border-[#DFE7E3] rounded-xl p-6 sm:p-10 shadow-sm hover:border-[#033118] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold px-2.5 py-1 bg-[#E8F0EC] text-[#033118] rounded">
                        {svc.badge}
                      </span>
                      <span className="text-xs font-bold text-[#687873]">
                        Solução {svc.number} de 09
                      </span>
                      {productMeta?.idealFor && (
                        <span className="text-xs font-semibold px-2.5 py-1 bg-[#033118] text-[#FED15D] rounded">
                          Ideal para: {productMeta.idealFor.join(", ")}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118]">
                      {svc.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
                      {svc.fullDescription}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A4B2D] mb-2.5">
                        Escopo Técnico &amp; Atividades
                      </h3>
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

                  <div className="lg:col-span-5 bg-[#F8F8F5] border border-[#DFE7E3] rounded-lg p-6 space-y-4">
                    {productMeta?.image && (
                      <div className="overflow-hidden rounded-lg border border-[#DFE7E3] bg-[#033118]">
                        <img
                          src={productMeta.image}
                          alt={svc.title}
                          className="w-full h-44 object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#033118]">
                      Entregáveis Técnicos
                    </h4>
                    <ul className="space-y-2 text-xs text-[#40504C]">
                      {svc.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#033118]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {svc.normativeFramework && (
                      <div className="pt-4 border-t border-[#DFE7E3]">
                        <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-[#687873] mb-1.5">
                          Normas Técnicas Aplicáveis
                        </h4>
                        <ul className="space-y-1 text-[0.7rem] text-[#687873]">
                          {svc.normativeFramework.map((n, i) => (
                            <li key={i}>• {n}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        href={`/solucoes/${svc.slug}`}
                        className="btn-primary w-full text-xs py-2.5"
                      >
                        Ver Especificação Completa e Solicitar
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </InternalLayoutShell>
  );
}
