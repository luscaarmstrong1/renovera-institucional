export interface BlogArticle {
  slug: string;
  title: string;
  subtitle: string;
  category:
    | "Inversão de Fluxo e Consultoria Regulatória"
    | "Homologação e Conexão"
    | "Engenharia Fotovoltaica"
    | "Eletropostos e Mobilidade Elétrica"
    | "Equipamentos e Suprimentos"
    | "Investimentos e Gestão Energética";
  publishedAt: string;
  readingTime: string;
  image: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
  relatedCtaLabel: string;
  normativeReferences: string[];
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const BLOG_CATEGORIES = [
  "Inversão de Fluxo e Consultoria Regulatória",
  "Homologação e Conexão",
  "Engenharia Fotovoltaica",
  "Eletropostos e Mobilidade Elétrica",
  "Equipamentos e Suprimentos",
  "Investimentos e Gestão Energética",
] as const;

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "inversao-de-fluxo",
    title: "Inversão de Fluxo de Potência na Geração Distribuída: O que diz a REN 1.000 e como auditar tecnicamente",
    subtitle:
      "Compreenda os critérios técnicos e regulatórios aplicados pelas distribuidoras e quais alternativas obrigatórias devem constar no estudo de conexão.",
    category: "Inversão de Fluxo e Consultoria Regulatória",
    publishedAt: "2026-05-15",
    readingTime: "8 min de leitura",
    image: "/assets/renovera/projetos/proj-auditoria-rede.webp",
    relatedServiceSlug: "reno-adviser",
    relatedServiceName: "Renô Adviser™",
    relatedCtaLabel: "Enviar parecer de acesso para análise",
    normativeReferences: [
      "Resolução Normativa ANEEL nº 1.000/2021 (atualizada pela REN 1.059/2023)",
      "Módulo 3 dos Procedimentos de Distribuição (PRODIST)",
      "Lei Federal nº 14.300/2022 (Marco Legal da MMGD)",
    ],
    summary:
      "A alegação de inversão de fluxo de potência no posto de transformação ou no alimentador tornou-se um dos principais entraves para conexão de sistemas fotovoltaicos no Brasil. Saiba como avaliar se o estudo da distribuidora seguiu o rito regulatório.",
    sections: [
      {
        heading: "1. O que é a inversão de fluxo de potência na rede de distribuição?",
        paragraphs: [
          "As redes de distribuição radial foram historicamente concebidas para escoar potência no sentido unidirecional: da subestação para os consumidores. Quando a soma da geração distribuída conectada a um transformador ou alimentador supera a carga instantânea naquele ponto em determinado horário, ocorre o fluxo reverso de potência.",
          "Por si só, o fluxo reverso não significa automaticamente colapso ou impossibilidade técnica da rede. A regulação da ANEEL estabelece procedimentos objetivos que a distribuidora deve demonstrar antes de restringir ou condicionar uma conexão a obras onerosas."
        ]
      },
      {
        heading: "2. Alternativas obrigatórias que a distribuidora deve avaliar",
        paragraphs: [
          "Nos termos da Resolução Normativa ANEEL nº 1.000/2021 (com as disposições introduzidas pela REN nº 1.059/2023), caso seja identificada inversão de fluxo no posto de transformação da distribuidora ou no disjuntor do alimentador, a concessionária deve elaborar um estudo técnico avaliando alternativas viáveis de conexão."
        ],
        bullets: [
          "Reconfiguração dos circuitos de distribuição e remanejamento de cargas ou chaves seccionadoras;",
          "Definição de outro circuito ou ponto de conexão em nível de tensão superior para escoamento;",
          "Conexão com limitação de injeção de potência em dias e horários pré-determinados, baseada na curva real de carga;",
          "Avaliação de modalidades sem injeção na rede (Grid Zero / autoconsumo instantâneo) ou com sistemas de armazenamento."
        ]
      },
      {
        heading: "3. Quando cabe contestação técnico-administrativa do parecer?",
        paragraphs: [
          "Na prática de engenharia regulatória, muitos orçamentos de conexão apresentam indeferimentos padronizados sem anexar a memória de cálculo completa, sem demonstrar a curva diária de carga do transformador ou omitindo a análise das alternativas de menor custo global.",
          "Uma contestação técnica eficaz não se baseia apenas em argumentos genéricos: ela audita os dados elétricos do parecer, verifica o enquadramento regulatório do pedido e propõe soluções técnicas aderentes ao PRODIST."
        ]
      }
    ]
  },
  {
    slug: "homologacao-fotovoltaica",
    title: "Homologação Fotovoltaica em Baixa e Média Tensão: Documentação, Prazos e Conformidade Técnica",
    subtitle:
      "Do orçamento de conexão à vistoria final: os cuidados essenciais de engenharia para evitar reprovações documentais e atrasos no comissionamento.",
    category: "Homologação e Conexão",
    publishedAt: "2026-05-18",
    readingTime: "7 min de leitura",
    image: "/assets/renovera/produtos/reno-01-adviser.webp",
    relatedServiceSlug: "reno-adviser",
    relatedServiceName: "Renô Adviser™",
    relatedCtaLabel: "Solicitar assessoria em homologação",
    normativeReferences: [
      "ABNT NBR 16690 — Instalações elétricas de arranjos fotovoltaicos",
      "ABNT NBR 16274 — Comissionamento de sistemas fotovoltaicos conectados à rede",
      "REN ANEEL nº 1.000/2021 e Normas Técnicas das Distribuidoras",
    ],
    summary:
      "A etapa de homologação perante a concessionária exige coerência absoluta entre o diagrama unifilar, os certificados INMETRO/IEC dos inversores, o padrão de entrada existente e a Anotação de Responsabilidade Técnica (ART).",
    sections: [
      {
        heading: "1. Por que projetos fotovoltaicos sofrem reprovação na análise documental?",
        paragraphs: [
          "Grande parte dos atrasos em projetos de micro e minigeração distribuída decorre de divergências entre a capacidade do disjuntor do padrão de entrada, a potência nominal dos inversores e as tabelas de dimensionamento exigidas pela distribuidora local.",
          "Em unidades do Grupo A (média tensão), somam-se ainda os requisitos de estudo de proteção, coordenação de relés secundários (funções ANSI) e adequação da cabine primária."
        ]
      },
      {
        heading: "2. Checklist técnico essencial antes do protocolo",
        paragraphs: [
          "Antes de submeter a solicitação de orçamento de conexão, a engenharia responsável deve validar criteriosamente os elementos do dossiê técnico:"
        ],
        bullets: [
          "Conferência da titularidade, classe de consumo, tensão nominal e carga instalada na fatura de energia;",
          "Verificação do registro ativo de módulos e inversores nas portarias vigentes do INMETRO;",
          "Elaboração de diagrama unifilar completo com especificação de condutores, dispositivos de seccionamento e DPS CC/CA;",
          "Emissão de ART ou TRT com o código de atividade técnica exatamente compatível com geração fotovoltaica conectada à rede."
        ]
      }
    ]
  },
  {
    slug: "eletropostos",
    title: "Infraestrutura para Eletropostos AC e DC: Engenharia de Demanda, NBR 17019 e Proteção Elétrica",
    subtitle:
      "Como planejar estações de recarga de veículos elétricos em condomínios, empresas, frotas e rodovias sem comprometer a segurança da instalação.",
    category: "Eletropostos e Mobilidade Elétrica",
    publishedAt: "2026-05-20",
    readingTime: "8 min de leitura",
    image: "/assets/renovera/projetos-v5/proj-04-mobilidade-ve.webp",
    relatedServiceSlug: "reno-energy-hub",
    relatedServiceName: "Renô Energy Hub",
    relatedCtaLabel: "Avaliar implantação de eletroposto",
    normativeReferences: [
      "ABNT NBR 17019 — Instalações elétricas de baixa tensão: Alimentação de veículos elétricos",
      "ABNT NBR IEC 61851-1 — Sistema de recarga condutiva para veículos elétricos",
      "ABNT NBR 5410 e ABNT NBR 14039",
    ],
    summary:
      "A expansão da frota de veículos elétricos e híbridos plug-in exige que condomínios, empresas e postos rodoviários tratem a recarga veicular como uma obra de engenharia elétrica de potência — e não como uma simples tomada.",
    sections: [
      {
        heading: "1. Diferenças de engenharia entre recarga AC (7,4 a 22 kW) e DC (30 a 120 kW)",
        paragraphs: [
          "Os carregadores em corrente alternada (AC, tipicamente de 7,4 kW, 11 kW ou 22 kW) alimentam o conversor interno do próprio veículo e são indicados para locais com maior tempo de permanência, como garagens condominiais, estacionamentos corporativos e pátios de pernoite de frota.",
          "Já as estações rápidas em corrente contínua (DC, em configurações de 30 kW, 60 kW ou 120 kW) realizam a retificação internamente e entregam energia diretamente à bateria do veículo, exigindo disponibilidade robusta de potência trifásica e, frequentemente, atendimento em média tensão."
        ]
      },
      {
        heading: "2. Requisitos obrigatórios da ABNT NBR 17019",
        paragraphs: [
          "A norma brasileira ABNT NBR 17019 estabelece critérios estritos para circuitos de alimentação de veículos elétricos, visando evitar sobrecargas, incêndios e choques elétricos:"
        ],
        bullets: [
          "Circuito exclusivo para cada ponto de conexão de recarga, dimensionado para regime de carga contínua (fator de utilização 1,0);",
          "Proteção diferencial-residual (DR) específica contra correntes de falta com componente contínua (DR Tipo B ou Tipo A combinado com detecção CC > 6 mA);",
          "Dispositivos de proteção contra surtos (DPS) coordenados no quadro de distribuição dedicado;",
          "Gerenciamento dinâmico de carga (Smart Charging / OCPP) quando a soma das potências dos carregadores superar a folga térmica do alimentador principal."
        ]
      }
    ]
  },
  {
    slug: "energia-solar-empresas",
    title: "Energia Solar para Empresas e Indústrias: Engenharia Executiva para Consumidores Grupo A e Grupo B",
    subtitle:
      "Fatores técnicos que determinam o desempenho real de uma usina comercial ou industrial ao longo de sua vida útil.",
    category: "Engenharia Fotovoltaica",
    publishedAt: "2026-05-22",
    readingTime: "7 min de leitura",
    image: "/assets/renovera/projetos-v5/proj-01-fotovoltaica.webp",
    relatedServiceSlug: "reno-projetos",
    relatedServiceName: "Renô Projetos",
    relatedCtaLabel: "Solicitar projeto completo",
    normativeReferences: [
      "ABNT NBR 16690 e ABNT NBR 5410",
      "ABNT NBR 14039 (Média Tensão)",
      "Lei nº 14.300/2022 e PRORET/ANEEL",
    ],
    summary:
      "Em empresas e indústrias, o sucesso de uma usina solar depende do correto enquadramento tarifário (horossazonal verde/azul ou baixa tensão), da qualidade do projeto executivo e da integração com a subestação existente.",
    sections: [
      {
        heading: "1. Particularidades de unidades consumidoras do Grupo A (Média Tensão)",
        paragraphs: [
          "Diferentemente de instalações residenciais, empresas atendidas em média tensão possuem faturamento binômio (demanda contratada em kW e consumo em kWh nos postos ponta e fora ponta).",
          "O dimensionamento fotovoltaico precisa respeitar o limite da demanda contratada, avaliar o fator de carga da unidade e prever os ajustes de proteção na cabine primária (como relés direcionais e funções ANSI exigidas pela concessionária)."
        ]
      },
      {
        heading: "2. A importância do Projeto Executivo e do Comissionamento Normativo",
        paragraphs: [
          "Uma instalação empresarial segura requer projeto executivo detalhado (arranjo de strings, encaminhamento de eletrocalhas, malha de aterramento, coordenação de proteção CC/CA e laudo estrutural da cobertura) seguido de ensaios de comissionamento segundo a ABNT NBR 16274."
        ]
      }
    ]
  },
  {
    slug: "investimento-em-usina-solar",
    title: "Investimento em Usina Solar: Como Avaliar Viabilidade Técnica, Terreno, Conexão e Gestão do Ativo",
    subtitle:
      "Checklist de engenharia e regulação para estruturar empreendimentos de geração distribuída com premissas realistas.",
    category: "Investimentos e Gestão Energética",
    publishedAt: "2026-05-25",
    readingTime: "8 min de leitura",
    image: "/assets/renovera/produtos/reno-04-invest.webp",
    relatedServiceSlug: "reno-invest",
    relatedServiceName: "Renô Invest",
    relatedCtaLabel: "Avaliar investimento em energia solar",
    normativeReferences: [
      "Lei Federal nº 14.300/2022",
      "REN ANEEL nº 1.000/2021",
      "IEC 61724-1 — Monitoramento de Performance Fotovoltaica",
    ],
    summary:
      "A estruturação de uma usina fotovoltaica para investimento ou autoconsumo remoto exige due diligence de rede elétrica antes mesmo da assinatura do contrato de compra ou arrendamento do terreno.",
    sections: [
      {
        heading: "1. Por que a viabilidade de conexão precede a escolha do terreno?",
        paragraphs: [
          "Um erro frequente em projetos de investimento solar é adquirir ou arrendar uma área baseando-se apenas no preço do hectare ou na irradiação solar, sem verificar a capacidade de escoamento do alimentador trifásico e da subestação da concessionária local.",
          "A avaliação prévia de engenharia de rede permite estimar custos de extensão de linha, exigências de subestação e riscos de restrição de fluxo."
        ]
      },
      {
        heading: "2. Gestão operacional (O&M) e proteção patrimonial no longo prazo",
        paragraphs: [
          "Uma usina solar é um ativo de infraestrutura de longo prazo. Para preservar a disponibilidade operacional prevista na modelagem financeira, é fundamental integrar desde o início o monitoramento técnico contínuo (Renô Performance) e a cobertura securitária adequada contra eventos climáticos e sinistros (Renô Protect)."
        ]
      }
    ]
  },
  {
    slug: "equipamentos-fotovoltaicos",
    title: "Especificação e Compatibilidade de Equipamentos Fotovoltaicos: Módulos, Inversores e Proteções",
    subtitle:
      "Como evitar perdas por clipping excessivo, incompatibilidade de corrente MPPT e falhas em dispositivos de proteção CC/CA.",
    category: "Equipamentos e Suprimentos",
    publishedAt: "2026-05-28",
    readingTime: "6 min de leitura",
    image: "/assets/renovera/produtos/reno-06-supply.webp",
    relatedServiceSlug: "reno-supply",
    relatedServiceName: "Renô Supply",
    relatedCtaLabel: "Solicitar cotação técnica",
    normativeReferences: [
      "ABNT NBR 16690 — Instalações elétricas de arranjos fotovoltaicos",
      "IEC 61215 e IEC 61730 (Qualificação de Módulos FV)",
      "Portarias INMETRO para Sistemas Fotovoltaicos",
    ],
    summary:
      "Com a rápida evolução das células fotovoltaicas de alta corrente, comprar equipamentos sem verificar a janela de tensão e a corrente máxima de entrada dos inversores pode comprometer tanto a eficiência quanto a garantia do sistema.",
    sections: [
      {
        heading: "1. Compatibilidade elétrica entre módulos modernos e entradas MPPT",
        paragraphs: [
          "Módulos fotovoltaicos de alta potência operam frequentemente com correntes de máxima potência (Imp) e de curto-circuito (Isc) superiores às gerações anteriores. Caso o inversor selecionado possua limite de corrente por MPPT inferior ao exigido pelo módulo, ocorrerá limitação operacional ou impossibilidade de aprovação do projeto."
        ]
      },
      {
        heading: "2. Estruturas de fixação e dispositivos de proteção",
        paragraphs: [
          "Além de módulos e inversores, a durabilidade da planta depende da especificação correta de cabos solares resistentes a UV, conectores compatíveis, DPS de corrente contínua e alternada e estruturas metálicas dimensionadas para os esforços de vento da região."
        ]
      }
    ]
  }
];
