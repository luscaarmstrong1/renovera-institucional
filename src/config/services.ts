export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  scope: string[];
  deliverables: string[];
  normativeFramework?: string[];
  badge: string;
  color: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "consultoria-regulatoria",
    slug: "consultoria-regulatoria",
    number: "01",
    title: "Consultoria Regulatória",
    shortDescription: "Análise técnica de inversão de fluxo, contestação administrativa e suporte em processos de MMGD perante concessionárias.",
    fullDescription: "Atuação técnica e fundamentada perante as distribuidoras de energia e órgãos reguladores. Avaliamos orçamentos de conexão, estudos de inversão de fluxo e formulamos contestações estruturadas com base nos Procedimentos de Distribuição (PRODIST) e resoluções normativas da ANEEL.",
    heroHeadline: "Segurança regulatória e fundamentação técnica em processos de conexão.",
    badge: "Regulatório & Conexão",
    color: "#033118",
    scope: [
      "Análise de estudos de inversão de fluxo (REN 1.000 e atualizações)",
      "Contestação técnica e administrativa de pareceres de acesso",
      "Análise crítica de orçamentos de conexão e obras da distribuidora",
      "Suporte integral em processos de Micro e Minigeração Distribuída (MMGD)",
      "Apoio em manifestações e recursos técnicos perante distribuidoras e ANEEL",
      "Avaliação de alternativas regulatórias de conexão e injeção controlada"
    ],
    deliverables: [
      "Parecer Técnico Conclusivo de Inversão de Fluxo",
      "Minuta de Contestação Administrativa Fundamentada",
      "Auditoria de Custo de Conexão e Encargos",
      "Relatório de Viabilidade e Alternativas Técnicas"
    ],
    normativeFramework: [
      "Resolução Normativa ANEEL nº 1.000/2021",
      "Módulo 3 do PRODIST (Acesso ao Sistema de Distribuição)",
      "Lei nº 14.300/2022 (Marco Legal da Micro e Minigeração Distribuída)"
    ]
  },
  {
    id: "projetos-eletricos",
    slug: "projetos-eletricos",
    number: "02",
    title: "Projetos Elétricos e Infraestrutura",
    shortDescription: "Engenharia de instalações em baixa e média tensão, subestações abrigadas e aéreas, diagramas unifilares e dimensionamento.",
    fullDescription: "Desenvolvimento completo de projetos elétricos industriais, comerciais e institucionais com rigor normativo. Elaboramos diagramas unifilares, dimensionamento de condutores, proteção, seletividade e memoriais descritivos detalhados para aprovação em concessionárias.",
    heroHeadline: "Engenharia elétrica de alta precisão em baixa e média tensão.",
    badge: "Baixa & Média Tensão",
    color: "#0A4B2D",
    scope: [
      "Projetos elétricos industriais e prediais em baixa tensão (NBR 5410)",
      "Entrada de energia e cabines primárias / subestações em média tensão (NBR 14039)",
      "Diagramas unifilares, trifilares e funcionais com detalhamento executivo",
      "Estudos de curto-circuito, coordenação e seletividade de proteções",
      "Projetos de SPDA (Proteção contra Descargas Atmosféricas - NBR 5419)",
      "Documentação completa: memoriais descritivos, ART e aprovação técnica"
    ],
    deliverables: [
      "Plantas e Diagramas Executivos em CAD/BIM",
      "Memoriais de Cálculo de Carga, Queda de Tensão e Curto-Circuito",
      "Lista de Materiais e Especificações de Equipamentos",
      "Anotação de Responsabilidade Técnica (ART) do Conselho de Engenharia"
    ],
    normativeFramework: [
      "ABNT NBR 5410: Instalações elétricas de baixa tensão",
      "ABNT NBR 14039: Instalações elétricas de média tensão de 1,0 kV a 36,2 kV",
      "Normas Técnicas das Distribuidoras (CPFL, Elektro, Enel, Cemig, entre outras)"
    ]
  },
  {
    id: "energia-solar",
    slug: "energia-solar",
    number: "03",
    title: "Energia Solar Fotovoltaica",
    shortDescription: "Usinas fotovoltaicas para geração distribuída, estudos de irradiação, modelagem de geração e engenharia de conexão.",
    fullDescription: "Soluções de engenharia para usinas de solo e coberturas comerciais e industriais. Realizamos simulações com modelagem precisa de perdas, sombreamento e alocação de inversores, visando máxima produtividade técnica e conformidade de rede.",
    heroHeadline: "Soluções fotovoltaicas de alto rendimento e projetos de conexão confiáveis.",
    badge: "Geração Distribuída",
    color: "#033118",
    scope: [
      "Dimensionamento de usinas de microgeração e minigeração distribuída",
      "Estudos de irradiação solar e modelagem de curva de geração horário-sazonal",
      "Projetos elétricos de integração CA/CC e arranjos fotovoltaicos",
      "Sistemas com inversores string e centrais para clientes comerciais e industriais",
      "Engenharia de ampliação de sistemas existentes e repowering",
      "Adequação técnica aos requisitos de injeção e seletividade"
    ],
    deliverables: [
      "Memorial Descritivo do Gerador Fotovoltaico",
      "Diagrama Unifilar com Elementos de Proteção e Seccionamento",
      "Relatório de Estimativa de Produtividade Anual (kWh/kWp)",
      "Processo Completo para Homologação junto à Distribuidora"
    ],
    normativeFramework: [
      "ABNT NBR 16690: Instalações elétricas fotovoltaicas",
      "Resolução Normativa ANEEL nº 1.000/2021",
      "Normas de Acesso de Concessionárias de Energia"
    ]
  },
  {
    id: "eletropostos",
    slug: "eletropostos",
    number: "04",
    title: "Eletropostos e Mobilidade Elétrica",
    shortDescription: "Planejamento e infraestrutura elétrica para recarga de veículos elétricos (AC e DC de 22 kW a 120 kW).",
    fullDescription: "Engenharia dedicada à transição da mobilidade elétrica. Desenvolvemos o dimensionamento da infraestrutura elétrica, avaliação de demanda contratada, painéis de alimentação e soluções de recarga lenta (AC) e rápida (DC), adequadas a empreendimentos comerciais e frotas corporativas.",
    heroHeadline: "Infraestrutura elétrica robusta para a mobilidade sustentável.",
    badge: "Mobilidade Elétrica",
    color: "#0D5B43",
    scope: [
      "Avaliação de capacidade elétrica da instalação e curva de demanda",
      "Dimensionamento de cabos, disjuntores e proteção residual (DR tipo B)",
      "Especificação técnica para carregadores AC (7 kW a 22 kW) e DC rápidos (30 kW a 120 kW)",
      "Projetos de integração com subestações existentes ou transformadores dedicados",
      "Arquitetura de balanceamento dinâmico de carga (Dynamic Load Management)",
      "Planejamento de eletropostos para frotas corporativas, shopping centers e rodovias"
    ],
    deliverables: [
      "Estudo de Impacto na Demanda Contratada",
      "Projeto Executivo da Infraestrutura de Recarga",
      "Quadro de Cargas e Especificação de Carregadores e Conectores",
      "Diretrizes de Segurança e Protocolos OCPP para Gestão de Energia"
    ],
    normativeFramework: [
      "ABNT NBR 17019: Instalações elétricas - Alimentação de veículos elétricos",
      "ABNT NBR IEC 61851: Sistema de recarga condutiva para veículos elétricos",
      "Diretrizes de Conexão das Concessionárias Locais"
    ]
  },
  {
    id: "automacao",
    slug: "automacao",
    number: "05",
    title: "Automação e Controle Energético",
    shortDescription: "Telemetria, controladores industriais, monitoramento de grandezas elétricas e controle inteligente de demanda.",
    fullDescription: "Sistemas de controle e supervisão voltados à eficiência e confiabilidade operacional. Integramos analisadores de energia, transdutores, controladores programáveis e interfaces de monitoramento para gerenciamento de ponta e controle de injeção em rede.",
    heroHeadline: "Engenharia conectada à inteligência operacional e telemetria precisa.",
    badge: "Controle & Telemetria",
    color: "#0A4B2D",
    scope: [
      "Sistemas de telemetria e monitoramento de grandezas elétricas em tempo real",
      "Controle dinâmico de exportação e injeção zero (Zero Export) para usinas solares",
      "Integração de controladores e multimedidores com protocolos industriais (Modbus, BACnet)",
      "Automação de grupos geradores, no-breaks e transferência de cargas críticas",
      "Supervisórios locais e remotos para gestão de utilidades e energia",
      "Alarmística de falhas de isolamento, sub/sobretensão e fator de potência"
    ],
    deliverables: [
      "Arquitetura de Comunicação e Topologia de Redes Industriais",
      "Lista de Pontos de Medição e Telemetria",
      "Diagramas Funcionais de Intertravamento e Controle",
      "Plano de Comissionamento e Parametrização"
    ],
    normativeFramework: [
      "Protocolos Abertos Modbus RTU / TCP",
      "Critérios de Telemetria das Distribuidoras (quando aplicável ao porte)",
      "ABNT NBR IEC 61131: Controladores programáveis"
    ]
  },
  {
    id: "viabilidade",
    slug: "viabilidade",
    number: "06",
    title: "Estudos de Viabilidade Técnica",
    shortDescription: "Análise técnica e regulatória para novos empreendimentos, expansão fabril e alocação de cargas energéticas.",
    fullDescription: "Estudos prévios e diagnósticos detalhados para embasar tomadas de decisão de investimentos no setor elétrico. Avaliamos capacidade de atendimento, impactos de conexão, enquadramento tarifário e soluções de engenharia custo-efetivas.",
    heroHeadline: "Fundamentação sólida para investimentos seguros no setor elétrico.",
    badge: "Planejamento & Engenharia",
    color: "#033118",
    scope: [
      "Diagnóstico preliminar de capacidade de subestações e rede distribuidora",
      "Estudos de enquadramento e otimização tarifária (Grupo A e Grupo B)",
      "Análise de alternativas técnicas entre conexão direta, reforço de rede e autoprodução",
      "Estudo de viabilidade de implantação de baterias (BESS) e geração híbrida",
      "Avaliação de conformidade para novos loteamentos, indústrias e centros logísticos",
      "Relatórios técnicos estruturados para suporte a investidores e gestores de infraestrutura"
    ],
    deliverables: [
      "Relatório Técnico-Econômico de Engenharia",
      "Cenários de Investimento em Infraestrutura Elétrica vs. Demanda",
      "Mapa de Riscos Regulatórios e Técnicos de Conexão",
      "Roteiro de Trâmites Técnicos com Órgãos e Concessionárias"
    ],
    normativeFramework: [
      "Regulamentação Tarifária ANEEL (PRORET)",
      "Critérios de Planejamento de Expansão de Distribuição",
      "Critérios e Normas de Atendimento às Novas Cargas"
    ]
  }
];
