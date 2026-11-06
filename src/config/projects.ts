export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: "Consultoria Regulatória" | "Energia Solar" | "Engenharia Elétrica" | "Eletropostos" | "Automação";
  tag: string;
  evidenceClassification: "Arquitetura Técnica de Referência" | "Metodologia Comprovada Renovera";
  relatedProductSlug: string;
  relatedProductName: string;
  image: string;
  context: string;
  challenge: string;
  solution: string;
  scope: string[];
  deliverables: string[];
  normativeFramework: string[];
  metrics: { label: string; value: string }[];
  status: "Metodologia Homologada" | "Arquitetura Executiva" | "Padrão Normativo";
  imageGradient: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "rnv-ref-01",
    slug: "reavaliacao-inversao-fluxo-mmgd",
    name: "Contestação Técnica e Reanálise de Inversão de Fluxo (MMGD)",
    category: "Consultoria Regulatória",
    tag: "Renô Adviser™ • Auditoria de Conexão & PRODIST",
    evidenceClassification: "Metodologia Comprovada Renovera",
    relatedProductSlug: "reno-adviser",
    relatedProductName: "Renô Adviser™",
    image: "/assets/renovera/projetos/proj-auditoria-rede.webp",
    context:
      "Arquitetura de referência aplicada pela Renovera (frente Renô Adviser™, com mais de 450 usinas assessoradas e 30 MWp em 15 estados) para empreendimentos de micro e minigeração distribuída que recebem pareceres de acesso com alegação de inversão de fluxo de potência no transformador ou alimentador da distribuidora.",
    challenge:
      "Auditar tecnicamente os parâmetros de rede e a curva de carga utilizados pela concessionária, demonstrando a viabilidade de conexão dentro das alternativas obrigatórias previstas na Resolução Normativa ANEEL nº 1.000/2021 e no Módulo 3 do PRODIST, evitando exigências desproporcionais de obras de reforço.",
    solution:
      "Desenvolvimento de parecer técnico de auditoria de fluxo, modelagem horária de geração versus carga mínima do barramento e interposição de recurso administrativo fundamentado com proposição de alternativas regulatórias (reconfiguração de topologia, limitação de injeção em horário específico ou alocação em ponto adjacente).",
    scope: [
      "Auditoria integral da memória de cálculo e do parecer de acesso emitido pela distribuidora",
      "Análise das alternativas obrigatórias de conexão (Art. 73 da REN ANEEL nº 1.000/2021)",
      "Modelagem da curva de carga diária e sazonal do alimentador ou subestação",
      "Elaboração de peça técnica e jurídica de contestação administrativa junto à concessionária e Ouvidoria/ANEEL"
    ],
    deliverables: [
      "Parecer Técnico de Auditoria de Inversão de Fluxo assinado por engenheiro eletricista",
      "Peça Administrativa e Jurídica Fundamentada no Marco Legal (Lei nº 14.300/2022)",
      "Estudo de Alternativas de Escoamento e Configuração de Acesso",
      "Acompanhamento técnico até a emissão conclusiva do Parecer de Acesso"
    ],
    normativeFramework: [
      "Resolução Normativa ANEEL nº 1.000/2021 ( e atualizações da REN 1.059/2023)",
      "Módulo 3 dos Procedimentos de Distribuição (PRODIST — ANEEL)",
      "Lei Federal nº 14.300/2022 (Marco Legal da Micro e Minigeração Distribuída)"
    ],
    metrics: [
      { label: "Histórico Renô Adviser™", value: "450+ Usinas / 30 MWp" },
      { label: "Abrangência Nacional", value: "15 Estados Atendidos" },
      { label: "Base Regulatória", value: "REN 1.000 & PRODIST" }
    ],
    status: "Metodologia Homologada",
    imageGradient: "from-emerald-950 to-teal-900"
  },
  {
    id: "rnv-ref-02",
    slug: "arquitetura-usina-fotovoltaica-mt-bt",
    name: "Arquitetura Executiva de Usina Fotovoltaica Comercial e Industrial",
    category: "Energia Solar",
    tag: "Renô Projetos • Engenharia Turnkey em Média e Baixa Tensão",
    evidenceClassification: "Arquitetura Técnica de Referência",
    relatedProductSlug: "reno-projetos",
    relatedProductName: "Renô Projetos",
    image: "/assets/renovera/projetos-v5/proj-01-fotovoltaica.webp",
    context:
      "Especificação técnica de referência que consolida o padrão construtivo do Renô Projetos (mais de 100 usinas instaladas diretamente em 12 estados) para sistemas fotovoltaicos de solo e cobertura comercial/industrial em baixa e média tensão.",
    challenge:
      "Dimensionar o gerador fotovoltaico maximizando o Performance Ratio (PR), equilibrando tensões de string, coordenação de proteção CC/CA, seletividade com a cabine primária existente e aprovação preventiva na concessionária.",
    solution:
      "Engenharia executiva ponta a ponta integrando simulação PVsyst de irradiação e sombreamento, seleção de módulos e inversores Tier 1 pré-validados pelo Renô Supply, projeto executivo com ART, comissionamento normativo e integração nativa à telemetria Renô Performance.",
    scope: [
      "Modelagem energética horária, estudo de sombreamento 3D e cálculo de Performance Ratio",
      "Projeto executivo elétrico CC e CA com arranjos de strings, eletrodutos e malha de aterramento",
      "Coordenação de proteção, DPS classe I/II e integração ao quadro geral (QGBT) ou subestação MT",
      "Homologação preventiva junto à distribuidora e comissionamento segundo ABNT NBR 16274"
    ],
    deliverables: [
      "Projeto Executivo Completo (Plantas, Diagramas Unifilar e Trifilar) com ART",
      "Memorial Descritivo de Engenharia e Lista Consolidada de Suprimentos",
      "Relatório de Ensaios de Comissionamento (Isolamento, Curva V-I e Termografia)",
      "Prontuário As-Built e Homologação de Operação Comercial"
    ],
    normativeFramework: [
      "ABNT NBR 16690 — Instalações elétricas de arranjos fotovoltaicos",
      "ABNT NBR 5410 — Instalações elétricas de baixa tensão",
      "ABNT NBR 16274 — Sistemas fotovoltaicos conectados à rede (Comissionamento)"
    ],
    metrics: [
      { label: "Histórico Renô Projetos", value: "100+ Usinas Instaladas" },
      { label: "Padrão de Engenharia", value: "Turnkey MT & BT" },
      { label: "Conformidade Técnica", value: "NBR 16690 & NBR 5410" }
    ],
    status: "Arquitetura Executiva",
    imageGradient: "from-green-950 to-emerald-900"
  },
  {
    id: "rnv-ref-03",
    slug: "arquitetura-subestacao-entrada-energia-mt",
    name: "Infraestrutura de Subestação Abrigada e Entrada em Média Tensão",
    category: "Engenharia Elétrica",
    tag: "Renô Energy Hub • Cabines Primárias 13,8 kV a 34,5 kV",
    evidenceClassification: "Arquitetura Técnica de Referência",
    relatedProductSlug: "reno-energy-hub",
    relatedProductName: "Renô Energy Hub",
    image: "/assets/renovera/projetos-v5/proj-02-subestacoes.webp",
    context:
      "Arquitetura de engenharia de potência integrante do Renô Energy Hub para indústrias, condomínios logísticos, agronegócio e usinas de minigeração que demandam aumento de carga, modernização de padrão de entrada ou nova cabine primária em média tensão (13,8 kV a 34,5 kV).",
    challenge:
      "Assegurar confiabilidade operacional em regime contínuo, seletividade rigorosa das funções de proteção ANSI (50/51, 50N/51N, 67, 27, 59, 81, 32) e aprovação formal perante as diretrizes técnicas específicas de cada distribuidora.",
    solution:
      "Desenvolvimento de projeto executivo de subestação abrigada ou simplificada, estudo de curto-circuito e seletividade com parametrização de relé digital multifunção, dimensionamento de transformadores a seco ou óleo vegetal, QGBT e sistema de proteção contra descargas atmosféricas (SPDA).",
    scope: [
      "Levantamento de demanda, fator de potência e estudo de viabilidade de aumento de carga",
      "Projeto executivo civil e eletromecânico de cabine de medição, proteção e transformação",
      "Estudo de curto-circuito, coordenação e seletividade de proteção secundária (funções ANSI)",
      "Dimensionamento de malha de aterramento de subestação e SPDA estrutural"
    ],
    deliverables: [
      "Diagramas Unifilares, Trifilares e Funcionais de Comando e Proteção",
      "Estudo de Coordenação e Seletividade com Coordenogramas Tempo x Corrente",
      "Memorial Técnico Descritivo no Padrão da Concessionária Local",
      "ART de Projeto e Comissionamento de Cabine Primária"
    ],
    normativeFramework: [
      "ABNT NBR 14039 — Instalações elétricas de média tensão de 1,0 kV a 36,2 kV",
      "ABNT NBR 5419 — Proteção contra descargas atmosféricas (SPDA)",
      "Normas Técnicas de Fornecimento em Tensão Primária das Concessionárias (CPFL, Elektro, Enel, Cemig)"
    ],
    metrics: [
      { label: "Classe de Tensão", value: "13,8 kV a 34,5 kV" },
      { label: "Proteção Secundária", value: "Relés Digitais ANSI" },
      { label: "Rigor Normativo", value: "ABNT NBR 14039" }
    ],
    status: "Arquitetura Executiva",
    imageGradient: "from-slate-900 to-green-950"
  },
  {
    id: "rnv-ref-04",
    slug: "arquitetura-hub-recarga-veiculos-eletricos",
    name: "Infraestrutura Elétrica para Hubs de Recarga de Veículos Elétricos (VE)",
    category: "Eletropostos",
    tag: "Renô Energy Hub • Eletromobilidade AC e DC com Balanceamento",
    evidenceClassification: "Arquitetura Técnica de Referência",
    relatedProductSlug: "reno-energy-hub",
    relatedProductName: "Renô Energy Hub",
    image: "/assets/renovera/projetos-v5/proj-04-mobilidade-ve.webp",
    context:
      "Arquitetura de referência do Renô Energy Hub e Renô Engenharia voltada a condomínios residenciais/comerciais, frotas corporativas, shoppings e postos de serviços que necessitam implantar estações de recarga AC semirrápida (7,4 kW a 22 kW) e DC rápida (30 kW a 120 kW).",
    challenge:
      "Compatibilizar a elevada demanda simultânea dos carregadores veiculares com a capacidade disponível do transformador e do ramal de entrada existente, garantindo segurança contra choques elétricos, seletividade diferencial e medição individualizada.",
    solution:
      "Engenharia de infraestrutura dedicada com quadros elétricos exclusivos para recarga VE, dispositivos DR Tipo B ou Tipo A-EV coordenados com DPS, arquitetura de balanceamento dinâmico de potência (Smart Charging via protocolo OCPP) e integração com geração solar local.",
    scope: [
      "Auditoria de carga instalada e análise de folga operacional na entrada de energia do empreendimento",
      "Dimensionamento de alimentadores exclusivos, eletrocalhas, quadros de proteção VE e aterramento TN-S",
      "Especificação de carregadores AC/DC homologados com comunicação OCPP 1.6J / 2.0.1 para rateio de custos",
      "Configuração de gerenciamento dinâmico de carga (Dynamic Load Management) para evitar sobrecarga"
    ],
    deliverables: [
      "Estudo de Impacto de Demanda e Viabilidade de Infraestrutura VE",
      "Projeto Executivo Elétrico de Alimentação e Proteção de Eletropostos",
      "Arquitetura de Rede de Comunicação, Telemetria e Rateio Condominial/Frota",
      "Laudo Técnico de Conformidade e ART de Instalação"
    ],
    normativeFramework: [
      "ABNT NBR 17019 — Instalações elétricas de baixa tensão: Requisitos para alimentação de veículos elétricos",
      "ABNT NBR IEC 61851-1 — Sistema de recarga condutiva para veículos elétricos",
      "Diretrizes Técnicas de Segurança de Corpos de Bombeiros Estaduais para Garagens com VE"
    ],
    metrics: [
      { label: "Topologias Atendidas", value: "AC (7–22 kW) & DC (30–120 kW)" },
      { label: "Gestão de Carga", value: "Smart Charging OCPP" },
      { label: "Norma Principal", value: "ABNT NBR 17019" }
    ],
    status: "Padrão Normativo",
    imageGradient: "from-teal-950 to-emerald-950"
  },
  {
    id: "rnv-ref-05",
    slug: "arquitetura-telemetria-controle-zero-export",
    name: "Telemetria 24/7, Automação e Controle Dinâmico de Injeção (Zero Export)",
    category: "Automação",
    tag: "Renô Performance & Renô Engenharia • Supervisão e Controle Ativo",
    evidenceClassification: "Arquitetura Técnica de Referência",
    relatedProductSlug: "reno-performance",
    relatedProductName: "Renô Performance",
    image: "/assets/renovera/projetos-v5/proj-03-automacao.webp",
    context:
      "Arquitetura tecnológica que sustenta a operação do Renô Performance e os sistemas de controle da Renô Engenharia para usinas solares de autoconsumo e plantas com restrições operacionais de exportação na rede distribuidora.",
    challenge:
      "Monitorar em tempo real dezenas de variáveis elétricas e ambientais para prevenir perdas financeiras por falhas silenciosas, além de controlar dinamicamente a potência ativa dos inversores quando há restrição de injeção reversa (Zero Export / Grid Zero).",
    solution:
      "Integração de multimedidores de fronteira em malha fechada via Modbus RTU/TCP com controladores inteligentes de planta e plataforma de telemetria 24/7, permitindo modulação automática da geração solar conforme a carga instantânea e disparo de diagnósticos preditivos.",
    scope: [
      "Integração de dataloggers, inversores e multimedidores de grandezas elétricas ao centro de supervisão",
      "Parametrização de malha de controle dinâmico de potência (Zero Export ou limitação percentual de injeção)",
      "Monitoramento contínuo 24/7 de disponibilidade, falhas de string, sobretensão de rede e perda por sujidade",
      "Emissão de relatórios gerenciais de produtividade, Performance Ratio (PR) e acionamento de manutenção"
    ],
    deliverables: [
      "Painel de Telemetria e Supervisão Operacional Renô Performance",
      "Topologia de Rede Industrial e Parametrização de Controladores Modbus",
      "Relatórios Mensais de Desempenho Energético e Diagnóstico Técnico",
      "Plano de Ação Preventivo e Corretivo de Engenharia"
    ],
    normativeFramework: [
      "IEC 61724-1 — Photovoltaic system performance: Monitoring",
      "Protocolos Industriais Modbus RTU / Modbus TCP / SunSpec",
      "Requisitos de Controle de Potência do Módulo 3 do PRODIST"
    ],
    metrics: [
      { label: "Regime de Supervisão", value: "Monitoramento Ativo 24/7" },
      { label: "Controle de Fronteira", value: "Loop Dinâmico Modbus" },
      { label: "Métrica de Qualidade", value: "IEC 61724 (PR)" }
    ],
    status: "Metodologia Homologada",
    imageGradient: "from-stone-900 to-green-950"
  }
];

// Aliases de retrocompatibilidade para links antigos que eventualmente apontem para slugs anteriores
export const PROJECT_SLUG_ALIASES: Record<string, string> = {
  "usina-solar-comercial-300kwp": "arquitetura-usina-fotovoltaica-mt-bt",
  "subestacao-abrigada-industrial-500kva": "arquitetura-subestacao-entrada-energia-mt",
  "hub-recarga-rapida-veiculos-eletricos": "arquitetura-hub-recarga-veiculos-eletricos",
  "telemetria-e-controle-dinamico-exportacao": "arquitetura-telemetria-controle-zero-export",
};
