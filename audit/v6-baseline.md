# Auditoria de Baseline — Renovera Institucional V6

## 1. Identificação do Baseline (V5)
- **Repositório:** `https://github.com/luscaarmstrong1/renovera-institucional`
- **Commit Base (V5):** `6b1b171495baefeb26fa32324033128fbee430a5`
- **URL Pública Auditada:** `https://renovera-institucional.vercel.app/`
- **Referência Estrutural (Intocável):** `https://lucasss-portfolio.vercel.app/` (`luscaarmstrong1/lucas-santos-portfolio`)
- **Referência Institucional Oficial:** `https://renovera.com.br/` e `https://renovera.com.br/portfolio.html`

## 2. Estado Inicial Encontrado na V5
1. **Arquitetura da Homepage:**
   - Composta pelos 11 componentes herdados do portfólio de referência (`Header`, `Hero`, `About`, `Specialties`, `Comparison`, `ProjectsCarousel`, `DailyMeals`, `ExperienceSection`, `Contact`, `Footer`, `Effects`).
   - Animações GSAP, ScrollTrigger e Lenis operacionais em desktop e mobile.
2. **Divergências de Dados e Fontes Duplicadas:**
   - Existiam dois arquivos principais de configuração concorrentes: `src/config/site.ts` (usado na homepage) e `src/config/company.ts` (usado nas páginas internas `/sobre`, `/contato`, `/privacidade`, `/termos`).
   - `src/config/company.ts` continha telefones fictícios (`(19) 3631-0000` e `(19) 99824-7890`) e handles de redes sociais antigos (`linkedin.com/company/renovera-energias`, `@renoveraenergias`), enquanto `src/config/site.ts` já utilizava o WhatsApp oficial `(19) 99651-4827` (`5519996514827`).
3. **Comportamento da API `/api/contact` na V5:**
   - A rota `src/app/api/contact/route.ts` realizava apenas um `setTimeout(500)` simulado e retornava `{ success: true }`, levando o formulário `ContactForm.tsx` a exibir "Solicitação Recebida com Sucesso" sem que nenhum e-mail ou webhook real fosse disparado.
4. **Seção Interativa `DailyMeals.tsx` (Múltiplas Camadas):**
   - Na V5, apenas a primeira imagem composta (`STAGE_COMPOSITES[0]`) era renderizada no DOM (`const firstComposite = STAGE_COMPOSITES[0]`), impedindo a troca visual da arte composta à esquerda ao clicar nas 9 pills dos produtos Renô.
5. **Estudos de Caso em `src/config/projects.ts`:**
   - Apresentavam 5 projetos específicos ("Usina Solar Comercial — 300 kWp", "Adequação de Subestação Industrial — 500 kVA", etc.) sem documentação fotográfica individual verificada ou autorização de divulgação nominal.
6. **Páginas Internas (`/sobre`, `/solucoes`, `/projetos`, `/contato`, `/privacidade`, `/termos`):**
   - Não possuíam cabeçalho de navegação nem rodapé institucional, nem `alternates.canonical` individualizada por rota.
