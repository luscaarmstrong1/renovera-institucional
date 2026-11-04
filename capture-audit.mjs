import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";

async function run() {
  const screenshotDir = path.resolve(process.cwd(), "screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();

  const viewports = [
    { name: "desktop", width: 1440, height: 900 },
    { name: "tablet", width: 820, height: 1180 },
    { name: "mobile", width: 390, height: 844 },
  ];

  const targetUrl = "https://renovera-institucional.vercel.app";

  for (const vp of viewports) {
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    console.log(`Testando ${vp.name} (${vp.width}x${vp.height})...`);
    
    await page.goto(targetUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(screenshotDir, `${vp.name}-home.png`),
      fullPage: false,
    });

    // Testar página interna /solucoes
    await page.goto(`${targetUrl}/solucoes`, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(screenshotDir, `${vp.name}-solucoes.png`),
      fullPage: false,
    });

    // Testar página interna /contato
    await page.goto(`${targetUrl}/contato`, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(screenshotDir, `${vp.name}-contato.png`),
      fullPage: false,
    });

    await page.close();
  }

  await browser.close();
  console.log("Validação visual concluída com sucesso!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
