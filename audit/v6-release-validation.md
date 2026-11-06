# Validação de Release e Produção — Renovera Institucional V6

## 1. Checklist de Qualidade e Critérios de Aceite V6
- [x] **Fidelidade Estrutural:** Layout, geometria, animações GSAP/ScrollTrigger/Lenis e responsividade da homepage preservados em relação a `https://lucasss-portfolio.vercel.app/`.
- [x] **Unificação da Fonte da Verdade:** Dados de contato, localização, redes sociais (`@renoveraoficial`), métricas oficiais (`450+ usinas Renô Adviser™ / 30 MWp / 15 estados`, `100+ usinas Renô Projetos / 2 MWp / 12 estados`, `+150 usinas entregues`, `Desde 2020`) e os 9 produtos Renô centralizados em `src/config/site.ts` e consumidos por `src/config/company.ts`.
- [x] **Eliminação de Dados Incorretos da V5:** Telefones fictícios `(19) 3631-0000` e `(19) 99824-7890` erradicados de todo o repositório.
- [x] **Honestidade Técnica em `/api/contact` e `ContactForm.tsx`:** Validação real, sanitização, rate limiting e fluxo assistido transparente (`delivered: false`, `mode: "assisted_channel"`) quando não há chave de e-mail transacional configurada.
- [x] **Honestidade Técnica em Estudos de Caso (`/projetos`):** Todos os 5 estudos rotulados como `Arquitetura Técnica de Referência` / `Metodologia Comprovada Renovera`, vinculados aos produtos oficiais e com aliases de retrocompatibilidade para URLs antigas.
- [x] **Sincronização Total em `DailyMeals.tsx`:** As 9 composições visuais (`STAGE_COMPOSITES`), os 9 slides e as 9 pills funcionam em sincronia via clique e teclado (`ArrowKeys`).
- [x] **Acabamento e SEO nas Páginas Internas:** `InternalLayoutShell` aplicado em `/sobre`, `/solucoes`, `/solucoes/[slug]`, `/projetos`, `/projetos/[slug]`, `/contato`, `/privacidade` e `/termos`, cada uma com `alternates.canonical` individualizada.
- [x] **Suíte Playwright 11 Viewports:** `0 px` de overflow horizontal em todas as 11 resoluções (`320px` a `1920px`).
