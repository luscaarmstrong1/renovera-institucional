"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/config/company";
import { ArrowRight, ShieldCheck, Zap, FileText, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.6
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.8
          },
          "-=0.3"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.6
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 engineering-grid text-white overflow-hidden"
    >
      {/* Elementos Gráficos de Fundo: Malha e Geometria Elétrica */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(254, 209, 93, 0.08)" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(254, 209, 93, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Brilho Suave Sazonal de Energia Solar */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FED15D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge Superior */}
        <div ref={badgeRef} className="inline-block mb-6">
          <span className="badge-renovera">
            <Zap className="w-3.5 h-3.5 text-[#FED15D]" />
            Engenharia Elétrica & Consultoria Regulatória
          </span>
        </div>

        {/* Headline Monumental Corporativa */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] font-display"
        >
          Engenharia que conecta soluções.{" "}
          <span className="text-[#FED15D] block sm:inline">Energia que impulsiona resultados.</span>
        </h1>

        {/* Subtítulo */}
        <p
          ref={subtitleRef}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          {companyConfig.description}
        </p>

        {/* Ações e CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/solucoes" className="btn-primary text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto">
            Conheça Nossas Soluções
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
          <Link href="/contato" className="btn-secondary text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto">
            Fale com um Especialista
          </Link>
        </div>

        {/* Pilares Institucionais Rápidos */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#FED15D] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Rigor Normativo</div>
              <div className="text-[0.7rem] text-gray-400">PRODIST, ABNT e ANEEL</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#FED15D] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Média e Baixa Tensão</div>
              <div className="text-[0.7rem] text-gray-400">Projetos e Subestações</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#FED15D] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Inversão de Fluxo</div>
              <div className="text-[0.7rem] text-gray-400">Contestação Fundamentada</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#FED15D] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Visão Integrada</div>
              <div className="text-[0.7rem] text-gray-400">Do Estudo ao Comissionamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
