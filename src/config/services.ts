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
  tag: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "reno-adviser",
    slug: "reno-adviser",
    number: "01",
    title: "Renô Adviser™",
    shortDescription: "Assessoria técnico-regulatória especializada em homologação e reversão de indeferimentos por Inversão de Fluxo.",
    fullDescription: "Assessoria especializada em homologação de projetos fotovoltaicos de ponta a ponta. Atuamos na reversão de indeferimentos, com foco principal em Inversão de Fluxo de Potência, solucionando quaisquer entraves técnicos ou regulatórios impostos pelas concessionárias perante o PRODIST e resoluções da ANEEL.",
    heroHeadline: "Assessoria Especializada em Homologação e Conexão na Rede",
    badge: "Assessoria Técnico-Regulatória",
    tag: "Homologação & Conexão",
    color: "#033118",
    scope: [
      "Homologação ponta a ponta junto a distribuidoras em todo o Brasil",
      "Reversão técnica e administrativa de indeferimentos de parecer de acesso",
      "Especialidade pioneira em estudos de Inversão de Fluxo de Potência (Lei 14.300)",
      "Modelagem de curva de carga e alternativas regulatórias de escoamento",
      "Fundamentação estrita no Marco Legal e REN ANEEL nº 1.000/2021",
      "Interlocução técnica direta perante comitês e ouvidorias das concessionárias"
    ],
    deliverables: [
      "Parecer Técnico de Auditoria de Fluxo",
      "Peça de Recurso Administrativo Fundamentada",
      "Memórias de Cálculo e Modelagem de Curva de Carga",
      "Acompanhamento até a emissão conclusiva do Parecer de Acesso"
    ],
    normativeFramework: [
      "Resolução Normativa ANEEL nº 1.000/2021",
      "Módulo 3 do PRODIST (Acesso ao Sistema de Distribuição)",
      "Lei nº 14.300/2022 (Marco Legal da Micro e Minigeração Distribuída)"
    ]
  },
  {
    id: "reno-projetos",
    slug: "reno-projetos",
    number: "02",
    title: "Renô Projetos",
    shortDescription: "Serviço completo turnkey de usinas solares: engenharia executiva, suprimentos Tier 1, montagem e homologação.",
    fullDescription: "O Renô Projetos é o serviço 'ponta a ponta' da Renovera. Cuidamos de todas as etapas: engenharia executiva, aquisição dos melhores equipamentos mundiais, montagem com alto rigor técnico e homologação. Inclui a expertise preventiva do Renô Adviser™ para garantir conexão sem entraves.",
    heroHeadline: "Serviço Completo Turnkey de Usinas Fotovoltaicas",
    badge: "Solução Completa Turnkey",
    tag: "Usinas Completas",
    color: "#0A4B2D",
    scope: [
      "Engenharia executiva completa em média e baixa tensão (MT e BT)",
      "Compra direta e fornecimento de equipamentos certificados de padrão mundial",
      "Montagem eletromecânica qualificada com normas de segurança do trabalho",
      "Comissionamento técnico, ensaios de isolamento e parametrização",
      "Homologação preventiva inclusa com aprovação na concessionária de energia",
      "Treinamento operacional e entrega de documentação as-built completa"
    ],
    deliverables: [
      "Projeto Executivo CC e CA com ART do CREA",
      "Memorial Descritivo do Gerador Fotovoltaico",
      "Usina Comissionada e em Operação Comercial",
      "Documentação As-Built e Prontuário de Instalação"
    ],
    normativeFramework: [
      "ABNT NBR 16690: Instalações elétricas fotovoltaicas",
      "ABNT NBR 5410: Instalações elétricas de baixa tensão",
      "ABNT NBR 14039: Instalações de média tensão de 1,0 kV a 36,2 kV"
    ]
  },
  {
    id: "reno-performance",
    slug: "reno-performance",
    number: "03",
    title: "Renô Performance",
    shortDescription: "Gestão ativa de dados e monitoramento inteligente 24/7 para máxima produtividade e rentabilidade da usina.",
    fullDescription: "Serviço de gestão de dados contínuo que monitora o desempenho da sua usina solar para assegurar máxima produtividade e rentabilidade. Identifica quedas de geração causadas por sujidade, falhas em strings ou anomalias elétricas, emitindo alertas imediatos e iniciando diagnóstico remoto automatizado.",
    heroHeadline: "Gestão de Dados e Monitoramento Inteligente 24/7",
    badge: "Gestão Ativa & Telemetria",
    tag: "Monitoramento 24/7",
    color: "#033118",
    scope: [
      "Monitoramento ativo 24/7 em tempo real de usinas solares",
      "Detecção preditiva de sujidade, sombras parciais e perda de eficiência",
      "Diagnóstico remoto de inversores, trackers e componentes elétricos",
      "Controle de alarmística com chamados técnicos preventivos",
      "Relatórios periódicos de produtividade e rentabilidade financeira",
      "Análise de balanço energético e geração líquida injetada"
    ],
    deliverables: [
      "Dashboard de Telemetria Integrado",
      "Painel de Alertas e Notificações em Tempo Real",
      "Relatório Mensal de Performance e Curva de Geração",
      "Plano de Ação Corretiva para Manutenção Preventiva"
    ],
    normativeFramework: [
      "Protocolos Abertos Modbus RTU / TCP",
      "Padrões de Telemetria e Monitoramento ANEEL",
      "Métricas Internacionais de Performance Ratio (IEC 61724)"
    ]
  },
  {
    id: "reno-invest",
    slug: "reno-invest",
    number: "04",
    title: "Renô Invest",
    shortDescription: "Estruturação de investimentos em ativos solares, prospecção fundiária e viabilidade financeira completa.",
    fullDescription: "Solução voltada para investidores que buscam rentabilidade consistente através da geração distribuída. Viabilizamos o empreendimento de ponta a ponta: análise minuciosa de viabilidade econômico-financeira, prospecção e locação de áreas ideais, implantação de usina e integração nativa ao Renô Performance.",
    heroHeadline: "Investimento Estruturado em Ativos Solares",
    badge: "Estruturação de Ativos",
    tag: "Ativos & Rentabilidade",
    color: "#0D5B43",
    scope: [
      "Análise de viabilidade financeira completa (VPL, TIR e Payback dinâmico)",
      "Prospecção, negociação fundiária e locação de terrenos estratégicos",
      "Engenharia, construção e homologação com garantia de acesso",
      "Monitoramento ativo e suporte contínuo à comercialização dos créditos",
      "Estruturação societária e jurídica de consórcios ou SPEs de energia",
      "Due diligence técnica para aquisição de usinas em operação"
    ],
    deliverables: [
      "Modelagem Financeira e Estudo de Retorno Econômico",
      "Laudo de Viabilidade Fundiária e de Acesso à Rede",
      "Empreendimento Fotovoltaico Pronto e Homologado",
      "Contratos Operacionais e de Gestão de Ativos"
    ],
    normativeFramework: [
      "Lei nº 14.300/2022 (Modelos de Autoconsumo Remoto e Compartilhado)",
      "Resoluções CVM para Fundos e Veículos de Investimento",
      "Diretrizes Tributárias Estaduais (Convênio ICMS 16/2015)"
    ]
  },
  {
    id: "reno-protect",
    slug: "reno-protect",
    number: "05",
    title: "Renô Protect",
    shortDescription: "Seguro técnico especializado para usinas fotovoltaicas contra intempéries, danos elétricos e roubo.",
    fullDescription: "Seguro desenhado especificamente para as necessidades técnicas do setor solar. Protege seu investimento contra danos da natureza (vendavais, tempestades de granizo, raios), panes e danos elétricos, além de cobertura contra roubo e furto de módulos, cabos e inversores.",
    heroHeadline: "Seguro Especializado para Usinas e Ativos Fotovoltaicos",
    badge: "Seguro Especializado",
    tag: "Proteção Patrimonial",
    color: "#033118",
    scope: [
      "Cobertura contra eventos climáticos severos (vendaval, granizo e tempestades)",
      "Proteção contra descargas atmosféricas (raios) e danos elétricos",
      "Cobertura ampla de roubo e furto qualificado de componentes e fiação",
      "Apólices sob medida para usinas de solo e usinas em cobertura comercial/industrial",
      "Assessoria técnica especializada na regulação ágil de sinistros",
      "Vistorias prévias de engenharia e mitigação de riscos operacionais"
    ],
    deliverables: [
      "Apólice de Seguro Especializado para Ativos Fotovoltaicos",
      "Condições e Limites de Cobertura Documentados",
      "Laudo Técnico de Inspeção Prévia de Risco",
      "Suporte Especializado na Regulação de Sinistros Técnicos"
    ],
    normativeFramework: [
      "Circulares SUSEP para Riscos Nomeados e Operacionais",
      "ABNT NBR 5419: Proteção contra Descargas Atmosféricas",
      "Critérios Seguradores de Manutenibilidade e Segurança"
    ]
  },
  {
    id: "reno-supply",
    slug: "reno-supply",
    number: "06",
    title: "Renô Supply",
    shortDescription: "Central de suprimentos e kits fotovoltaicos Tier 1 com validação técnica prévia de engenharia.",
    fullDescription: "Sua central de suprimentos de componentes e kits solares. Oferecemos módulos e inversores das melhores marcas mundiais com avaliação técnica prévia da compatibilidade elétrica, evitando divergências de engenharia e retrabalho na montagem em campo.",
    heroHeadline: "Central de Suprimentos com Avaliação Técnica Prévia",
    badge: "Suprimentos Técnicos",
    tag: "Kits & Equipamentos",
    color: "#0A4B2D",
    scope: [
      "Módulos e inversores fotovoltaicos certificados Tier 1 mundial",
      "Análise prévia de compatibilidade elétrica de strings, correntes e tensões",
      "Logística eficiente e entrega programada para obras solares em todo o país",
      "Kits completos com cabos solares, conectores MC4 e quadros de proteção CA/CC",
      "Garantia oficial direta dos fabricantes e assistência pós-venda humanizada",
      "Suporte de engenharia para integradores no esclarecimento de dúvidas técnicas"
    ],
    deliverables: [
      "Kits Fotovoltaicos com Dimensionamento Conforme Demanda",
      "Fichas Técnicas e Certificados INMETRO dos Equipamentos",
      "Documentação de Garantia e Rastreabilidade de Lotes",
      "Suporte na Configuração e Parametrização em Campo"
    ],
    normativeFramework: [
      "Portarias do INMETRO para Módulos e Inversores",
      "ABNT NBR 16690: Requisitos de componentes para sistemas fotovoltaicos",
      "Normas Internacionais IEC 61215 e IEC 61730"
    ]
  },
  {
    id: "reno-engenharia",
    slug: "reno-engenharia",
    number: "07",
    title: "Renô Engenharia",
    shortDescription: "Engenharia multidisciplinar: bombeamento solar, automação inteligente, eficiência luminotécnica e CFTV.",
    fullDescription: "Engenharia multidisciplinar focada em eficiência energética, automação e segurança. Desenvolvemos projetos elétricos personalizados, sistemas de bombeamento solar para irrigação rural, automação residencial/predial inteligente, projetos luminotécnicos de alto rendimento e sistemas de CFTV/segurança patrimonial.",
    heroHeadline: "Soluções Integradas em Infraestrutura, Automação e Tecnologia",
    badge: "Engenharia Multidisciplinar",
    tag: "Multidisciplinar",
    color: "#033118",
    scope: [
      "Bombeamento solar autônomo para irrigação agrícola e pecuária sem rede elétrica",
      "Automação inteligente de iluminação, climatização e cargas elétricas industriais",
      "Projetos luminotécnicos de alta eficiência para redução do consumo energético",
      "Sistemas integrados de CFTV com inteligência artificial e monitoramento remoto",
      "Dimensionamento de quadros elétricos de comando e centros de controle de motores",
      "Laudos técnicos de conformidade, aterramento e prontuários das instalações"
    ],
    deliverables: [
      "Projetos Executivos Elétricos e de Automação em CAD/BIM",
      "Plantas Luminotécnicas e Diagramas de CFTV",
      "Dimensionamento Hidráulico e Fotovoltaico de Bombeamento",
      "Anotação de Responsabilidade Técnica (ART) de Projeto e Execução"
    ],
    normativeFramework: [
      "ABNT NBR 5410: Instalações elétricas de baixa tensão",
      "ABNT NBR ISO/CIE 8995-1: Iluminação de ambientes de trabalho",
      "Normas de Segurança NR-10 e NR-12"
    ]
  },
  {
    id: "reno-partner",
    slug: "reno-partner",
    number: "08",
    title: "Renô Partner",
    shortDescription: "Programa de parceria operacional para integradores e instaladores qualificados em todo o Brasil.",
    fullDescription: "Programa que seleciona e homologa integradores com alto padrão técnico em todo o território nacional. A Renovera assume a venda, engenharia executiva e aprovação do projeto na concessionária; o Partner homologado executa com exclusividade a montagem física e ativação da usina.",
    heroHeadline: "Programa de Parceria Operacional para Integradores Locais",
    badge: "Parceria Operacional",
    tag: "Rede de Parceiros",
    color: "#0D5B43",
    scope: [
      "Homologação rigorosa de integradores locais com critérios de excelência",
      "Renovera lidera venda, engenharia executiva e aprovação junto à concessionária",
      "Partner credenciado executa instalação física e comissionamento com suporte técnico",
      "Ampliação da capacidade de atendimento geográfico e escala comercial mútua",
      "Capacitação técnica contínua e alinhamento com as melhores práticas de montagem",
      "Remuneração transparente e segura por projeto executado"
    ],
    deliverables: [
      "Credenciamento Técnico Oficial Renô Partner",
      "Projetos Aprovados Prontos para Execução em Campo",
      "Treinamentos de Protocolo de Qualidade e Segurança",
      "Remuneração Transparente por Serviço de Instalação Realizado"
    ],
    normativeFramework: [
      "Diretrizes Internas de Montagem e Segurança Renovera",
      "Normas Regulamentadoras NR-10, NR-18 e NR-35 (Trabalho em Altura)",
      "Contrato Operacional de Credenciamento Técnico Homologado"
    ]
  },
  {
    id: "reno-energy-hub",
    slug: "reno-energy-hub",
    number: "09",
    title: "Renô Energy Hub",
    shortDescription: "Infraestrutura de média tensão, subestações abrigadas, aumento de carga e hubs de recarga de veículos elétricos.",
    fullDescription: "Especialistas em soluções de média e baixa tensão para garantir que sua infraestrutura suporte expansões de carga e novas tecnologias. Atuamos desde a modernização de padrões de entrada até subestações abrigadas de média tensão e implantação de infraestrutura para recarga de veículos elétricos (VE).",
    heroHeadline: "Infraestrutura Elétrica, Subestações e Mobilidade Elétrica",
    badge: "Infraestrutura de Rede & VE",
    tag: "Subestações & VE",
    color: "#033118",
    scope: [
      "Projetos e execução de subestações abrigadas e aumento de carga em MT",
      "Infraestrutura completa para recarga de veículos elétricos AC e DC (22 kW a 120 kW)",
      "Reforma de padrão de entrada e revisão geral de instalações elétricas industriais",
      "Sistemas de balanceamento dinâmico de carga e protocolo OCPP",
      "Estudos de coordenação e seletividade de relés secundários em cabines primárias",
      "Conformidade total com as normas das distribuidoras de energia (CPFL, Elektro, etc.)"
    ],
    deliverables: [
      "Projeto Executivo de Entrada de Energia e Subestação",
      "Estudo de Demanda e Dimensionamento para Carregadores VE",
      "Quadro Geral de Baixa Tensão (QGBT) e Proteções Específicas",
      "Homologação e Liberação de Carga perante a Distribuidora"
    ],
    normativeFramework: [
      "ABNT NBR 14039: Instalações elétricas de média tensão",
      "ABNT NBR 17019: Instalações de alimentação de veículos elétricos",
      "ABNT NBR IEC 61851: Sistema de recarga condutiva VE"
    ]
  },
  // Redirecionamentos/Aliases canônicos para URLs anteriores preservarem retrocompatibilidade
  {
    id: "consultoria-regulatoria",
    slug: "consultoria-regulatoria",
    number: "01",
    title: "Consultoria Regulatória & Renô Adviser™",
    shortDescription: "Análise técnica de inversão de fluxo, contestação administrativa e suporte em processos de MMGD perante concessionárias.",
    fullDescription: "Atuação técnica e fundamentada perante as distribuidoras de energia e órgãos reguladores. Avaliamos orçamentos de conexão, estudos de inversão de fluxo e formulamos contestações estruturadas com base nos Procedimentos de Distribuição (PRODIST) e resoluções normativas da ANEEL.",
    heroHeadline: "Segurança regulatória e fundamentação técnica em processos de conexão.",
    badge: "Regulatório & Conexão",
    tag: "Homologação & Conexão",
    color: "#033118",
    scope: [
      "Análise de estudos de inversão de fluxo (REN 1.000 e atualizações)",
      "Contestação técnica e administrativa de pareceres de acesso",
      "Análise crítica de orçamentos de conexão e obras da distribuidora",
      "Suporte integral em processos de Micro e Minigeração Distribuída (MMGD)"
    ],
    deliverables: [
      "Parecer Técnico Conclusivo de Inversão de Fluxo",
      "Minuta de Contestação Administrativa Fundamentada",
      "Auditoria de Custo de Conexão e Encargos"
    ],
    normativeFramework: [
      "Resolução Normativa ANEEL nº 1.000/2021",
      "Módulo 3 do PRODIST"
    ]
  },
  {
    id: "projetos-eletricos",
    slug: "projetos-eletricos",
    number: "02",
    title: "Projetos Elétricos e Subestações",
    shortDescription: "Engenharia de instalações em baixa e média tensão, subestações abrigadas, diagramas unifilares e dimensionamento.",
    fullDescription: "Desenvolvimento completo de projetos elétricos industriais, comerciais e institucionais com rigor normativo. Elaboramos diagramas unifilares, dimensionamento de condutores, proteção, seletividade e memoriais descritivos detalhados para aprovação em concessionárias.",
    heroHeadline: "Engenharia elétrica de alta precisão em baixa e média tensão.",
    badge: "Baixa & Média Tensão",
    tag: "Engenharia Elétrica",
    color: "#0A4B2D",
    scope: [
      "Projetos elétricos industriais e prediais em baixa tensão (NBR 5410)",
      "Entrada de energia e cabines primárias / subestações em média tensão (NBR 14039)",
      "Diagramas unifilares, trifilares e funcionais com detalhamento executivo"
    ],
    deliverables: [
      "Plantas e Diagramas Executivos em CAD/BIM",
      "Memoriais de Cálculo de Carga e Curto-Circuito",
      "ART do CREA"
    ],
    normativeFramework: [
      "ABNT NBR 5410",
      "ABNT NBR 14039"
    ]
  },
  {
    id: "energia-solar",
    slug: "energia-solar",
    number: "03",
    title: "Energia Solar Fotovoltaica (Renô Projetos)",
    shortDescription: "Usinas fotovoltaicas para geração distribuída, estudos de irradiação, modelagem de geração e engenharia de conexão.",
    fullDescription: "Soluções de engenharia para usinas de solo e coberturas comerciais e industriais. Realizamos simulações com modelagem precisa de perdas, sombreamento e alocação de inversores, visando máxima produtividade técnica e conformidade de rede.",
    heroHeadline: "Soluções fotovoltaicas de alto rendimento e projetos de conexão confiáveis.",
    badge: "Geração Distribuída",
    tag: "Usinas Solares",
    color: "#033118",
    scope: [
      "Dimensionamento de usinas de microgeração e minigeração distribuída",
      "Estudos de irradiação solar e modelagem de curva de geração horário-sazonal",
      "Projetos elétricos de integração CA/CC e arranjos fotovoltaicos"
    ],
    deliverables: [
      "Memorial Descritivo do Gerador Fotovoltaico",
      "Diagrama Unifilar com Elementos de Proteção",
      "Processo Completo para Homologação junto à Distribuidora"
    ],
    normativeFramework: [
      "ABNT NBR 16690",
      "Resolução Normativa ANEEL nº 1.000/2021"
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
    tag: "Eletropostos VE",
    color: "#0D5B43",
    scope: [
      "Avaliação de capacidade elétrica da instalação e curva de demanda",
      "Dimensionamento de cabos, disjuntores e proteção residual",
      "Especificação técnica para carregadores AC e DC rápidos"
    ],
    deliverables: [
      "Estudo de Impacto na Demanda Contratada",
      "Projeto Executivo da Infraestrutura de Recarga",
      "Quadro de Cargas e Especificação de Carregadores"
    ],
    normativeFramework: [
      "ABNT NBR 17019",
      "ABNT NBR IEC 61851"
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
    tag: "Automação",
    color: "#0A4B2D",
    scope: [
      "Sistemas de telemetria e monitoramento de grandezas elétricas em tempo real",
      "Controle dinâmico de exportação e injeção zero (Zero Export) para usinas solares",
      "Integração de controladores e multimedidores com protocolos industriais"
    ],
    deliverables: [
      "Arquitetura de Comunicação e Topologia de Redes Industriais",
      "Lista de Pontos de Medição e Telemetria",
      "Plano de Comissionamento e Parametrização"
    ],
    normativeFramework: [
      "Protocolos Abertos Modbus RTU / TCP",
      "ABNT NBR IEC 61131"
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
    tag: "Estudos de Viabilidade",
    color: "#033118",
    scope: [
      "Diagnóstico preliminar de capacidade de subestações e rede distribuidora",
      "Estudos de enquadramento e otimização tarifária (Grupo A e Grupo B)",
      "Análise de alternativas técnicas entre conexão direta e autoprodução"
    ],
    deliverables: [
      "Relatório Técnico-Econômico de Engenharia",
      "Cenários de Investimento em Infraestrutura Elétrica vs. Demanda",
      "Mapa de Riscos Regulatórios e Técnicos de Conexão"
    ],
    normativeFramework: [
      "Regulamentação Tarifária ANEEL (PRORET)",
      "Critérios de Planejamento de Expansão de Distribuição"
    ]
  }
];
