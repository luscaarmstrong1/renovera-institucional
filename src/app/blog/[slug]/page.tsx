import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/config/site";
import { BLOG_ARTICLES } from "@/config/blog";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ContactForm } from "@/components/ContactForm";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, ShieldCheck, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((art) => ({ slug: art.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return { title: "Artigo Não Encontrado | Renovera" };
  }
  return {
    title: `${article.title} | Blog Técnico Renovera`,
    description: article.summary,
    alternates: {
      canonical: `${SITE.url}/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <InternalLayoutShell activePath={`/blog/${article.slug}`}>
      <section className="bg-[#022417] text-white py-16 sm:py-20 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-300">
            <Link href="/" className="hover:text-[#FED15D]">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#FED15D]">
              Blog Técnico
            </Link>
            <span>/</span>
            <span className="text-[#FED15D] font-semibold">{article.category}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge-renovera">{article.category}</span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#FED15D]" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            {article.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <article className="lg:col-span-7 space-y-8">
              <div className="rounded-2xl overflow-hidden border border-[#DFE7E3] bg-[#033118]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              <div className="bg-white border border-[#DFE7E3] rounded-2xl p-6 sm:p-8 space-y-8">
                <div className="bg-[#F8F8F5] border-l-4 border-[#033118] p-4 rounded-r-lg text-sm text-[#17221F] leading-relaxed">
                  <strong>Síntese Executiva:</strong> {article.summary}
                </div>

                {article.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-[#033118]">
                      {sec.heading}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-[#40504C] leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {sec.bullets && (
                      <ul className="space-y-2.5 pt-2">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#40504C]">
                            <CheckCircle2 className="w-4 h-4 text-[#137A4E] flex-shrink-0 mt-1" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-[#DFE7E3]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#687873] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#033118]" />
                    Referências Normativas e Regulatórias Citadas
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#687873]">
                    {article.normativeReferences.map((ref, i) => (
                      <li key={i}>• {ref}</li>
                    ))}
                  </ul>
                  <p className="text-[0.7rem] text-[#687873] mt-4 italic">
                    Nota Técnica: Este artigo possui caráter informativo e técnico-orientativo. A aplicação em casos concretos requer análise individualizada da instalação e emissão da respectiva Anotação de Responsabilidade Técnica (ART).
                  </p>
                </div>
              </div>

              <div className="bg-[#033118] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FED15D] block">
                    Solução Relacionada • {article.relatedServiceName}
                  </span>
                  <h3 className="text-lg font-bold font-display mt-1">
                    Deseja aplicar esta metodologia no seu projeto?
                  </h3>
                </div>
                <Link
                  href={`/solucoes/${article.relatedServiceSlug}`}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] whitespace-nowrap"
                >
                  {article.relatedCtaLabel}
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-xs font-bold text-[#033118] hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  Voltar para Todos os Artigos
                </Link>
                <Link
                  href="/solucoes"
                  className="inline-flex items-center text-xs font-bold text-[#0A4B2D] hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5 mr-1" />
                  Ver Catálogo de 9 Soluções
                </Link>
              </div>
            </article>

            <aside className="lg:col-span-5 sticky top-28">
              <ContactForm
                defaultService={article.relatedServiceSlug}
                originPath={`/blog/${article.slug}`}
              />
            </aside>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
