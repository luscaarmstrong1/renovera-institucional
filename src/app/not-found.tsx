import React from "react";
import Link from "next/link";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ArrowRight, Compass, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <InternalLayoutShell>
      <section className="py-24 bg-[#F8F8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#033118] text-[#FED15D] flex items-center justify-center mx-auto shadow-md">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <span className="badge-renovera-dark">Erro 404 • Página Não Localizada</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-[#033118]">
            O endereço solicitado não foi encontrado.
          </h1>
          <p className="text-sm sm:text-base text-[#40504C] max-w-xl mx-auto leading-relaxed">
            A rota que você tentou acessar pode ter sido atualizada ou movida. Utilize os atalhos abaixo para explorar as 9 soluções do ecossistema Renovera ou falar com nossa equipe técnica.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/" className="btn-primary px-6 py-3 text-xs">
              Voltar para a Página Inicial
            </Link>
            <Link href="/solucoes" className="btn-secondary-dark px-6 py-3 text-xs">
              <Compass className="w-4 h-4 mr-1.5" />
              Explorar as 9 Soluções Renô
            </Link>
            <Link
              href="/solucoes/reno-adviser"
              className="inline-flex items-center text-xs font-bold text-[#0A4B2D] hover:underline px-4 py-2"
            >
              Conhecer o Renô Adviser™
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
