/**
 * Captura a tela inicial dos sites do portfolio para usar nos cards da home.
 * Uso: node scripts/shot-portfolio.js
 *
 * Usa o Edge do Windows como navegador, entao nao baixa nada.
 */
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

// 1600x1000 = 16/10, mesma proporcao do .shot na home, entao corta sem sobrar nada.
const LARGURA = 1600;
const ALTURA = 1000;
const ESCALA = 2;

const sites = [
  { url: "https://anabecreative.vercel.app", arquivo: "anabe-creative.jpg" },
  { url: "https://mocesdoces.vercel.app", arquivo: "moces-doces.jpg" },
  { url: "https://petlove-theta-blue.vercel.app", arquivo: "pet-love.jpg" },
];

const destino = path.join(__dirname, "..", "public", "img");

(async () => {
  fs.mkdirSync(destino, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
  });

  for (const site of sites) {
    const page = await browser.newPage();
    await page.setViewport({ width: LARGURA, height: ALTURA, deviceScaleFactor: ESCALA });

    // prefers-reduced-motion trava o hero no poster, em vez de um frame aleatorio do video
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);

    await page.goto(site.url, { waitUntil: "networkidle2", timeout: 60000 });

    // rola a pagina inteira para carregar imagem e video lazy, depois volta ao topo
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const passo = () => {
          y += window.innerHeight;
          window.scrollTo(0, y);
          if (y < document.body.scrollHeight) setTimeout(passo, 120);
          else resolve();
        }
        passo();
      });
    });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 1200));

    const arquivo = path.join(destino, site.arquivo);
    await page.screenshot({ path: arquivo, type: "jpeg", quality: 82 });

    const kb = Math.round(fs.statSync(arquivo).size / 1024);
    console.log(`ok  ${site.url} -> ${site.arquivo} (${kb} KB)`);

    await page.close();
  }

  await browser.close();
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});