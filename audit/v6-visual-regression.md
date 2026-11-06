# Auditoria de Regressão Visual e Responsividade (11 Viewports) — Renovera Institucional V6

## 1. Preservação Estrutural da Referência (`lucasss-portfolio.vercel.app`)
A estrutura da homepage mantém 100% de fidelidade geométrica e comportamental aos 11 componentes da referência original:
1. `Header.tsx` (barra superior glassmorphism + drawer mobile)
2. `Hero.tsx` (título bipartido + composição central + 3 métricas flutuantes)
3. `About.tsx` (narrativa institucional + composição visual + marquee contínuo)
4. `Specialties.tsx` (`#atuacao` — 6 segmentos de clientes com produtos Renô ideais)
5. `Comparison.tsx` (`#diferenca` — comparativo de 7 eixos Abordagem Fragmentada vs. Ecossistema Renovera)
6. `ProjectsCarousel.tsx` (`#projetos` — carrossel interativo com as 9 soluções Renô e selos de perfil ideal)
7. `DailyMeals.tsx` (`#arquitetura` — vitrine interativa de Múltiplas Camadas com 9 composições visuais sincronizadas + 9 slides + 9 pills acessíveis)
8. `ExperienceSection.tsx` (`#experiencia` — 6 etapas metodológicas empilhadas + `Attendance.tsx`)
9. `Contact.tsx` (`#contato` — canais diretos oficiais)
10. `Footer.tsx` (`FinalCTA.tsx` + links institucionais + redes `@renoveraoficial` + compliance)
11. `Effects.tsx` (orquestrador GSAP, ScrollTrigger, Lenis e sincronização interativa de abas)

## 2. Matriz das 11 Resoluções Testadas via Playwright (`audit-v6-runner.mjs`)

| Viewport | Dimensões (px) | Categoria | Overflow Horizontal (`overflowPx`) | Status |
| :--- | :---: | :--- | :---: | :---: |
| **Mobile XS (iPhone SE)** | `320 × 568` | Smartphone Compacto | `0 px` | **PASS** |
| **Mobile S (Galaxy S)** | `360 × 640` | Smartphone Android Padrão | `0 px` | **PASS** |
| **Mobile M (iPhone X/13 Mini)** | `375 × 812` | Smartphone iOS Padrão | `0 px` | **PASS** |
| **Mobile L (iPhone 14/15)** | `390 × 844` | Smartphone Moderno | `0 px` | **PASS** |
| **Mobile XL (Pixel / Galaxy Ultra)** | `412 × 915` | Smartphone Tela Grande | `0 px` | **PASS** |
| **Tablet Portrait (iPad Mini/Air)** | `768 × 1024` | Tablet Vertical | `0 px` | **PASS** |
| **Tablet Large (iPad Air 11")** | `820 × 1180` | Tablet Intermediário | `0 px` | **PASS** |
| **Tablet Landscape / Netbook** | `1024 × 768` | Tablet Horizontal | `0 px` | **PASS** |
| **Laptop Standard** | `1280 × 800` | Notebook 13"/14" | `0 px` | **PASS** |
| **Desktop HD+** | `1440 × 900` | Monitor Corporativo | `0 px` | **PASS** |
| **Desktop Full HD** | `1920 × 1080` | Monitor Widescreen | `0 px` | **PASS** |
