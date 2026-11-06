import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";
import { projectsData } from "@/config/projects";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Arquiteturas de Referência & Metodologias Aplicadas | Renovera",
  description:
    "Conheça as arquiteturas técnicas de referência e metodologias comprovadas da Renovera em pareceres de inversão de fluxo (Renô Adviser™), gestão 360º de usinas solares (Renô Projetos), eletropostos e O&M.",
  alternates: {
    canonical: `${SITE.url}/projetos`,
  },
};

export default function ProjetosPage() {
  return (
    <InternalLayoutShell activePath="/projetos">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Acervo de Engenharia &amp; Metodologia</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            Arquiteturas de Referência e Estudos Técnicos
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Em respeito ao sigilo contratual (NDA) e à LGPD de nossos clientes e integradores parceiros, apresentamos nossas arquiteturas técnicas de referência vinculadas às métricas institucionais reais auditadas da Renovera.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Nota de Transparência Técnica */}
          <div className="bg-white border border-[#DFE7E3] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#137A4E] flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-[#033118]">
                  Compromisso de Honestidade Técnica e Confidencialidade
                </h2>
                <p className="text-xs text-[#40504C] mt-0.5 leading-relaxed">
                  Cada ficha abaixo detalha o protocolo real de engenharia aplicado pela Renovera (Renô Adviser™, Renô Projetos, Renô Energy Hub, Renô Performance e Renô Engenharia) e os indicadores históricos verificados em nosso portfólio oficial.
                </p>
              </div>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold bg-[#033118] text-[#FED15D] hover:bg-[#0A4B2D] whitespace-nowrap"
            >
              Solicitar Estudo para Meu Caso
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-[#DFE7E3] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group hover:border-[#033118]"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-[#033118] relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#022417]/90 text-[#FED15D] border border-[#FED15D]/30">
                      {project.evidenceClassification}
                    </span>
                  </div>

                  <div className="bg-[#033118] p-5 text-white border-b border-[#DFE7E3]">
                    <div className="flex items-center justify-between text-[0.7rem] font-semibold text-[#FED15D] mb-1.5 uppercase tracking-wider">
                      <span>{project.category}</span>
                      <span className="text-white/80">{project.relatedProductName}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#FED15D] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#40504C] leading-relaxed mb-4">
                      {project.context}
                    </p>

                    <div className="space-y-2 mb-6">
                      {project.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-xs py-1 border-b border-[#DFE7E3]/60"
                        >
                          <span className="text-[#687873]">{m.label}</span>
                          <span className="font-semibold text-[#033118] text-right">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="btn-secondary-dark w-full text-xs py-2.5 text-center"
                    >
                      Ver Arquitetura &amp; Escopo Técnico
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
