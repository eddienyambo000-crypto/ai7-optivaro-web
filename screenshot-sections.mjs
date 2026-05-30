import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const prefix = process.argv[3] || 'sec';
const outputDir = './temporary screenshots';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const existing = fs.readdirSync(outputDir).filter(f => f.endsWith('.png'));
const numbers = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
let nextNum = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  const totalH = await page.evaluate(() => document.body.scrollHeight);

  // Force all reveal elements visible (IntersectionObserver doesn't fire in headless)
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  });
  await new Promise(r => setTimeout(r, 600));

  const step = 900;
  let i = 0;
  for (let y = 0; y < totalH; y += step) {
    await new Promise(r => setTimeout(r, 200));
    const f = path.join(outputDir, `screenshot-${nextNum + i}-${prefix}-${String(i+1).padStart(2,'0')}.png`);
    const h = Math.min(step, totalH - y);
    await page.screenshot({ path: f, clip: { x: 0, y, width: 1440, height: h } });
    console.log(`✓ ${path.basename(f)}`);
    i++;
  }

  await browser.close();
  console.log(`Done — ${i} sections`);
})();
