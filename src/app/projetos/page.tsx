import React from "react";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Portfólio de Projetos & Cases Técnicos | Renovera",
  description: "Exemplos de projetos de engenharia elétrica, usinas solares, auditorias de inversão de fluxo e eletropostos."
};

export default function ProjetosPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Acervo Técnico</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
            Portfólio de Projetos e Estudos Técnicos
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Casos documentados em conformidade com as diretrizes de anonimização e rigor normativo do setor elétrico.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-[#DFE7E3] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group hover:border-[#033118]"
              >
                <div className="bg-[#033118] p-6 text-white border-b border-[#DFE7E3]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#FED15D] mb-2 uppercase tracking-wider">
                    <span>{project.category}</span>
                    <span className="text-white/60">{project.status}</span>
                  </div>
                  <h2 className="text-lg font-bold font-display text-white group-hover:text-[#FED15D] transition-colors">
                    {project.name}
                  </h2>
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
                          <span className="font-semibold text-[#033118]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="btn-secondary-dark w-full text-xs py-2 text-center"
                    >
                      Ver Ficha Técnica Completa
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
