# Auditoria de Performance e SEO Técnico — Renovera Institucional V6

## 1. Otimizações de Performance e Renderização
- **Geração Estática (SSG) Integral:** Todas as rotas institucionais (`/`, `/sobre`, `/solucoes`, `/solucoes/[slug]` para as 9 soluções Renô, `/projetos`, `/projetos/[slug]` para as 5 arquiteturas + 4 aliases de retrocompatibilidade, `/contato`, `/privacidade`, `/termos`, `/sitemap.xml`, `/robots.txt`) são pré-renderizadas estaticamente no build do Next.js 16 (Turbopack).
- **Ativos Gráficos Otimizados:**
  - Todas as fotografias e composições técnicas utilizam formato **WebP** (`public/assets/renovera/`) com `loading="lazy"` nos componentes abaixo da dobra (`ProjectsCarousel`, `DailyMeals`, cards de soluções e estudos técnicos) e carregamento prioritário no `Hero`.
  - Logotipos e ícones vetoriais em **SVG** (`logo-dark-bg.svg`, `favicon.svg` e ícones dedicados das 9 soluções Renô).
- **Animações Aceleradas por Hardware:**
  - Timelines GSAP + ScrollTrigger isoladas em contexto `gsap.context()` com cleanup completo no unmount e desativação automática quando `prefers-reduced-motion: reduce` está ativo.

## 2. SEO Técnico e Metadados Estruturados
- **Canonical Individualizada por Rota:**
  - Corrigida a herança global da V5: agora cada página interna define explicitamente `alternates: { canonical: ... }` apontando para sua própria URL canônica (`/sobre`, `/solucoes`, `/solucoes/[slug]`, `/projetos`, `/projetos/[slug]`, `/contato`, `/privacidade`, `/termos`).
- **JSON-LD (`Organization` + `ProfessionalService`):**
  - Presente em `src/app/layout.tsx` com dados oficiais verificados (`Renovera Energias Renováveis Ltda`, fundação `2020`, `São João da Boa Vista - SP`, WhatsApp `+55-19-99651-4827`, e-mail `contato@renovera.com.br` e links oficiais `@renoveraoficial`).
- **Sitemap e Robots:**
  - `src/app/sitemap.ts` gera dinamicamente todas as 22 rotas canônicas do ecossistema.
  - `src/app/robots.ts` publica `/robots.txt` permitindo indexação integral das páginas públicas e bloqueando `/api/`.
