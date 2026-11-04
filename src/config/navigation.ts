export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const navigationConfig: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Soluções",
    href: "/solucoes",
    children: [
      { label: "Consultoria Regulatória", href: "/solucoes/consultoria-regulatoria", description: "Inversão de fluxo e processos de acesso" },
      { label: "Projetos Elétricos", href: "/solucoes/projetos-eletricos", description: "Média e baixa tensão, subestações e diagramas" },
      { label: "Energia Solar", href: "/solucoes/energia-solar", description: "Usinas fotovoltaicas e geração distribuída" },
      { label: "Eletropostos", href: "/solucoes/eletropostos", description: "Infraestrutura de recarga para veículos elétricos" },
      { label: "Automação e Controle", href: "/solucoes/automacao", description: "Telemetria, controle dinâmico e monitoramento" },
      { label: "Estudos de Viabilidade", href: "/solucoes/viabilidade", description: "Diagnósticos técnicos e planejamento energético" }
    ]
  },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" }
];
