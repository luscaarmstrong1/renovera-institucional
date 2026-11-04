import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { ArrowRight, FileCheck, Cpu, SunMedium, BatteryCharging, Network, Gauge } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "consultoria-regulatoria": <FileCheck className="w-6 h-6 text-[#FED15D]" />,
  "projetos-eletricos": <Network className="w-6 h-6 text-[#FED15D]" />,
  "energia-solar": <SunMedium className="w-6 h-6 text-[#FED15D]" />,
  "eletropostos": <BatteryCharging className="w-6 h-6 text-[#FED15D]" />,
  "automacao": <Cpu className="w-6 h-6 text-[#FED15D]" />,
  "viabilidade": <Gauge className="w-6 h-6 text-[#FED15D]" />
};

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[#F8F8F5] text-[#17221F] border-b border-[#DFE7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="badge-renovera-dark mb-3">Portfólio de Atuação</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#033118] tracking-tight">
              Soluções Integradas para o Setor Elétrico
            </h2>
            <p className="mt-3 text-[#40504C] text-base leading-relaxed">
              Engenharia, conformidade regulatória e tecnologia aplicadas em cada etapa do seu empreendimento energético.
            </p>
          </div>
          <Link
            href="/solucoes"
            className="btn-secondary-dark text-sm py-2.5 px-5 self-start md:self-auto"
          >
            Ver Todas as Soluções
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.slug}
              className="card-service p-8 flex flex-col justify-between group hover:border-[#033118]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#033118] rounded-lg flex items-center justify-center">
                    {iconMap[svc.slug] || <FileCheck className="w-6 h-6 text-[#FED15D]" />}
                  </div>
                  <span className="text-2xl font-bold font-display text-[#DFE7E3] group-hover:text-[#033118] transition-colors">
                    {svc.number}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#0A4B2D] mb-1.5">
                  {svc.badge}
                </div>
                <h3 className="text-xl font-bold font-display text-[#033118] mb-3 group-hover:text-[#0A4B2D] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-[#40504C] leading-relaxed mb-6">
                  {svc.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFE7E3]">
                <Link
                  href={`/solucoes/${svc.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#033118] group-hover:text-[#0A4B2D] transition-colors"
                >
                  Conhecer Detalhes
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
