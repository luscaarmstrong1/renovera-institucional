"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/config/navigation";
import { companyConfig } from "@/config/company";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao trocar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isDarkHero = pathname === "/" || pathname.startsWith("/solucoes/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#022417]/95 backdrop-blur-md border-b border-[#FED15D]/20 py-3 shadow-lg"
          : isDarkHero
          ? "bg-transparent py-5 border-b border-white/10"
          : "bg-white/95 backdrop-blur-md py-4 border-b border-[#DFE7E3] shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logotipo Oficial */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0 bg-[#033118] border border-[#FED15D]/40 rounded-lg p-1.5 flex items-center justify-center">
            <Image
              src="/assets/brand/favicon.svg"
              alt="Ícone Renovera"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight font-display transition-colors ${
                isScrolled || isDarkHero ? "text-white" : "text-[#033118]"
              }`}
            >
              RENOVERA
            </span>
            <span
              className={`text-[0.65rem] tracking-wider uppercase font-semibold ${
                isScrolled || isDarkHero ? "text-[#FED15D]" : "text-[#0A4B2D]"
              }`}
            >
              Energias Renováveis
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navigationConfig.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${
                      isScrolled || isDarkHero
                        ? "text-gray-200 hover:text-[#FED15D]"
                        : "text-[#17221F] hover:text-[#033118]"
                    } ${isActive ? "text-[#FED15D] font-semibold" : ""}`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-80 bg-[#022417] border border-[#FED15D]/30 rounded-lg shadow-2xl p-2.5 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block p-2.5 rounded-md hover:bg-white/5 transition-colors group/sub"
                        >
                          <div className="text-sm font-semibold text-white group-hover/sub:text-[#FED15D]">
                            {sub.label}
                          </div>
                          {sub.description && (
                            <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                              {sub.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || isDarkHero
                    ? "text-gray-200 hover:text-[#FED15D]"
                    : "text-[#17221F] hover:text-[#033118]"
                } ${isActive ? (isDarkHero || isScrolled ? "text-[#FED15D] font-semibold" : "text-[#033118] font-bold") : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA do Header */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contato"
            className="btn-primary text-xs uppercase tracking-wider py-2 px-4 shadow-sm"
          >
            Fale com a Renovera
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        {/* Botão Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md ${
              isScrolled || isDarkHero ? "text-white" : "text-[#033118]"
            }`}
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#022417] border-b border-[#FED15D]/20 px-4 pt-3 pb-6 space-y-3">
          {navigationConfig.map((item) => (
            <div key={item.label} className="border-b border-white/5 pb-2">
              <Link
                href={item.href}
                className="block text-base font-medium text-white hover:text-[#FED15D] py-1.5"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block text-xs text-gray-300 hover:text-[#FED15D] py-1"
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contato"
              className="btn-primary w-full text-center text-sm py-2.5"
            >
              Fale com um Especialista
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
