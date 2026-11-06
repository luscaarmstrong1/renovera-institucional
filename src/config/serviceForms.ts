export interface ServiceFormField {
  name: string;
  label: string;
  type: "text" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  helperText?: string;
}

export interface ServiceFormSchema {
  serviceSlug: string;
  serviceName: string;
  leadCategory:
    | "regulatorio_conexao"
    | "suprimentos_kits"
    | "turnkey_usina"
    | "monitoramento_om"
    | "investimento_solar"
    | "seguro_protecao"
    | "engenharia_multidisciplinar"
    | "credenciamento_parceiro"
    | "eletromobilidade_mt"
    | "consulta_geral";
  ctaLabel: string;
  formTitle: string;
  formSubtitle: string;
  whatsappIntro: string;
  attachmentPolicy: {
    hasPrivateStorage: boolean;
    acceptedFormatsLabel: string;
    deliveryInstruction: string;
  };
  specificFields: ServiceFormField[];
}

export const SERVICE_FORM_SCHEMAS: Record<string, ServiceFormSchema> = {
  "reno-adviser": {
    serviceSlug: "reno-adviser",
    serviceName: "Renô Adviser™",
    leadCategory: "regulatorio_conexao",
    ctaLabel: "Enviar parecer de acesso para análise",
    formTitle: "Submeter Parecer de Acesso / Inversão de Fluxo",
    formSubtitle:
      "Informe os parâmetros técnicos da solicitação de acesso para análise preliminar pela equipe de engenharia regulatória.",
    whatsappIntro:
      "Olá, equipe Renô Adviser™! Gostaria de submeter um processo de conexão / parecer de acesso para análise técnico-regulatória:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "PDF, memoriais de cálculo, carta de indeferimento e diagrama unifilar",
      deliveryInstruction:
        "Para proteção de sigilo e conformidade com a LGPD, documentos confidenciais do processo (Parecer de Acesso, Carta de Indeferimento, Diagrama Unifilar e Fatura) não são armazenados em diretórios públicos: após validar este resumo inicial, envie os arquivos diretamente no canal privado autorizado (WhatsApp Técnico ou E-mail Corporativo).",
    },
    specificFields: [
      {
        name: "utilityCompany",
        label: "Concessionária / Distribuidora *",
        type: "text",
        required: true,
        placeholder: "Ex.: CPFL Paulista, Neoenergia Elektro, Cemig, Enel, Copel...",
      },
      {
        name: "requestedPowerKw",
        label: "Potência Solicitada (kW / kWp) *",
        type: "text",
        required: true,
        placeholder: "Ex.: 75 kW, 150 kW, 300 kW, 1 MW",
      },
      {
        name: "utilityProtocol",
        label: "Protocolo ou Nº da Nota/Solicitação (opcional)",
        type: "text",
        required: false,
        placeholder: "Informe apenas se desejar referenciar na triagem",
      },
      {
        name: "denialReason",
        label: "Tipo de Restrição ou Indeferimento Apontado *",
        type: "select",
        required: true,
        options: [
          { value: "inversao_fluxo", label: "Inversão de Fluxo de Potência no Posto/Subestação" },
          { value: "orcamento_obras", label: "Exigência de Obras de Rede com Custo Desproporcional" },
          { value: "limitacao_horario", label: "Restrição de Horário / Limitação de Injeção" },
          { value: "pendencia_documental", label: "Indeferimento Técnico / Exigência Normativa em Projeto" },
          { value: "preventivo", label: "Análise Preventiva Antes do Protocolo na Distribuidora" },
        ],
      },
      {
        name: "responseDeadline",
        label: "Prazo Regulatório / Situação do Processo",
        type: "select",
        required: false,
        options: [
          { value: "dentro_prazo", label: "Parecer emitido recentemente (dentro do prazo de recurso)" },
          { value: "urgente", label: "Prazo próximo do vencimento (Urgente)" },
          { value: "recurso_anterior_negado", label: "Já houve contestação anterior indeferida" },
          { value: "planejamento", label: "Fase de estudo / pré-protocolo" },
        ],
      },
      {
        name: "previousAppeal",
        label: "Já houve contestação ou reclamação na Ouvidoria/ANEEL?",
        type: "select",
        required: false,
        options: [
          { value: "nao", label: "Não — Primeira análise técnica do parecer" },
          { value: "sim_distribuidora", label: "Sim — Já protocolado recurso na distribuidora" },
          { value: "sim_ouvidoria_aneel", label: "Sim — Já acionada Ouvidoria ou ANEEL SMA" },
        ],
      },
    ],
  },

  "reno-supply": {
    serviceSlug: "reno-supply",
    serviceName: "Renô Supply",
    leadCategory: "suprimentos_kits",
    ctaLabel: "Solicitar cotação técnica",
    formTitle: "Solicitar Cotação Técnica de Equipamentos e Kits",
    formSubtitle:
      "Especifique a necessidade do seu projeto para cotação comparativa com verificação prévia de compatibilidade elétrica.",
    whatsappIntro:
      "Olá, equipe Renô Supply! Gostaria de solicitar uma cotação técnica de equipamentos fotovoltaicos:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Proposta existente, lista de materiais ou memorial (PDF/XLSX)",
      deliveryInstruction:
        "Caso já possua uma cotação de distribuidor para comparação técnica, você poderá enviá-la diretamente no WhatsApp ou E-mail após gerar este resumo.",
    },
    specificFields: [
      {
        name: "cityState",
        label: "Município / UF de Entrega *",
        type: "text",
        required: true,
        placeholder: "Ex.: São João da Boa Vista - SP",
      },
      {
        name: "targetPowerKwp",
        label: "Potência Pretendida (kWp / kW) *",
        type: "text",
        required: true,
        placeholder: "Ex.: 45 kWp, 112 kWp, 500 kWp",
      },
      {
        name: "structureType",
        label: "Tipo de Estrutura de Fixação *",
        type: "select",
        required: true,
        options: [
          { value: "telhado_metalico", label: "Telhado Metálico / Trapezoidal" },
          { value: "telhado_fibrocimento", label: "Telhado Fibrocimento" },
          { value: "telhado_ceramico", label: "Telhado Cerâmico / Colonial" },
          { value: "laje", label: "Laje Plana / Triângulo" },
          { value: "solo", label: "Estrutura de Solo / Carport" },
          { value: "sem_estrutura", label: "Apenas Módulos e Inversores (Sem Estrutura)" },
        ],
      },
      {
        name: "preferredBrands",
        label: "Especificação / Tensão de Rede / Preferências Técnicas",
        type: "text",
        required: false,
        placeholder: "Ex.: Trifásico 380V, inversor string ou microinversor...",
      },
      {
        name: "purchaseTimeline",
        label: "Prazo Pretendido para Aquisição",
        type: "select",
        required: false,
        options: [
          { value: "imediato", label: "Imediato (Obra já aprovada/fechada)" },
          { value: "15_30_dias", label: "Em 15 a 30 dias" },
          { value: "orcamento_cliente", label: "Em fase de orçamento para cliente final" },
        ],
      },
    ],
  },

  "reno-projetos": {
    serviceSlug: "reno-projetos",
    serviceName: "Renô Projetos",
    leadCategory: "turnkey_usina",
    ctaLabel: "Solicitar projeto completo",
    formTitle: "Solicitar Estudo e Projeto Completo de Usina Solar",
    formSubtitle:
      "Engenharia executiva, suprimentos, implantação e homologação integrados sob responsabilidade técnica da Renovera.",
    whatsappIntro:
      "Olá, equipe Renô Projetos! Gostaria de solicitar um estudo para implantação completa de usina fotovoltaica:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Fatura de energia recente e fotos do local/padrão de entrada",
      deliveryInstruction:
        "Após gerar sua solicitação, nossa engenharia solicitará a fatura de energia atualizada pelo canal oficial para dimensionamento preciso.",
    },
    specificFields: [
      {
        name: "cityState",
        label: "Município / UF da Unidade Consumidora *",
        type: "text",
        required: true,
        placeholder: "Ex.: Campinas - SP, Poços de Caldas - MG...",
      },
      {
        name: "monthlyConsumptionOrBill",
        label: "Consumo Médio Mensal (kWh) ou Valor da Fatura (R$) *",
        type: "text",
        required: true,
        placeholder: "Ex.: 12.000 kWh/mês ou R$ 9.500,00/mês",
      },
      {
        name: "propertyType",
        label: "Tipo de Imóvel / Unidade *",
        type: "select",
        required: true,
        options: [
          { value: "empresa_comercio", label: "Comercial / Serviços" },
          { value: "industria", label: "Industrial / Galpão Logístico" },
          { value: "condominio", label: "Condomínio Residencial ou Empresarial" },
          { value: "rural_agronegocio", label: "Propriedade Rural / Agronegócio" },
          { value: "residencia", label: "Residência" },
        ],
      },
      {
        name: "gridConnectionType",
        label: "Enquadramento / Padrão de Entrada",
        type: "select",
        required: false,
        options: [
          { value: "grupo_b_baixa_tensao", label: "Grupo B — Baixa Tensão (Monofásico/Trifásico)" },
          { value: "grupo_a_media_tensao", label: "Grupo A — Média Tensão (Demanda Contratada / Cabine)" },
          { value: "nao_sei", label: "Prefiro que a engenharia avalie pela fatura" },
        ],
      },
      {
        name: "availableArea",
        label: "Área Disponível para Instalação",
        type: "select",
        required: false,
        options: [
          { value: "telhado_proprio", label: "Cobertura / Telhado existente no próprio local" },
          { value: "terreno_solo", label: "Terreno em solo próprio ou arrendado" },
          { value: "autoconsumo_remoto", label: "Avaliar geração remota para abater em outras unidades" },
        ],
      },
    ],
  },

  "reno-performance": {
    serviceSlug: "reno-performance",
    serviceName: "Renô Performance",
    leadCategory: "monitoramento_om",
    ctaLabel: "Solicitar gestão e monitoramento",
    formTitle: "Solicitar Monitoramento e Gestão Operacional da Usina",
    formSubtitle:
      "Acompanhamento de indicadores de geração, diagnóstico de anomalias e relatórios técnicos periódicos.",
    whatsappIntro:
      "Olá, equipe Renô Performance! Gostaria de solicitar avaliação para gestão e monitoramento de ativo solar:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Relatório da plataforma de monitoramento ou memorial da usina",
      deliveryInstruction:
        "Credenciais de visualização ou relatórios históricos da planta deverão ser compartilhados exclusivamente em canal privado após o primeiro contato.",
    },
    specificFields: [
      {
        name: "installedPowerKwp",
        label: "Potência Instalada da Usina (kWp / MWp) *",
        type: "text",
        required: true,
        placeholder: "Ex.: 150 kWp, 500 kWp, 1,2 MWp",
      },
      {
        name: "inverterBrandPlatform",
        label: "Fabricante dos Inversores / Plataforma Atual *",
        type: "text",
        required: true,
        placeholder: "Ex.: Sungrow (iSolarCloud), Huawei (FusionSolar), Deyé, Fronius...",
      },
      {
        name: "cityState",
        label: "Localização da Usina (Município / UF) *",
        type: "text",
        required: true,
        placeholder: "Ex.: Ribeirão Preto - SP",
      },
      {
        name: "currentIssueStatus",
        label: "Situação Operacional Atual",
        type: "select",
        required: false,
        options: [
          { value: "operando_sem_gestao", label: "Operando, mas sem acompanhamento técnico estruturado" },
          { value: "geracao_abaixo_esperado", label: "Geração abaixo da estimativa / Suspeita de perdas" },
          { value: "falhas_alarmes", label: "Inversores com falhas, desarmes ou desconexão frequente" },
          { value: "auditoria_creditos", label: "Necessidade de conferência de faturas e rateio de créditos" },
        ],
      },
    ],
  },

  "reno-invest": {
    serviceSlug: "reno-invest",
    serviceName: "Renô Invest",
    leadCategory: "investimento_solar",
    ctaLabel: "Avaliar investimento em energia solar",
    formTitle: "Solicitar Estudo de Estruturação para Investimento Solar",
    formSubtitle:
      "Análise técnica, regulatória e econômico-financeira de cenários para implantação de usinas fotovoltaicas.",
    whatsappIntro:
      "Olá, equipe Renô Invest! Gostaria de avaliar a estruturação técnica e financeira de um investimento em usina solar:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Dados preliminares da área ou estudo existente",
      deliveryInstruction:
        "Estudos de viabilidade consideram premissas técnicas e tarifárias vigentes, sem promessa de rentabilidade fixa. Documentos de área podem ser encaminhados na sequência.",
    },
    specificFields: [
      {
        name: "targetRegion",
        label: "Região / UF de Interesse ou da Área *",
        type: "text",
        required: true,
        placeholder: "Ex.: Interior de SP (Área CPFL), Sul de MG (Cemig)...",
      },
      {
        name: "investmentObjective",
        label: "Objetivo Principal do Empreendimento *",
        type: "select",
        required: true,
        options: [
          { value: "locacao_geracao_compartilhada", label: "Implantação de usina para locação / geração compartilhada" },
          { value: "autoconsumo_grupo_empresarial", label: "Autoconsumo remoto para unidades do próprio grupo" },
          { value: "avaliacao_terreno_existente", label: "Avaliar viabilidade de conexão em terreno próprio já disponível" },
          { value: "due_diligence_ativo", label: "Due diligence técnica de projeto ou usina existente" },
        ],
      },
      {
        name: "capitalRange",
        label: "Faixa Estimada de Capacidade ou Aporte (opcional)",
        type: "select",
        required: false,
        options: [
          { value: "ate_75kw", label: "Microgeração (até 75 kW)" },
          { value: "75kw_a_500kw", label: "Minigeração (75 kW a 500 kW)" },
          { value: "acima_500kw", label: "Minigeração / Usina de Solo (acima de 500 kW a 3 MW)" },
          { value: "a_definir", label: "A definir conforme estudo de viabilidade" },
        ],
      },
      {
        name: "landAvailability",
        label: "Disponibilidade de Área / Terreno",
        type: "select",
        required: false,
        options: [
          { value: "possui_area", label: "Já possuo terreno ou cobertura definida" },
          { value: "busca_prospeccao", label: "Preciso de apoio na avaliação e seleção de área" },
        ],
      },
    ],
  },

  "reno-protect": {
    serviceSlug: "reno-protect",
    serviceName: "Renô Protect",
    leadCategory: "seguro_protecao",
    ctaLabel: "Solicitar cotação de proteção da usina",
    formTitle: "Solicitar Avaliação e Cotação de Proteção para Usina Solar",
    formSubtitle:
      "Orientação técnica e encaminhamento de cotação securitária junto a parceiros habilitados para ativos fotovoltaicos.",
    whatsappIntro:
      "Olá, equipe Renô Protect! Gostaria de solicitar uma avaliação e cotação de proteção para sistema fotovoltaico:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Nota fiscal dos equipamentos ou resumo técnico da usina",
      deliveryInstruction:
        "As coberturas, franquias e condições finais dependem de análise e emissão por seguradora/corretora habilitada. Notas fiscais poderão ser enviadas na etapa de proposta.",
    },
    specificFields: [
      {
        name: "cityState",
        label: "Município / UF de Instalação da Usina *",
        type: "text",
        required: true,
        placeholder: "Ex.: Mogi Guaçu - SP",
      },
      {
        name: "installedPowerKwp",
        label: "Potência do Sistema (kWp) *",
        type: "text",
        required: true,
        placeholder: "Ex.: 35 kWp, 150 kWp, 1 MWp",
      },
      {
        name: "installationTopology",
        label: "Local de Instalação do Sistema *",
        type: "select",
        required: true,
        options: [
          { value: "telhado_comercial_industrial", label: "Telhado Comercial ou Industrial" },
          { value: "telhado_residencial_condominio", label: "Telhado Residencial ou Condomínio" },
          { value: "usina_solo", label: "Usina em Solo" },
          { value: "rural", label: "Propriedade Rural" },
        ],
      },
      {
        name: "estimatedAssetValue",
        label: "Valor Aproximado do Sistema / Equipamentos (R$) *",
        type: "text",
        required: true,
        placeholder: "Ex.: R$ 180.000,00",
      },
    ],
  },

  "reno-engenharia": {
    serviceSlug: "reno-engenharia",
    serviceName: "Renô Engenharia",
    leadCategory: "engenharia_multidisciplinar",
    ctaLabel: "Falar com a engenharia",
    formTitle: "Solicitar Projeto ou Consultoria de Engenharia Elétrica",
    formSubtitle:
      "Projetos elétricos BT/MT, entradas de energia, subestações, proteção, automação, bombeamento solar e eficiência.",
    whatsappIntro:
      "Olá, equipe Renô Engenharia! Gostaria de conversar sobre uma demanda de engenharia elétrica / soluções técnicas:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Plantas existentes, unifilar ou relação de cargas",
      deliveryInstruction:
        "Plantas em DWG/PDF e levantamentos existentes poderão ser compartilhados diretamente com o engenheiro responsável após a abertura deste atendimento.",
    },
    specificFields: [
      {
        name: "facilityType",
        label: "Tipo de Empreendimento *",
        type: "select",
        required: true,
        options: [
          { value: "industria", label: "Indústria / Planta Fabril" },
          { value: "comercio_servicos", label: "Empreendimento Comercial / Corporativo" },
          { value: "condominio", label: "Condomínio Residencial ou Logístico" },
          { value: "agronegocio_rural", label: "Propriedade Rural / Irrigação" },
          { value: "residencia_alto_padrao", label: "Residência" },
        ],
      },
      {
        name: "cityState",
        label: "Município / UF *",
        type: "text",
        required: true,
        placeholder: "Ex.: São João da Boa Vista - SP",
      },
      {
        name: "engineeringScope",
        label: "Escopo Principal Desejado *",
        type: "select",
        required: true,
        options: [
          { value: "projeto_bt_mt_subestacao", label: "Projeto Elétrico BT/MT, Padrão de Entrada ou Subestação" },
          { value: "estudos_protecao_laudos", label: "Estudos de Proteção, Aterramento, SPDA ou Laudo Técnico" },
          { value: "automacao_controle", label: "Automação, Controle de Demanda / Zero Export" },
          { value: "bombeamento_solar", label: "Bombeamento Solar para Irrigação / Abastecimento" },
          { value: "luminotecnico_cftv", label: "Projeto Luminotécnico, Eficiência Energética ou CFTV" },
        ],
      },
      {
        name: "voltageAndLoad",
        label: "Tensão Existente / Demanda ou Carga Estimada (opcional)",
        type: "text",
        required: false,
        placeholder: "Ex.: 220V/380V, Cabine 13,8 kV, 300 kVA...",
      },
    ],
  },

  "reno-partner": {
    serviceSlug: "reno-partner",
    serviceName: "Renô Partner",
    leadCategory: "credenciamento_parceiro",
    ctaLabel: "Quero ser parceiro Renô",
    formTitle: "Solicitar Avaliação de Credenciamento — Renô Partner",
    formSubtitle:
      "Cadastro inicial para integradores e equipes técnicas que desejam atuar como parceiros operacionais homologados pela Renovera.",
    whatsappIntro:
      "Olá, equipe Renovera! Gostaria de submeter nossa candidatura ao programa de parceria operacional Renô Partner:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Certificados NR-10/NR-35, registro CREA/CFT e portfólio de obras",
      deliveryInstruction:
        "Importante: O envio deste cadastro inicia a etapa de avaliação técnica e documental. O credenciamento não é automático e depende de validação de engenharia e contrato específico.",
    },
    specificFields: [
      {
        name: "cnpj",
        label: "CNPJ da Empresa Parceira *",
        type: "text",
        required: true,
        placeholder: "00.000.000/0001-00",
      },
      {
        name: "serviceRegion",
        label: "Cidade-Base, UF e Raio de Atendimento (km) *",
        type: "text",
        required: true,
        placeholder: "Ex.: Bauru - SP (atendimento em raio de 150 km)",
      },
      {
        name: "teamStructure",
        label: "Estrutura de Equipe e Certificações (NR-10 / NR-35 / CREA / CFT) *",
        type: "select",
        required: true,
        options: [
          { value: "equipe_propria_certificada", label: "Equipe própria com NR-10, NR-35 e responsável técnico" },
          { value: "engenharia_e_montagem", label: "Empresa de engenharia e montagem (BT e MT)" },
          { value: "instalador_autonomo_equipe", label: "Equipe de instalação fotovoltaica em processo de expansão" },
        ],
      },
      {
        name: "portfolioExperience",
        label: "Experiência Comprovada (Porte de Usinas Já Instaladas) *",
        type: "text",
        required: true,
        placeholder: "Ex.: +40 usinas residenciais/comerciais até 75 kW; 3 usinas de solo...",
      },
    ],
  },

  "reno-energy-hub": {
    serviceSlug: "reno-energy-hub",
    serviceName: "Renô Energy Hub",
    leadCategory: "eletromobilidade_mt",
    ctaLabel: "Avaliar implantação de eletroposto",
    formTitle: "Solicitar Estudo para Eletroposto ou Infraestrutura MT/BT",
    formSubtitle:
      "Avaliação de demanda, adequação de entrada de energia, subestações e infraestrutura de recarga AC e DC para veículos elétricos.",
    whatsappIntro:
      "Olá, equipe Renô Energy Hub! Gostaria de avaliar a viabilidade de infraestrutura de recarga veicular / adequação de potência:",
    attachmentPolicy: {
      hasPrivateStorage: false,
      acceptedFormatsLabel: "Fatura de energia, planta do estacionamento e foto do QGBT/cabine",
      deliveryInstruction:
        "Configurações AC (7,4 a 22 kW) e DC (30, 60 e 120 kW) são dimensionadas conforme a capacidade real do barramento e estudo de demanda NBR 17019.",
    },
    specificFields: [
      {
        name: "cityState",
        label: "Município / UF ou Endereço Aproximado *",
        type: "text",
        required: true,
        placeholder: "Ex.: Rodovia SP-340 / Campinas - SP",
      },
      {
        name: "availableVoltageAndDemand",
        label: "Tensão Disponível e Demanda Existente *",
        type: "select",
        required: true,
        options: [
          { value: "bt_trifasico", label: "Baixa Tensão Trifásica (220V / 380V)" },
          { value: "mt_cabine_primaria", label: "Média Tensão com Subestação Própria (13,8 kV / 34,5 kV)" },
          { value: "nova_ligacao_aumento_carga", label: "Nova Ligação ou Necessidade de Aumento de Carga" },
          { value: "a_avaliar", label: "A avaliar pela engenharia" },
        ],
      },
      {
        name: "targetChargerConfig",
        label: "Configuração Pretendida e Nº de Vagas *",
        type: "select",
        required: true,
        options: [
          { value: "ac_ate_22kw", label: "Recarga Semirrápida AC (7,4 kW a 22 kW) — Condomínio / Empresa" },
          { value: "dc_30_60kw", label: "Recarga Rápida DC (30 kW a 60 kW) — Comercial / Frota" },
          { value: "dc_120kw_hub", label: "Hub de Recarga Ultrarrápida DC (60 kW a 120 kW) — Rodovia / Posto" },
          { value: "apenas_subestacao_mt", label: "Adequação de Subestação / Entrada de Energia (Sem VE)" },
        ],
      },
      {
        name: "usageProfileAndDistance",
        label: "Perfil de Uso e Distância Aproximada ao Quadro/Subestação",
        type: "text",
        required: false,
        placeholder: "Ex.: Uso público tarifado, 4 vagas, ~35 metros até o QGBT",
      },
    ],
  },
};

export function getServiceFormSchema(serviceSlug?: string): ServiceFormSchema {
  if (serviceSlug && SERVICE_FORM_SCHEMAS[serviceSlug]) {
    return SERVICE_FORM_SCHEMAS[serviceSlug];
  }
  return SERVICE_FORM_SCHEMAS["reno-adviser"];
}
