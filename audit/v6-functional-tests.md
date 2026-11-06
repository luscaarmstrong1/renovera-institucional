# Relatório de Testes Funcionais E2E — Renovera Institucional V6

## 1. Escopo da Suíte Automatizada (`audit-v6-runner.mjs`)
1. **Sincronização Interativa dos 9 Produtos Renô em `DailyMeals` (`#arquitetura`):**
   - Teste automatizado clicando sequencialmente nas 9 pills (`[data-flavour-pill]`, índices `0` a `8`) e acionando navegação por teclado (`ArrowRight`).
   - Verificado que, para cada um dos 9 produtos:
     - A pill clicada recebe `class="... is-active"` e `aria-selected="true"`.
     - A arte composta correspondente à esquerda (`[data-flavour-art-item="{idx}"]`) recebe `is-active`.
     - O slide central (`[data-flavour-item]`) correspondente torna-se ativo e exibe o nome, subtítulo, descrição e link `/solucoes/reno-*` corretos.
2. **Testes da API `/api/contact` e Formulário `ContactForm.tsx`:**
   - **Caso 1 (Payload Inválido):** Submissão com nome curto/e-mail inválido retorna `HTTP 400` com `code: "INVALID_NAME"` / `"INVALID_EMAIL"` e mensagem em português.
   - **Caso 2 (Proteção Anti-Spam Honeypot):** Preenchimento do campo oculto `website` retorna `HTTP 400` com `code: "SPAM_DETECTED"`.
   - **Caso 3 (Submissão Válida sem Serviço Transacional Configurado):** Retorna `HTTP 200` com `success: true`, `delivered: false`, `mode: "assisted_channel"`, protocolo único `RNV-YYYYMMDD-XXXX`, resumo estruturado da demanda e links diretos para WhatsApp Oficial (`5519996514827`) e `mailto:contato@renovera.com.br`.
3. **Verificação de Rotas Internas e Retrocompatibilidade (`HTTP 200`):**
   - Testadas e aprovadas todas as rotas principais e dinâmicas:
     - `/`, `/sobre`, `/solucoes`, `/solucoes/reno-adviser`, `/solucoes/reno-energy-hub`
     - `/projetos`, `/projetos/reavaliacao-inversao-fluxo-mmgd`, `/projetos/usina-solar-comercial-300kwp` (alias retrocompatível)
     - `/contato`, `/privacidade`, `/termos`, `/sitemap.xml`, `/robots.txt`
