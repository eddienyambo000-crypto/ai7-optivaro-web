import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// OneDrive virtualizes puppeteer's bundled Chromium and the launch hangs.
// Use the system Chrome instead (resolve the first path that exists).
const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env.LOCALAPPDATA ? process.env.LOCALAPPDATA + '/Google/Chrome/Application/chrome.exe' : '',
].filter(Boolean);
const executablePath = CHROME_CANDIDATES.find(p => fs.existsSync(p));

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const viewportW = parseInt(process.argv[4]) || 1440;   // optional width arg (e.g. 390 for mobile)
const outputDir = './temporary screenshots';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Auto-increment screenshot number
const existing = fs.readdirSync(outputDir).filter(f => f.endsWith('.png'));
const numbers = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
const nextNum = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
const filename = label ? `screenshot-${nextNum}-${label}.png` : `screenshot-${nextNum}.png`;
const outputPath = path.join(outputDir, filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: viewportW, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for animations to settle
  await new Promise(r => setTimeout(r, 1500));

  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();

  console.log(`Screenshot saved: ${outputPath}`);
})();
