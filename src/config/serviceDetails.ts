export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceStepItem {
  step: string;
  title: string;
  description: string;
}

export interface ServiceLandingDetail {
  slug: string;
  priorityLevel: "maxima" | "alta" | "padrao";
  categoryLabel: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  problemTitle: string;
  problemSummary: string;
  problemsSolved: string[];
  solutionTitle: string;
  solutionSummary: string;
  targetAudience: string[];
  workflowSteps: ServiceStepItem[];
  requiredDocuments: string[];
  complianceDisclaimer: string;
  relatedProductSlugs: string[];
  faqs: ServiceFaqItem[];
}

export const SERVICE_LANDING_DETAILS: Record<string, ServiceLandingDetail> = {
  "reno-adviser": {
    slug: "reno-adviser",
    priorityLevel: "maxima",
    categoryLabel: "Assessoria Técnico-Regulatória e Conexão de Geração Distribuída",
    primaryCtaLabel: "Enviar parecer de acesso para análise",
    secondaryCtaLabel: "Falar com engenharia regulatória",
    problemTitle: "Seu projeto fotovoltaico foi indeferido ou recebeu orçamento de conexão inviável?",
    problemSummary:
      "Integradores, empresas e investidores enfrentam diariamente pareceres de acesso com alegações de inversão de fluxo de potência, exigências de obras desproporcionais na rede ou ausência de memória de cálculo auditável por parte das distribuidoras.",
    problemsSolved: [
      "Projetos indeferidos sob alegação de Inversão de Fluxo de Potência no transformador ou alimentador",
      "Ausência de apresentação das alternativas obrigatórias de conexão (Art. 73 da REN ANEEL nº 1.000/2021)",
      "Orçamentos de conexão com exigência de obras de reforço de rede sem demonstração técnica",
      "Respostas padronizadas ou evasivas da concessionária que travam o cronograma comercial da usina",
      "Dificuldades técnicas no enquadramento de modalidades da Lei nº 14.300/2022 e Módulo 3 do PRODIST"
    ],
    solutionTitle: "Engenharia Regulatória Aplicada: Auditoria de Rede e Contestação Fundamentada",
    solutionSummary:
      "O Renô Adviser™ une engenharia elétrica de potência e domínio profundo da regulação da ANEEL para auditar os parâmetros elétricos utilizados pela concessionária, identificar inconsistências metodológicas e conduzir manifestações técnicas estruturadas.",
    targetAudience: [
      "Integradores fotovoltaicos com projetos travados ou indeferidos na distribuidora",
      "Empresas e indústrias em processo de conexão de micro ou minigeração distribuída",
      "Investidores de usinas solares (autoconsumo remoto ou geração compartilhada)",
      "Escritórios jurídicos e consultorias que necessitam de parecer e assistência técnica de engenharia elétrica"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Triagem Documental e Diagnóstico Preliminar",
        description:
          "Recebimento do parecer de acesso/indeferimento, diagrama unifilar e fatura para avaliação técnica da justificativa apresentada pela distribuidora."
      },
      {
        step: "02",
        title: "Auditoria do Estudo de Inversão de Fluxo",
        description:
          "Verificação das curvas de carga, topologia do barramento, alternativas regulatórias obrigatórias e conformidade com a REN ANEEL nº 1.000/2021 e PRODIST Módulo 3."
      },
      {
        step: "03",
        title: "Elaboração de Parecer e Contestação Técnico-Administrativa",
        description:
          "Desenvolvimento de peça técnica fundamentada por engenheiro eletricista, propondo reconfigurações, ajustes de injeção ou revisão de cálculo."
      },
      {
        step: "04",
        title: "Interlocução Institucional (Concessionária, Ouvidoria e ANEEL)",
        description:
          "Acompanhamento técnico das respostas nas instâncias administrativas e fornecimento de subsídios técnicos caso o cliente opte por medida judicial com seu advogado."
      }
    ],
    requiredDocuments: [
      "Cópia integral do Parecer de Acesso ou Carta de Indeferimento emitida pela distribuidora",
      "Estudo de Inversão de Fluxo / Orçamento de Conexão fornecido pela concessionária (quando houver)",
      "Fatura de energia atualizada da unidade consumidora",
      "Diagrama Unifilar, Memorial Descritivo e ART submetidos no pedido inicial",
      "Histórico de protocolos anteriores na agência comercial ou Ouvidoria (se aplicável)"
    ],
    complianceDisclaimer:
      "Nota de Transparência Técnica e Regulatória: O Renô Adviser™ realiza auditoria de engenharia e fundamentação técnico-administrativa rigorosa segundo as normas da ANEEL. A decisão final de conexão depende das condições físicas reais da rede elétrica e da análise dos órgãos competentes, não havendo promessa de reversão ou homologação garantida. Quando cabível medida judicial, a Renovera atua no suporte técnico pericial, cabendo a representação jurídica a advogados habilitados.",
    relatedProductSlugs: ["reno-supply", "reno-projetos", "reno-partner"],
    faqs: [
      {
        question: "O que fazer imediatamente quando um projeto é indeferido por inversão de fluxo?",
        answer:
          "O primeiro passo é preservar os prazos regulatórios e solicitar/reunir o documento completo do estudo emitido pela distribuidora. Evite alterar a potência do projeto sem antes auditar se a concessionária cumpriu a avaliação das alternativas obrigatórias previstas na REN ANEEL nº 1.000/2021."
      },
      {
        question: "Quais documentos preciso enviar para a avaliação do Renô Adviser™?",
        answer:
          "Para a triagem técnica, solicitamos a carta de indeferimento ou orçamento de conexão da concessionária, a fatura de energia da unidade, o memorial/diagrama unifilar protocolado e o número do protocolo de atendimento."
      },
      {
        question: "Como funciona a auditoria técnica de inversão de fluxo?",
        answer:
          "Nossa engenharia analisa se o estudo da distribuidora considerou corretamente o perfil horário de geração solar frente à carga mínima real do transformador/alimentador e se foram avaliadas alternativas como realocação de ponto de conexão, limitação em horário específico ou armazenamento/Grid Zero."
      },
      {
        question: "A aprovação ou reversão do parecer é garantida?",
        answer:
          "Não. Nenhum serviço sério de engenharia pode garantir deferimento automático, pois o acesso depende da capacidade física real do sistema elétrico. Nosso compromisso é entregar uma auditoria técnica robusta, identificando falhas metodológicas quando existirem e propondo todas as alternativas técnicas previstas na regulação."
      }
    ]
  },

  "reno-supply": {
    slug: "reno-supply",
    priorityLevel: "alta",
    categoryLabel: "Suprimentos e Equipamentos Fotovoltaicos com Validação de Engenharia",
    primaryCtaLabel: "Solicitar cotação técnica",
    secondaryCtaLabel: "Comparar proposta existente",
    problemTitle: "Evite comprar kits fotovoltaicos incompatíveis ou sem validação elétrica prévia",
    problemSummary:
      "Muitos integradores e compradores enfrentam atrasos na obra por cotações demoradas, incompatibilidade de corrente/tensão entre módulos e inversores, falta de componentes de proteção adequados ou dificuldade para comparar propostas de múltiplos distribuidores.",
    problemsSolved: [
      "Incompatibilidade elétrica entre módulos de alta potência e entradas MPPT dos inversores",
      "Dificuldade técnica para comparar propostas comerciais com especificações distintas",
      "Falta de dimensionamento correto de estruturas de fixação para o tipo real de telhado ou solo",
      "Demora na cotação e ausência de suporte de engenharia pré-compra"
    ],
    solutionTitle: "Curadoria Técnica de Equipamentos e Comparação Estruturada de Suprimentos",
    solutionSummary:
      "O Renô Supply atua na interface técnica entre o seu projeto e fornecedores autorizados do setor solar, verificando compatibilidade elétrica, proteções e estruturas antes do fechamento do pedido.",
    targetAudience: [
      "Integradores fotovoltaicos que buscam agilidade e segurança técnica nas compras",
      "Empresas instaladoras de sistemas comerciais e industriais",
      "Compradores técnicos de indústrias, condomínios e agronegócio"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Levantamento de Requisitos da Obra",
        description:
          "Recebimento da potência desejada, tensão da rede local, tipo de telhado/solo e eventuais propostas já recebidas."
      },
      {
        step: "02",
        title: "Verificação de Compatibilidade Elétrica",
        description:
          "Checagem de tensões de string, corrente máxima de curto-circuito (Isc), relação CC/CA (overload) e proteções."
      },
      {
        step: "03",
        title: "Cotação Comparativa e Especificação",
        description:
          "Apresentação de opções técnicas alinhadas a distribuidores e fornecedores autorizados, com análise custo-benefício."
      },
      {
        step: "04",
        title: "Acompanhamento do Pedido e Suporte Técnico",
        description:
          "Orientação documental e suporte de engenharia para conferência técnica dos itens especificados."
      }
    ],
    requiredDocuments: [
      "Município/UF de entrega e tensão nominal da rede local (220V, 380V, etc.)",
      "Potência pretendida (kWp) e tipo de estrutura de fixação",
      "Proposta ou orçamento anterior (opcional, caso deseje análise comparativa)"
    ],
    complianceDisclaimer:
      "Nota Comercial: As marcas, modelos e condições de garantia de fábrica variam conforme disponibilidade de estoque nos distribuidores e fabricantes homologados no momento da cotação.",
    relatedProductSlugs: ["reno-adviser", "reno-partner", "reno-engenharia"],
    faqs: [
      {
        question: "Quais informações são necessárias para solicitar uma cotação no Renô Supply?",
        answer:
          "Basta informar o município/UF de entrega, a potência desejada em kWp, a tensão da rede (monofásica/trifásica 220V ou 380V) e o tipo de telhado ou estrutura de solo."
      },
      {
        question: "Posso enviar uma proposta que já recebi de outro fornecedor para avaliação?",
        answer:
          "Sim. Nossa engenharia analisa tecnicamente a configuração proposta (módulos, inversores, string box e estrutura) para verificar compatibilidade elétrica e buscar alternativas equivalentes ou superiores."
      },
      {
        question: "Existe verificação de compatibilidade técnica antes da compra?",
        answer:
          "Sim. Esse é o principal diferencial do Renô Supply: avaliamos se a corrente e a tensão dos módulos escolhidos operam dentro da faixa segura dos MPPTs do inversor e das exigências da concessionária."
      }
    ]
  },

  "reno-projetos": {
    slug: "reno-projetos",
    priorityLevel: "alta",
    categoryLabel: "Engenharia e Implantação Integrada de Usinas Fotovoltaicas",
    primaryCtaLabel: "Solicitar projeto completo",
    secondaryCtaLabel: "Avaliar viabilidade da minha conta",
    problemTitle: "Quer implantar energia solar sem precisar gerenciar separadamente projeto, compra e obra?",
    problemSummary:
      "Implantar uma usina fotovoltaica com segurança exige coordenação entre estudo de viabilidade, projeto executivo, escolha de equipamentos, instalação dentro das normas de segurança e homologação perante a distribuidora.",
    problemsSolved: [
      "Risco de contratar instalação sem projeto executivo detalhado e sem análise prévia da rede",
      "Falta de integração entre suprimentos, engenharia elétrica, montagem e homologação",
      "Dúvidas sobre enquadramento tarifário (Grupo A ou Grupo B) e área útil necessária",
      "Insegurança quanto ao comissionamento técnico e entrega documental (As-Built e ART)"
    ],
    solutionTitle: "Solução Ponta a Ponta: Da Viabilidade ao Comissionamento e Homologação",
    solutionSummary:
      "No Renô Projetos, a Renovera coordena todas as etapas técnicas da sua usina solar — residencial, comercial, industrial, condominial ou rural — incorporando preventivamente a inteligência regulatória do Renô Adviser™.",
    targetAudience: [
      "Empresas e comércios que buscam reduzir custos operacionais com energia elétrica",
      "Indústrias em baixa ou média tensão (Grupo A e Grupo B)",
      "Condomínios residenciais e empresariais",
      "Propriedades rurais e residências"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Estudo de Viabilidade e Análise Tarifária",
        description:
          "Avaliação do histórico de consumo nas faturas, padrão de entrada e área disponível para dimensionamento ótimo."
      },
      {
        step: "02",
        title: "Projeto Executivo CC/CA e Processo de Conexão",
        description:
          "Elaboração de plantas, diagramas unifilares, emissão de ART e protocolo preventivo junto à distribuidora."
      },
      {
        step: "03",
        title: "Suprimentos e Implantação Técnica",
        description:
          "Especificação dos equipamentos e execução da montagem conforme escopo contratado e normas ABNT NBR 16690 e NBR 5410."
      },
      {
        step: "04",
        title: "Comissionamento, Vistoria e Entrega Técnica",
        description:
          "Ensaios de verificação, acompanhamento de vistoria da concessionária, ativação e orientação de pós-venda."
      }
    ],
    requiredDocuments: [
      "Fatura de energia elétrica recente (contendo histórico de 12 meses de consumo)",
      "Município/UF e tipo da edificação (telhado metálico, cerâmico, laje ou solo)",
      "Fotos opcionais do padrão de entrada / quadro geral e da área de instalação"
    ],
    complianceDisclaimer:
      "Nota Técnica: O dimensionamento de geração e a estimativa de economia baseiam-se em dados médios de irradiação solar e nas regras tarifárias vigentes (Lei nº 14.300/2022), podendo variar conforme condições climáticas e alterações regulatórias.",
    relatedProductSlugs: ["reno-adviser", "reno-performance", "reno-protect"],
    faqs: [
      {
        question: "O Renô Projetos atende tanto residências quanto empresas e indústrias?",
        answer:
          "Sim. Desenvolvemos e implantamos sistemas fotovoltaicos dimensionados sob medida para residências, comércios, condomínios, propriedades rurais e indústrias em baixa e média tensão."
      },
      {
        question: "A homologação junto à concessionária já está incluída no escopo?",
        answer:
          "Sim. Todo projeto conduzido pelo Renô Projetos inclui o processo de solicitação de parecer de acesso e vistoria perante a distribuidora, contando com a metodologia preventiva do Renô Adviser™."
      },
      {
        question: "Quais dados são necessários para receber um estudo preliminar?",
        answer:
          "Com o município/UF, o consumo médio mensal (em kWh ou valor em R$) ou uma cópia da fatura de energia recente já conseguimos elaborar o dimensionamento técnico inicial."
      }
    ]
  },

  "reno-performance": {
    slug: "reno-performance",
    priorityLevel: "padrao",
    categoryLabel: "Monitoramento e Gestão Operacional de Ativos Fotovoltaicos",
    primaryCtaLabel: "Solicitar gestão e monitoramento",
    secondaryCtaLabel: "Avaliar desempenho da minha usina",
    problemTitle: "Sua usina solar está gerando abaixo do esperado sem que você saiba o motivo?",
    problemSummary:
      "Sem acompanhamento técnico estruturado, falhas em strings, desarmes de proteção, desconexões de internet, sombreamento novo ou acúmulo de sujidade passam despercebidos por meses, reduzindo o retorno do ativo.",
    problemsSolved: [
      "Baixa visibilidade operacional sobre a geração real versus geração esperada da planta",
      "Falhas de comunicação, alarmes de inversores ou strings inativas não identificadas a tempo",
      "Ausência de relatórios técnicos periódicos com diagnóstico de perdas e recomendações",
      "Falta de acompanhamento especializado para orientar intervenções preventivas e corretivas"
    ],
    solutionTitle: "Acompanhamento Remoto, Diagnóstico de Anomalias e Relatórios de Desempenho",
    solutionSummary:
      "O Renô Performance realiza o acompanhamento remoto estruturado da sua usina fotovoltaica, consolidando indicadores operacionais, identificando anomalias de geração e orientando ações técnicas de manutenção.",
    targetAudience: [
      "Empresas e indústrias que possuem usinas solares em operação",
      "Investidores e proprietários de usinas de geração distribuída",
      "Condomínios com geração própria ou compartilhada",
      "Integradores que desejam oferecer gestão continuada de O&M aos seus clientes"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Diagnóstico Inicial e Integração da Planta",
        description:
          "Cadastro dos parâmetros construtivos da usina (potência, módulos, inversores, localização) e conexão à plataforma de monitoramento."
      },
      {
        step: "02",
        title: "Monitoramento Remoto e Identificação de Desvios",
        description:
          "Acompanhamento dos dados de operação para detectar quedas de rendimento, falhas de comunicação ou alarmes elétricos."
      },
      {
        step: "03",
        title: "Diagnóstico Técnico e Recomendações",
        description:
          "Análise de engenharia sobre a causa provável da anomalia (sujidade, falha de componente, sobretensão da rede) e orientação de correção."
      },
      {
        step: "04",
        title: "Relatórios Periódicos de Desempenho",
        description:
          "Entrega de relatórios consolidados conforme periodicidade contratada, apresentando histórico de geração e indicadores operacionais."
      }
    ],
    requiredDocuments: [
      "Potência instalada (kWp), localização da usina e modelo/fabricante dos inversores",
      "Indicação da plataforma atual de monitoramento utilizada pelos inversores",
      "Memorial descritivo ou diagrama unifilar da planta (quando disponível)"
    ],
    complianceDisclaimer:
      "Nota Operacional: Os níveis de serviço (SLA), horários de cobertura de acompanhamento remoto e escopo de intervenções presenciais em campo são definidos especificamente na proposta técnica e no contrato de prestação de serviços de cada ativo.",
    relatedProductSlugs: ["reno-protect", "reno-invest", "reno-projetos"],
    faqs: [
      {
        question: "Usinas instaladas por outras empresas podem contratar o Renô Performance?",
        answer:
          "Sim. Realizamos um diagnóstico inicial da planta e integramos o acompanhamento remoto mesmo para usinas que não foram originalmente construídas pela Renovera."
      },
      {
        question: "Como são identificadas as perdas de geração por sujidade ou falhas?",
        answer:
          "Comparamos a curva de geração real dos inversores e strings com a expectativa técnica da região e o histórico da própria usina, identificando desvios sistemáticos que indicam necessidade de limpeza técnica ou inspeção elétrica."
      },
      {
        question: "O serviço inclui relatórios periódicos?",
        answer:
          "Sim. Emitimos relatórios técnicos claros com o balanço de geração, eventos registrados no período e recomendações práticas de manutenção preventiva ou corretiva."
      }
    ]
  },

  "reno-invest": {
    slug: "reno-invest",
    priorityLevel: "padrao",
    categoryLabel: "Estruturação Técnica e Econômico-Financeira de Investimentos Solares",
    primaryCtaLabel: "Avaliar investimento em energia solar",
    secondaryCtaLabel: "Falar com consultor de estruturação",
    problemTitle: "Planeja investir em uma usina solar e precisa de segurança técnica e regulatória antes de alocar capital?",
    problemSummary:
      "Investir em ativos de geração distribuída exige análise criteriosa de viabilidade de conexão na rede, avaliação técnica de terrenos, estimativa realista de CAPEX/OPEX e compreensão das regras tarifárias vigentes.",
    problemsSolved: [
      "Risco de arrendar ou comprar terrenos sem viabilidade elétrica de escoamento na rede local",
      "Planilhas financeiras genéricas que ignoram custos de subestação, perdas elétricas e transição tarifária",
      "Falta de acompanhamento técnico desde a concepção até a implantação e operação do ativo",
      "Dúvidas sobre enquadramento em autoconsumo remoto ou geração compartilhada"
    ],
    solutionTitle: "Engenharia do Proprietário e Modelagem de Viabilidade para Ativos Fotovoltaicos",
    solutionSummary:
      "O Renô Invest estrutura tecnicamente o seu projeto de investimento em energia solar, integrando estudo de conexão, avaliação de área, modelagem de cenários econômico-financeiros e planejamento de engenharia.",
    targetAudience: [
      "Investidores pessoas físicas ou jurídicas que buscam estruturar usinas solares",
      "Empresas e grupos econômicos que avaliam autoprodução ou autoconsumo remoto",
      "Proprietários de áreas rurais ou terrenos próximos a subestações e redes trifásicas"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Definição de Perfil, Região e Premissas",
        description:
          "Alinhamento do objetivo do empreendimento, faixa de potência pretendida e distribuidora de interesse."
      },
      {
        step: "02",
        title: "Avaliação Técnica de Área e Conexão",
        description:
          "Análise preliminar de irradiação, topografia, sombreamento e condições de acesso à rede elétrica (em conjunto com o Renô Adviser™)."
      },
      {
        step: "03",
        title: "Modelagem Econômico-Financeira de Cenários",
        description:
          "Estruturação de estimativas de CAPEX, OPEX, geração esperada e cenários de sensibilidade sob as regras da Lei nº 14.300/2022."
      },
      {
        step: "04",
        title: "Planejamento de Implantação e Gestão",
        description:
          "Estruturação do cronograma executivo de engenharia (Renô Projetos) e operação futura (Renô Performance e Renô Protect)."
      }
    ],
    requiredDocuments: [
      "Região ou município/UF pretendido para o empreendimento",
      "Coordenadas ou matrícula/localização aproximada da área (caso já possua terreno)",
      "Objetivo do projeto (autoconsumo próprio, locação de ativo ou geração compartilhada)"
    ],
    complianceDisclaimer:
      "Aviso Legal e Regulatório Importante: O Renô Invest é um serviço de consultoria técnica de engenharia e modelagem de viabilidade de projetos de infraestrutura energética, não constituindo oferta pública de valores mobiliários, fundo de investimento ou promessa de rentabilidade fixa. Todo investimento em geração de energia envolve riscos técnicos, climáticos, regulatórios e de mercado.",
    relatedProductSlugs: ["reno-adviser", "reno-projetos", "reno-performance", "reno-protect"],
    faqs: [
      {
        question: "A Renovera garante um percentual fixo de retorno financeiro no Renô Invest?",
        answer:
          "Não. Por ética técnica e conformidade legal, nunca prometemos rentabilidade fixa ou ausência de riscos. Entregamos estudos de engenharia e modelagem financeira baseados em premissas transparentes de irradiação, CAPEX, OPEX e tarifas vigentes."
      },
      {
        question: "Já possuo um terreno rural. Vocês avaliam se ele serve para usina solar?",
        answer:
          "Sim. Avaliamos a disponibilidade de rede trifásica ou média tensão próxima, topografia, incidência solar e as condições regulatórias de conexão junto à concessionária local."
      },
      {
        question: "Vocês também cuidam da implantação e do monitoramento após o estudo?",
        answer:
          "Sim. O investidor pode contratar a implantação completa via Renô Projetos e o acompanhamento operacional contínuo via Renô Performance."
      }
    ]
  },

  "reno-protect": {
    slug: "reno-protect",
    priorityLevel: "padrao",
    categoryLabel: "Orientação e Cotação de Proteção e Seguro para Sistemas Fotovoltaicos",
    primaryCtaLabel: "Solicitar cotação de proteção da usina",
    secondaryCtaLabel: "Avaliar proteção do meu sistema",
    problemTitle: "Seu sistema fotovoltaico está exposto a eventos climáticos, danos elétricos ou furto?",
    problemSummary:
      "Usinas solares em telhados ou em solo estão sujeitas a vendavais, granizo, descargas atmosféricas, surtos elétricos e sinistros patrimoniais. Muitas apólices prediais comuns não cobrem adequadamente módulos e inversores se não forem especificadas corretamente.",
    problemsSolved: [
      "Sistemas fotovoltaicos em operação sem cobertura específica contra vendavais, granizo e danos elétricos",
      "Exposição financeira a roubo ou furto qualificado de inversores, cabos e módulos solares",
      "Dificuldade para organizar a documentação técnica exigida na cotação securitária",
      "Falta de apoio de engenharia para caracterização técnica de equipamentos em caso de sinistro"
    ],
    solutionTitle: "Organização Técnica e Encaminhamento Qualificado para Proteção do Ativo Solar",
    solutionSummary:
      "O Renô Protect auxilia proprietários, empresas, condomínios e investidores na avaliação preliminar do sistema fotovoltaico, organização documental e encaminhamento para cotação de coberturas adequadas junto a parceiros habilitados.",
    targetAudience: [
      "Proprietários de sistemas fotovoltaicos residenciais, comerciais e rurais",
      "Indústrias e condomínios com usinas instaladas em cobertura ou solo",
      "Investidores que precisam mitigar riscos operacionais e patrimoniais de suas plantas"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Levantamento Técnico do Ativo",
        description:
          "Coleta de dados de potência, localização, tipo de estrutura (solo ou telhado) e valor estimado dos equipamentos."
      },
      {
        step: "02",
        title: "Encaminhamento para Cotação Especializada",
        description:
          "Apresentação de opções e condições por meio de parceiros e canais securitários devidamente habilitados."
      },
      {
        step: "03",
        title: "Análise de Coberturas e Franquias",
        description:
          "Orientação sobre as coberturas aplicáveis (eventos climáticos, danos elétricos, roubo/furto qualificado) conforme a apólice ofertada."
      },
      {
        step: "04",
        title: "Apoio Técnico Documental",
        description:
          "Suporte de engenharia na organização de laudos, memoriais ou relatórios técnicos quando contratado."
      }
    ],
    requiredDocuments: [
      "Município/UF e endereço da instalação fotovoltaica",
      "Potência instalada (kWp) e valor total aproximado do sistema (Nota Fiscal ou contrato)",
      "Informação se a usina está instalada em telhado ou em solo"
    ],
    complianceDisclaimer:
      "Nota Regulatória: A emissão de apólices e a regulação de seguros são atividades privativas de sociedades seguradoras e corretores devidamente habilitados perante a SUSEP. O Renô Protect atua na avaliação técnica de engenharia, organização documental e encaminhamento comercial junto a parceiros autorizados. Coberturas, limites e franquias dependem exclusivamente das condições gerais e especiais da apólice contratada pelo cliente.",
    relatedProductSlugs: ["reno-projetos", "reno-performance", "reno-invest"],
    faqs: [
      {
        question: "Todas as coberturas (granizo, raio, furto) estão incluídas automaticamente?",
        answer:
          "Não. As coberturas efetivas, limites de indenização, carências e franquias variam conforme a seguradora e a modalidade escolhida na cotação. Todas as condições são apresentadas de forma transparente na proposta antes da contratação."
      },
      {
        question: "Posso cotar proteção para uma usina que já está instalada e funcionando?",
        answer:
          "Sim. Tanto usinas recém-instaladas quanto sistemas já em operação podem passar por avaliação para cotação, mediante apresentação dos dados técnicos e notas fiscais ou relação de equipamentos."
      },
      {
        question: "O que preciso informar inicialmente para pedir uma cotação?",
        answer:
          "Apenas o município/UF, a potência em kWp, se a instalação é em solo ou telhado e o valor aproximado do sistema."
      }
    ]
  },

  "reno-engenharia": {
    slug: "reno-engenharia",
    priorityLevel: "alta",
    categoryLabel: "Engenharia Elétrica BT/MT e Soluções Técnicas Multidisciplinares",
    primaryCtaLabel: "Falar com a engenharia",
    secondaryCtaLabel: "Solicitar proposta de projeto elétrico",
    problemTitle: "Sua empresa ou empreendimento possui demandas elétricas que vão além da energia solar?",
    problemSummary:
      "Expansões industriais, adequações de padrão de entrada, subestações, sistemas de proteção, bombeamento solar rural, automação e eficiência energética exigem engenharia elétrica formal com cálculos precisos e emissão de ART.",
    problemsSolved: [
      "Necessidade de projetos elétricos em baixa e média tensão (NBR 5410 e NBR 14039)",
      "Adequação de entradas de energia, aumento de carga e projetos de subestações",
      "Estudos de proteção, seletividade, malha de aterramento e SPDA (NBR 5419)",
      "Demandas de bombeamento solar para irrigação, projetos luminotécnicos, automação e CFTV"
    ],
    solutionTitle: "Engenharia Elétrica de Precisão para Infraestrutura, Indústria, Comércio e Campo",
    solutionSummary:
      "A frente Renô Engenharia desenvolve projetos executivos, estudos elétricos, automação e soluções complementares sob medida para o porte e a complexidade da sua instalação.",
    targetAudience: [
      "Indústrias e centros logísticos com demandas em baixa e média tensão",
      "Empresas comerciais, redes de varejo e edifícios corporativos",
      "Condomínios residenciais e empresariais",
      "Propriedades rurais (irrigação com bombeamento solar e infraestrutura elétrica)"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Levantamento de Cargas e Requisitos Técnicos",
        description:
          "Entendimento da demanda atual, expansão prevista, tensão de fornecimento e normas da distribuidora local."
      },
      {
        step: "02",
        title: "Estudos Elétricos e Dimensionamento",
        description:
          "Cálculo de demanda, queda de tensão, curto-circuito, coordenação de proteção, aterramento ou dimensionamento luminotécnico/hidráulico."
      },
      {
        step: "03",
        title: "Desenvolvimento de Projeto Executivo e ART",
        description:
          "Entrega de pranchas técnicas, diagramas unifilares/trifilares, lista de materiais, memorial descritivo e ART."
      },
      {
        step: "04",
        title: "Aprovação em Concessionária e Acompanhamento",
        description:
          "Condução de aprovações técnicas na distribuidora (quando aplicável ao escopo) e suporte à execução."
      }
    ],
    requiredDocuments: [
      "Tipo de empreendimento, município/UF e tensão atual de fornecimento",
      "Descrição do escopo desejado (projeto BT/MT, subestação, SPDA, automação, bombeamento solar, etc.)",
      "Plantas arquitetônicas/elétricas existentes e fatura de energia (se houver)"
    ],
    complianceDisclaimer:
      "Nota de Escopo: Os serviços de engenharia são dimensionados conforme a necessidade de cada cliente, distinguindo claramente na proposta comercial as entregas de projeto executivo/consultoria (com emissão de ART) das etapas de fornecimento e execução física em campo ou parcerias especializadas.",
    relatedProductSlugs: ["reno-energy-hub", "reno-projetos", "reno-adviser"],
    faqs: [
      {
        question: "Quais frentes técnicas são atendidas pela Renô Engenharia?",
        answer:
          "Atendemos projetos elétricos de baixa e média tensão, entradas de energia, subestações, estudos de proteção e aterramento/SPDA, automação e controle (incluindo Zero Export), bombeamento solar, projetos luminotécnicos, eficiência energética e CFTV."
      },
      {
        question: "Os projetos são entregues com Anotação de Responsabilidade Técnica (ART)?",
        answer:
          "Sim. Todos os projetos executivos, laudos e estudos de engenharia contratados são acompanhados da respectiva ART emitida por profissional legalmente habilitado."
      },
      {
        question: "Vocês atendem apenas projetos vinculados a energia solar?",
        answer:
          "Não. A Renô Engenharia atende demandas elétricas independentes de geração solar, como reformas de quadros gerais (QGBT), aumento de carga industrial, adequação de cabines primárias e iluminação."
      }
    ]
  },

  "reno-partner": {
    slug: "reno-partner",
    priorityLevel: "alta",
    categoryLabel: "Programa de Parcerias Operacionais para Integradores e Instaladores",
    primaryCtaLabel: "Quero ser parceiro Renô",
    secondaryCtaLabel: "Conhecer critérios técnicos",
    problemTitle: "Quer expandir sua atuação técnica em campo com processos padronizados e suporte de engenharia?",
    problemSummary:
      "Integradores e equipes de instalação qualificadas muitas vezes possuem capacidade operacional em sua região, mas buscam parcerias estruturadas com definição clara de responsabilidades, projetos executivos bem detalhados e critérios técnicos transparentes.",
    problemsSolved: [
      "Falta de padronização técnica e documental na execução de obras solares",
      "Ociosidade operacional de equipes locais qualificadas",
      "Ausência de suporte de engenharia executiva e regulatória durante a implantação",
      "Necessidade de checklists claros de qualidade, segurança e comissionamento"
    ],
    solutionTitle: "Rede Qualificada de Execução Técnica com Padronização Renovera",
    solutionSummary:
      "O Renô Partner cadastra e avalia tecnicamente integradores e equipes especializadas em diferentes regiões do país para atuação conjunta em projetos, seguindo padrões rigorosos de segurança e engenharia.",
    targetAudience: [
      "Integradores fotovoltaicos com equipe própria de instalação",
      "Empresas de montagem eletromecânica em baixa e média tensão",
      "Prestadores de serviços técnicos especializados em comissionamento e O&M solar"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Submissão de Cadastro Técnico Inicial",
        description:
          "Preenchimento dos dados da empresa, CNPJ, região geográfica atendida, estrutura de equipe e portfólio de obras."
      },
      {
        step: "02",
        title: "Avaliação de Capacidade Técnica e Documental",
        description:
          "Análise pela engenharia da Renovera sobre certificações (NR-10, NR-35, registro profissional), histórico e conformidade."
      },
      {
        step: "03",
        title: "Alinhamento de Processos e Checklists",
        description:
          "Definição de responsabilidades operacionais, padrões de montagem, segurança do trabalho e protocolo de comissionamento."
      },
      {
        step: "04",
        title: "Acordo Operacional e Acionamento por Demanda",
        description:
          "Após homologação formal, o parceiro passa a integrar o banco técnico para acionamento conforme oportunidades compatíveis na sua região."
      }
    ],
    requiredDocuments: [
      "Dados cadastrais da empresa (Razão Social, CNPJ, Município-base e raio de atuação em km)",
      "Relação da equipe técnica e certificações de segurança vigentes (NR-10 e NR-35)",
      "Resumo de experiência e portfólio de instalações já executadas"
    ],
    complianceDisclaimer:
      "Nota de Governança: O preenchimento do formulário registra uma candidatura para triagem técnica. O credenciamento no programa Renô Partner não é automático e está sujeito à verificação documental, avaliação de engenharia e assinatura de instrumento contratual específico.",
    relatedProductSlugs: ["reno-adviser", "reno-supply", "reno-projetos"],
    faqs: [
      {
        question: "O envio do formulário já me torna um parceiro homologado automaticamente?",
        answer:
          "Não. Todo cadastro passa por uma etapa de triagem técnica e validação documental pela equipe da Renovera antes de qualquer homologação formal."
      },
      {
        question: "Quais são os requisitos básicos para se candidatar ao Renô Partner?",
        answer:
          "Possuir CNPJ ativo compatível com a atividade, equipe com treinamentos obrigatórios de segurança (como NR-10 e NR-35 vigentes) e experiência comprovada em instalações elétricas ou fotovoltaicas."
      },
      {
        question: "Como funciona a divisão de responsabilidades nos projetos?",
        answer:
          "Cada operação possui escopo e responsabilidades formalizados em contrato e checklist técnico, alinhando previamente projeto executivo, suprimentos, montagem física, segurança e comissionamento."
      }
    ]
  },

  "reno-energy-hub": {
    slug: "reno-energy-hub",
    priorityLevel: "alta",
    categoryLabel: "Infraestrutura Energética de Média/Baixa Tensão e Mobilidade Elétrica (VE)",
    primaryCtaLabel: "Avaliar implantação de eletroposto",
    secondaryCtaLabel: "Consultar aumento de carga / subestação",
    problemTitle: "Precisa implantar carregadores para veículos elétricos ou adequar sua entrada de energia sem sobrecarregar a instalação?",
    problemSummary:
      "A instalação de eletropostos AC e DC em condomínios, empresas, frotas e rodovias exige avaliação criteriosa da demanda contratada, capacidade do transformador, proteções específicas (NBR 17019) e, muitas vezes, adequação de padrão de entrada ou subestação em média tensão.",
    problemsSolved: [
      "Demanda elétrica insuficiente no padrão de entrada para suportar carregadores veiculares",
      "Risco de sobrecarga e atuação indevida de disjuntores por falta de balanceamento de potência",
      "Necessidade de projeto e aprovação de aumento de carga ou subestação junto à concessionária",
      "Dúvidas técnicas na especificação entre carregadores AC (7,4 a 22 kW) e estações rápidas DC (30, 60 ou 120 kW)"
    ],
    solutionTitle: "Engenharia Completa de Infraestrutura de Recarga VE, Demanda e Média Tensão",
    solutionSummary:
      "O Renô Energy Hub planeja e projeta toda a infraestrutura elétrica necessária para eletropostos e expansões de carga, desde o diagnóstico do quadro/subestação existente até o comissionamento das estações de recarga.",
    targetAudience: [
      "Condomínios residenciais e comerciais que precisam regulamentar e estruturar vagas de recarga VE",
      "Empresas e operações logísticas em transição para frotas elétricas ou híbridas plug-in",
      "Postos de combustíveis, centros comerciais, hotéis, estacionamentos e empreendimentos rodoviários",
      "Indústrias e comércios que necessitam de aumento de carga ou adequação de subestação"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Estudo de Viabilidade e Diagnóstico de Demanda",
        description:
          "Avaliação da carga instalada atual, capacidade do padrão de entrada/subestação e distância até as vagas pretendidas."
      },
      {
        step: "02",
        title: "Definição da Topologia de Recarga (AC / DC)",
        description:
          "Dimensionamento técnico de soluções AC (até 22 kW) ou DC (configurações de 30 kW, 60 kW ou 120 kW conforme perfil de giro e potência disponível)."
      },
      {
        step: "03",
        title: "Projeto Executivo de Infraestrutura e Proteção",
        description:
          "Projeto elétrico segundo a ABNT NBR 17019 e NBR 5410/14039, incluindo proteções diferenciais, DPS, cabeamento e gerenciamento de carga."
      },
      {
        step: "04",
        title: "Homologação de Carga, Implantação e Comissionamento",
        description:
          "Aprovação de aumento de carga/subestação perante a distribuidora (quando necessário), acompanhamento de instalação e testes de operação."
      }
    ],
    requiredDocuments: [
      "Município/UF e tipo do empreendimento (condomínio, frota, comércio, posto, indústria)",
      "Fatura de energia recente e informação sobre a tensão disponível (BT ou MT)",
      "Quantidade de vagas pretendidas, perfil de uso (interno ou público) e distância aproximada ao quadro geral"
    ],
    complianceDisclaimer:
      "Nota Técnica: As configurações de recarga AC (7,4 a 22 kW) e DC (30, 60 e 120 kW) representam arquiteturas técnicas dimensionáveis conforme a viabilidade elétrica do local e o orçamento de conexão da distribuidora.",
    relatedProductSlugs: ["reno-engenharia", "reno-projetos", "reno-performance"],
    faqs: [
      {
        question: "Qual a diferença prática entre carregadores AC e estações DC?",
        answer:
          "Carregadores AC (tipicamente de 7,4 kW a 22 kW) utilizam o conversor interno do próprio veículo e são ideais para permanências mais longas (condomínios, escritórios, pernoite de frota). Estações DC (30 kW, 60 kW, 120 kW) realizam a conversão em corrente contínua diretamente no equipamento, permitindo recargas rápidas em rodovias, postos e operações comerciais de alto giro."
      },
      {
        question: "Sempre é necessário fazer aumento de carga ou subestação para instalar carregadores?",
        answer:
          "Nem sempre. Em muitos casos é possível aproveitar a folga de demanda existente ou implementar sistemas de gerenciamento dinâmico de carga (Smart Charging) que modulam a potência dos carregadores conforme o consumo instantâneo do prédio. Isso é definido no estudo de viabilidade."
      },
      {
        question: "Como funciona o estudo de viabilidade para eletropostos?",
        answer:
          "Analisamos a fatura de energia, a capacidade do transformador/padrão de entrada atual, a distância física dos quadros até as vagas e o perfil de uso desejado, entregando o diagnóstico do que pode ser instalado imediatamente e quais adequações elétricas são necessárias."
      }
    ]
  }
};
