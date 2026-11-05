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
  about: {
    title: 'Uma empresa. Um ecossistema de soluções.',
    subtitle: 'Engenharia, conhecimento e inovação para transformar o setor energético.',
    paragraphs: [
      'Fundada em 2020, a Renovera desenvolve soluções para o mercado de energia, integrando engenharia elétrica, análise regulatória profunda, gestão de ativos e tecnologia.',
      'Sua atuação contempla diferentes etapas do ciclo de um empreendimento, desde a avaliação inicial e estruturação técnica até a implantação, o acompanhamento e a gestão operacional.',
      'Somos referência em conectar a força técnica da engenharia ao embasamento técnico-regulatório e jurídico perante concessionárias de energia, descomplicando processos de conexão e geração distribuída.',
      'Do estudo de inversão de fluxo à entrega de usinas completas e infraestrutura de recarga veicular, a Renovera entrega previsibilidade, segurança e máxima rentabilidade aos seus parceiros e clientes.',
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
  contato: '/contato/',
  avaliacao: '/contato/',
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
  deliverables: string[];
  image: string;
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
      "Assessoria especializada em homologação de projetos fotovoltaicos de ponta a ponta. Atuamos na reversão de indeferimentos, com foco principal em Inversão de Fluxo de Potência, solucionando quaisquer entraves técnicos ou regulatórios impostos pelas concessionárias perante o PRODIST e resoluções da ANEEL.",
    highlights: [
      "Homologação ponta a ponta junto a distribuidoras",
      "Reversão técnica e administrativa de indeferimentos",
      "Especialidade em estudos de Inversão de Fluxo de Potência",
      "Fundamentação estrita no Marco Legal e REN ANEEL nº 1.000/2021"
    ],
    audience: "Integradores solares, investidores, empreendimentos comerciais e indústrias com processos de conexão pendentes.",
    deliverables: [
      "Parecer Técnico de Auditoria de Fluxo",
      "Peça de Recurso Administrativo Fundamentada",
      "Memórias de Cálculo e Modelagem de Curva de Carga",
      "Acompanhamento até a emissão conclusiva do Parecer de Acesso"
    ],
    image: "/assets/images/power-systems.webp",
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
      "O Renô Projetos é o serviço 'ponta a ponta' da Renovera. Cuidamos de todas as etapas: engenharia executiva, aquisição dos melhores equipamentos mundiais, montagem com alto rigor técnico e homologação. Inclui a expertise preventiva do Renô Adviser™ para garantir conexão sem entraves.",
    highlights: [
      "Engenharia executiva completa em MT e BT",
      "Compra direta de equipamentos de padrão mundial",
      "Instalação qualificada e comissionamento",
      "Homologação preventiva inclusa com aprovação na concessionária"
    ],
    audience: "Empresas, indústrias, propriedades rurais e investidores que desejam investir em geração solar sem riscos operacionais.",
    deliverables: [
      "Projeto Executivo CC e CA com ART",
      "Memorial Descritivo do Gerador Fotovoltaico",
      "Usina Comissionada e em Operação Comercial",
      "Documentação As-Built e Prontuário de Instalação"
    ],
    image: "/assets/images/solar-engineering.webp",
    slug: "reno-projetos",
    tag: "Usinas Completas"
  },
  {
    id: "reno-performance",
    name: "Renô Performance",
    badge: "Gestão Ativa & Telemetria",
    category: "Monitoramento e Inteligência Operacional",
    headline: "Gestão de Dados e Monitoramento Inteligente 24/7",
    description:
      "Serviço de gestão de dados contínuo que monitora o desempenho da sua usina solar para assegurar máxima produtividade e rentabilidade. Identifica quedas de geração causadas por sujidade, falhas em strings ou anomalias elétricas, emitindo alertas imediatos e iniciando diagnóstico remoto automatizado.",
    highlights: [
      "Monitoramento ativo 24/7 em tempo real",
      "Detecção preditiva de sujidade, sombras e perdas",
      "Diagnóstico remoto de inversores e componentes",
      "Relatórios periódicos de produtividade e rentabilidade financeira"
    ],
    audience: "Proprietários de usinas solares de geração própria ou remota e gestores de portfólios fotovoltaicos.",
    deliverables: [
      "Dashboard de Telemetria Integrado",
      "Painel de Alertas em Tempo Real",
      "Relatório Mensal de Performance e Curva de Geração",
      "Plano de Ação Corretiva para Manutenção Preventiva"
    ],
    image: "/assets/images/data-intelligence.webp",
    slug: "reno-performance",
    tag: "Monitoramento 24/7"
  },
  {
    id: "reno-invest",
    name: "Renô Invest",
    badge: "Estruturação de Ativos",
    category: "Investimentos em Energia Sustentável",
    headline: "Investimento Estruturado em Ativos Solares",
    description:
      "Solução voltada para investidores que buscam rentabilidade consistente através da geração distribuída. Viabilizamos o empreendimento de ponta a ponta: análise minuciosa de viabilidade econômico-financeira, prospecção e locação de áreas ideais, implantação de usina e integração nativa ao Renô Performance.",
    highlights: [
      "Análise de viabilidade financeira completa (VPL, TIR e Payback)",
      "Prospecção, negociação e locação de terrenos estratégicos",
      "Engenharia, construção e homologação garantidas",
      "Monitoramento ativo e suporte à comercialização dos créditos"
    ],
    audience: "Investidores institucionais, family offices e proprietários de terras interessados em transformar sol em fluxo de caixa.",
    deliverables: [
      "Modelagem Financeira e Estudo de Retorno",
      "Laudo de Viabilidade Fundiária e de Acesso à Rede",
      "Empreendimento Fotovoltaico Pronto e Homologado",
      "Contratos Operacionais e de Gestão de Ativos"
    ],
    image: "/assets/images/methodology-office.webp",
    slug: "reno-invest",
    tag: "Ativos & Rentabilidade"
  },
  {
    id: "reno-protect",
    name: "Renô Protect",
    badge: "Seguro Especializado",
    category: "Proteção Patrimonial & Riscos Climáticos",
    headline: "Seguro Especializado para Usinas e Ativos Fotovoltaicos",
    description:
      "Seguro desenhado especificamente para as necessidades técnicas do setor solar. Protege seu investimento contra danos da natureza (vendavais, tempestades de granizo, raios), panes e danos elétricos, além de cobertura contra roubo e furto de módulos, cabos e inversores.",
    highlights: [
      "Cobertura contra eventos climáticos severos (vendaval e granizo)",
      "Proteção contra descargas atmosféricas e danos elétricos",
      "Cobertura ampla de roubo e furto qualificado de componentes",
      "Apólices sob medida para usinas de solo e de cobertura"
    ],
    audience: "Proprietários e operadores de usinas fotovoltaicas comerciais, industriais e de investimento.",
    deliverables: [
      "Apólice de Seguro Especializado para Ativos Fotovoltaicos",
      "Condições e Limites de Cobertura Documentados",
      "Suporte Especializado na Regulação de Sinistros Técnicos"
    ],
    image: "/assets/images/elements/elem-bess-unit.webp",
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
      "Sua central de suprimentos de componentes e kits solares. Oferecemos módulos e inversores das melhores marcas mundiais com avaliação técnica prévia da compatibilidade elétrica, evitando divergências de engenharia e retrabalho na montagem em campo.",
    highlights: [
      "Módulos e inversores certificados Tier 1",
      "Análise prévia de compatibilidade elétrica de strings e tensão",
      "Logística eficiente e suporte técnico direto para integradores",
      "Garantia oficial de fabricantes e suporte pós-venda humanizado"
    ],
    audience: "Integradores solares parceiros, instaladores e empresas de engenharia elétrica.",
    deliverables: [
      "Kits Fotovoltaicos com Dimensionamento Conforme Demanda",
      "Fichas Técnicas e Certificados INMETRO dos Equipamentos",
      "Suporte na Configuração e Parametrização em Campo"
    ],
    image: "/assets/images/elements/elem-inverter.webp",
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
    audience: "Condomínios, indústrias, produtores rurais e empreendimentos comerciais.",
    deliverables: [
      "Projetos Executivos Elétricos e de Automação",
      "Plantas Luminotécnicas e Diagramas de CFTV",
      "Dimensionamento Hidráulico e Fotovoltaico de Bombeamento",
      "ART de Projeto e Execução"
    ],
    image: "/assets/images/ai-automation.webp",
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
    deliverables: [
      "Credenciamento Técnico Oficial Renô Partner",
      "Projetos Aprovados Prontos para Execução em Campo",
      "Treinamentos de Protocolo de Qualidade e Segurança",
      "Remuneração Transparente por Serviço de Instalação Realizado"
    ],
    image: "/assets/images/automation-editorial.webp",
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
      "Conformidade total com as normas das distribuidoras de energia"
    ],
    audience: "Shopping centers, frotas corporativas, indústrias, redes de postos e empreendimentos com alta demanda elétrica.",
    deliverables: [
      "Projeto Executivo de Entrada de Energia e Subestação",
      "Estudo de Demanda e Dimensionamento para Carregadores VE",
      "Quadro Geral de Baixa Tensão (QGBT) e Proteções Específicas",
      "Homologação e Liberação de Carga perante a Distribuidora"
    ],
    image: "/assets/images/elements/elem-ev-charger.webp",
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
    integrated: 'Monitoramento contínuo 24/7 com Renô Performance',
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
    title: 'Sistemas Fotovoltaicos de Geração Distribuída',
    category: 'Energia Solar • Engenharia Turnkey',
    projectType: 'Usinas de Solo e Telhado',
    description:
      'Engenharia executiva e implantação de usinas solares de alta performance, com modelagem precisa de perdas, distribuição balanceada de strings e inversores homologados.',
    technologies: ['Renô Projetos', 'Geração Distribuída', 'Usinas Solares', 'Alta Eficiência'],
    siteUrl: '/solucoes/reno-projetos',
    siteDomain: 'Usinas Solares Homologadas',
    image: '/assets/renovera/projetos/proj-energia-solar-ind.webp',
    metricsBadge: '+150 Usinas Entregues',
  },
  {
    id: 'sistemas-distribuicao',
    title: 'Sistemas de Distribuição & Média Tensão',
    category: 'Engenharia de Potência • Subestações',
    projectType: 'Infraestrutura Elétrica MT/BT',
    description:
      'Dimensionamento de cabines primárias abrigadas, aumento de carga, estudos de coordenação de proteção e modernização de entradas de energia para indústrias e comércio.',
    technologies: ['Renô Energy Hub', 'Subestações Abrigadas', 'Média Tensão', 'Entrada de Energia'],
    siteUrl: '/solucoes/reno-energy-hub',
    siteDomain: 'Subestações & Rede',
    image: '/assets/renovera/projetos/proj-subestacao-spda.webp',
    metricsBadge: 'Média & Baixa Tensão',
  },
  {
    id: 'automacao-infraestrutura',
    title: 'Auditoria Regulatória & Reversão de Fluxo',
    category: 'Renô Adviser™ • Consultoria ANEEL',
    projectType: 'Homologação e Parecer de Acesso',
    description:
      'Superação de indeferimentos de rede por inversão de fluxo de potência perante concessionárias, fundamentação no PRODIST e garantia de escoamento de energia.',
    technologies: ['Renô Adviser™', 'Inversão de Fluxo', 'PRODIST Módulo 3', 'Homologação'],
    siteUrl: '/solucoes/reno-adviser',
    siteDomain: 'Consultoria Regulatória',
    image: '/assets/renovera/projetos/proj-marco-legal-gd.webp',
    metricsBadge: 'Segurança Jurídica',
  },
  {
    id: 'mobilidade-recarga',
    title: 'Mobilidade Elétrica & Infraestrutura de Recarga',
    category: 'Transição Energética • Eletromobilidade',
    projectType: 'Eletropostos DC e AC',
    description:
      'Planejamento elétrico e implantação de hubs de recarga para veículos elétricos (22 kW a 120 kW), com balanceamento de carga, proteção dedicada e protocolo OCPP.',
    technologies: ['Eletropostos VE', 'Recarga DC Rápida', 'Balanceamento de Carga', 'Mobilidade'],
    siteUrl: '/solucoes/reno-energy-hub',
    siteDomain: 'Infraestrutura de Recarga',
    image: '/assets/images/elements/elem-ev-charger.webp',
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
    imageAlt: prod.headline,
    demoUrl: `/solucoes/${prod.slug}`,
    githubUrl: `/solucoes/${prod.slug}`,
    technologies: prod.highlights.slice(0, 4),
  })),
};
