import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Navigating to http://localhost:8080/...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' });
    console.log('Home page loaded');

    // Now navigate to /zap
    console.log('\nNavigating to /zap...');
    await page.goto('http://localhost:8080/zap', { waitUntil: 'networkidle' });

    // Check page title
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Check for ZapHero component
    const zapHeroExists = await page.locator('[class*="ZapHero"]').count() > 0;
    console.log(`ZapHero component found via class: ${zapHeroExists}`);

    // Look for the text "Zero-Copy Agent Protocol"
    const zcapBadge = await page.locator('text=Zero-Copy Agent Protocol').count();
    console.log(`"Zero-Copy Agent Protocol" badge found: ${zcapBadge > 0}`);

    // Look for "ZAP" heading
    const zapHeading = await page.locator('text=/^ZAP$/', { exact: true }).count();
    console.log(`"ZAP" heading found: ${zapHeading > 0}`);

    // Check body text
    const bodyText = await page.textContent('body');

    console.log('\n--- Checking for expected ZAP content ---');
    console.log(`Contains "Zero-Copy Agent Protocol": ${bodyText.includes('Zero-Copy Agent Protocol')}`);
    console.log(`Contains "One endpoint to rule all MCP servers": ${bodyText.includes('One endpoint to rule all MCP servers')}`);
    console.log(`Contains "40–50×": ${bodyText.includes('40–50×')}`);
    console.log(`Contains "MCP made tool integration": ${bodyText.includes('MCP made tool integration')}`);
    console.log(`Contains "Cap'n Proto-native": ${bodyText.includes('Cap\'n Proto-native')}`);

    console.log('\n--- Checking for unexpected content (404 page) ---');
    console.log(`Contains "Page not found": ${bodyText.includes('Page not found')}`);
    console.log(`Contains "404": ${bodyText.includes('404')}`);
    console.log(`Contains "MIGA": ${bodyText.includes('MIGA')}`);

    // Get all h1 tags
    const h1Elements = await page.locator('h1').all();
    console.log(`\nFound ${h1Elements.length} h1 elements`);
    for (let i = 0; i < h1Elements.length; i++) {
      const text = await h1Elements[i].textContent();
      console.log(`  h1[${i}]: ${text}`);
    }

    // Get the actual HTML to inspect
    const html = await page.content();
    if (html.includes('Zero-Copy Agent Protocol')) {
      console.log('\n✓ Page contains ZAP content (HTML check passed)');
    } else if (html.includes('404')) {
      console.log('\n✗ Page shows 404 error');
    } else if (html.includes('MIGA')) {
      console.log('\n✗ Page is showing MIGA Protocol content');
    }

    // Take screenshot
    await page.screenshot({ path: '/tmp/zap-page-debug.png', fullPage: true });
    console.log('\nScreenshot saved to /tmp/zap-page-debug.png');

  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    await browser.close();
  }
})();
