# Auditoria de Identidade Visual e Marca — Renovera Institucional V6

## 1. Paleta Corporativa Oficial Renovera
Todas as variáveis CSS e classes utilitárias foram auditadas e padronizadas em `src/app/globals.css`:
- **Verde Institucional Primário:** `#033118` (`--cor-verde`, `--color-navy-tech`)
- **Verde Institucional Profundo (Dark):** `#022417` (`--cor-escura`)
- **Verde Médio Técnico:** `#0A4B2D` (`--cor-azul` / destaques secundários)
- **Verde Esmeralda Operacional:** `#137A4E` (checkmarks, indicadores positivos)
- **Amarelo Solar Institucional:** `#FED15D` (`--cor-dourado`, `--cor-destaque`)
- **Superfícies Claras Corporativas:** `#F8F8F5` (`--cor-creme`) e `#E8F0EC`

## 2. Remoção de Cores e Ativos Herdados do Portfólio Pessoal
- **Verificação de fotografias pessoais (`lucas-*`):** Nenhuma referência ativa em nenhum componente de `src/`.
- **Substituição de imagem de desenvolvimento web residual:** `/assets/images/projects-bg-webdev.webp` em `src/components/ProjectsCarousel.tsx` foi substituída por `/assets/renovera/hero/hero-solar-plant.webp`.
- **Eliminação de cores residuais:**
  - `src/app/globals.css` (linha 2087): Fallback `#102B42` substituído por `#033118`.
  - `src/components/icons.tsx`: `rgba(211, 161, 92, 0.18)` substituído por `rgba(254, 209, 93, 0.22)`.

## 3. Tipografia e Hierarquia Visual
- Títulos institucionais e cabeçalhos: `Clash Display` (`--font-display`)
- Corpo técnico, formulários e documentação: `Plus Jakarta Sans` (`--font-sans`)
- Assinaturas e anotações de destaque técnico: `Caveat` (`--font-mao`)
