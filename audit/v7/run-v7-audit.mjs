import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const PORT = 3197;
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = path.resolve("audit/v7");
const SCREENSHOTS_DIR = path.join(OUT_DIR, "screenshots");
const ARTIFACT_DIR = "C:\\Users\\lucas\\.gemini\\antigravity\\brain\\ea0355b6-f350-4420-bdf9-cd05b827ec36\\audit-v7";

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

// 11 larguras obrigatórias da V7 (Seção 20)
const VIEWPORTS = [
  { width: 320, height: 640, name: "320-mobile-xs" },
  { width: 360, height: 800, name: "360-mobile-s" },
  { width: 375, height: 812, name: "375-mobile-m" },
  { width: 390, height: 844, name: "390-mobile-l" },
  { width: 430, height: 932, name: "430-mobile-xl" },
  { width: 768, height: 1024, name: "768-tablet-p" },
  { width: 820, height: 1180, name: "820-tablet-l" },
  { width: 1024, height: 768, name: "1024-laptop-s" },
  { width: 1280, height: 800, name: "1280-laptop-m" },
  { width: 1440, height: 900, name: "1440-desktop" },
  { width: 1920, height: 1080, name: "1920-fhd" },
];

// 9 produtos Renô canônicos
const RENO_SLUGS = [
  "reno-adviser",
  "reno-projetos",
  "reno-performance",
  "reno-invest",
  "reno-protect",
  "reno-supply",
  "reno-engenharia",
  "reno-partner",
  "reno-energy-hub",
];

// 6 artigos pilar do blog
const BLOG_SLUGS = [
  "inversao-de-fluxo",
  "homologacao-fotovoltaica",
  "eletropostos",
  "energia-solar-empresas",
  "investimento-em-usina-solar",
  "equipamentos-fotovoltaicos",
];

// Rotas internas auditadas em responsividade
const INTERNAL_ROUTES = [
  "/solucoes",
  "/solucoes/reno-adviser",
  "/integradores",
  "/blog",
  "/blog/inversao-de-fluxo",
  "/projetos",
  "/sobre",
  "/contato",
  "/cookies",
];

async function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Servidor não iniciou em ${url} dentro de ${timeoutMs}ms`);
}

function copyToArtifacts(filePath, targetFileName) {
  try {
    fs.copyFileSync(filePath, path.join(ARTIFACT_DIR, targetFileName));
  } catch {
    // ignore copy error
  }
}

async function runAudit() {
  console.log("🚀 Iniciando servidor de produção Next.js para Auditoria V7 na porta", PORT);
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    shell: true,
    stdio: "pipe",
  });

  const report = {
    version: "V7 — Autonomous Corporate Platform",
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    consoleErrors: [],
    pageErrors: [],
    failedRequests: [],
    viewportHomeChecks: [],
    viewportInternalChecks: [],
    dailyMealsSync: [],
    commercialJourneysCheck: [],
    servicePagesCheck: [],
    dynamicFormsCheck: [],
    apiContactStatesCheck: {},
    integratorsPageCheck: {},
    blogPagesCheck: [],
    cookieBannerCheck: {},
    seoAnd404Check: {},
    performanceMetrics: {},
  };

  try {
    await waitForServer(BASE_URL);
    console.log("✅ Servidor pronto em", BASE_URL);

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        report.consoleErrors.push(msg.text());
      }
    });
    page.on("pageerror", (err) => {
      report.pageErrors.push(err.message);
    });
    page.on("requestfailed", (req) => {
      const errText = req.failure()?.errorText || "";
      if (!errText.includes("ERR_ABORTED")) {
        report.failedRequests.push({
          url: req.url(),
          error: errText,
        });
      }
    });

    // 1. Medição Real de Performance (TTFB, FCP, LCP, CLS, DOMContentLoaded) em 1440x900 e 375x812
    console.log("📊 1/9 Medindo Performance real (Core Web Vitals + Navigation Timing)...");
    for (const perfProfile of [
      { label: "desktop_1440", width: 1440, height: 900 },
      { label: "mobile_375", width: 375, height: 812 },
    ]) {
      const perfPage = await context.newPage();
      await perfPage.setViewportSize({ width: perfProfile.width, height: perfProfile.height });
      await perfPage.addInitScript(() => {
        window.__perfMetrics = { lcp: 0, cls: 0, fcp: 0 };
        try {
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              window.__perfMetrics.lcp = entry.startTime;
            }
          }).observe({ type: "largest-contentful-paint", buffered: true });

          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                window.__perfMetrics.cls += entry.value;
              }
            }
          }).observe({ type: "layout-shift", buffered: true });

          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (entry.name === "first-contentful-paint") {
                window.__perfMetrics.fcp = entry.startTime;
              }
            }
          }).observe({ type: "paint", buffered: true });
        } catch {
          // ignore
        }
      });

      await perfPage.goto(BASE_URL, { waitUntil: "networkidle" });
      await perfPage.waitForTimeout(800);

      const metrics = await perfPage.evaluate(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        return {
          ttfbMs: nav ? Math.round(nav.responseStart - nav.requestStart) : 0,
          domContentLoadedMs: nav ? Math.round(nav.domContentLoadedEventEnd) : 0,
          loadEventMs: nav ? Math.round(nav.loadEventEnd) : 0,
          fcpMs: Math.round(window.__perfMetrics?.fcp || 0),
          lcpMs: Math.round(window.__perfMetrics?.lcp || 0),
          cls: Number((window.__perfMetrics?.cls || 0).toFixed(4)),
        };
      });

      report.performanceMetrics[perfProfile.label] = metrics;
      await perfPage.close();
    }

    // 2. Teste do Banner de Cookies (Aceitar, Personalizar, Rejeitar opcionais)
    console.log("🍪 2/9 Testando Banner de Consentimento de Cookies e persistência...");
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.evaluate(() => localStorage.removeItem("renovera_cookie_consent_v7"));
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    const bannerVisibleInitially = await page.locator('[data-cookie-banner="true"]').isVisible();
    let customizePanelOpened = false;
    if (bannerVisibleInitially) {
      await page.locator('[data-cookie-action="customize"]').click();
      await page.waitForTimeout(200);
      customizePanelOpened = await page.locator('[data-cookie-customize-panel="true"]').isVisible();
      await page.locator('[data-cookie-action="accept-all"]').click();
      await page.waitForTimeout(250);
    }
    const bannerHiddenAfterAccept = !(await page.locator('[data-cookie-banner="true"]').isVisible());
    const storedConsent = await page.evaluate(() => localStorage.getItem("renovera_cookie_consent_v7"));

    report.cookieBannerCheck = {
      bannerVisibleInitially,
      customizePanelOpened,
      bannerHiddenAfterAccept,
      storedConsentValid: Boolean(storedConsent && JSON.parse(storedConsent).essential === true),
    };

    // 3. Auditoria das 11 Larguras na Homepage
    console.log("📐 3/9 Auditando as 11 larguras na Homepage (320px a 1920px)...");
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(BASE_URL, { waitUntil: "networkidle" });
      await page.waitForTimeout(350);

      const layoutMetrics = await page.evaluate(() => {
        const docEl = document.documentElement;
        const overflowPx = Math.max(0, docEl.scrollWidth - window.innerWidth);
        const brokenImages = Array.from(document.querySelectorAll("img"))
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.getAttribute("src"));

        return {
          innerWidth: window.innerWidth,
          scrollWidth: docEl.scrollWidth,
          overflowPx,
          brokenImages,
        };
      });

      if ([320, 375, 768, 1440, 1920].includes(vp.width)) {
        const shotFile = `v7-home-${vp.name}.png`;
        const shotPath = path.join(SCREENSHOTS_DIR, shotFile);
        await page.screenshot({ path: shotPath, fullPage: false });
        copyToArtifacts(shotPath, shotFile);
      }

      report.viewportHomeChecks.push({
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        ...layoutMetrics,
      });
    }

    // 4. Sincronização dos 9 Produtos Renô em DailyMeals
    console.log("🔄 4/9 Testando sincronização dos 9 produtos Renô no showcase DailyMeals...");
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.locator("#arquitetura").scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);

    for (let idx = 0; idx < 9; idx++) {
      const pill = page.locator(`[data-flavour-pill="${idx}"]`);
      await pill.click();
      await page.waitForTimeout(280);

      const state = await page.evaluate((i) => {
        const pillEl = document.querySelector(`[data-flavour-pill="${i}"]`);
        const artEl = document.querySelector(`[data-flavour-art-item="${i}"]`);
        const activeSlideTitle = document.querySelector(
          ".flavour-content-swiper .swiper-slide-active .flavour-content-slider-title"
        );
        return {
          index: i,
          pillText: pillEl?.textContent?.trim() || "",
          ariaSelected: pillEl?.getAttribute("aria-selected"),
          artVisible: artEl ? window.getComputedStyle(artEl).display !== "none" : false,
          activeTitle: activeSlideTitle?.textContent?.trim() || "",
        };
      }, idx);

      report.dailyMealsSync.push(state);
    }

    // 5. Teste das 6 Jornadas Comerciais em /solucoes
    console.log("🧭 5/9 Testando filtro das 6 Jornadas Comerciais em /solucoes...");
    await page.goto(`${BASE_URL}/solucoes`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    const solucoesShot = path.join(SCREENSHOTS_DIR, "v7-solucoes-journeys.png");
    await page.screenshot({ path: solucoesShot, fullPage: false });
    copyToArtifacts(solucoesShot, "v7-solucoes-journeys.png");

    const journeys = ["integradores", "empresas", "investidores", "condominios", "residencias", "eletropostos"];
    for (const jId of journeys) {
      const btn = page.locator(`[data-journey-tab="${jId}"]`);
      await btn.click();
      await page.waitForTimeout(200);
      const countCards = await page.locator("[data-solution-card]").count();
      const bannerVisible = await page.locator(`[data-active-journey-panel="${jId}"]`).isVisible();
      report.commercialJourneysCheck.push({
        journeyId: jId,
        bannerVisible,
        filteredCardsCount: countCards,
      });
    }

    // 6. Auditoria das 9 Landing Pages Individuais (/solucoes/[slug]) + Formulários Dinâmicos
    console.log("📄 6/9 Auditando as 9 Landing Pages Individuais dos Produtos Renô e Formulários Dinâmicos...");
    for (const slug of RENO_SLUGS) {
      const res = await page.goto(`${BASE_URL}/solucoes/${slug}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(250);

      const pageCheck = await page.evaluate(() => {
        const h1 = document.querySelector("h1")?.textContent?.trim() || "";
        const text = document.body.innerText;
        const hasProblem = text.includes("Problema Técnico e Comercial Atendido");
        const hasHowWorks = text.includes("Escopo Técnico, Serviços e Aplicações");
        const hasSteps = text.includes("Etapas de Atendimento do");
        const hasDocs = text.includes("Informações e Documentos Necessários para Avaliação");
        const hasNorms = text.includes("Referencial Técnico e Normativo");
        const hasFaq = text.includes("Perguntas Frequentes —");
        const dynamicFieldsCount = document.querySelectorAll("[data-dynamic-field]").length;
        return {
          h1,
          hasProblem,
          hasHowWorks,
          hasSteps,
          hasDocs,
          hasNorms,
          hasFaq,
          dynamicFieldsCount,
        };
      });

      if (slug === "reno-adviser") {
        const adviserShot = path.join(SCREENSHOTS_DIR, "v7-reno-adviser-landing.png");
        await page.screenshot({ path: adviserShot, fullPage: false });
        copyToArtifacts(adviserShot, "v7-reno-adviser-landing.png");
      }

      report.servicePagesCheck.push({
        slug,
        status: res?.status() || 0,
        ...pageCheck,
      });
    }

    // 7. Teste de alternância de campos dinâmicos em /contato e teste de API /api/contact
    console.log("🧪 7/9 Testando Formulário Inteligente em /contato e estados reais de /api/contact...");
    await page.goto(`${BASE_URL}/contato`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    for (const slug of RENO_SLUGS) {
      await page.selectOption("#contact-service", slug);
      await page.waitForTimeout(150);
      const fields = await page.evaluate(() =>
        Array.from(document.querySelectorAll("[data-dynamic-field]")).map((el) =>
          el.getAttribute("data-dynamic-field")
        )
      );
      report.dynamicFormsCheck.push({
        serviceSlug: slug,
        dynamicFields: fields,
        fieldsCount: fields.length,
      });
    }

    const contatoShot = path.join(SCREENSHOTS_DIR, "v7-contato-dynamic-form.png");
    await page.screenshot({ path: contatoShot, fullPage: false });
    copyToArtifacts(contatoShot, "v7-contato-dynamic-form.png");

    // Testes diretos de API (/api/contact)
    const invalidRes = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.99.1.1" },
      body: JSON.stringify({ name: "A", email: "invalido" }),
    });
    const invalidJson = await invalidRes.json();

    const honeypotRes = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.99.1.2" },
      body: JSON.stringify({
        name: "Bot",
        email: "bot@spam.com",
        phone: "11999999999",
        service: "reno-adviser",
        message: "Mensagem de spam automática longa",
        consent: true,
        honeypot: "http://spam.com",
      }),
    });
    const honeypotJson = await honeypotRes.json();

    const validRes = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": "10.99.1.3" },
      body: JSON.stringify({
        name: "Engenheiro Integrador Teste V7",
        company: "Solar Integradora Ltda",
        email: "engenharia@solarintegradora.com.br",
        phone: "(19) 99888-7766",
        service: "reno-adviser",
        segment: "integradores",
        originPath: "/solucoes/reno-adviser",
        specificFields: {
          utilityCompany: "CPFL Paulista",
          installedPowerKwp: "75 kW",
          processStage: "Parecer Indeferido por Inversão de Fluxo",
          denialReason: "Alegação de inversão de fluxo no posto transformador",
          hasOpinionDocument: "Sim — possuo o documento em PDF para envio nos canais de atendimento",
        },
        message: "Solicitamos análise técnica de viabilidade de reversão de parecer de acesso indeferido.",
        consent: true,
        honeypot: "",
      }),
    });
    const validJson = await validRes.json();

    report.apiContactStatesCheck = {
      validationFailed: { status: invalidRes.status, state: invalidJson.state },
      blockedSpam: { status: honeypotRes.status, state: honeypotJson.state },
      validLeadSubmission: {
        status: validRes.status,
        state: validJson.state,
        stored: validJson.stored,
        delivered: validJson.delivered,
        leadId: validJson.leadId,
        hasPreparedLinks: Boolean(validJson.whatsappUrl && validJson.mailtoUrl),
      },
    };

    // 8. Auditoria da Área do Integrador (/integradores) e Blog Técnico (/blog + 6 artigos)
    console.log("📚 8/9 Auditando /integradores e as 6 páginas pilar de /blog...");
    const intRes = await page.goto(`${BASE_URL}/integradores`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const intShot = path.join(SCREENSHOTS_DIR, "v7-integradores-page.png");
    await page.screenshot({ path: intShot, fullPage: false });
    copyToArtifacts(intShot, "v7-integradores-page.png");

    report.integratorsPageCheck = {
      status: intRes?.status() || 0,
      h1: await page.locator("h1").textContent(),
      hasAdviser: await page.locator('text="Renô Adviser™"').first().isVisible(),
      hasSupply: await page.locator('text="Renô Supply"').first().isVisible(),
      hasPartner: await page.locator('text="Renô Partner"').first().isVisible(),
    };

    const blogIndexRes = await page.goto(`${BASE_URL}/blog`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const blogShot = path.join(SCREENSHOTS_DIR, "v7-blog-index.png");
    await page.screenshot({ path: blogShot, fullPage: false });
    copyToArtifacts(blogShot, "v7-blog-index.png");

    report.blogPagesCheck.push({
      route: "/blog",
      status: blogIndexRes?.status() || 0,
      h1: (await page.locator("h1").textContent())?.trim(),
    });

    for (const bSlug of BLOG_SLUGS) {
      const bRes = await page.goto(`${BASE_URL}/blog/${bSlug}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(200);
      report.blogPagesCheck.push({
        route: `/blog/${bSlug}`,
        status: bRes?.status() || 0,
        h1: (await page.locator("h1").textContent())?.trim(),
      });
    }

    // 9. Responsividade nas Páginas Internas (320px, 768px, 1440px) + Sitemap, Robots e 404
    console.log("🔍 9/9 Verificando overflow zero nas rotas internas + Sitemap, Robots e 404...");
    for (const route of INTERNAL_ROUTES) {
      for (const w of [320, 768, 1440]) {
        await page.setViewportSize({ width: w, height: 900 });
        const r = await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle" });
        await page.waitForTimeout(150);
        const overflowPx = await page.evaluate(() =>
          Math.max(0, document.documentElement.scrollWidth - window.innerWidth)
        );
        report.viewportInternalChecks.push({
          route,
          width: w,
          status: r?.status() || 0,
          overflowPx,
        });
      }
    }

    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
    const sitemapXml = await sitemapRes.text();
    const robotsRes = await fetch(`${BASE_URL}/robots.txt`);
    const robotsTxt = await robotsRes.text();
    const notFoundRes = await fetch(`${BASE_URL}/rota-inexistente-auditoria-v7-404`);

    report.seoAnd404Check = {
      sitemapStatus: sitemapRes.status,
      sitemapContainsBlog: sitemapXml.includes("/blog/inversao-de-fluxo"),
      sitemapContainsIntegradores: sitemapXml.includes("/integradores"),
      sitemapContainsCookies: sitemapXml.includes("/cookies"),
      robotsStatus: robotsRes.status,
      robotsHasSitemap: robotsTxt.includes("sitemap.xml"),
      notFoundStatus404: notFoundRes.status,
    };

    await browser.close();

    // Salva JSON e Markdown de Relatório em audit/v7/
    const resultsJsonPath = path.join(OUT_DIR, "v7-audit-results.json");
    fs.writeFileSync(resultsJsonPath, JSON.stringify(report, null, 2));
    copyToArtifacts(resultsJsonPath, "v7-audit-results.json");

    const mdLines = [
      `# Relatório Técnico Automatizado — Renovera Institucional V7`,
      `- **Data de Execução:** ${report.timestamp}`,
      `- **Erros de Console:** ${report.consoleErrors.length}`,
      `- **Erros de Página:** ${report.pageErrors.length}`,
      `- **Requisições Falhas:** ${report.failedRequests.length}`,
      ``,
      `## 1. Métricas Reais de Performance (Core Web Vitals & Navigation Timing)`,
      `- **Desktop (1440x900):** TTFB: ${report.performanceMetrics.desktop_1440.ttfbMs}ms | FCP: ${report.performanceMetrics.desktop_1440.fcpMs}ms | LCP: ${report.performanceMetrics.desktop_1440.lcpMs}ms | CLS: ${report.performanceMetrics.desktop_1440.cls}`,
      `- **Mobile (375x812):** TTFB: ${report.performanceMetrics.mobile_375.ttfbMs}ms | FCP: ${report.performanceMetrics.mobile_375.fcpMs}ms | LCP: ${report.performanceMetrics.mobile_375.lcpMs}ms | CLS: ${report.performanceMetrics.mobile_375.cls}`,
      ``,
      `## 2. Verificação nas 11 Larguras Obrigatórias (Homepage)`,
      `| Viewport | Largura | ScrollWidth | Overflow (px) | Imagens Quebradas |`,
      `| :--- | :---: | :---: | :---: | :---: |`,
      ...report.viewportHomeChecks.map(
        (v) => `| ${v.viewport} | ${v.width}px | ${v.scrollWidth}px | ${v.overflowPx}px | ${v.brokenImages.length} |`
      ),
      ``,
      `## 3. Verificação das 9 Landing Pages Individuais (/solucoes/[slug])`,
      `| Slug | HTTP | Campos Dinâmicos | Problema | Como Funciona | Etapas | FAQ |`,
      `| :--- | :---: | :---: | :---: | :---: | :---: | :---: |`,
      ...report.servicePagesCheck.map(
        (s) =>
          `| \`/solucoes/${s.slug}\` | ${s.status} | ${s.dynamicFieldsCount} | ${s.hasProblem ? "OK" : "FALHA"} | ${s.hasHowWorks ? "OK" : "FALHA"} | ${s.hasSteps ? "OK" : "FALHA"} | ${s.hasFaq ? "OK" : "FALHA"} |`
      ),
      ``,
      `## 4. Estados da API /api/contact`,
      `- **Validation Failed:** HTTP ${report.apiContactStatesCheck.validationFailed.status} (\`${report.apiContactStatesCheck.validationFailed.state}\`)`,
      `- **Spam Honeypot:** HTTP ${report.apiContactStatesCheck.blockedSpam.status} (\`${report.apiContactStatesCheck.blockedSpam.state}\`)`,
      `- **Envio Válido (Sem CRM externo):** HTTP ${report.apiContactStatesCheck.validLeadSubmission.status} (\`${report.apiContactStatesCheck.validLeadSubmission.state}\`, \`stored: ${report.apiContactStatesCheck.validLeadSubmission.stored}\`, \`leadId: ${report.apiContactStatesCheck.validLeadSubmission.leadId}\`)`,
      ``,
      `## 5. SEO Técnico, Cookies e 404`,
      `- **Banner Cookies:** Visível inicialmente: ${report.cookieBannerCheck.bannerVisibleInitially} | Personalizar: ${report.cookieBannerCheck.customizePanelOpened} | Oculto após aceitar: ${report.cookieBannerCheck.bannerHiddenAfterAccept}`,
      `- **Sitemap (/sitemap.xml):** HTTP ${report.seoAnd404Check.sitemapStatus} (Blog: ${report.seoAnd404Check.sitemapContainsBlog}, Integradores: ${report.seoAnd404Check.sitemapContainsIntegradores})`,
      `- **Robots (/robots.txt):** HTTP ${report.seoAnd404Check.robotsStatus}`,
      `- **Rota Inexistente (404 Real):** HTTP ${report.seoAnd404Check.notFoundStatus404}`,
    ];

    const mdReportPath = path.join(OUT_DIR, "v7-audit-report.md");
    fs.writeFileSync(mdReportPath, mdLines.join("\n"));
    copyToArtifacts(mdReportPath, "v7-audit-report.md");

    console.log("🎉 Auditoria V7 concluída com sucesso!");
  } finally {
    if (server.pid) {
      spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"]);
    }
  }
}

runAudit().catch((err) => {
  console.error("❌ Falha na auditoria V7:", err);
  process.exit(1);
});
