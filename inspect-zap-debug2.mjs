import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Navigating to /zap...');
    await page.goto('http://localhost:8080/zap', { waitUntil: 'load', timeout: 10000 });
    console.log('Page loaded');

    // Wait a bit for React to render
    await page.waitForTimeout(2000);

    // Check page title
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Check body text
    const bodyText = await page.textContent('body');

    console.log('\n--- Checking for ZAP content ---');
    console.log(`Contains "Zero-Copy Agent Protocol": ${bodyText.includes('Zero-Copy Agent Protocol')}`);
    console.log(`Contains "One endpoint to rule all MCP servers": ${bodyText.includes('One endpoint to rule all MCP servers')}`);
    console.log(`Contains "40–50×": ${bodyText.includes('40–50×') || bodyText.includes('40-50×')}`);
    console.log(`Contains "MCP made tool integration": ${bodyText.includes('MCP made tool integration')}`);
    console.log(`Contains "Cap'n Proto": ${bodyText.includes('Cap\'n Proto')}`);
    console.log(`Contains "agent swarms": ${bodyText.includes('agent swarms')}`);

    console.log('\n--- Checking for 404/error content ---');
    console.log(`Contains "404": ${bodyText.includes('404')}`);
    console.log(`Contains "Page not found": ${bodyText.includes('Page not found')}`);
    console.log(`Contains "MIGA": ${bodyText.includes('MIGA')}`);

    // Get all main headings
    const h1s = await page.locator('h1').allTextContents();
    const h2s = await page.locator('h2').allTextContents();
    console.log(`\nh1 elements: ${h1s.join(' | ')}`);
    console.log(`h2 elements (first 3): ${h2s.slice(0, 3).join(' | ')}`);

    // Check for green color indicators
    const greenElements = await page.locator('[class*="green"]').count();
    console.log(`\nElements with "green" class: ${greenElements}`);

    // Look for specific stat text
    const hasLowerOverhead = await page.locator('text=Lower overhead').count();
    const hasLocalHop = await page.locator('text=Local hop').count();
    console.log(`"Lower overhead" stat found: ${hasLowerOverhead > 0}`);
    console.log(`"Local hop" stat found: ${hasLocalHop > 0}`);

    // Take screenshot
    await page.screenshot({ path: '/tmp/zap-page-fresh.png', fullPage: true });
    console.log('\nScreenshot saved');

  } catch (error) {
    console.log(`Error: ${error.message}`);
    console.log(error.stack);
  } finally {
    await browser.close();
  }
})();
