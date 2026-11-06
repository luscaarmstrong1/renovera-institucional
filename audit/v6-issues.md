# Registro de Problemas e Correções (P0 a P3) — Renovera Institucional V6

## Classificação de Severidade
- **P0 (Crítico / Bloqueante):** Inconsistência factual, simulação enganosa de envio de formulário, dados de contato divergentes, casos não comprovados apresentados como obras específicas.
- **P1 (Alto Impacto Funcional / UX):** Falha na sincronização visual das 9 soluções em `DailyMeals`, ausência de navegação e canonicals nas páginas internas, select de serviços desatualizado no formulário.
- **P2 (Identidade Visual & Conteúdo):** Imagem de fundo legada (`projects-bg-webdev.webp`) em `ProjectsCarousel`, cor residual `#102B42` em `globals.css`, ausência de contadores oficiais verificados do `renovera.com.br` (`450+ usinas Renô Adviser™`, `100+ usinas Renô Projetos`, `Desde 2020`).
- **P3 (Refinamento & Acessibilidade):** Navegação por teclado (`ArrowLeft`/`ArrowRight`/`Home`/`End`) nas 9 abas de `DailyMeals`, associação explícita `htmlFor`/`id` nos campos de `ContactForm`, adição de `robots.ts`.

---

## Matriz de Problemas Identificados e Resolvidos na V6

| ID | Severidade | Arquivo / Rota | Problema Encontrado na V5 | Solução Implementada na V6 | Status |
| :--- | :---: | :--- | :--- | :--- | :---: |
| **ISS-01** | **P0** | `src/config/company.ts` | Continha telefone fictício `(19) 3631-0000`, WhatsApp incorreto `(19) 99824-7890` e redes antigas (`renovera-energias`). | Unificado para consumir diretamente `SITE` e `SOCIAL_LINKS` de `src/config/site.ts` (`(19) 99651-4827`, `contato@renovera.com.br`, `compliance@renovera.com.br`, `@renoveraoficial`). | **Resolvido** |
| **ISS-02** | **P0** | `src/app/api/contact/route.ts` & `ContactForm.tsx` | Simulava envio com `setTimeout(500)` e exibia falso sucesso ao usuário sem envio real. | Validação server-side rigorosa, sanitização XSS, rate limit, honeypot, geração de protocolo (`RNV-YYYYMMDD-XXXX`) e retorno honesto `delivered: false, mode: "assisted_channel"` com canais diretos quando sem SMTP/Resend configurado. | **Resolvido** |
| **ISS-03** | **P0** | `src/config/projects.ts` | Listava obras específicas sem comprovação documental pública. | Convertido para **5 Arquiteturas Técnicas de Referência & Metodologias Comprovadas Renovera**, vinculadas aos produtos oficiais e métricas reais, mantendo `PROJECT_SLUG_ALIASES` para não quebrar URLs antigas. | **Resolvido** |
| **ISS-04** | **P0** | `src/config/site.ts` & `src/config/services.ts` | Uso de expressões absolutas ("sem riscos", "homologação garantida", "máxima rentabilidade"). | Substituídas por linguagem técnica e regulatória precisa ("mitigação de riscos", "conformidade regulatória", "alta rentabilidade auditável"). | **Resolvido** |
| **ISS-05** | **P1** | `src/components/DailyMeals.tsx` & `Effects.tsx` | Apenas a 1ª arte composta (`STAGE_COMPOSITES[0]`) era renderizada; clicar nas 9 pills não trocava a composição visual da esquerda. | Renderizadas todas as 9 composições com `data-flavour-art-item` e sincronizadas em `syncPills()` junto ao painel central e suporte a teclado (`ArrowKeys`). | **Resolvido** |
| **ISS-06** | **P1** | Páginas internas (`/sobre`, `/solucoes`, `/projetos`, `/contato`, `/privacidade`, `/termos`) | Sem cabeçalho/rodapé institucional e herdando a canonical da homepage (`/`). | Criado `InternalLayoutShell.tsx` e adicionado `metadata` / `generateMetadata` com `alternates.canonical` próprio em cada rota. | **Resolvido** |
| **ISS-07** | **P2** | `src/components/ProjectsCarousel.tsx` | Utilizava `/assets/images/projects-bg-webdev.webp` como imagem de fundo parallax. | Substituída por `/assets/renovera/hero/hero-solar-plant.webp` e adicionado selo `Ideal para: {project.idealFor}` nos cards. | **Resolvido** |
| **ISS-08** | **P2** | `src/app/globals.css` & `src/components/icons.tsx` | Fallback residual `#102B42` na linha 2087 de `globals.css` e dourado antigo `rgba(211, 161, 92, 0.18)` em `TechBadgeSvg`. | Atualizados para `#033118` e `rgba(254, 209, 93, 0.22)` respectivamente. | **Resolvido** |
