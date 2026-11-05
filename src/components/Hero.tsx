import React from "react";
import Image from "next/image";
import { SITE, SOCIAL_LINKS } from "@/config/site";
import { ActionButton } from "./icons";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section data-load-stage="" data-inertia="" className="stage">
      <div className="stage-overlay" />
      <div className="stage-container">
        <div className="stage-inner">
          <div className="stage-content">
            <div className="stage-logo">
              <div data-load-stage-logo="" className="stage-logo-svg flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#033118] border border-[#FED15D] p-2 flex items-center justify-center shadow-lg">
                    <Image
                      src="/assets/brand/favicon.svg"
                      alt="Renovera Energias Renováveis"
                      width={44}
                      height={44}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                      RENOVERA
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#FED15D] font-semibold">
                      Energias Renováveis
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-load-stage-cta=""
              className="stage-cta"
              style={{ display: "flex", gap: "1em", flexWrap: "wrap", justifyContent: "center" }}
            >
              <ActionButton
                href="#arquitetura"
                label="Explorar soluções"
                variant="dark"
              />
              <ActionButton
                href="#contato"
                label="Falar com a Renovera"
                variant="white"
              />
            </div>
            <div className="stage-wrap">
              <div className="stage-left">
                <div className="stage-deco">
                  <div
                    data-load-stage-deco-text=""
                    style={{ "--animation-delay": ".05s" } as React.CSSProperties}
                    className="stage-deco-text-wrap"
                  >
                    <svg
                      viewBox="0 0 320 112"
                      width={320}
                      height={112}
                      className="stage-deco-text"
                      aria-hidden="true"
                      overflow="visible"
                    >
                      <g
                        transform="rotate(-6 160 56)"
                        fill="currentColor"
                        style={{ fontFamily: "var(--font-mao)" }}
                        fontSize={34}
                      >
                        <text x={0} y={45}>
                          Engenharia &amp; Regulação
                        </text>
                        <text x={18} y={90}>
                          Visão Integrada
                        </text>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 320 112"
                      width={320}
                      height={112}
                      className="stage-deco-text is-wiggle"
                      aria-hidden="true"
                      overflow="visible"
                    >
                      <g
                        transform="rotate(-6 160 56)"
                        fill="currentColor"
                        style={{ fontFamily: "var(--font-mao)" }}
                        fontSize={34}
                      >
                        <text x={0} y={45}>
                          Engenharia &amp; Regulação
                        </text>
                        <text x={18} y={90}>
                          Visão Integrada
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div
                    data-load-stage-deco-arrow=""
                    style={{ "--animation-delay": ".15s" } as React.CSSProperties}
                    className="stage-deco-arrow-wrap"
                  >
                    <svg
                      viewBox="0 0 150 150"
                      width={150}
                      height={150}
                      className="stage-deco-arrow"
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
                      className="stage-deco-arrow is-wiggle"
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
                <div className="stage-photo-wrapper">
                  <div data-load-stage-img="" className="stage-photo">
                    <img
                      src="/assets/renovera/hero/hero-solar-plant.webp"
                      alt="Usinas Fotovoltaicas e Infraestrutura de Energia Renovera"
                      width={572}
                      height={760}
                      className="stage-img"
                      style={{ objectFit: "cover", borderRadius: "12px" }}
                    />
                  </div>
                </div>
                <div className="stage-facts">
                  <div data-inertia-item="" className="stage-fact-outer">
                    <div
                      data-load-stage-fact=""
                      data-inertia-item-child=""
                      className="stage-fact is-first"
                    >
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">+150</div>
                      </div>
                      <div className="stage-fact-text">usinas entregues</div>
                    </div>
                  </div>
                  <div data-inertia-item="" className="stage-fact-outer">
                    <div
                      data-load-stage-fact=""
                      data-inertia-item-child=""
                      className="stage-fact is-second"
                    >
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">Adviser™</div>
                      </div>
                      <div className="stage-fact-text">reversão de fluxo</div>
                    </div>
                  </div>
                  <div data-inertia-item="" className="stage-fact-outer">
                    <div
                      data-load-stage-fact=""
                      data-inertia-item-child=""
                      className="stage-fact is-third"
                    >
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">MT &amp; BT</div>
                      </div>
                      <div className="stage-fact-text">subestações e rede</div>
                    </div>
                  </div>
                  <div data-inertia-item="" className="stage-fact-outer">
                    <div
                      data-load-stage-fact=""
                      data-inertia-item-child=""
                      className="stage-fact is-fourth"
                    >
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">2020</div>
                      </div>
                      <div className="stage-fact-text">tradição e solidez</div>
                    </div>
                  </div>
                </div>
                <div className="stage-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 731 818"
                    fill="none"
                    data-load-stage-svg=""
                    className="stage-bg-svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z"
                      stroke="currentColor"
                      strokeWidth="28"
                    />
                  </svg>
                </div>
              </div>
              <div className="stage-right">
                <div className="stage-text-wrap">
                  <div
                    style={{
                      fontSize: "1.15em",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-accent)",
                      fontWeight: 600,
                    }}
                  >
                    RENOVERA ENERGIAS RENOVÁVEIS • SOLUÇÕES INTEGRADAS
                  </div>
                  <h1 data-load-stage-title="" className="hero-heading">
                    <span className="white-span">Energia que</span>
                    <br />
                    transforma.
                    <br />
                    Engenharia que conecta.
                  </h1>
                  <div className="stage-paragraph-wrap">
                    <p
                      data-load-stage-text=""
                      className="paragraph is-stage-paragraph"
                    >
                      Soluções integradas para o futuro da energia: engenharia elétrica, geração fotovoltaica, consultoria regulatória, gestão de ativos e infraestrutura energética em uma atuação integrada.
                    </p>
                    <div
                      data-load-stage-underline=""
                      style={{ "--animation-delay": ".2s" } as React.CSSProperties}
                      className="stage-subline-wrap"
                    >
                      <svg
                        viewBox="0 0 152 42"
                        width={152}
                        height={42}
                        className="subline-img"
                        aria-hidden="true"
                        fill="none"
                      >
                        <path
                          d="M4 30C30 22 62 20 92 22C112 23 128 26 148 18M30 36C56 32 84 32 112 34"
                          stroke="currentColor"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        viewBox="0 0 152 42"
                        width={152}
                        height={42}
                        className="subline-img is-wiggle"
                        aria-hidden="true"
                        fill="none"
                      >
                        <path
                          d="M4 30C30 22 62 20 92 22C112 23 128 26 148 18M30 36C56 32 84 32 112 34"
                          stroke="currentColor"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}
