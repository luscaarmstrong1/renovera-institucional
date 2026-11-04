import React from "react";

const METHODOLOGY_RENOVERA = [
  {
    phase: "01. Diagnóstico & Viabilidade",
    subtitle: "Compreensão da Infraestrutura",
    period: "Fase Preliminar",
    highlights: [
      "Levantamento da carga instalada, demanda contratada e histórico de consumo",
      "Auditoria do parecer de acesso preliminar e verificação de critérios de fluxo reverso",
      "Diagnóstico de espaço físico para usina solar, subestação ou eletroposto",
    ],
  },
  {
    phase: "02. Análise Técnica & Regulatória",
    subtitle: "Rigor Normativo & Cálculos",
    period: "Fase Analítica",
    highlights: [
      "Modelagem e cálculo de fluxo de potência segundo o Módulo 3 do PRODIST",
      "Enquadramento na Lei nº 14.300/2022 e Resolução Normativa ANEEL nº 1.000/2021",
      "Avaliação de alternativas técnicas de conexão para mitigar encargos de rede",
    ],
  },
  {
    phase: "03. Engenharia Executiva",
    subtitle: "Projetos, Memoriais & ART",
    period: "Fase de Desenvolvimento",
    highlights: [
      "Diagramas unifilares, trifilares e funcionais em baixa e média tensão",
      "Dimensionamento de condutores, cabines abrigadas, malha de terra e SPDA",
      "Emissão de Anotação de Responsabilidade Técnica (ART) por engenheiro habilitado",
    ],
  },
  {
    phase: "04. Homologação & Comissionamento",
    subtitle: "Conexão Conclusiva & Validação",
    period: "Fase Conclusiva",
    highlights: [
      "Protocolo e interlocução técnica direta perante a concessionária de energia",
      "Parametrização de relés digitais e comissionamento de inversores e telemetria",
      "Entrega de documentação as-built e relatórios conclusivos para o cliente",
    ],
  },
];

const NORMATIVE_PILLARS = [
  {
    code: "REG.01",
    category: "Regulação Setorial",
    items: [
      "REN ANEEL nº 1.000/2021",
      "Lei nº 14.300/2022 (MMGD)",
      "PRODIST Módulo 3",
      "Contestação de Inversão",
    ],
  },
  {
    code: "ENG.02",
    category: "Engenharia de Potência",
    items: [
      "ABNT NBR 5410 (Baixa Tensão)",
      "ABNT NBR 14039 (Média Tensão)",
      "ABNT NBR 5419 (SPDA)",
      "Subestações Abrigadas",
    ],
  },
  {
    code: "SOL.03",
    category: "Energia Solar Fotovoltaica",
    items: [
      "ABNT NBR 16690 (Sistemas FV)",
      "Usinas de Solo e Telhado",
      "Inversores String & Centrais",
      "Modelagem de Perdas CA/CC",
    ],
  },
  {
    code: "MOB.04",
    category: "Mobilidade & Automação",
    items: [
      "ABNT NBR 17019 (Recarga VE)",
      "Carregadores DC 60-120 kW",
      "Protocolo OCPP 1.6/2.0",
      "Controle Zero Export Modbus",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experiencia">
      <div className="container">
        <div className="experience-header">
          <span className="experience-eyebrow">método estruturado e rigor técnico</span>
          <h2 className="experience-heading">
            Do diagnóstico à homologação.
            <br />
            <span data-highlight-text="">Uma abordagem completa.</span>
          </h2>
        </div>

        <div className="experience-grid">
          {METHODOLOGY_RENOVERA.map((item) => (
            <article key={item.phase} className="exp-card">
              <div className="exp-card-top">
                <div className="exp-info">
                  <h3 className="exp-company">{item.phase}</h3>
                  <div className="exp-role">{item.subtitle}</div>
                </div>
                <span className="exp-period">{item.period}</span>
              </div>
              <ul className="exp-highlights">
                {item.highlights.map((hl) => (
                  <li key={hl}>{hl}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills-block">
          <div className="skills-block-header">
            <div>
              <span className="skills-eyebrow">
                competências e referências normativas
              </span>
              <h3 className="skills-block-title">
                Rigor Normativo &amp; Pilares Técnicos
              </h3>
            </div>
            <div className="skills-summary-pills" aria-label="Frentes de especialidade">
              <span className="summary-pill">Engenharia Elétrica MT/BT</span>
              <span className="summary-pill">Consultoria Regulatória MMGD</span>
              <span className="summary-pill">Energia Solar Fotovoltaica</span>
              <span className="summary-pill">Infraestrutura Eletropostos</span>
              <span className="summary-pill">Telemetria &amp; Automação</span>
            </div>
          </div>

          <div className="skills-categories">
            {NORMATIVE_PILLARS.map((group) => (
              <div key={group.category} className="skill-cat-card">
                <div className="skill-cat-top">
                  <span className="skill-cat-code">{group.code}</span>
                </div>
                <h4 className="skill-cat-title">{group.category}</h4>
                <div className="skill-cat-line" />
                <ul className="skill-tags">
                  {group.items.map((skill) => (
                    <li key={skill} className="skill-tag">
                      <span className="skill-tag-dot" />
                      <span className="skill-tag-label">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
