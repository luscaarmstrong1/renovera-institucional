export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const navigationConfig: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Soluções Renô",
    href: "/solucoes",
    children: [
      { label: "Renô Adviser™", href: "/solucoes/reno-adviser", description: "Assessoria em homologação e inversão de fluxo" },
      { label: "Renô Projetos", href: "/solucoes/reno-projetos", description: "Usinas fotovoltaicas turnkey ponta a ponta" },
      { label: "Renô Performance", href: "/solucoes/reno-performance", description: "Monitoramento ativo 24/7 e gestão de dados" },
      { label: "Renô Invest", href: "/solucoes/reno-invest", description: "Estruturação de investimentos em ativos solares" },
      { label: "Renô Protect", href: "/solucoes/reno-protect", description: "Seguro especializado para usinas solares" },
      { label: "Renô Supply", href: "/solucoes/reno-supply", description: "Central de suprimentos com análise técnica prévia" },
      { label: "Renô Engenharia", href: "/solucoes/reno-engenharia", description: "Bombeamento solar, automação, luminotécnica e CFTV" },
      { label: "Renô Partner", href: "/solucoes/reno-partner", description: "Programa de parceria para integradores homologados" },
      { label: "Renô Energy Hub", href: "/solucoes/reno-energy-hub", description: "Subestações MT/BT, padrões de entrada e recarga VE" }
    ]
  },
  { label: "Capacidade Técnica", href: "/projetos" },
  { label: "Contato", href: "/contato" }
];
