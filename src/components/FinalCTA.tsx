import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 engineering-grid text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="badge-renovera mb-4">Atendimento Técnico Especializado</span>
        <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
          Seu próximo projeto começa com uma solução bem estruturada.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Converse com os especialistas da Renovera e conheça as alternativas técnicas e regulatórias mais seguras para sua necessidade.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contato" className="btn-primary text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto">
            Solicitar Atendimento
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
          <Link href="/solucoes" className="btn-secondary text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto">
            Conhecer Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
