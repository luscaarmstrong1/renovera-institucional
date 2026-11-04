export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: "Engenharia Elétrica" | "Energia Solar" | "Consultoria Regulatória" | "Eletropostos" | "Automação";
  tag: string;
  context: string;
  challenge: string;
  solution: string;
  scope: string[];
  metrics: { label: string; value: string }[];
  status: "Concluído" | "Em Operação" | "Estudo Conclusivo";
  imageGradient: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "rnv-reg-01",
    slug: "reavaliacao-inversao-fluxo-mmgd",
    name: "Contestação Técnica e Reanálise de Inversão de Fluxo",
    category: "Consultoria Regulatória",
    tag: "Estudo Regulatório & Acesso",
    context: "Empreendimento de minigeração distribuída em média tensão que recebeu parecer preliminar com indicação de inversão de fluxo e exigências de obras vultosas de reforço na rede da concessionária.",
    challenge: "Demonstrar por meio de cálculo da curva de carga e fluxo de potência que o ponto de conexão apresentava capacidade operacional sem necessidade de obras desproporcionais, fundamentando conforme PRODIST e REN ANEEL 1.000.",
    solution: "Elaboração de parecer técnico conclusivo e requerimento administrativo fundamentado, apresentando dados operacionais dos transformadores e alternativas viáveis de conexão com injeção controlada.",
    scope: [
      "Auditoria do parecer de acesso emitido pela distribuidora",
      "Modelagem e reanálise dos critérios técnicos de fluxo reverso",
      "Elaboração de recurso administrativo com embasamento regulatório",
      "Proposição de arranjo com controle dinâmico de potência"
    ],
    metrics: [
      { label: "Economia em Obras Evitadas", value: "Custo Otimizado" },
      { label: "Tempo de Trâmite", value: "Parecer Técnico Ágil" },
      { label: "Status da Homologação", value: "Reapreciação Formal" }
    ],
    status: "Estudo Conclusivo",
    imageGradient: "from-emerald-950 to-teal-900"
  },
  {
    id: "rnv-solar-02",
    slug: "usina-solar-comercial-300kwp",
    name: "Engenharia Executiva de Usina Solar Comercial 300 kWp",
    category: "Energia Solar",
    tag: "Geração Distribuída em Média Tensão",
    context: "Complexo comercial no interior do estado de São Paulo com necessidade de redução de custos energéticos e modernização de sua subestação de entrada.",
    challenge: "Integrar 300 kWp de módulos fotovoltaicos à estrutura de cobertura existente com restrições de peso e interligação a uma cabine de transformação abrigada de 13,8 kV.",
    solution: "Desenvolvimento do projeto elétrico completo, incluindo diagrama unifilar detalhado, estudo de seletividade da cabine de entrada, adequação da malha de aterramento e submissão à concessionária local.",
    scope: [
      "Modelagem de geração e simulação de sombreamento",
      "Projeto executivo CC e CA com inversores trifásicos",
      "Proteção e intertravamento com a subestação de 13,8 kV",
      "Protocolo e aprovação técnica com emissão de ART"
    ],
    metrics: [
      { label: "Potência Instalada", value: "300 kWp" },
      { label: "Tensão de Atendimento", value: "13,8 kV (Média Tensão)" },
      { label: "Conformidade", value: "NBR 16690 e NBR 14039" }
    ],
    status: "Em Operação",
    imageGradient: "from-green-950 to-emerald-900"
  },
  {
    id: "rnv-proj-03",
    slug: "subestacao-abrigada-industrial-500kva",
    name: "Projeto de Subestação e Entrada de Energia 500 kVA",
    category: "Engenharia Elétrica",
    tag: "Infraestrutura Elétrica",
    context: "Expansão de planta industrial demandando aumento de carga e implantação de nova subestação abrigada em 13,8 kV.",
    challenge: "Dimensionamento seguro para regime contínuo de cargas indutivas, respeitando os requisitos da concessionária e garantindo coordenação de proteção e fator de potência.",
    solution: "Projeto integral de cabine primária com transformador de 500 kVA a seco, quadro geral de baixa tensão (QGBT) com banco de capacitores automático e sistema de SPDA conforme NBR 5419.",
    scope: [
      "Diagramas unifilares e trifilares detalhados",
      "Dimensionamento de cabos de média e baixa tensão",
      "Estudo de seletividade e ajuste de relés secundários",
      "Memoriais técnicos descritivos e lista de materiais"
    ],
    metrics: [
      { label: "Capacidade Nominal", value: "500 kVA" },
      { label: "Nível de Tensão", value: "13,8 kV / 380-220 V" },
      { label: "Rigor Normativo", value: "NBR 14039 / NBR 5410" }
    ],
    status: "Concluído",
    imageGradient: "from-slate-900 to-green-950"
  },
  {
    id: "rnv-ev-04",
    slug: "hub-recarga-rapida-veiculos-eletricos",
    name: "Infraestrutura para Hub de Recarga Rápida DC e AC",
    category: "Eletropostos",
    tag: "Mobilidade Elétrica",
    context: "Empreendimento com estacionamento comercial planejando disponibilizar recarga pública rápida e semirrápida para clientes e frotas elétricas.",
    challenge: "Compatibilizar a alta demanda instantânea de recarga rápida (carregador DC de 60 kW e pontos AC de 22 kW) sem desestabilizar as instalações existentes do local.",
    solution: "Estudo de viabilidade de demanda, projeto de ramal alimentador exclusivo com proteção contra surtos e DR tipo B, e arquitetura de balanceamento dinâmico de carga com supervisão.",
    scope: [
      "Dimensionamento elétrico do quadro de recarga VE",
      "Especificação técnica de carregadores com protocolo OCPP",
      "Proteção residual e aterramento dedicado conforme NBR 17019",
      "Infraestrutura de cabeamento estruturado e telemetria"
    ],
    metrics: [
      { label: "Potência em Recarga Rápida", value: "60 kW DC" },
      { label: "Pontos Adicionais AC", value: "2x 22 kW" },
      { label: "Padrão de Segurança", value: "NBR 17019 / IEC 61851" }
    ],
    status: "Concluído",
    imageGradient: "from-teal-950 to-emerald-950"
  },
  {
    id: "rnv-auto-05",
    slug: "telemetria-e-controle-dinamico-exportacao",
    name: "Sistema de Telemetria e Controle de Injeção Zero",
    category: "Automação",
    tag: "Automação & Controle de Injeção",
    context: "Instalação fotovoltaica com restrição temporária de injeção na rede de distribuição enquanto decorre o processo de reforço da concessionária.",
    challenge: "Permitir que o gerador fotovoltaico supra integralmente a demanda interna da indústria sem exportar excedentes para a rede pública, evitando desligamentos por proteção reversa.",
    solution: "Implantação de controlador programável industrial com leitura rápida de medidores de fronteira e ajuste dinâmico em milissegundos da rampa de potência dos inversores solares.",
    scope: [
      "Parametrização do loop de controle rápido (Zero Export)",
      "Rede industrial de comunicação via Modbus TCP sobre fibra óptica",
      "Supervisório local e integração com dashboard em nuvem",
      "Comissionamento com testes de degrau de carga e resposta dinâmica"
    ],
    metrics: [
      { label: "Tempo de Resposta", value: "< 250 ms" },
      { label: "Precisão de Controle", value: "99.8% sem injeção reversa" },
      { label: "Protocolo Industrial", value: "Modbus TCP" }
    ],
    status: "Em Operação",
    imageGradient: "from-stone-900 to-green-950"
  }
];
