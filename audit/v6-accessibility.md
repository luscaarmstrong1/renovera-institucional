# Auditoria de Acessibilidade (WCAG 2.1 AA) — Renovera Institucional V6

## 1. Melhorias de Acessibilidade Implementadas na V6
1. **Padrão WAI-ARIA Tabs em `DailyMeals.tsx` e `Effects.tsx`:**
   - Contêiner de seleção com `role="tablist"` e `aria-label="Selecione uma solução Renô para visualizar detalhes"`.
   - As 9 pills possuem `role="tab"`, `id="reno-tab-{idx}"`, `aria-controls="reno-active-panel"`, `aria-selected` dinâmico (`true`/`false`) e `tabIndex` gerenciado (`0` para a aba ativa, `-1` para as inativas).
   - Suporte completo a navegação por teclado (`ArrowRight`, `ArrowLeft`, `ArrowDown`, `ArrowUp`, `Home`, `End`) em `Effects.tsx`, movendo o foco e sincronizando o slide e a imagem composta automaticamente.
2. **Formulário de Contato (`ContactForm.tsx`):**
   - Todos os campos (`contact-name`, `contact-company`, `contact-email`, `contact-phone`, `contact-city`, `contact-service`, `contact-message`, `contact-consent`) possuem `<label htmlFor="...">` explicitamente vinculados.
   - Alertas de erro utilizam `role="alert"` para leitura imediata por leitores de tela.
   - Campo honeypot oculto com `aria-hidden="true"` e `tabIndex={-1}`.
3. **Navegação Mobile (`Header.tsx`) e Páginas Internas (`InternalLayoutShell.tsx`):**
   - Botão do menu mobile com `aria-expanded`, `aria-controls="mobile-nav-drawer"`, trap de foco inicial e fechamento via tecla `Escape`.
   - Links de redes sociais com `aria-label` descritivos (`LinkedIn Oficial (@renoveraoficial)`, `Instagram Oficial (@renoveraoficial)`, `Facebook Oficial (@renoveraoficial)`).
4. **Respeito a `prefers-reduced-motion`:**
   - Tanto `Effects.tsx` (`window.matchMedia("(prefers-reduced-motion: reduce)")`) quanto `globals.css` respeitam a preferência de redução de movimento do sistema operacional.
