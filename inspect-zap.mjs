import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    } else if (msg.type() === 'warning') {
      warnings.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    errors.push(`PAGE ERROR: ${err.message}`);
  });

  try {
    console.log('Navigating to http://localhost:8080/zap...');
    await page.goto('http://localhost:8080/zap', { waitUntil: 'networkidle' });

    console.log('Page loaded successfully');

    // Take screenshot
    await page.screenshot({ path: '/tmp/zap-page.png', fullPage: true });
    console.log('Screenshot saved to /tmp/zap-page.png');

    // Check for black background
    const bodyBackground = await page.evaluate(() => {
      const body = document.querySelector('body');
      const bgColor = window.getComputedStyle(body).backgroundColor;
      return bgColor;
    });
    console.log(`Body background color: ${bodyBackground}`);

    // Check for ZAP text with green gradient
    const zapCount = await page.locator('text=ZAP').count();
    console.log(`ZAP text found: ${zapCount > 0}`);

    // Get page content to analyze
    const pageContent = await page.content();
    const hasZAP = pageContent.includes('ZAP');
    const hasGreen = pageContent.includes('green') || pageContent.includes('#00ff00') || pageContent.includes('#0f0');
    const hasGradient = pageContent.includes('gradient');

    console.log(`Page contains "ZAP": ${hasZAP}`);
    console.log(`Page contains green references: ${hasGreen}`);
    console.log(`Page contains gradient: ${hasGradient}`);

    // Check for stats pattern
    const statsText = await page.textContent('body');
    const has40x = statsText.includes('40');
    const has50x = statsText.includes('50');
    const hasMultiplier = statsText.includes('×');

    console.log(`Has 40 and 50 in text: ${has40x && has50x}`);
    console.log(`Has multiplier symbol: ${hasMultiplier}`);

    // Count different element types
    const codeElements = await page.locator('code').count();
    const preElements = await page.locator('pre').count();
    const svgElements = await page.locator('svg').count();
    const cardElements = await page.locator('[class*="card"]').count();

    console.log(`Code elements: ${codeElements}`);
    console.log(`Pre elements: ${preElements}`);
    console.log(`SVG elements (diagrams): ${svgElements}`);
    console.log(`Card elements: ${cardElements}`);

    // Get first 3000 chars of body text
    const firstChars = statsText.substring(0, 3000);
    console.log(`\n--- Page Text Preview (first 3000 chars) ---`);
    console.log(firstChars);
    console.log(`--- End Preview ---\n`);

    // Final page info
    const title = await page.title();
    const url = page.url();
    console.log(`Page title: ${title}`);
    console.log(`Current URL: ${url}`);

    if (errors.length > 0) {
      console.log(`\nConsole Errors (${errors.length}):`);
      errors.forEach(err => console.log(`  - ${err}`));
    } else {
      console.log(`No console errors found.`);
    }

    if (warnings.length > 0) {
      console.log(`\nConsole Warnings (${warnings.length}):`);
      warnings.forEach(warn => console.log(`  - ${warn}`));
    }

  } catch (error) {
    console.log(`Error: ${error.message}`);
    console.log(error.stack);
  } finally {
    await browser.close();
  }
})();
