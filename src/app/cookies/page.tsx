import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";
import { companyConfig } from "@/config/company";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";

export const metadata: Metadata = {
  title: "Política de Cookies & Preferências de Consentimento | Renovera",
  description:
    "Saiba como a Renovera Energias Renováveis utiliza cookies essenciais, funcionais e analíticos e como gerenciar suas preferências em conformidade com a LGPD.",
  alternates: {
    canonical: `${SITE.url}/cookies`,
  },
};

export default function CookiesPage() {
  return (
    <InternalLayoutShell activePath="/cookies">
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="badge-renovera-dark mb-2">Privacidade &amp; Governança Digital</span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#033118]">
              Política de Cookies e Gestão de Preferências
            </h1>
            <p className="text-xs text-[#687873] mt-2">
              {companyConfig.legalName} • Diretrizes de transparência conforme a Lei nº 13.709/2018 (LGPD).
            </p>
          </div>

          <div className="prose max-w-none text-sm text-[#40504C] space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">1. O que são Cookies e Armazenamento Local?</h2>
              <p>
                Cookies e chaves de armazenamento local (<code>localStorage</code> / <code>sessionStorage</code>) são pequenos registros salvos no seu navegador para garantir o funcionamento técnico seguro das páginas, recordar o serviço selecionado durante sua navegação e registrar sua escolha de consentimento.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">2. Categorias Utilizados neste Portal</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookies e Registros Estritamente Necessários (Essenciais):</strong> Indispensáveis para a operação das páginas, proteção contra submissões automatizadas (anti-spam) e armazenamento da sua decisão no banner de privacidade (chave <code>renovera_cookie_consent_v7</code>).
                </li>
                <li>
                  <strong>Registros Funcionais (Opcionais):</strong> Auxiliam a preservar o contexto da jornada comercial (por exemplo, lembrar a solução Renô selecionada ao transitar entre uma página de serviço e o formulário).
                </li>
                <li>
                  <strong>Cookies Analíticos (Opcionais):</strong> Destinados exclusivamente à compreensão estatística e agregada de desempenho de páginas. Nenhum script analítico não essencial é carregado antes do consentimento do usuário.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">3. Como Alterar ou Revogar seu Consentimento</h2>
              <p>
                Você pode a qualquer momento aceitar, rejeitar os itens opcionais ou personalizar suas escolhas através do banner de preferências ou limpando os dados de navegação do site no seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#033118] mb-2">4. Canais de Contato e Compliance</h2>
              <p>
                Para dúvidas relacionadas à proteção de dados pessoais, utilize os canais institucionais:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Atendimento Comercial e Geral:{" "}
                  <a href={`mailto:${companyConfig.email}`} className="text-[#0A4B2D] underline font-semibold">
                    {companyConfig.email}
                  </a>
                </li>
                <li>
                  Canal Independente de Ética e Compliance:{" "}
                  <a href={`mailto:${companyConfig.complianceEmail}`} className="text-[#0A4B2D] underline font-semibold">
                    {companyConfig.complianceEmail}
                  </a>
                </li>
              </ul>
              <p className="text-xs text-[#687873] pt-2">
                Consulte também nossa{" "}
                <Link href="/privacidade" className="text-[#033118] underline">
                  Política de Privacidade
                </Link>{" "}
                e nossos{" "}
                <Link href="/termos" className="text-[#033118] underline">
                  Termos de Uso
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </InternalLayoutShell>
  );
}
