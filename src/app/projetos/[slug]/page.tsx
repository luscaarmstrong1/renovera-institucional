import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/config/projects";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projetos"
            className="inline-flex items-center text-xs font-semibold text-[#FED15D] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Voltar a Todos os Projetos
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-renovera">{project.category}</span>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
            {project.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
            {project.tag}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Métricas Principais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="text-xs text-[#687873] uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-lg font-bold font-display text-[#033118] mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Contexto e Desafio */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#033118]">
              Contexto do Projeto
            </h2>
            <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
              {project.context}
            </p>

            <h3 className="text-xl font-bold font-display text-[#033118] pt-2">
              Desafio Técnico
            </h3>
            <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
              {project.challenge}
            </p>

            <h3 className="text-xl font-bold font-display text-[#033118] pt-2">
              Solução de Engenharia Adotada
            </h3>
            <p className="text-sm sm:text-base text-[#40504C] leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Escopo Desenvolvido */}
          <div className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-xl p-8 space-y-4">
            <h4 className="text-base font-bold font-display text-[#033118]">
              Escopo Técnico Executado
            </h4>
            <ul className="space-y-3 text-sm text-[#40504C]">
              {project.scope.map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#137A4E] flex-shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 text-center">
            <Link href="/contato" className="btn-primary px-8 py-3.5">
              Consultar Viabilidade para Seu Empreendimento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
