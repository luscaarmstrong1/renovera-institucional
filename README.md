# RENOVERA ENERGIAS RENOVÁVEIS LTDA
## Website Institucional Corporativo Premium

Aplicação institucional e portfólio corporativo de engenharia desenvolvido para a **Renovera Energias Renováveis Ltda** (São João da Boa Vista - SP).

---

## 1. Visão Geral e Posicionamento

A Renovera atua de forma integrada no setor elétrico brasileiro, conectando:
- **Consultoria Regulatória**: Análise de inversão de fluxo, contestações administrativas de pareceres de acesso perante distribuidoras e ANEEL (REN 1.000/2021 e Lei 14.300/2022).
- **Projetos Elétricos e Subestações**: Engenharia em baixa e média tensão, cabines primárias abrigadas, diagramas unifilares executivos e estudos de seletividade (NBR 5410, NBR 14039 e NBR 5419).
- **Energia Solar Fotovoltaica**: Usinas para geração distribuída (MMGD), estudos de irradiação solar e conexão à rede de distribuição.
- **Eletropostos & Mobilidade Elétrica**: Infraestrutura dedicada para recarga de veículos elétricos (AC e DC de 22 kW a 120 kW, NBR 17019 e IEC 61851).
- **Automação e Controle Energético**: Telemetria em tempo real, multimedidores, controladores industriais e sistemas de controle dinâmico de exportação (Zero Export).
- **Estudos Técnicos de Viabilidade**: Diagnóstico de capacidade de atendimento, enquadramento tarifário e otimização de custos para novos empreendimentos.

---

## 2. Identidade Visual Corporativa Oficial

O projeto adota rigorosamente a identidade visual e os tokens oficiais da Renovera:
- **Cores Oficiais**:
  - Verde Corporativo Principal: `#033118`
  - Verde Floresta Profundo: `#022417`
  - Verde Médio / Destaque: `#0A4B2D`
  - Verde Ativo: `#0D5B43`
  - Verde Sucesso: `#137A4E`
  - Ouro Técnico / Destaque Solar: `#FED15D`
  - Fundo Institucional Claro: `#F8F8F5`
  - Superfície Branca: `#FFFFFF`
  - Texto Principal: `#17221F`
  - Bordas Técnicas: `#DFE7E3`
- **Ativos Oficiais Preservados**:
  - Vetor do raio e logotipo corporativo em `/public/assets/brand/favicon.svg` e `/public/assets/brand/logo-renovera.png`.

---

## 3. Arquitetura de Software

- **Framework**: Next.js 16+ com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4 + Design System com Tokens Oficiais Renovera
- **Animações**: GSAP (GreenSock) com curvas suaves e respeito a `prefers-reduced-motion`
- **Ícones**: Lucide Icons
- **SEO & Metadados**: Open Graph, Twitter Cards, Sitemap dinâmico (`/sitemap.xml`) e Robots (`/robots.txt`)
- **Backend / API**: Endpoint `/api/contact` com proteção anti-spam por honeypot e fallback transparente para WhatsApp institucional caso não haja SMTP de produção configurado.

---

## 4. Estrutura de Rotas

- `/` — Homepage cinematográfica com narrativa editorial corporativa
- `/sobre` — Posicionamento institucional, missão e conformidade técnica
- `/solucoes` — Catálogo geral de soluções de engenharia
- `/solucoes/[slug]` — Páginas específicas de cada serviço com formulário técnico dedicado:
  - `/solucoes/consultoria-regulatoria`
  - `/solucoes/projetos-eletricos`
  - `/solucoes/energia-solar`
  - `/solucoes/eletropostos`
  - `/solucoes/automacao`
  - `/solucoes/viabilidade`
- `/projetos` — Acervo de projetos e estudos de caso de capacidade técnica
- `/projetos/[slug]` — Fichas técnicas detalhadas com métricas, contexto e escopo
- `/contato` — Canais oficiais e formulário estruturado
- `/privacidade` — Política de Privacidade e adequação à LGPD
- `/termos` — Termos de Uso institucional

---

## 5. Scripts Disponíveis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Inicialização em modo produção
npm run start
```

---

## 6. Governança e Informações Oficiais

- **Razão Social**: Renovera Energias Renováveis Ltda
- **Sede**: São João da Boa Vista, SP
- **Canais**: Atendimento nacional via canais oficiais verificados.
