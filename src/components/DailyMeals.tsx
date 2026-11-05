import React from "react";
import { ActionButton } from "./icons";
import { INTERACTIVE_SHOWCASE } from "@/config/site";

const PACK_IMAGES = [
  "/assets/images/elements/elem-solar-module.webp",
  "/assets/images/elements/elem-grid-node.webp",
  "/assets/images/elements/elem-pcb-node.webp",
  "/assets/images/elements/elem-bess-unit.webp",
  "/assets/images/elements/elem-inverter.webp",
  "/assets/images/elements/elem-ev-charger.webp",
  "/assets/images/elements/elem-transformer.webp",
  "/assets/images/elements/elem-workstation.webp",
  "/assets/images/elements/elem-server-rack.webp",
];

const STAGE_COMPOSITES = [
  "/assets/renovera/produtos/reno-01-adviser.webp", // 01 Renô Adviser
  "/assets/renovera/produtos/reno-02-projetos.webp", // 02 Renô Projetos
  "/assets/renovera/produtos/reno-03-performance.webp", // 03 Renô Performance
  "/assets/renovera/produtos/reno-04-invest.webp", // 04 Renô Invest
  "/assets/renovera/produtos/reno-05-protect.webp", // 05 Renô Protect
  "/assets/renovera/produtos/reno-06-supply.webp", // 06 Renô Supply
  "/assets/renovera/produtos/reno-07-engenharia.webp", // 07 Renô Engenharia
  "/assets/renovera/produtos/reno-08-partner.webp", // 08 Renô Partner
  "/assets/renovera/produtos/reno-09-energy-hub.webp", // 09 Renô Energy Hub
];

export function DailyMeals() {
  const { stages, sectionTitle, sectionSubtitle, demoCtaLabel, ctaLabel } = INTERACTIVE_SHOWCASE;

  return (
    <section data-inertia="" className="flavour" id="arquitetura">
      <span id="solucoes-reno" style={{ position: "absolute", top: 0 }} aria-hidden="true" />
      <div className="flavour-container">
        <div className="flavour-header">
          <div className="flavour-heading-wrap">
            <h2 className="flavour-title">
              {sectionTitle}
            </h2>
            <h3 data-highlight-text="" className="flavour-subline">
              {sectionSubtitle}
            </h3>
          </div>
        </div>

        <div className="flavour-layer-pills" role="tablist" aria-label="Soluções Oficiais Renovera">
          {stages.map((stage, idx) => (
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
                    fontSize={28}
                  >
                    <text x={0} y={38}>
                      9 soluções oficiais
                    </text>
                    <text x={18} y={68}>
                      &amp; ecossistema integrado
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
                    fontSize={28}
                  >
                    <text x={0} y={38}>
                      9 soluções oficiais
                    </text>
                    <text x={18} y={68}>
                      &amp; ecossistema integrado
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
                  src={STAGE_COMPOSITES[0]}
                  alt="Soluções Técnicas e Produtos Renovera"
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
                          alt="Equipamentos e Infraestrutura Renovera"
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
              aria-label="Solução anterior"
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
              aria-label="Próxima solução"
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
                {stages.map((stage) => (
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
                          href={`https://wa.me/5519996514827?text=${encodeURIComponent(
                            `Olá! Gostaria de falar com um especialista sobre a solução ${stage.titleLine1} (${stage.titleLine2}).`
                          )}`}
                          external
                          label={demoCtaLabel}
                          variant="dark"
                        />
                        <a
                          href={stage.detailUrl || stage.githubUrl}
                          className="flavour-github-link"
                        >
                          <span>{ctaLabel}</span>
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
