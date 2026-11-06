import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/config/blog";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ArrowRight, BookOpen, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Técnico & Autoridade Regulatória em Energia Solar | Renovera",
  description:
    "Artigos técnicos sobre Inversão de Fluxo (REN ANEEL 1.000/2021), Homologação Fotovoltaica, Engenharia Elétrica BT/MT, Eletropostos (NBR 17019), Suprimentos e Investimentos Solares.",
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <InternalLayoutShell activePath="/blog">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-renovera mb-4">Publicações &amp; Engenharia Aplicada</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            Conhecimento Técnico, Regulação ANEEL e Engenharia de Potência
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Guias técnicos fundamentados nas normas ABNT, no PRODIST e na Resolução Normativa ANEEL nº 1.000/2021 para orientar integradores, empresas e investidores.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-[#DFE7E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#F8F8F5] border border-[#DFE7E3] text-[#033118]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-[#DFE7E3] rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-[#033118] transition-all group"
              >
                <div>
                  <div className="h-48 bg-[#033118] relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#022417]/90 text-[#FED15D] border border-[#FED15D]/30">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[0.7rem] text-[#687873] font-semibold">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#0A4B2D]" />
                        {article.readingTime}
                      </span>
                      <span>Solução: {article.relatedServiceName}</span>
                    </div>

                    <h2 className="text-lg font-bold font-display text-[#033118] group-hover:text-[#0A4B2D] transition-colors leading-snug">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-xs text-[#40504C] leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#DFE7E3]/70 space-y-3">
                  <div className="text-[0.68rem] text-[#687873]">
                    <strong className="text-[#033118]">Base Normativa:</strong>{" "}
                    {article.normativeReferences[0]}
                  </div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="btn-secondary-dark w-full text-xs py-2.5 text-center"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Ler Artigo Técnico Completo
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-[#033118] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FED15D]">
                <ShieldCheck className="w-4 h-4" />
                <span>Destaque Estratégico • Renô Adviser™</span>
              </div>
              <h3 className="text-2xl font-bold font-display">
                Precisa de análise técnica para um parecer de inversão de fluxo?
              </h3>
              <p className="text-xs sm:text-sm text-[#D1DFD8] max-w-xl">
                Nossa equipe de engenharia regulatória analisa o estudo da concessionária e estrutura a manifestação técnica fundamentada na REN ANEEL nº 1.000/2021.
              </p>
            </div>
            <Link
              href="/solucoes/reno-adviser"
              className="inline-flex items-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors whitespace-nowrap"
            >
              Enviar parecer de acesso para análise
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
