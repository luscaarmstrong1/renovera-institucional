import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, SOCIAL_LINKS, linkWhatsApp } from "@/config/site";
import { companyConfig } from "@/config/company";
import { LinkedInIcon, InstagramIcon, FacebookIcon, MailIcon } from "./icons";

interface InternalLayoutShellProps {
  children: React.ReactNode;
  activePath?: string;
}

export function InternalLayoutShell({ children, activePath }: InternalLayoutShellProps) {
  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre a Renovera" },
    { href: "/solucoes", label: "Soluções Renô (9)" },
    { href: "/projetos", label: "Arquiteturas & Estudos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#111815]">
      <header className="sticky top-0 z-50 bg-[#022417]/95 backdrop-blur-md border-b border-[#FED15D]/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Renovera Energias Renováveis - Voltar para a página inicial"
          >
            <div className="w-10 h-10 rounded-full bg-[#033118] border border-[#FED15D]/50 p-1.5 flex items-center justify-center group-hover:border-[#FED15D] transition-colors">
              <Image
                src="/assets/brand/favicon.svg"
                alt="Renovera"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-bold font-display text-lg tracking-wider text-white block leading-none">
                RENOVERA
              </span>
              <span className="text-[0.65rem] uppercase tracking-widest text-[#FED15D] block mt-0.5">
                Energias Renováveis
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação institucional">
            {navItems.map((item) => {
              const isActive =
                activePath === item.href ||
                (item.href !== "/" && activePath?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors py-1 border-b-2 ${
                    isActive
                      ? "text-[#FED15D] border-[#FED15D]"
                      : "text-white/85 border-transparent hover:text-[#FED15D]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
        {/* Mobile quick nav bar */}
        <div className="md:hidden border-t border-white/10 bg-[#033118] px-4 py-2 overflow-x-auto">
          <div className="flex items-center gap-4 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive =
                activePath === item.href ||
                (item.href !== "/" && activePath?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.7rem] font-semibold uppercase tracking-wider ${
                    isActive ? "text-[#FED15D]" : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#022417] text-white border-t border-[#FED15D]/20 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#033118] border border-[#FED15D]/50 p-1.5 flex items-center justify-center">
                  <Image
                    src="/assets/brand/favicon.svg"
                    alt="Renovera"
                    width={22}
                    height={22}
                  />
                </div>
                <span className="font-bold font-display text-xl tracking-wider text-white">
                  {SITE.fullName}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#D1DFD8] leading-relaxed max-w-md">
                {SITE.heroHeadline} Desde {SITE.officialStats.foundedYear} estruturando projetos elétricos,
                consultoria regulatória (ANEEL/PRODIST) e gestão 360º de ativos de geração solar.
              </p>
              <div className="text-xs text-[#FED15D] font-semibold">
                Sede: {SITE.location} • {SITE.coverage}
              </div>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FED15D]">
                Navegação Institucional
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-xs text-[#D1DFD8]">
                <li>
                  <Link href="/" className="hover:text-[#FED15D] transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-[#FED15D] transition-colors">
                    Sobre a Renovera
                  </Link>
                </li>
                <li>
                  <Link href="/solucoes" className="hover:text-[#FED15D] transition-colors">
                    Portfólio Renô (9)
                  </Link>
                </li>
                <li>
                  <Link href="/projetos" className="hover:text-[#FED15D] transition-colors">
                    Estudos Técnicos
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-[#FED15D] transition-colors">
                    Canais de Contato
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="hover:text-[#FED15D] transition-colors">
                    Privacidade (LGPD)
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-[#FED15D] transition-colors">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FED15D]">
                Canais Oficiais (@renoveraoficial)
              </h3>
              <p className="text-xs text-[#D1DFD8]">
                WhatsApp: <strong className="text-white">{companyConfig.whatsappDisplay}</strong>
                <br />
                Comercial: <strong className="text-white">{SITE.email}</strong>
                <br />
                Compliance: <strong className="text-white">{SITE.complianceEmail}</strong>
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Oficial Renovera"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FED15D] hover:text-[#033118] flex items-center justify-center transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Oficial Renovera"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FED15D] hover:text-[#033118] flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Oficial Renovera"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FED15D] hover:text-[#033118] flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label="E-mail Comercial Renovera"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FED15D] hover:text-[#033118] flex items-center justify-center transition-colors"
                >
                  <MailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D1DFD8]/80">
            <div>
              © 2026 {SITE.fullName}. Todos os direitos reservados.
            </div>
            <div>
              Engenharia Elétrica • Energia Solar • Consultoria Regulatória
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
