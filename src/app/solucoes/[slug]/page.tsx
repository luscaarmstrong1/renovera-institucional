import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE, RENO_PRODUCTS } from "@/config/site";
import { servicesData } from "@/config/services";
import { ContactForm } from "@/components/ContactForm";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText, Users } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Solução Não Encontrada | Renovera",
    };
  }
  return {
    title: `${service.title} | Soluções Renovera Energias Renováveis`,
    description: service.shortDescription,
    alternates: {
      canonical: `${SITE.url}/solucoes/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const productMeta = RENO_PRODUCTS.find((p) => p.slug === service.slug);

  return (
    <InternalLayoutShell activePath={`/solucoes/${service.slug}`}>
      {/* Hero do Serviço */}
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/solucoes"
            className="inline-flex items-center text-xs font-semibold text-[#FED15D] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Voltar ao Portfólio Renô (9 Soluções)
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge-renovera">{service.badge}</span>
            <span className="text-xs text-gray-300 font-bold uppercase tracking-wider">
              Solução {service.number} de 09
            </span>
            {productMeta?.idealFor && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#FED15D]">
                <Users className="w-3.5 h-3.5" />
                Ideal para: {productMeta.idealFor.join(", ")}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
            {service.heroHeadline}
          </p>
        </div>
      </section>

      {/* Detalhes do Serviço & Formulário */}
      <section className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Lado Esquerdo: Descrição, Escopo e Normas */}
            <div className="lg:col-span-7 space-y-10">
              {productMeta?.image && (
                <div className="bg-white rounded-xl overflow-hidden border border-[#DFE7E3]">
                  <img
                    src={productMeta.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              )}

              <div className="bg-white rounded-xl p-8 border border-[#DFE7E3]">
                <h2 className="text-xl font-bold font-display text-[#033118] mb-4">
                  Apresentação Técnica
                </h2>
                <p className="text-sm sm:text-base text-[#40504C] leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A4B2D] mb-4">
                  Escopo e Atividades Desenvolvidas
                </h3>
                <ul className="space-y-3 text-sm text-[#40504C]">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#137A4E] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-[#DFE7E3]">
                <h3 className="text-xl font-bold font-display text-[#033118] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0A4B2D]" />
                  Documentos e Entregáveis Técnicos
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#40504C]">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 bg-[#F8F8F5] p-3 rounded border border-[#DFE7E3]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#033118]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {service.normativeFramework && (
                  <div className="mt-8 pt-6 border-t border-[#DFE7E3]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#687873] mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#033118]" />
                      Embasamento Técnico e Normativo
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#687873]">
                      {service.normativeFramework.map((n, i) => (
                        <li key={i}>• {n}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Lado Direito: Formulário Específico de Solicitação */}
            <div className="lg:col-span-5 sticky top-28">
              <ContactForm defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
