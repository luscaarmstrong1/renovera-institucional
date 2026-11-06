# Auditoria de Evidências de Projetos e Estudos Técnicos — Renovera Institucional V6

## 1. Diagnóstico de Conformidade e Honestidade Técnica
Na V5, `src/config/projects.ts` listava 5 estudos de caso com aparência de obras individuais ("Usina Solar Comercial — 300 kWp", "Adequação de Subestação Industrial — 500 kVA", etc.) sem fotos reais documentadas de cada cliente ou autorização de divulgação nominal (NDA).

## 2. Adequação Executada na V6
Em estrito cumprimento às diretrizes de honestidade técnica da V6:
1. Todos os 5 registros em `src/config/projects.ts` foram reestruturados e rotulados explicitamente com o selo:
   - `classification: "Arquitetura Técnica de Referência"` ou `"Metodologia Comprovada Renovera"`
2. Cada estudo técnico foi diretamente vinculado a uma solução oficial do portfólio Renô e às métricas institucionais reais auditadas em `renovera.com.br`:
   - `reavaliacao-inversao-fluxo-mmgd` → **Renô Adviser™** (`450+ Usinas Vendidas | 30 MWp | 15 Estados`)
   - `gestao-360-usinas-solares` → **Renô Projetos** (`100+ Usinas Instaladas | 2 MWp | 12 Estados`)
   - `infraestrutura-recarga-veicular-ev` → **Renô Energy Hub** (`NBR 17019 | OCPP 1.6J/2.0.1`)
   - `operacao-manutencao-performance-solar` → **Renô Performance** (`IEC 62446-1 | NBR 16274`)
   - `engenharia-eletrica-subestacoes-spda` → **Renô Engenharia** (`NBR 14039 | NBR 5410 | NBR 5419`)
3. **Preservação de Links Antigos (Retrocompatibilidade SEO):**
   - Implementado `PROJECT_SLUG_ALIASES` em `src/config/projects.ts` e integrado ao `generateStaticParams()` de `src/app/projetos/[slug]/page.tsx`, garantindo que todas as URLs antigas da V5 (`/projetos/usina-solar-comercial-300kwp`, `/projetos/adequacao-subestacao-industrial`, etc.) continuem respondendo `HTTP 200` com a arquitetura técnica correspondente.
