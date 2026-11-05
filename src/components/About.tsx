"use client";

import React, { useState } from "react";
import { SITE, SOCIAL_LINKS } from "@/config/site";
import { LinkedInIcon } from "./icons";

const PILLARS_RENOVERA = [
  {
    title: "Engenharia de Precisão",
    status: "Rigor Técnico MT/BT",
    institution: "Subestações, usinas solares e projetos executivos de potência",
  },
  {
    title: "Segurança Jurídico-Regulatória",
    status: "Expertise Renô Adviser™",
    institution: "Auditoria de inversão de fluxo e conformidade ANEEL/PRODIST",
  },
  {
    title: "Tecnologia & Gestão 24/7",
    status: "Renô Performance",
    institution: "Telemetria ativa, detecção preditiva de desvios e diagnóstico",
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
            Uma empresa.
            <br />
            Um ecossistema
            <br />
            <span data-highlight-text="" className="light-green-span">
              de soluções.
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
                    src="/assets/images/power-systems.webp"
                    alt="Engenharia Elétrica e Subestações de Potência Renovera"
                    loading="lazy"
                  />
                  <div className="testimonial-text-inner">
                    <div className="testimonial-text">Engenharia &amp; Infraestrutura</div>
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
                    src="/assets/images/solar-engineering.webp"
                    alt="Usinas Fotovoltaicas e Geração Distribuída Renovera"
                    loading="lazy"
                  />
                  <div className="testimonial-text-inner">
                    <div className="testimonial-text">Energia Solar Fotovoltaica</div>
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
                    src="/assets/images/data-intelligence.webp"
                    alt="Consultoria Regulatória, Renô Adviser e Telemetria Renovera"
                    loading="lazy"
                  />
                  <div className="testimonial-text-inner">
                    <div className="testimonial-text">Regulação &amp; Tecnologia</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_1ac78251-f73b-1f50-5984-75b855ef30eb-0ac01850"
              className="insider-text-inner"
            >
              <h3 className="insider-subheading">
                Engenharia, conhecimento regulatório e inovação para transformar o setor energético.
              </h3>
              <p className="paragraph">
                Fundada em 2020, a Renovera desenvolve soluções para o mercado de energia, integrando engenharia elétrica de precisão, análise regulatória profunda, gestão de ativos e tecnologia.
              </p>
              <p className="paragraph">
                Nossa atuação contempla diferentes etapas do ciclo de um empreendimento energético: desde a viabilidade técnica e estruturação de projetos até a reversão de indeferimentos de conexão (Renô Adviser™), suprimento de equipamentos, montagem com parceiros homologados e monitoramento contínuo 24/7.
              </p>
              <div className="insider-cta">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-grande"
                >
                  <LinkedInIcon className="insta-grande-icone" />
                  <span>{SITE.linkedinHandle}</span>
                </a>
                <a
                  href="#contato"
                  className="insta-grande"
                >
                  <span className="font-bold text-sm">Falar com a Renovera</span>
                </a>
              </div>
            </div>

            <div className="about-edu-grid" aria-label="Pilares corporativos Renovera">
              {PILLARS_RENOVERA.map((p) => (
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
