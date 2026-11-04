import React from "react";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import { ArrowRight, CheckCircle } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-24 bg-white text-[#17221F] border-b border-[#DFE7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="badge-renovera-dark mb-3">Cases & Capacidade Técnica</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#033118] tracking-tight">
              Portfólio de Soluções de Engenharia
            </h2>
            <p className="mt-3 text-[#40504C] text-base leading-relaxed">
              Exemplos representativos de projetos de engenharia, usinas solares, infraestrutura de recarga e auditorias regulatórias.
            </p>
          </div>
          <Link
            href="/projetos"
            className="btn-secondary-dark text-sm py-2.5 px-5 self-start md:self-auto"
          >
            Ver Portfólio Completo
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((item) => (
            <div
              key={item.slug}
              className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              {/* Card Header com Efeito Gradiente Técnico */}
              <div className="bg-[#033118] p-6 text-white border-b border-[#DFE7E3]">
                <div className="flex items-center justify-between text-xs font-semibold text-[#FED15D] mb-2 uppercase tracking-wider">
                  <span>{item.category}</span>
                  <span className="text-white/60">{item.status}</span>
                </div>
                <h3 className="text-lg font-bold font-display text-white group-hover:text-[#FED15D] transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#40504C] leading-relaxed mb-4 line-clamp-3">
                    {item.context}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#DFE7E3]/60">
                        <span className="text-[#687873]">{m.label}</span>
                        <span className="font-semibold text-[#033118]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projetos/${item.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#033118] group-hover:text-[#0A4B2D] transition-colors pt-2"
                >
                  Ver Ficha Técnica
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
