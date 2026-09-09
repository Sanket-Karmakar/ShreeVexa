import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = ['/', '/about', '/brands', '/contact', '/licensing', '/products', '/services', '/solutions'];
const viewports = [
  { width: 320, height: 568 },
  { width: 360, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 412, height: 915 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 820, height: 1180 },
  { width: 912, height: 1368 },
  { width: 1024, height: 1366 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
  { width: 1728, height: 1117 },
  { width: 1920, height: 1080 }
];

const metrics = [];
const consoleErrors = [];
const layoutViolations = [];

async function runAudit() {
  console.log('Starting Playwright Audit...');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ url: page.url(), text: msg.text() });
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push({ url: page.url(), text: err.message });
  });

  page.on('requestfailed', request => {
    consoleErrors.push({ url: page.url(), text: `Request failed: ${request.url()}` });
  });

  for (const route of routes) {
    const routeName = route === '/' ? 'home' : route.substring(1);
    const screenshotDir = path.join(__dirname, 'screenshots', routeName);
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    for (const vp of viewports) {
      await testViewport(page, route, routeName, vp, 'portrait', screenshotDir);
      if (vp.width < 768) {
        await testViewport(page, route, routeName, { width: vp.height, height: vp.width }, 'landscape', screenshotDir);
      }
    }
  }

  await browser.close();

  fs.writeFileSync(path.join(__dirname, 'metrics.json'), JSON.stringify(metrics, null, 2));
  fs.writeFileSync(path.join(__dirname, 'console-errors.json'), JSON.stringify(consoleErrors, null, 2));
  fs.writeFileSync(path.join(__dirname, 'layout-violations.json'), JSON.stringify(layoutViolations, null, 2));

  console.log('Audit complete.');
}

async function testViewport(page, route, routeName, vp, orientation, screenshotDir) {
  await page.setViewportSize(vp);
  const url = `http://localhost:3000${route}`;
  
  await page.goto(url, { waitUntil: 'load' });
  
  const perf = await page.evaluate(() => JSON.stringify(window.performance.timing));
  metrics.push({ route, viewport: `${vp.width}x${vp.height}`, perf });

  await page.screenshot({ path: path.join(screenshotDir, `${vp.width}-${orientation}-fold.png`) });
  await page.screenshot({ path: path.join(screenshotDir, `${vp.width}-${orientation}-full.png`), fullPage: true });

  const violations = await page.evaluate(() => {
    const v = [];
    if (document.documentElement.scrollWidth > window.innerWidth) {
      v.push({ type: 'Horizontal Overflow', details: `scrollWidth ${document.documentElement.scrollWidth} > clientWidth ${window.innerWidth}` });
    }
    
    const clickables = Array.from(document.querySelectorAll('a, button'));
    clickables.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
        v.push({ type: 'Touch Target < 44px', text: el.innerText.trim().substring(0, 20), details: `${rect.width}x${rect.height}` });
      }
    });

    return v;
  });

  if (violations.length > 0) {
    layoutViolations.push({ route, viewport: `${vp.width}x${vp.height}`, orientation, violations });
  }

  if (vp.width <= 1024) {
    const navButtons = await page.$$('nav button, header button');
    if (navButtons.length > 0) {
      const hamburger = navButtons[navButtons.length - 1];
      const isVisible = await hamburger.isVisible();
      if (isVisible) {
        await hamburger.click();
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(screenshotDir, `${vp.width}-${orientation}-menu.png`) });
        
        const menuScrollable = await page.evaluate(() => {
          return window.getComputedStyle(document.body).overflow !== 'hidden';
        });
        if (menuScrollable) {
          layoutViolations.push({ route, viewport: `${vp.width}x${vp.height}`, orientation, violations: [{ type: 'Mobile Menu Scroll Leak', details: 'Body overflow is not hidden' }] });
        }
        await hamburger.click();
        await page.waitForTimeout(300);
      }
    }
  }
}

runAudit().catch(console.error);
