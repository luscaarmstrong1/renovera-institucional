import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/config/site";
import { InternalLayoutShell } from "@/components/InternalLayoutShell";
import { ContactForm } from "@/components/ContactForm";
import {
  ShieldCheck,
  PackageCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  FileSearch,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Área do Integrador Solar | Renô Adviser™, Renô Supply e Renô Partner | Renovera",
  description:
    "Soluções da Renovera dedicadas a integradores fotovoltaicos: reversão de indeferimento por inversão de fluxo (Renô Adviser™), cotação técnica de equipamentos (Renô Supply) e parceria operacional (Renô Partner).",
  alternates: {
    canonical: `${SITE.url}/integradores`,
  },
};

const INTEGRATOR_SOLUTIONS = [
  {
    slug: "reno-adviser",
    badge: "Prioridade Estratégica",
    title: "Renô Adviser™",
    subtitle: "Auditoria de Inversão de Fluxo e Reversão de Indeferimentos",
    description:
      "Atuamos como o braço de engenharia regulatória do integrador perante a concessionária. Auditamos o estudo de inversão de fluxo, avaliamos as alternativas da REN ANEEL nº 1.000/2021 e elaboramos a contestação técnico-administrativa fundamentada.",
    highlights: [
      "Auditoria da memória de cálculo e curva de carga do transformador/alimentador",
      "Análise de orçamentos de conexão com exigência de obras de rede",
      "Elaboração de recurso administrativo perante distribuidora, Ouvidoria e ANEEL",
      "Preservação comercial do seu cliente sem falsas promessas regulatórias",
    ],
    ctaLabel: "Enviar parecer de acesso para análise",
    icon: FileSearch,
  },
  {
    slug: "reno-supply",
    badge: "Suprimentos Validados",
    title: "Renô Supply",
    subtitle: "Cotação Técnica de Equipamentos e Verificação de Compatibilidade",
    description:
      "Evite atrasos e incompatibilidades elétricas entre módulos, entradas MPPT de inversores e estruturas. Nossa engenharia avalia tecnicamente sua demanda ou compara orçamentos existentes junto a fornecedores autorizados.",
    highlights: [
      "Verificação prévia de compatibilidade elétrica (tensão, corrente Isc/Imp e overload)",
      "Comparação técnica estruturada entre propostas de distribuidores",
      "Seleção correta de estruturas para telhado metálico, fibrocimento, cerâmico ou solo",
      "Suporte técnico pré-compra para integradores e compradores técnicos",
    ],
    ctaLabel: "Solicitar cotação técnica",
    icon: PackageCheck,
  },
  {
    slug: "reno-partner",
    badge: "Rede de Execução",
    title: "Renô Partner",
    subtitle: "Parceria Operacional para Equipes de Instalação Qualificadas",
    description:
      "Cadastre sua empresa para avaliação técnica e atue como parceiro operacional homologado da Renovera na sua região, recebendo projetos executivos detalhados e checklists padronizados de montagem e comissionamento.",
    highlights: [
      "Avaliação de capacidade técnica, certificações (NR-10 / NR-35) e portfólio",
      "Divisão clara de responsabilidades entre engenharia e execução em campo",
      "Checklists padronizados de qualidade, segurança e comissionamento",
      "Acionamento para oportunidades compatíveis na sua região de atendimento",
    ],
    ctaLabel: "Quero ser parceiro Renô",
    icon: Wrench,
  },
];

const INTEGRATOR_FAQS = [
  {
    q: "Como o integrador envia um projeto indeferido por inversão de fluxo para o Renô Adviser™?",
    a: "Basta preencher o formulário nesta página selecionando 'Renô Adviser™' (informando concessionária, potência e tipo de restrição) e encaminhar a carta de indeferimento, o diagrama unifilar e a fatura pelo canal privado oficial indicado.",
  },
  {
    q: "A Renovera concorre com o integrador no cliente final quando contratada pelo Renô Adviser™?",
    a: "Não. No atendimento a integradores via Renô Adviser™ e Renô Supply, respeitamos integralmente a relação comercial do integrador com o seu cliente final, atuando com ética e confidencialidade técnica.",
  },
  {
    q: "O cadastro no Renô Partner aprova automaticamente minha empresa como parceira?",
    a: "Não. O formulário registra a candidatura inicial. Todas as empresas passam por triagem documental (CNPJ, NR-10, NR-35, acervo técnico) e alinhamento operacional antes da homologação contratual.",
  },
  {
    q: "Posso enviar uma cotação que recebi de outro distribuidor para análise no Renô Supply?",
    a: "Sim. Avaliamos se os componentes cotados possuem compatibilidade elétrica ideal para a sua obra e apresentamos opções comparativas.",
  },
];

export default function IntegradoresPage() {
  return (
    <InternalLayoutShell activePath="/integradores">
      {/* Hero Editorial para Integradores */}
      <section className="bg-[#022417] text-white py-16 sm:py-24 border-b border-[#FED15D]/20 engineering-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-renovera">Ecossistema B2B para Integradores Solares</span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
                Engenharia regulatória, suprimentos técnicos e parceria operacional para escalar o seu negócio solar.
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Destrave processos de conexão com alegação de inversão de fluxo, valide tecnicamente suas compras de equipamentos e credencie sua equipe no programa Renô Partner.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#formulario-integrador"
                  className="inline-flex items-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
                >
                  Enviar projeto indeferido / Solicitar parceria
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
                <Link
                  href="/solucoes/reno-adviser"
                  className="inline-flex items-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Conhecer o Renô Adviser™
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#033118] border border-[#FED15D]/30 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FED15D]">
                <Users className="w-4 h-4" />
                <span>Três Frentes Integradas para o Integrador</span>
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <strong className="text-base font-display text-white block">
                    1. Renô Adviser™ (Conexão &amp; Fluxo)
                  </strong>
                  <span className="text-xs text-[#D1DFD8]">
                    Auditoria de pareceres de acesso e contestação técnico-administrativa perante distribuidoras e ANEEL.
                  </span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <strong className="text-base font-display text-white block">
                    2. Renô Supply (Cotação &amp; Kits)
                  </strong>
                  <span className="text-xs text-[#D1DFD8]">
                    Especificação e comparação de propostas com verificação de compatibilidade elétrica.
                  </span>
                </div>
                <div>
                  <strong className="text-base font-display text-white block">
                    3. Renô Partner (Execução em Campo)
                  </strong>
                  <span className="text-xs text-[#D1DFD8]">
                    Credenciamento de equipes locais qualificadas para montagem e comissionamento padronizado.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As 3 Soluções do Integrador em Detalhe */}
      <section className="py-20 bg-white border-b border-[#DFE7E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-renovera-dark mb-2">Soluções Dedicadas</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#033118]">
              Como a Renovera apoia o Integrador Fotovoltaico
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INTEGRATOR_SOLUTIONS.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.slug}
                  className="bg-[#F8F8F5] border border-[#DFE7E3] rounded-2xl p-7 flex flex-col justify-between hover:border-[#033118] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#033118] text-[#FED15D]">
                        {sol.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#033118] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-display text-[#033118]">
                        {sol.title}
                      </h3>
                      <p className="text-xs font-bold text-[#0A4B2D] mt-0.5">
                        {sol.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#40504C] leading-relaxed">
                      {sol.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {sol.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#40504C]">
                          <CheckCircle2 className="w-4 h-4 text-[#137A4E] flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#DFE7E3] space-y-2.5">
                    <Link
                      href={`/solucoes/${sol.slug}`}
                      className="btn-primary w-full text-xs py-3 text-center"
                    >
                      {sol.ctaLabel}
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona + Formulário e FAQ */}
      <section id="formulario-integrador" className="py-20 bg-[#F8F8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-white border border-[#DFE7E3] rounded-2xl p-8 space-y-6">
                <span className="badge-renovera-dark">Fluxo Operacional</span>
                <h2 className="text-2xl font-bold font-display text-[#033118]">
                  Etapas de Atendimento ao Integrador
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#033118] text-[#FED15D] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      01
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#033118]">
                        Escolha da Frente (Adviser, Supply ou Partner)
                      </h3>
                      <p className="text-xs text-[#40504C] mt-0.5">
                        Selecione no formulário ao lado se deseja submeter um parecer de acesso indeferido, cotar equipamentos ou candidatar sua equipe como parceira operacional.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#033118] text-[#FED15D] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      02
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#033118]">
                        Análise pela Engenharia da Renovera
                      </h3>
                      <p className="text-xs text-[#40504C] mt-0.5">
                        Nossos engenheiros avaliam os dados técnicos informados e orientam o envio privado dos documentos complementares (carta da concessionária, unifilar ou certificados).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#033118] text-[#FED15D] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      03
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#033118]">
                        Proposta Técnica ou Homologação Operacional
                      </h3>
                      <p className="text-xs text-[#40504C] mt-0.5">
                        Formalização do escopo de atuação com confidencialidade e divisão transparente de responsabilidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ do Integrador */}
              <div className="bg-white border border-[#DFE7E3] rounded-2xl p-8 space-y-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0A4B2D]" />
                  <h2 className="text-xl font-bold font-display text-[#033118]">
                    Perguntas Frequentes — Integradores
                  </h2>
                </div>
                <div className="space-y-4">
                  {INTEGRATOR_FAQS.map((item, idx) => (
                    <div key={idx} className="border-b border-[#DFE7E3] pb-4 last:border-0 last:pb-0">
                      <h3 className="text-sm font-bold text-[#033118]">{item.q}</h3>
                      <p className="text-xs text-[#40504C] mt-1 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#E8F0EC] border border-[#0A4B2D]/20 rounded-xl p-5 flex items-start gap-3 text-xs text-[#033118]">
                <ShieldCheck className="w-5 h-5 text-[#137A4E] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Governança e Segurança:</strong> Este portal público recebe solicitações comerciais e candidaturas técnicas. O acesso a documentos de projetos ativos e checklists operacionais ocorre exclusivamente mediante contratação ou credenciamento formalizado.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 sticky top-28">
              <ContactForm
                defaultService="reno-adviser"
                originPath="/integradores"
                segment="integradores"
              />
            </div>
          </div>
        </div>
      </section>
    </InternalLayoutShell>
  );
}
