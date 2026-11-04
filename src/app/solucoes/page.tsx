import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Soluções em Engenharia e Energia | Renovera",
  description: "Conheça todas as soluções técnicas da Renovera: Consultoria Regulatória, Projetos Elétricos, Energia Solar, Eletropostos e Automação."
};

export default function SolucoesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Portfólio de Serviços</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
            Soluções Técnicas com Rigor Normativo e Visão Integrada
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Atuação completa desde a concepção do projeto elétrico e análise regulatória até o comissionamento técnico e homologação formal perante as concessionárias.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((svc, idx) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className="bg-white border border-[#DFE7E3] rounded-xl p-8 sm:p-10 shadow-sm hover:border-[#033118] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 bg-[#E8F0EC] text-[#033118] rounded">
                      {svc.badge}
                    </span>
                    <span className="text-sm font-bold text-[#687873]">
                      Serviço {svc.number}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#033118]">
                    {svc.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
                    {svc.fullDescription}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A4B2D] mb-2.5">
                      Escopo Técnico & Atividades
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
                      Ver Detalhes do Serviço
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
