import React from "react";
import { ActionButton } from "./icons";

const SHOWCASE_RENOVERA = {
  sectionTitle: "Um projeto. Múltiplas camadas de engenharia.",
  sectionSubtitle: "Da concepção técnica à integração dos sistemas.",
  ctaLabel: "Ver Ficha Técnica",
  demoCtaLabel: "Consultar Solução",
  stages: [
    {
      id: "estudos-viabilidade",
      shortNavLabel: "01 Viabilidade",
      subtitle: "Estudos Preliminares & Regulação",
      titleLine1: "Diagnóstico Elétrico",
      titleLine2: "& Enquadramento Tarifário",
      description: "Avaliação técnica da capacidade de atendimento da subestação, cálculo de curva de carga e enquadramento tarifário ótimo (Grupo A e Grupo B).",
      technologies: ["PRODIST", "PRORET", "Cálculo de Demanda", "Análise Tarifária"],
      demoUrl: "/solucoes/viabilidade",
      githubUrl: "/projetos/reavaliacao-inversao-fluxo-mmgd",
    },
    {
      id: "engenharia-eletrica",
      shortNavLabel: "02 Projetos Elétricos",
      subtitle: "Média e Baixa Tensão",
      titleLine1: "Engenharia Executiva",
      titleLine2: "& Subestações Abrigadas",
      description: "Diagramas unifilares detalhados, cabines primárias em 13,8 kV a 34,5 kV, estudos de coordenação de relés e prontuário NBR 14039.",
      technologies: ["NBR 14039", "NBR 5410", "Diagramas Unifilares", "Subestações"],
      demoUrl: "/solucoes/projetos-eletricos",
      githubUrl: "/projetos/usina-solar-comercial-300kwp",
    },
    {
      id: "geracao-fotovoltaica",
      shortNavLabel: "03 Usinas Solares",
      subtitle: "Geração Distribuída MMGD",
      titleLine1: "Engenharia Fotovoltaica",
      titleLine2: "de Alta Performance",
      description: "Dimensionamento de geradores solares de solo e telhado com análise rigorosa de sombreamento, modelagem de geração e balanço CA/CC.",
      technologies: ["NBR 16690", "Usinas Fotovoltaicas", "Modelagem de Perdas", "Inversores"],
      demoUrl: "/solucoes/energia-solar",
      githubUrl: "/projetos/usina-solar-comercial-300kwp",
    },
    {
      id: "protecao-aterramento",
      shortNavLabel: "04 Proteção & SPDA",
      subtitle: "Segurança Operacional",
      titleLine1: "Coordenação de Proteção",
      titleLine2: "e Malha de Aterramento",
      description: "Dimensionamento de malha de terra, parametrização de relés digitais secundários, SPDA estrutural (NBR 5419) e mitigação de transitórios.",
      technologies: ["NBR 5419", "Relés Secundários", "Malha de Terra", "Seletividade"],
      demoUrl: "/solucoes/projetos-eletricos",
      githubUrl: "/projetos",
    },
    {
      id: "automacao-telemetria",
      shortNavLabel: "05 Automação",
      subtitle: "Controle Dinâmico de Injeção",
      titleLine1: "Telemetria Industrial",
      titleLine2: "& Zero Export",
      description: "Controladores programáveis industriais para limitação de injeção reversa em milissegundos, integração com multimedidores e telemetria remota.",
      technologies: ["Modbus TCP", "Zero Export", "Telemetria", "Supervisórios"],
      demoUrl: "/solucoes/automacao",
      githubUrl: "/solucoes/automacao",
    },
    {
      id: "mobilidade-eletrica",
      shortNavLabel: "06 Eletromobilidade",
      subtitle: "Infraestrutura de Recarga VE",
      titleLine1: "Eletropostos DC & AC",
      titleLine2: "de 22 kW a 120 kW",
      description: "Infraestrutura elétrica dedicada para mobilidade sustentável com carregadores de alta potência, balanceamento dinâmico e conformidade NBR 17019.",
      technologies: ["NBR 17019", "IEC 61851", "Carregadores Rápidos DC", "OCPP"],
      demoUrl: "/solucoes/eletropostos",
      githubUrl: "/solucoes/eletropostos",
    },
  ],
};

const PACK_IMAGES = [
  "/assets/images/elements/elem-solar-module.webp",
  "/assets/images/elements/elem-grid-node.webp",
  "/assets/images/elements/elem-pcb-node.webp",
  "/assets/images/elements/elem-bess-unit.webp",
];

export function DailyMeals() {
  return (
    <section data-inertia="" className="flavour" id="arquitetura">
      <span id="simuladores" style={{ position: "absolute", top: 0 }} aria-hidden="true" />
      <div className="flavour-container">
        <div className="flavour-header">
          <div className="flavour-heading-wrap">
            <h2 className="flavour-title">
              {SHOWCASE_RENOVERA.sectionTitle}
            </h2>
            <h3 data-highlight-text="" className="flavour-subline">
              {SHOWCASE_RENOVERA.sectionSubtitle}
            </h3>
          </div>
        </div>

        <div className="flavour-layer-pills" role="tablist" aria-label="Camadas de engenharia Renovera">
          {SHOWCASE_RENOVERA.stages.map((stage, idx) => (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={idx === 0}
              data-flavour-pill={idx}
              className={`flavour-layer-pill${idx === 0 ? " is-active" : ""}`}
            >
              {stage.shortNavLabel}
            </button>
          ))}
        </div>

        <div data-flavour-content="" className="flavour-content">
          <div className="flavour-left">
            <div className="flavour-signature-wrap">
              <div className="flavour-signature">
                <svg
                  viewBox="0 0 320 90"
                  width={320}
                  height={90}
                  className="flavour-signature-img"
                  aria-hidden="true"
                  overflow="visible"
                >
                  <g
                    transform="rotate(-6 160 45)"
                    fill="currentColor"
                    style={{ fontFamily: "var(--font-mao)" }}
                    fontSize={29}
                  >
                    <text x={0} y={38}>
                      disciplinas integradas
                    </text>
                    <text x={18} y={68}>
                      &amp; rigor executivo
                    </text>
                  </g>
                </svg>
                <svg
                  viewBox="0 0 320 90"
                  width={320}
                  height={90}
                  className="flavour-signature-img is-wiggle"
                  aria-hidden="true"
                  overflow="visible"
                >
                  <g
                    transform="rotate(-6 160 45)"
                    fill="currentColor"
                    style={{ fontFamily: "var(--font-mao)" }}
                    fontSize={29}
                  >
                    <text x={0} y={38}>
                      disciplinas integradas
                    </text>
                    <text x={18} y={68}>
                      &amp; rigor executivo
                    </text>
                  </g>
                </svg>
              </div>
              <div
                style={{ "--animation-delay": ".15s" } as React.CSSProperties}
                className="flavour-signature-arrow"
              >
                <svg
                  viewBox="0 0 150 150"
                  width={150}
                  height={150}
                  className="flavour-signature-arrow-img"
                  aria-hidden="true"
                  fill="none"
                >
                  <path
                    d="M30 14C12 48 18 98 62 122M62 122C58 108 50 100 40 96M62 122C48 124 38 130 32 140"
                    stroke="currentColor"
                    strokeWidth={3.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 150 150"
                  width={150}
                  height={150}
                  className="flavour-signature-arrow-img is-wiggle"
                  aria-hidden="true"
                  fill="none"
                >
                  <path
                    d="M30 14C12 48 18 98 62 122M62 122C58 108 50 100 40 96M62 122C48 124 38 130 32 140"
                    stroke="currentColor"
                    strokeWidth={3.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div data-inertia-item="" className="flavour-left-dose is-composite-art">
              <div data-flavour-left-bg="" className="flavour-left-bg">
                <svg
                  viewBox="0 0 420 420"
                  width="100%"
                  height="100%"
                  className="flavour-left-bg-svg"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx={210}
                    cy={210}
                    r={180}
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeDasharray="4 8"
                    opacity={0.35}
                  />
                  <circle
                    cx={210}
                    cy={210}
                    r={130}
                    stroke="currentColor"
                    strokeWidth={1.5}
                    opacity={0.2}
                  />
                </svg>
              </div>

              <div data-flavour-active-art="" className="flavour-composite-stack">
                <img
                  src="/assets/images/stages/stage-01-dimensionamento.webp"
                  alt="Engenharia e Camadas Técnicas Renovera"
                  className="flavour-composite-img"
                  loading="lazy"
                  width={680}
                  height={510}
                />
              </div>
            </div>
          </div>

          <div className="flavour-right">
            <div
              data-flavour-slider=""
              className="flavour-slider swiper"
              data-lenis-prevent-wheel=""
            >
              <div className="flavour-slider-wrapper swiper-wrapper">
                {PACK_IMAGES.map((imgSrc, idx) => (
                  <div key={idx} className="flavour-slide swiper-slide">
                    <div className="flavour-slide-pack">
                      <div className="flavour-pack-perspective">
                        <img
                          src={imgSrc}
                          alt="Equipamentos e Infraestrutura de Energia Renovera"
                          className="flavour-pack-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flavour-right-bg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 769 691"
                fill="none"
                data-flavour-content-svg=""
                className="flavour-right-bg-svg"
              >
                <path
                  d="M245.813 59.5015C54.1619 152.668 -34.1186 356.234 41.6525 512.101C117.424 667.969 332.042 724.289 523.692 631.123C715.343 537.957 803.624 334.39 727.852 178.522C652.081 22.6546 437.463 -33.6648 245.813 59.5015Z"
                  stroke="currentColor"
                  strokeWidth="28"
                />
              </svg>
            </div>
          </div>

          <div className="flavour-navigation">
            <button
              type="button"
              data-flavour-slider-left-button=""
              className="flavour-slider-button is-left"
              aria-label="Disciplina anterior"
            >
              <svg
                viewBox="0 0 20 20"
                className="flavour-slider-button-arrow"
                aria-hidden="true"
                fill="none"
                style={{ transform: "scaleX(-1)" }}
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              data-flavour-slider-right-button=""
              className="flavour-slider-button is-right"
              aria-label="Próxima disciplina"
            >
              <svg
                viewBox="0 0 20 20"
                className="flavour-slider-button-arrow"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flavour-center">
            <div
              data-flavour-content-slider=""
              className="flavour-content-swiper swiper"
            >
              <div className="flavour-content-swiper-wrapper swiper-wrapper">
                {SHOWCASE_RENOVERA.stages.map((stage) => (
                  <div
                    key={stage.id}
                    className="flavour-content-slide swiper-slide"
                  >
                    <div className="flavour-content-slide-inner">
                      <div className="flavour-content-slide-header">
                        <p className="flavour-content-slider-subline">
                          {stage.subtitle}
                        </p>
                        <h3 className="flavour-content-slider-title">
                          {stage.titleLine1}
                          <br />
                          {stage.titleLine2}
                        </h3>
                      </div>
                      <p className="flavour-stage-description">
                        {stage.description}
                      </p>
                      <div className="flavour-tech-tags">
                        {stage.technologies.map((tech) => (
                          <span key={tech} className="flavour-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flavour-cta-group">
                        <ActionButton
                          href={stage.demoUrl}
                          label={SHOWCASE_RENOVERA.demoCtaLabel}
                          variant="dark"
                        />
                        <a
                          href={stage.githubUrl}
                          className="flavour-github-link"
                        >
                          <span>{SHOWCASE_RENOVERA.ctaLabel}</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
