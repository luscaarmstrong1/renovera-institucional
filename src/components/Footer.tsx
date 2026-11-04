import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/config/company";
import { servicesData } from "@/config/services";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#022417] text-white border-t border-[#FED15D]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca & Missão */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#033118] border border-[#FED15D]/40 rounded-lg p-1.5 flex items-center justify-center">
                <Image
                  src="/assets/brand/favicon.svg"
                  alt="Ícone Renovera"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight font-display text-white">
                  RENOVERA
                </span>
                <p className="text-[0.65rem] tracking-wider uppercase font-semibold text-[#FED15D]">
                  Energias Renováveis
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Engenharia elétrica, consultoria regulatória e infraestrutura técnica de energia. Conectamos rigor normativo e solidez operacional para decisões seguras no setor elétrico.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#FED15D]">
              <ShieldCheck className="w-4 h-4" />
              <span>Conformidade ANEEL & Normas ABNT</span>
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FED15D] mb-4">
              Soluções Técnicas
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/solucoes/${svc.slug}`}
                    className="hover:text-[#FED15D] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FED15D] mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/sobre" className="hover:text-[#FED15D] transition-colors">
                  Sobre a Renovera
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:text-[#FED15D] transition-colors">
                  Portfólio de Projetos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#FED15D] transition-colors">
                  Solicitação de Análise Técnica
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-[#FED15D] transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-[#FED15D] transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato Oficial */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FED15D] mb-4">
              Canais Institucionais
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FED15D] flex-shrink-0 mt-0.5" />
                <span>{companyConfig.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FED15D] flex-shrink-0" />
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="hover:text-[#FED15D] transition-colors"
                >
                  {companyConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FED15D] flex-shrink-0" />
                <a
                  href={companyConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FED15D] transition-colors"
                >
                  {companyConfig.whatsappDisplay} (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FED15D] flex-shrink-0 mt-0.5" />
                <span>{companyConfig.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © 2026 {companyConfig.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors">
              Termos
            </Link>
            <span className="text-gray-500">Engenharia Elétrica & Soluções Sustentáveis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
