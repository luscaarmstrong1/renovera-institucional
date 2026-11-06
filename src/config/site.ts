export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/renoveraoficial/',
  instagram: 'https://www.instagram.com/renoveraoficial/',
  facebook: 'https://www.facebook.com/renoveraoficial',
} as const;

export const SITE = {
  name: 'RENOVERA',
  shortName: 'Renovera',
  fullName: 'Renovera Energias Renováveis Ltda',
  role: 'Energia Solar, Engenharia Elétrica & Consultoria Regulatória',
  secondaryRole: 'Ecossistema de Soluções Energéticas',
  headline: 'Renovera | Energia Solar, Engenharia e Soluções Integradas',
  positioning:
    'A Renovera une engenharia de precisão, conhecimento regulatório e tecnologia de ponta para viabilizar projetos solares e empreendimentos energéticos com solidez e visão de longo prazo.',
  heroTitlePrimary: 'ENERGIA QUE TRANSFORMA',
  heroTitleSecondary: 'ENGENHARIA QUE CONECTA',
  heroHeadline: 'Energia que transforma. Engenharia que conecta.',
  heroSubheadline:
    'Soluções integradas para o futuro da energia: engenharia elétrica, geração fotovoltaica, consultoria regulatória, gestão de ativos e infraestrutura energética em uma atuação integrada.',
  heroDomains: 'Energia Solar • Engenharia Elétrica • Consultoria Regulatória',
  marqueeText: 'Engenharia • Energia Solar • Consultoria Regulatória • Inovação • Resultados',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://renovera-institucional.vercel.app',
  email: 'contato@renovera.com.br',
  complianceEmail: 'compliance@renovera.com.br',
  whatsappNumber: '5519996514827',
  whatsappDisplay: '(19) 99651-4827',
  location: 'São João da Boa Vista, SP',
  coverage: 'Atuação e homologação em âmbito nacional',
  metrics: [
    {
      value: '+150',
      label: 'usinas solares entregues',
      detail: 'Projetos completos com engenharia executiva e homologação aprovada',
    },
    {
      value: 'Renô Adviser™',
      label: 'solução regulatória',
      detail: 'Referência em reversão de indeferimentos e auditoria de inversão de fluxo',
    },
    {
      value: 'Desde 2020',
      label: 'solidez institucional',
      detail: 'Equipe multidisciplinar em engenharia, legislação e gestão de usinas',
    },
  ],
  officialStats: {
    adviserPlantsSold: '450+',
    adviserCapacityMWp: '30 MWp',
    adviserStatesServed: '15 Estados',
    projectsPlantsInstalled: '100+',
    projectsCapacityMWp: '2 MWp',
    projectsStatesServed: '12 Estados',
    totalPlantsDelivered: '+150',
    foundedYear: 2020,
  },
  about: {
    title: 'Uma empresa. Um ecossistema de soluções.',
    subtitle: 'Engenharia, conhecimento e inovação para transformar o setor energético.',
    paragraphs: [
      'Fundada em 2020, a Renovera desenvolve soluções para o mercado de energia, integrando engenharia elétrica, análise regulatória profunda, gestão de ativos e tecnologia.',
      'Sua atuação contempla diferentes etapas do ciclo de um empreendimento, desde a avaliação inicial e estruturação técnica até a implantação, o acompanhamento e a gestão operacional.',
      'Somos referência em conectar a força técnica da engenharia ao embasamento técnico-regulatório e jurídico perante concessionárias de energia, descomplicando processos de conexão e geração distribuída.',
      'Do estudo de inversão de fluxo à entrega de usinas completas e infraestrutura de recarga veicular, a Renovera entrega previsibilidade técnica, conformidade normativa e eficiência operacional aos seus parceiros e clientes.',
    ],
  },
  ctas: {
    headerPrimary: 'Falar com a Renovera',
    heroPrimary: 'Explorar soluções',
    heroSecondary: 'Falar com a Renovera',
    featuredProject: 'Conhecer categoria técnica',
    finalLinkedin: 'Conectar no LinkedIn',
    finalContact: 'Fale com a Renovera',
  },
  seo: {
    title: 'Renovera | Energia Solar, Engenharia e Soluções Integradas',
    description:
      'Conheça as soluções da Renovera em energia solar, engenharia elétrica, consultoria regulatória, gestão de ativos e infraestrutura energética.',
  },
  nome: 'Renovera',
  nomeCompleto: 'Renovera Energias Renováveis Ltda',
  cargo: 'Energia Solar & Engenharia Integrada',
  descricao:
    'A Renovera une engenharia de precisão, conhecimento regulatório e tecnologia de ponta para viabilizar projetos solares e empreendimentos energéticos em todo o Brasil.',
  linkedin: SOCIAL_LINKS.linkedin,
  linkedinHandle: '@renoveraoficial',
  instagram: SOCIAL_LINKS.instagram,
  instagramHandle: '@renoveraoficial',
  facebook: SOCIAL_LINKS.facebook,
  contato: '/contato',
  avaliacao: '/contato',
  api: '/api/contact',
} as const;

export function linkWhatsApp(mensagem?: string): string {
  const texto =
    mensagem ||
    'Olá! Gostaria de conversar com a equipe técnica da Renovera sobre soluções de energia solar e engenharia.';
  return `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(texto)}`;
}

export function linkEmail(assunto?: string, corpo?: string): string {
  const s = encodeURIComponent(assunto || 'Contato Institucional — Renovera Energias Renováveis');
  const b = encodeURIComponent(
    corpo || 'Olá, equipe Renovera!\n\nGostaria de solicitar informações sobre suas soluções técnicas e serviços de engenharia.\n'
  );
  return `mailto:${SITE.email}?subject=${s}&body=${b}`;
}

export const linkContatoEmail = linkEmail;

/* --------------------------------------------------------------------------
   OS 9 PRODUTOS OFICIAIS RENÔ (PORTFÓLIO CANÔNICO DA RENOVERA)
-------------------------------------------------------------------------- */
export interface RenoProduct {
  id: string;
  name: string;
  badge: string;
  category: string;
  headline: string;
  description: string;
  highlights: string[];
  audience: string;
  idealFor: string[];
  deliverables: string[];
  image: string;
  icon: string;
  slug: string;
  tag: string;
}

export const RENO_PRODUCTS: RenoProduct[] = [
  {
    id: "reno-adviser",
    name: "Renô Adviser™",
    badge: "Assessoria Técnico-Regulatória",
    category: "Consultoria Regulatória & Conexão",
    headline: "Assessoria Especializada em Homologação e Conexão na Rede",
    description:
      "Assessoria especializada em homologação de projetos fotovoltaicos de ponta a ponta. Atuamos na reversão de indeferimentos, com foco principal em Inversão de Fluxo de Potência, solucionando entraves técnicos ou regulatórios impostos pelas concessionárias perante o PRODIST e resoluções da ANEEL.",
    highlights: [
      "Homologação ponta a ponta junto a distribuidoras",
      "Reversão técnica e administrativa de indeferimentos",
      "Especialidade em estudos de Inversão de Fluxo de Potência",
      "Fundamentação estrita no Marco Legal e REN ANEEL nº 1.000/2021"
    ],
    audience: "Integradores solares, investidores, empreendimentos comerciais e indústrias com processos de conexão pendentes.",
    idealFor: ["Integradores", "Empresas"],
    deliverables: [
      "Parecer Técnico de Auditoria de Fluxo",
      "Peça de Recurso Administrativo Fundamentada",
      "Memórias de Cálculo e Modelagem de Curva de Carga",
      "Acompanhamento até a emissão conclusiva do Parecer de Acesso"
    ],
    image: "/assets/renovera/produtos/reno-01-adviser.webp",
    icon: "/assets/renovera/solucoes/icon-reno-adviser.svg",
    slug: "reno-adviser",
    tag: "Homologação & Conexão"
  },
  {
    id: "reno-projetos",
    name: "Renô Projetos",
    badge: "Solução Completa Turnkey",
    category: "Usinas Fotovoltaicas Ponta a Ponta",
    headline: "Serviço Completo Turnkey de Usinas Fotovoltaicas",
    description:
      "O Renô Projetos é o serviço 'ponta a ponta' da Renovera. Cuidamos de todas as etapas: engenharia executiva, aquisição de equipamentos selecionados, montagem com rigor técnico e homologação. Inclui a expertise preventiva do Renô Adviser™ na condução do acesso junto à concessionária.",
    highlights: [
      "Engenharia executiva completa em MT e BT",
      "Compra direta de equipamentos de padrão mundial",
      "Instalação qualificada e comissionamento",
      "Homologação preventiva inclusa junto à concessionária"
    ],
    audience: "Empresas, indústrias, propriedades rurais, condomínios e investidores que buscam implantar geração solar com engenharia executiva e gestão técnica integrada.",
    idealFor: ["Empresas", "Condomínios"],
    deliverables: [
      "Projeto Executivo CC e CA com ART",
      "Memorial Descritivo do Gerador Fotovoltaico",
      "Usina Comissionada e em Operação Comercial",
      "Documentação As-Built e Prontuário de Instalação"
    ],
    image: "/assets/renovera/produtos/reno-02-projetos.webp",
    icon: "/assets/renovera/solucoes/icon-reno-projetos.svg",
    slug: "reno-projetos",
    tag: "Usinas Completas"
  },
  {
    id: "reno-performance",
    name: "Renô Performance",
    badge: "Gestão Ativa & Telemetria",
    category: "Monitoramento e Inteligência Operacional",
    headline: "Gestão de Dados e Monitoramento Remoto Inteligente",
    description:
      "Serviço de gestão de dados e acompanhamento remoto que monitora o desempenho da sua usina solar para apoiar a disponibilidade e a eficiência operacional. Identifica quedas de geração causadas por sujidade, falhas em strings ou anomalias elétricas, emitindo alertas e orientando o diagnóstico remoto.",
    highlights: [
      "Monitoramento remoto e acompanhamento operacional",
      "Detecção de perdas por sujidade, sombras e desvios elétricos",
      "Diagnóstico remoto de inversores e componentes",
      "Relatórios periódicos de produtividade e desempenho energético"
    ],
    audience: "Proprietários de usinas solares de geração própria ou remota, empresas e gestores de portfólios fotovoltaicos.",
    idealFor: ["Empresas", "Investidores"],
    deliverables: [
      "Dashboard de Telemetria Integrado",
      "Painel de Alertas Operacionais",
      "Relatório Periódico de Performance e Curva de Geração",
      "Plano de Ação Corretiva para Manutenção Preventiva"
    ],
    image: "/assets/renovera/produtos/reno-03-performance.webp",
    icon: "/assets/renovera/solucoes/icon-reno-performance.svg",
    slug: "reno-performance",
    tag: "Monitoramento Remoto"
  },
  {
    id: "reno-invest",
    name: "Renô Invest",
    badge: "Estruturação de Ativos",
    category: "Investimentos em Energia Sustentável",
    headline: "Investimento Estruturado em Ativos Solares",
    description:
      "Solução voltada para investidores que buscam retorno consistente através da geração distribuída. Viabilizamos o empreendimento de ponta a ponta: análise minuciosa de viabilidade econômico-financeira, prospecção e locação de áreas ideais, implantação de usina e integração nativa ao Renô Performance.",
    highlights: [
      "Análise de viabilidade financeira completa (VPL, TIR e Payback)",
      "Prospecção, negociação e locação de terrenos estratégicos",
      "Engenharia executiva, construção e condução integral da homologação",
      "Monitoramento ativo e suporte à gestão de créditos energéticos"
    ],
    audience: "Investidores institucionais, family offices, condomínios e proprietários de terras interessados em estruturar ativos de geração solar.",
    idealFor: ["Investidores", "Condomínios"],
    deliverables: [
      "Modelagem Financeira e Estudo de Retorno",
      "Laudo de Viabilidade Fundiária e de Acesso à Rede",
      "Empreendimento Fotovoltaico Pronto e Homologado",
      "Contratos Operacionais e de Gestão de Ativos"
    ],
    image: "/assets/renovera/produtos/reno-04-invest.webp",
    icon: "/assets/renovera/solucoes/icon-reno-invest.svg",
    slug: "reno-invest",
    tag: "Ativos & Viabilidade"
  },
  {
    id: "reno-protect",
    name: "Renô Protect",
    badge: "Seguro Especializado",
    category: "Proteção Patrimonial & Riscos Climáticos",
    headline: "Seguro Especializado para Usinas e Ativos Fotovoltaicos",
    description:
      "Seguro desenhado especificamente para as necessidades técnicas do setor solar. Protege seu ativo contra danos da natureza (vendavais, tempestades de granizo, raios), panes e danos elétricos, além de cobertura contra roubo e furto de módulos, cabos e inversores conforme apólice contratada.",
    highlights: [
      "Cobertura contra eventos climáticos severos (vendaval e granizo)",
      "Proteção contra descargas atmosféricas e danos elétricos",
      "Cobertura de roubo e furto qualificado de componentes",
      "Apólices sob medida para usinas de solo e de cobertura"
    ],
    audience: "Proprietários e operadores de usinas fotovoltaicas comerciais, industriais, condominiais e de investimento.",
    idealFor: ["Empresas", "Investidores", "Condomínios"],
    deliverables: [
      "Apólice de Seguro Especializado para Ativos Fotovoltaicos",
      "Condições e Limites de Cobertura Documentados",
      "Suporte Especializado na Regulação de Sinistros Técnicos"
    ],
    image: "/assets/renovera/produtos/reno-05-protect.webp",
    icon: "/assets/renovera/solucoes/icon-reno-protect.svg",
    slug: "reno-protect",
    tag: "Proteção Patrimonial"
  },
  {
    id: "reno-supply",
    name: "Renô Supply",
    badge: "Suprimentos Técnicos",
    category: "Equipamentos & Suprimentos Fotovoltaicos",
    headline: "Central de Suprimentos com Avaliação Técnica Prévia",
    description:
      "Sua central de suprimentos de componentes e kits solares. Oferecemos módulos e inversores de marcas mundiais reconhecidas com avaliação técnica prévia da compatibilidade elétrica, evitando divergências de engenharia e retrabalho na montagem em campo.",
    highlights: [
      "Módulos e inversores certificados de marcas mundiais",
      "Análise prévia de compatibilidade elétrica de strings e tensão",
      "Logística eficiente e suporte técnico direto para integradores",
      "Garantia oficial de fabricantes e suporte pós-venda especializado"
    ],
    audience: "Integradores solares parceiros, instaladores e empresas de engenharia elétrica.",
    idealFor: ["Integradores", "Empresas"],
    deliverables: [
      "Kits Fotovoltaicos com Dimensionamento Conforme Demanda",
      "Fichas Técnicas e Certificados INMETRO dos Equipamentos",
      "Suporte na Configuração e Parametrização em Campo"
    ],
    image: "/assets/renovera/produtos/reno-06-supply.webp",
    icon: "/assets/renovera/solucoes/icon-reno-supply.svg",
    slug: "reno-supply",
    tag: "Kits & Equipamentos"
  },
  {
    id: "reno-engenharia",
    name: "Renô Engenharia",
    badge: "Engenharia Multidisciplinar",
    category: "Projetos Elétricos, Automação & Eficiência",
    headline: "Soluções Integradas em Infraestrutura, Automação e Tecnologia",
    description:
      "Engenharia multidisciplinar focada em eficiência energética, automação e segurança. Desenvolvemos projetos elétricos personalizados, sistemas de bombeamento solar para irrigação rural, automação residencial/predial inteligente, projetos luminotécnicos de alto rendimento e sistemas de CFTV/segurança patrimonial.",
    highlights: [
      "Bombeamento solar autônomo para irrigação agrícola e pecuária",
      "Automação inteligente de iluminação, climatização e cargas",
      "Projetos luminotécnicos de alta eficiência para redução de consumo",
      "Sistemas integrados de CFTV com monitoramento patrimonial remoto"
    ],
    audience: "Condomínios, residências, indústrias, produtores rurais e empreendimentos comerciais.",
    idealFor: ["Residências", "Empresas", "Eletropostos"],
    deliverables: [
      "Projetos Executivos Elétricos e de Automação",
      "Plantas Luminotécnicas e Diagramas de CFTV",
      "Dimensionamento Hidráulico e Fotovoltaico de Bombeamento",
      "ART de Projeto e Execução"
    ],
    image: "/assets/renovera/produtos/reno-07-engenharia.webp",
    icon: "/assets/renovera/solucoes/icon-reno-engenharia.svg",
    slug: "reno-engenharia",
    tag: "Multidisciplinar"
  },
  {
    id: "reno-partner",
    name: "Renô Partner",
    badge: "Parceria Operacional",
    category: "Rede de Integradores Homologados",
    headline: "Programa de Parceria Operacional para Integradores Locais",
    description:
      "Programa que seleciona e homologa integradores com alto padrão técnico em todo o território nacional. A Renovera assume a venda, engenharia executiva e aprovação do projeto na concessionária; o Partner homologado executa com exclusividade a montagem física e ativação da usina.",
    highlights: [
      "Homologação rigorosa de integradores locais",
      "Renovera lidera venda, engenharia e aprovação na concessionária",
      "Partner executa instalação e comissionamento com suporte técnico",
      "Ampliação da capacidade de atendimento e ganho de escala mútuo"
    ],
    audience: "Integradores solares e instaladores qualificados que buscam crescer sem o gargalo dos trâmites regulatórios de concessionária.",
    idealFor: ["Integradores", "Empresas"],
    deliverables: [
      "Credenciamento Técnico Oficial Renô Partner",
      "Projetos Aprovados Prontos para Execução em Campo",
      "Treinamentos de Protocolo de Qualidade e Segurança",
      "Remuneração Transparente por Serviço de Instalação Realizado"
    ],
    image: "/assets/renovera/produtos/reno-08-partner.webp",
    icon: "/assets/renovera/solucoes/icon-reno-partner.svg",
    slug: "reno-partner",
    tag: "Rede de Parceiros"
  },
  {
    id: "reno-energy-hub",
    name: "Renô Energy Hub",
    badge: "Infraestrutura de Rede & VE",
    category: "Média Tensão, Subestações & Eletromobilidade",
    headline: "Infraestrutura Elétrica, Subestações e Mobilidade Elétrica",
    description:
      "Especialistas em soluções de média e baixa tensão para garantir que sua infraestrutura suporte expansões de carga e novas tecnologias. Atuamos desde a modernização de padrões de entrada até subestações abrigadas de média tensão e implantação de infraestrutura para recarga de veículos elétricos (VE).",
    highlights: [
      "Projetos e execução de subestações abrigadas e aumento de carga",
      "Infraestrutura completa para recarga de veículos elétricos AC e DC",
      "Reforma de padrão de entrada e revisão geral de instalações",
      "Conformidade técnica com as normas das distribuidoras de energia"
    ],
    audience: "Shopping centers, condomínios, frotas corporativas, indústrias, redes de postos e empreendimentos com alta demanda elétrica.",
    idealFor: ["Empresas", "Condomínios", "Eletropostos"],
    deliverables: [
      "Projeto Executivo de Entrada de Energia e Subestação",
      "Estudo de Demanda e Dimensionamento para Carregadores VE",
      "Quadro Geral de Baixa Tensão (QGBT) e Proteções Específicas",
      "Homologação e Liberação de Carga perante a Distribuidora"
    ],
    image: "/assets/renovera/produtos/reno-09-energy-hub.webp",
    icon: "/assets/renovera/solucoes/icon-reno-energy-hub.svg",
    slug: "reno-energy-hub",
    tag: "Subestações & VE"
  }
];

/* --------------------------------------------------------------------------
   DIFERENCIAIS COMPARATIVOS — ABORDAGEM RENOVERA VS FRAGMENTADA
-------------------------------------------------------------------------- */
export interface ComparisonRow {
  isolated: string;
  integrated: string;
}

export const COMPARISON_ITEMS: ComparisonRow[] = [
  {
    isolated: 'Processos conduzidos com visões fragmentadas',
    integrated: 'Engenharia de precisão e segurança jurídica integradas',
  },
  {
    isolated: 'Aceitação passiva de indeferimentos de rede',
    integrated: 'Expertise pioneira com o Renô Adviser™ em reversão de fluxo',
  },
  {
    isolated: 'Equipamentos cotados sem análise técnica prévia',
    integrated: 'Central de suprimentos Renô Supply com pré-validação de engenharia',
  },
  {
    isolated: 'Instalação entregue sem suporte de longo prazo',
    integrated: 'Monitoramento remoto e gestão ativa com Renô Performance',
  },
  {
    isolated: 'Dificuldade de escala para o integrador local',
    integrated: 'Programa Renô Partner com divisão clara de responsabilidades',
  },
  {
    isolated: 'Instalações desprotegidas contra sinistros climáticos',
    integrated: 'Cobertura especializada sob medida com o Renô Protect',
  },
  {
    isolated: 'Gargalos em padrões e ausência de infraestrutura para VE',
    integrated: 'Soluções completas de subestação e eletromobilidade (Energy Hub)',
  },
];

/* --------------------------------------------------------------------------
   CARROSSEL DE PROJETOS & CAPACIDADE TÉCNICA
-------------------------------------------------------------------------- */
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  projectType: string;
  description: string;
  technologies: string[];
  siteUrl: string;
  siteDomain: string;
  image: string;
  metricsBadge: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'sistemas-fotovoltaicos',
    title: 'Engenharia Fotovoltaica & Geração Distribuída',
    category: '01 — Engenharia Fotovoltaica',
    projectType: 'Usinas de Solo e Telhado',
    description:
      'Dimensionamento de geradores solares de alta performance, modelagem de irradiação, distribuição balanceada de strings e engenharia de conexão preventiva perante a distribuidora.',
    technologies: ['Renô Projetos', 'Geração Distribuída', 'Usinas Solares', 'NBR 16690'],
    siteUrl: '/projetos/arquitetura-usina-fotovoltaica-mt-bt',
    siteDomain: 'Arquitetura Fotovoltaica Homologada',
    image: '/assets/renovera/projetos-v5/proj-01-fotovoltaica.webp',
    metricsBadge: 'Usinas de Alta Performance',
  },
  {
    id: 'sistemas-distribuicao',
    title: 'Redes Elétricas & Subestações de Média Tensão',
    category: '02 — Redes e Subestações',
    projectType: 'Infraestrutura Elétrica MT/BT',
    description:
      'Cabines primárias abrigadas de 13,8 kV a 34,5 kV, estudos de coordenação e seletividade de relés, adequação de padrões de entrada e projetos elétricos industriais.',
    technologies: ['Renô Energy Hub', 'Subestações Abrigadas', 'Média Tensão', 'NBR 14039'],
    siteUrl: '/projetos/arquitetura-subestacao-entrada-energia-mt',
    siteDomain: 'Subestações & Rede Elétrica',
    image: '/assets/renovera/projetos-v5/proj-02-subestacoes.webp',
    metricsBadge: 'Média & Baixa Tensão',
  },
  {
    id: 'automacao-infraestrutura',
    title: 'Automação, Telemetria & Controle Zero Export',
    category: '03 — Automação e Controle',
    projectType: 'Telemetria e Diagnóstico Remoto',
    description:
      'Sistemas de supervisão remota, controladores industriais para limitação dinâmica de injeção reversa, monitoramento de grandezas elétricas e diagnóstico operacional remoto.',
    technologies: ['Renô Performance', 'Telemetria Remota', 'Zero Export', 'Modbus TCP'],
    siteUrl: '/projetos/arquitetura-telemetria-controle-zero-export',
    siteDomain: 'Monitoramento & Controle Ativo',
    image: '/assets/renovera/projetos-v5/proj-03-automacao.webp',
    metricsBadge: 'Gestão Ativa & Telemetria',
  },
  {
    id: 'mobilidade-recarga',
    title: 'Infraestrutura de Eletromobilidade & Recarga VE',
    category: '04 — Infraestrutura e Mobilidade',
    projectType: 'Eletropostos DC e AC',
    description:
      'Planejamento elétrico e implantação de hubs de recarga para frotas corporativas e empreendimentos comerciais (22 kW a 120 kW), com balanceamento de carga e protocolo OCPP.',
    technologies: ['Eletropostos VE', 'Recarga DC Rápida', 'Balanceamento de Carga', 'NBR 17019'],
    siteUrl: '/projetos/arquitetura-hub-recarga-veiculos-eletricos',
    siteDomain: 'Infraestrutura de Recarga VE',
    image: '/assets/renovera/projetos-v5/proj-04-mobilidade-ve.webp',
    metricsBadge: 'Recarga 22 a 120 kW',
  },
];

/* --------------------------------------------------------------------------
   SHOWCASE INTERATIVO DAS 9 SOLUÇÕES RENÔ (DAILYMEALS)
-------------------------------------------------------------------------- */
export const INTERACTIVE_SHOWCASE = {
  sectionTitle: 'Um ecossistema. Nove soluções integradas.',
  sectionSubtitle: 'Da viabilidade à operação. Soluções para cada etapa.',
  projectName: 'Ecossistema Corporativo Renovera',
  ctaLabel: 'Ver Detalhes do Produto',
  demoCtaLabel: 'Falar com Especialista',
  stages: RENO_PRODUCTS.map((prod, idx) => ({
    id: prod.id,
    stepLabel: `SOLUÇÃO 0${idx + 1}: ${prod.name.toUpperCase()}`,
    shortNavLabel: `0${idx + 1} • ${prod.name}`,
    titleLine1: prod.name,
    titleLine2: prod.badge,
    subtitle: `${prod.category.toUpperCase()} • RENOVAÇÃO ENERGÉTICA`,
    description: prod.description,
    metrics: prod.tag,
    image: prod.image,
    icon: prod.icon,
    imageAlt: prod.headline,
    demoUrl: `/solucoes/${prod.slug}`,
    detailUrl: `/solucoes/${prod.slug}`,
    githubUrl: `/solucoes/${prod.slug}`,
    technologies: prod.highlights.slice(0, 4),
  })),
};
