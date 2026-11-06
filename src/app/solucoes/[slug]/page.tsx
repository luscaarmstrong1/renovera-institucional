import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE, RENO_PRODUCTS } from "@/config/site";
import { servicesData } from "@/config/services";
import { SERVICE_LANDING_DETAILS } from "@/config/serviceDetails";
import { projectsData } from "@/config/projects";
import { ContactForm } from "@/components/ContactForm";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Users,
  AlertTriangle,
  HelpCircle,
  ClipboardList,
  Layers,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const SLUG_TO_CANONICAL_MAP: Record<string, string> = {
  "consultoria-regulatoria": "reno-adviser",
  "projetos-eletricos": "reno-engenharia",
  "energia-solar": "reno-projetos",
  "eletropostos": "reno-energy-hub",
  "automacao": "reno-engenharia",
  "viabilidade": "reno-invest",
};

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
  const canonicalSlug = SLUG_TO_CANONICAL_MAP[slug] || service.slug;
  return {
    title: `${service.title} | Soluções Renovera Energias Renováveis`,
    description: service.shortDescription,
    alternates: {
      canonical: `${SITE.url}/solucoes/${canonicalSlug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const canonicalSlug = SLUG_TO_CANONICAL_MAP[service.slug] || service.slug;
  const productMeta =
    RENO_PRODUCTS.find((p) => p.slug === canonicalSlug) ||
    RENO_PRODUCTS.find((p) => p.slug === service.slug);
  const landingDetail =
    SERVICE_LANDING_DETAILS[canonicalSlug] || SERVICE_LANDING_DETAILS["reno-adviser"];
  const relatedProjects = projectsData.filter(
    (p) => p.relatedProductSlug === canonicalSlug
  );
  const relatedProducts = (landingDetail.relatedProductSlugs || [])
    .map((relSlug) => RENO_PRODUCTS.find((p) => p.slug === relSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const isAdviser = canonicalSlug === "reno-adviser";

  return (
    <InternalLayoutShell activePath={`/solucoes/${canonicalSlug}`}>
      {/* 1. Hero Específico e Impactante */}
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Link
                href="/solucoes"
                className="inline-flex items-center text-xs font-semibold text-[#FED15D] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                Voltar ao Catálogo das 9 Soluções Renô
              </Link>

              <div className="flex flex-wrap items-center gap-2.5">
                <span className="badge-renovera">{landingDetail.categoryLabel}</span>
                {isAdviser && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FED15D] text-[#033118]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Prioridade Estratégica
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
                {service.title}: {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#solicitar"
                  className="inline-flex items-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
                >
                  {landingDetail.primaryCtaLabel}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(
                    `Olá! Gostaria de conversar sobre a solução ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  {landingDetail.secondaryCtaLabel}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              {productMeta?.image && (
                <div className="rounded-2xl overflow-hidden border-2 border-[#FED15D]/30 shadow-2xl bg-[#033118]">
                  <img
                    src={productMeta.image}
                    alt={`${service.title} — ${service.heroHeadline}`}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Problema Atendido vs. Solução Renovera */}
      <section className="py-16 bg-white border-b border-[#DFE7E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#FFFDF6] border border-[#FED15D]/60 rounded-2xl p-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#033118] bg-[#FED15D]/30 px-3 py-1 rounded">
                <AlertTriangle className="w-4 h-4 text-[#033118]" />
                Problema Técnico e Comercial Atendido
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#033118]">
                {landingDetail.problemTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#40504C] leading-relaxed">
                {landingDetail.problemSummary}
              </p>
              <ul className="space-y-2 pt-2">
                {landingDetail.problemsSolved.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17221F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#033118] mt-2 flex-shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#033118] text-white rounded-2xl p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#033118] bg-[#FED15D] px-3 py-1 rounded">
                  <ShieldCheck className="w-4 h-4" />
                  A Resposta de Engenharia: {service.title}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {landingDetail.solutionTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#D1DFD8] leading-relaxed">
                  {landingDetail.solutionSummary}
                </p>

                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FED15D] mb-2.5">
                    Público-Alvo Principal
                  </h3>
                  <ul className="space-y-2">
                    {landingDetail.targetAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#D1DFD8]">
                        <Users className="w-4 h-4 text-[#FED15D] flex-shrink-0 mt-0.5" />
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15">
                <a
                  href="#solicitar"
                  className="inline-flex items-center text-xs font-bold text-[#FED15D] hover:underline"
                >
                  Ir direto para o formulário de {service.title} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal + Formulário Personalizado */}
      <section className="py-20 bg-[#F8F8F5]" id="solicitar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Coluna Esquerda: Escopo, Etapas, Entregáveis, Documentos, Casos, FAQ e Produtos Relacionados */}
            <div className="lg:col-span-7 space-y-10">
              {/* 5. Serviços e Aplicações */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE7E3]">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#033118] mb-4">
                  Escopo Técnico, Serviços e Aplicações
                </h2>
                <ul className="space-y-3 text-sm text-[#40504C]">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#137A4E] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Etapas de Atendimento */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE7E3]">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#033118] mb-6">
                  Etapas de Atendimento do {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {landingDetail.workflowSteps.map((st) => (
                    <div
                      key={st.step}
                      className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-4 space-y-1.5"
                    >
                      <span className="text-xs font-bold font-mono text-[#0A4B2D] bg-[#E8F0EC] px-2 py-0.5 rounded">
                        ETAPA {st.step}
                      </span>
                      <h3 className="text-sm font-bold text-[#033118] pt-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#40504C] leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7 & 8. Entregáveis Técnicos + Documentos Necessários */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE7E3] space-y-8">
                <div>
                  <h2 className="text-xl font-bold font-display text-[#033118] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#0A4B2D]" />
                    Entregáveis Técnicos Conforme Contratação
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#40504C]">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 bg-[#F8F8F5] p-3 rounded-lg border border-[#DFE7E3]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#033118] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#DFE7E3]">
                  <h3 className="text-lg font-bold font-display text-[#033118] mb-3 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-[#0A4B2D]" />
                    Informações e Documentos Necessários para Avaliação
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#40504C]">
                    {landingDetail.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0A4B2D] flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.normativeFramework && (
                  <div className="pt-6 border-t border-[#DFE7E3]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#687873] mb-2.5 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#033118]" />
                      Referencial Técnico e Normativo
                    </h4>
                    <ul className="space-y-1 text-xs text-[#687873]">
                      {service.normativeFramework.map((n, i) => (
                        <li key={i}>• {n}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-[#E8F0EC] border border-[#0A4B2D]/20 rounded-xl p-4 text-xs text-[#033118] leading-relaxed">
                  {landingDetail.complianceDisclaimer}
                </div>
              </div>

              {/* 9. Metodologia Técnica / Exemplos Ilustrativos Relacionados */}
              {relatedProjects.length > 0 && (
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE7E3] space-y-4">
                  <span className="badge-renovera-dark">Aplicação Prática</span>
                  <h2 className="text-xl font-bold font-display text-[#033118]">
                    Metodologia Técnica e Exemplos Ilustrativos
                  </h2>
                  <div className="space-y-4">
                    {relatedProjects.map((prj) => (
                      <div
                        key={prj.slug}
                        className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#0A4B2D] block">
                            {prj.evidenceClassification}
                          </span>
                          <h3 className="text-base font-bold text-[#033118] mt-0.5">
                            {prj.name}
                          </h3>
                          <p className="text-xs text-[#40504C] mt-1 line-clamp-2">
                            {prj.context}
                          </p>
                        </div>
                        <Link
                          href={`/projetos/${prj.slug}`}
                          className="btn-secondary-dark text-xs px-4 py-2 whitespace-nowrap"
                        >
                          Ver Ficha Técnica →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 10. Perguntas Frequentes (FAQ) Específicas do Serviço */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE7E3] space-y-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0A4B2D]" />
                  <h2 className="text-xl font-bold font-display text-[#033118]">
                    Perguntas Frequentes — {service.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {landingDetail.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border-b border-[#DFE7E3] pb-4 last:border-0 last:pb-0"
                    >
                      <h3 className="text-sm font-bold text-[#033118]">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-[#40504C] mt-1.5 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11. Relação com Outros Produtos Renô */}
              {relatedProducts.length > 0 && (
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DFE7E3] space-y-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0A4B2D]" />
                    <h2 className="text-xl font-bold font-display text-[#033118]">
                      Soluções Complementares do Ecossistema Renô
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/solucoes/${rel.slug}`}
                        className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-4 hover:border-[#033118] transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#0A4B2D] block">
                            {rel.badge}
                          </span>
                          <h3 className="text-sm font-bold font-display text-[#033118] mt-1">
                            {rel.name}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold text-[#033118] mt-3 inline-flex items-center">
                          Conhecer solução →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 13. Coluna Direita: Formulário Inteligente Personalizado para o Serviço */}
            <div className="lg:col-span-5 sticky top-28">
              <ContactForm
                defaultService={canonicalSlug}
                originPath={`/solucoes/${service.slug}`}
              />
            </div>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
