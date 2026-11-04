"use client";

import React, { useState } from "react";
import { SITE, SOCIAL_LINKS } from "@/config/site";
import { LinkedInIcon } from "./icons";

const PILLARS = [
  {
    title: "Engenharia & Conexão",
    status: "Rigor Normativo",
    institution: "PRODIST • ANEEL • ABNT NBR",
  },
  {
    title: "Projetos em MT e BT",
    status: "Capacidade Técnica",
    institution: "Subestações, Cabines & Entradas de Energia",
  },
  {
    title: "Mobilidade & Automação",
    status: "Transição Energética",
    institution: "Recarga VE 22-120 kW & Telemetria",
  },
];

export function About() {
  const [activeCard, setActiveCard] = useState<number>(2);

  return (
    <div data-inertia="" className="insider-section" id="sobre">
      <div className="insider-container">
        <div className="grid-layout">
          <h2
            id="w-node-_3e09cbcc-bb63-d8d5-fc92-5249d862c0ff-0ac01850"
            className="insider-heading"
          >
            Engenharia aplicada.
            <br />
            Soluções que
            <br />
            <span data-highlight-text="" className="light-green-span">
              conectam resultados.
            </span>
          </h2>
          <div
            id="w-node-e1fee9ee-097a-d41e-6a8c-8fb81a411381-0ac01850"
            className="insider-wrapper"
          >
            <div
              id="w-node-_93a09ee3-b180-b755-d23e-d7d2b5f676da-0ac01850"
              className="testimonial-wrapper cards-deck"
            >
              <div
                data-inertia-item=""
                role="button"
                tabIndex={0}
                aria-pressed={activeCard === 1}
                onClick={() => setActiveCard(1)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCard(1);
                  }
                }}
                className={`testimonial-inner-wrap is-first deck-card${
                  activeCard === 1 ? " is-touch-active" : ""
                }`}
              >
                <div data-inertia-item-child="" className="testimonial-inner _1">
                  <img
                    className="testimonial-img"
                    src="/assets/images/automation-editorial.webp"
                    alt="Automação, Controle Dinâmico e Telemetria em Tempo Real"
                    loading="lazy"
                  />
                  <div className="testimonial-text-inner">
                    <div className="testimonial-text">Automação &amp; Controle</div>
                  </div>
                </div>
              </div>
              <div
                data-inertia-item=""
                role="button"
                tabIndex={0}
                aria-pressed={activeCard === 2}
                onClick={() => setActiveCard(2)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCard(2);
                  }
                }}
                className={`testimonial-inner-wrap is-second deck-card${
                  activeCard === 2 ? " is-touch-active" : ""
                }`}
              >
                <div data-inertia-item-child="" className="testimonial-inner _2">
                  <img
                    className="testimonial-img"
                    src="/assets/images/energy-editorial.webp"
                    alt="Sistemas de Energia, Usinas Solares e Subestações de Média Tensão"
                    loading="lazy"
                  />
                  <div className="testimonial-text-inner">
                    <div className="testimonial-text">Sistemas &amp; Usinas Solares</div>
                  </div>
                </div>
              </div>
              <div
                data-inertia-item=""
                role="button"
                tabIndex={0}
                aria-pressed={activeCard === 3}
                onClick={() => setActiveCard(3)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCard(3);
                  }
                }}
                className={`testimonial-inner-wrap is-third deck-card${
                  activeCard === 3 ? " is-touch-active" : ""
                }`}
              >
                <div data-inertia-item-child="" className="testimonial-inner _3">
                  <img
                    className="testimonial-img"
                    src="/assets/images/power-systems.webp"
                    alt="Consultoria Regulatória, Pareceres de Acesso e Inversão de Fluxo"
                    loading="lazy"
                  />
                  <div className="testimonial-text-inner">
                    <div className="testimonial-text">Consultoria Regulatória</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_1ac78251-f73b-1f50-5984-75b855ef30eb-0ac01850"
              className="insider-text-inner"
            >
              <h3 className="insider-subheading">
                A Renovera Energias Renováveis conecta engenharia elétrica de precisão, inteligência regulatória e foco operacional.
              </h3>
              <p className="paragraph">
                No cenário dinâmico do setor elétrico brasileiro — pautado pelo Marco Legal da Micro e Minigeração Distribuída (Lei nº 14.300/2022) e pelas resoluções normativas da ANEEL —, decisões energéticas exigem uma visão técnica aprofundada e integrada.
              </p>
              <p className="paragraph">
                Nossa atuação vai além de um dimensionamento isolado: envolve auditoria detalhada de orçamentos de conexão, modelagem de curva de carga contra inversão de fluxo, projetos de média tensão e comissionamento com rigor normativo.
              </p>
              <div className="insider-cta">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-grande"
                >
                  <LinkedInIcon className="insta-grande-icone" />
                  <span>LinkedIn Oficial</span>
                </a>
                <a
                  href="#contato"
                  className="insta-grande"
                >
                  <span className="font-bold text-sm">Fale com a Renovera</span>
                </a>
              </div>
            </div>

            <div className="about-edu-grid" aria-label="Pilares corporativos">
              {PILLARS.map((p) => (
                <div key={p.title} className="about-edu-card">
                  <span className="about-edu-status">{p.status}</span>
                  <h4 className="about-edu-degree">{p.title}</h4>
                  <span className="about-edu-inst">{p.institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
