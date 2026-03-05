import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const outputDir = './temporary screenshots';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const existing = fs.readdirSync(outputDir).filter(f => f.endsWith('.png'));
const numbers = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
let n = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  await page.evaluate(() => {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  });
  await new Promise(r => setTimeout(r, 2000));

  // Get total page height
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Total page height: ${totalHeight}px`);

  // Screenshot every 900px
  const steps = Math.ceil(totalHeight / 900);
  for (let i = 0; i < steps; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 900);
    await new Promise(r => setTimeout(r, 350));
    const filename = `screenshot-${n}-section${i+1}.png`;
    await page.screenshot({ path: path.join(outputDir, filename), fullPage: false });
    console.log(`Saved: ${filename} (scroll: ${i*900}px)`);
    n++;
  }

  await browser.close();
})();
