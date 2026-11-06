import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { SolutionsCatalogClient } from "@/components/SolutionsCatalogClient";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfólio das 9 Soluções Renô & 6 Jornadas Comerciais | Renovera",
  description:
    "Conheça as 9 soluções oficiais da Renovera (Renô Adviser™, Renô Supply, Renô Projetos, Renô Performance, Renô Invest, Renô Protect, Renô Engenharia, Renô Partner e Renô Energy Hub) organizadas em 6 jornadas por perfil de cliente.",
  alternates: {
    canonical: `${SITE.url}/solucoes`,
  },
};

export default function SolucoesPage() {
  return (
    <InternalLayoutShell activePath="/solucoes">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Catálogo Oficial • 9 Soluções Renô</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            Um Ecossistema Completo de Engenharia, Energia Solar e Consultoria Regulatória
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Da reversão técnico-administrativa de pareceres de inversão de fluxo (Renô Adviser™) à implantação de usinas fotovoltaicas, suprimentos, seguros, subestações e eletropostos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/solucoes/reno-adviser"
              className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Destaque: Conhecer o Renô Adviser™
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              href="/integradores"
              className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Área do Integrador Solar
            </Link>
          </div>
        </div>
      </section>

      <SolutionsCatalogClient />
    </InternalLayoutShell>
  );
}
