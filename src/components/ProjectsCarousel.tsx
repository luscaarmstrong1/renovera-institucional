import React from "react";

const PROJECTS_RENOVERA = [
  {
    id: "proj-01",
    title: "Conexão Elétrica e Integração de Sistemas",
    category: "Engenharia de Conexão",
    projectType: "Média Tensão & Subestações",
    description: "Rede de média tensão, dimensionamento de aterramento, coordenação de proteção, diagramas unifilares executivos e automação.",
    image: "/assets/images/power-systems.webp",
    siteUrl: "/projetos/reavaliacao-inversao-fluxo-mmgd",
    siteDomain: "Estudo & Projeto Executivo",
    technologies: ["Média Tensão", "PRODIST", "SPDA NBR 5419", "Seletividade"],
  },
  {
    id: "proj-02",
    title: "Engenharia Executiva Fotovoltaica",
    category: "Energia Solar",
    projectType: "Geração Distribuída MMGD",
    description: "Arranjos fotovoltaicos, distribuição balanceada de strings, inversores trifásicos, entrada de energia abrigada e modelagem de perdas.",
    image: "/assets/images/solar-engineering.webp",
    siteUrl: "/projetos/usina-solar-comercial-300kwp",
    siteDomain: "Usinas de Solo & Cobertura",
    technologies: ["NBR 16690", "Usinas Fotovoltaicas", "Modelagem CA/CC", "Inversores String"],
  },
  {
    id: "proj-03",
    title: "Hub de Recarga para Veículos Elétricos",
    category: "Eletropostos",
    projectType: "Mobilidade Elétrica",
    description: "Infraestrutura de recarga rápida DC (60 kW a 120 kW) e semirrápida AC (22 kW) com balanceamento dinâmico de carga e proteção DR tipo B.",
    image: "/assets/images/elements/elem-ev-charger.webp",
    siteUrl: "/solucoes/eletropostos",
    siteDomain: "Eletropostos & Frotas VE",
    technologies: ["NBR 17019", "Carregadores DC/AC", "Balanceamento Dinâmico", "OCPP"],
  },
  {
    id: "proj-04",
    title: "Automação, Telemetria & Injeção Zero",
    category: "Controle & Automação",
    projectType: "Telemetria Industrial",
    description: "Controle dinâmico de exportação (Zero Export) para usinas solares, leitura rápida de fronteira via Modbus TCP e supervisório integrado.",
    image: "/assets/images/automation-editorial.webp",
    siteUrl: "/solucoes/automacao",
    siteDomain: "Telemetria & Redes Industriais",
    technologies: ["Modbus TCP", "Zero Export", "Supervisórios", "Telemetria em Tempo Real"],
  },
];

function GlobeLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19" />
      <path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19" />
    </svg>
  );
}

export function ProjectsCarousel() {
  return (
    <div id="projetos" className="testimonial-section">
      <div data-testimonial-parallax="" className="bg-img-wrapper">
        <img
          className="bg-img projects-bg-main"
          src="/assets/images/projects-bg-webdev.webp"
          alt="Ambiente técnico de engenharia elétrica, projetos solares e infraestrutura de energia"
          data-testimonial-parallax-item=""
        />
        <div className="projects-bg-gradient" aria-hidden="true" />
      </div>
      <div className="testimonial-container">
        <div className="grid-layout">
          <div
            id="w-node-_188a35c2-2913-dd29-6c54-5bf8cbbe64f3-0ac01850"
            className="big-title-wrapper"
          >
            <div className="testimonial-signature">
              <svg
                viewBox="0 0 360 32"
                width={360}
                height={32}
                className="testimonial-signature-img"
                aria-hidden="true"
                overflow="visible"
              >
                <g
                  transform="rotate(0 180 16)"
                  fill="currentColor"
                  style={{ fontFamily: "var(--font-mao)" }}
                  fontSize={26.5}
                >
                  <text x={0} y={22}>
                    engenharia &amp; projetos executivos
                  </text>
                </g>
              </svg>
              <svg
                viewBox="0 0 360 32"
                width={360}
                height={32}
                className="testimonial-signature-img is-wiggle"
                aria-hidden="true"
                overflow="visible"
              >
                <g
                  transform="rotate(0 180 16)"
                  fill="currentColor"
                  style={{ fontFamily: "var(--font-mao)" }}
                  fontSize={26.5}
                >
                  <text x={0} y={22}>
                    engenharia &amp; projetos executivos
                  </text>
                </g>
              </svg>
            </div>
            <h2 className="testimonial-big-heading">
              Projetos, usinas
              <br />
              &amp; infraestrutura elétrica.
            </h2>
          </div>
          <div
            id="w-node-d56024cf-9b70-fc24-7ba0-e2b3ea8d1769-0ac01850"
            className="testimonial-slider"
          >
            <div
              data-testimonial-inview=""
              className="testimonial-slider-wrapper"
            >
              <div
                data-slider-interface=""
                className="testimonial-slider-interface"
              >
                <div
                  data-slider-arrows=""
                  className="testimonial-slider-button-wrapper"
                >
                  <button
                    type="button"
                    data-slider-left-button=""
                    className="testimonial-slider-button is-left"
                    aria-label="Projeto anterior"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="testimonial-slider-button-arrow"
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
                    data-slider-right-button=""
                    className="testimonial-slider-button is-right"
                    aria-label="Próximo projeto"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="testimonial-slider-button-arrow"
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
              </div>
              <div
                data-slider=""
                className="testimonial-slider-inner"
                data-lenis-prevent-wheel=""
              >
                {PROJECTS_RENOVERA.map((project) => (
                  <div
                    key={project.id}
                    className="testimonial-slider-item-wrap"
                  >
                    <a
                      href={project.siteUrl}
                      data-slider-item-inner=""
                      className="testimonial-slider-item"
                    >
                      <div>
                        <div className="project-card-badges">
                          <span className="project-badge-cat">
                            {project.category}
                          </span>
                          <span className="project-badge-type">
                            {project.projectType}
                          </span>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-card-thumb"
                          loading="lazy"
                        />
                        <div
                          className="testimonial-item-inner-text"
                          style={{ paddingBottom: "1.25em" }}
                        >
                          <h3
                            className="testimonial-item-heading"
                            style={{ fontSize: "2.1em" }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="testimonial-item-text"
                            style={{ fontSize: "1.35em" }}
                          >
                            {project.description}
                          </p>
                          <div className="project-stack-tags">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="project-stack-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testimonial-line" />
                        <div className="testimonial-item-bottom">
                          <div
                            className="testimonial-client-name"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.4em",
                            }}
                          >
                            <GlobeLinkIcon className="testimonial-star testimonial-insta" />
                            <span>{project.siteDomain}</span>
                          </div>
                          <div className="testimonial-verified-wrap">
                            <div
                              className="testimonial-verified-text"
                              style={{ fontWeight: 600 }}
                            >
                              Ver Detalhes →
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
