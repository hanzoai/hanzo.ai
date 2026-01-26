import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const pageErrors = [];
  const pageWarnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      pageErrors.push(msg.text());
    } else if (msg.type() === 'warning') {
      pageWarnings.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    pageErrors.push(`PAGE ERROR: ${err.message}`);
  });

  try {
    console.log('=== ZAP PAGE COMPREHENSIVE INSPECTION ===\n');

    console.log('1. PAGE LOADING');
    console.log('   Navigating to http://localhost:8080/zap...');
    await page.goto('http://localhost:8080/zap', { waitUntil: 'load', timeout: 10000 });
    await page.waitForTimeout(2000);
    console.log('   ✓ Page loaded successfully\n');

    // 2. Background Color Check
    console.log('2. BACKGROUND COLOR VALIDATION');
    const bodyBg = await page.evaluate(() => {
      const body = document.querySelector('body');
      const main = document.querySelector('main');
      return {
        body: window.getComputedStyle(body).backgroundColor,
        main: main ? window.getComputedStyle(main).backgroundColor : 'N/A'
      };
    });
    console.log(`   Body background: ${bodyBg.body}`);
    console.log(`   Main background: ${bodyBg.main}`);
    const isBlackBg = bodyBg.body.includes('rgb(7, 7, 10)') || bodyBg.body.includes('rgb(0, 0, 0)');
    console.log(`   ${isBlackBg ? '✓' : '✗'} Black/dark background rendering\n`);

    // 3. ZAP Hero Text Check
    console.log('3. ZAP HERO TEXT (Green Gradient)');
    const zapElement = await page.locator('text=ZAP', { exact: true }).first();
    const zapCount = await page.locator('text=ZAP').count();
    const zapExists = zapCount > 0;
    console.log(`   ${zapExists ? '✓' : '✗'} "ZAP" text found: ${zapExists} (count: ${zapCount})`);

    if (zapExists) {
      const zapStyles = await zapElement.evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          backgroundImage: style.backgroundImage,
          color: style.color,
          textShadow: style.textShadow,
          parent: el.parentElement?.className
        };
      });
      console.log(`   Font size: ${zapStyles.fontSize}`);
      console.log(`   Font weight: ${zapStyles.fontWeight}`);
      console.log(`   Has gradient: ${zapStyles.backgroundImage.includes('gradient')}`);
      console.log(`   Background image: ${zapStyles.backgroundImage.substring(0, 100)}...\n`);
    }

    // 4. Stats Cards Check
    console.log('4. STATS CARDS VALIDATION');
    const statCards = await page.locator('[class*="rounded-xl"]').filter({ hasText: /×|μs|Infra/ }).all();
    console.log(`   Found ${statCards.length} stat card elements`);

    const stats = {
      '40–50×': await page.locator('text=/40.*50.*×|40-50.*×/').count() > 0,
      '↓ Infra': await page.locator('text=↓ Infra').count() > 0 || await page.locator('text=Infra').count() > 0,
      '< 1 μs': await page.locator('text=/< 1.*μs|<.*1.*μs/').count() > 0,
      '0 JSON': await page.locator('text=JSON parsing').count() > 0
    };

    console.log(`   ${stats['40–50×'] ? '✓' : '✗'} "40–50×" Lower overhead stat`);
    console.log(`   ${stats['↓ Infra'] ? '✓' : '✗'} "↓ Infra" stat`);
    console.log(`   ${stats['< 1 μs'] ? '✓' : '✗'} "< 1 μs" Local hop stat`);
    console.log(`   ${stats['0 JSON'] ? '✓' : '✗'} "0 JSON parsing" stat\n`);

    // 5. Feature Cards Check
    console.log('5. FEATURE CARDS VALIDATION');
    const featureSection = await page.locator('text=Why ZAP').count();
    const featuresExist = featureSection > 0;
    console.log(`   ${featuresExist ? '✓' : '✗'} Features section found`);

    const featureCards = await page.locator('h2').filter({ hasText: /Simple to Use|Speed|Production/ }).count();
    console.log(`   Feature h2 headings found: ${featureCards}\n`);

    // 6. Code Example Check
    console.log('6. CODE EXAMPLE SECTION');
    const codeExample = await page.locator('text=ZapCodeExample').count() +
                       await page.locator('[class*="code"], [class*="terminal"]').count();
    const hasCodeContent = await page.locator('pre, code').count() > 0;
    console.log(`   Code/terminal elements: ${await page.locator('pre, code').count()}`);
    console.log(`   ${hasCodeContent ? '✓' : '✗'} Code example visible\n`);

    // 7. Architecture Diagram Check
    console.log('7. ARCHITECTURE DIAGRAM');
    const svgCount = await page.locator('svg').count();
    const diagramSection = await page.locator('text=Architecture').count();
    console.log(`   SVG elements found: ${svgCount}`);
    console.log(`   ${diagramSection > 0 ? '✓' : '✗'} Architecture section found\n`);

    // 8. Green Color Elements
    console.log('8. GREEN GRADIENT COLORS');
    const greenClasses = await page.evaluate(() => {
      const elements = document.querySelectorAll('[class*="green"]');
      return {
        count: elements.length,
        examples: Array.from(elements).slice(0, 3).map(el => ({
          class: el.className,
          textContent: el.textContent?.substring(0, 50)
        }))
      };
    });
    console.log(`   Elements with "green" class: ${greenClasses.count}`);
    console.log(`   Sample green elements:`);
    greenClasses.examples.forEach((ex, i) => {
      console.log(`     [${i}] ${ex.class} - "${ex.textContent}"`);
    });
    console.log();

    // 9. Console Errors/Warnings
    console.log('9. CONSOLE MESSAGES');
    console.log(`   Errors: ${pageErrors.length}`);
    if (pageErrors.length > 0) {
      pageErrors.slice(0, 3).forEach((err, i) => {
        console.log(`     [${i}] ${err.substring(0, 100)}`);
      });
      if (pageErrors.length > 3) console.log(`     ... and ${pageErrors.length - 3} more`);
    }
    console.log(`   Warnings: ${pageWarnings.length}`);
    if (pageWarnings.length > 0) {
      pageWarnings.slice(0, 2).forEach((warn, i) => {
        console.log(`     [${i}] ${warn.substring(0, 100)}`);
      });
    }
    console.log();

    // 10. Layout & Responsive
    console.log('10. LAYOUT VALIDATION');
    const viewport = page.viewportSize();
    console.log(`   Viewport: ${viewport.width}x${viewport.height}px`);

    const layoutInfo = await page.evaluate(() => {
      const hero = document.querySelector('section');
      const main = document.querySelector('main');
      return {
        heroMinHeight: hero ? window.getComputedStyle(hero).minHeight : 'N/A',
        mainExists: !!main,
        gridElements: document.querySelectorAll('[class*="grid"]').length
      };
    });
    console.log(`   Hero min-height: ${layoutInfo.heroMinHeight}`);
    console.log(`   Main element exists: ${layoutInfo.mainExists}`);
    console.log(`   Grid elements: ${layoutInfo.gridElements}\n`);

    // 11. Page Content Summary
    console.log('11. PAGE CONTENT VERIFICATION');
    const bodyText = await page.textContent('body');
    const contentChecks = {
      'Zero-Copy Agent Protocol': bodyText.includes('Zero-Copy Agent Protocol'),
      'One endpoint to rule all': bodyText.includes('One endpoint to rule all MCP servers'),
      'MCP made tool': bodyText.includes('MCP made tool integration'),
      'Cap\'n Proto-native': bodyText.includes('Cap\'n Proto'),
      'agent swarms': bodyText.includes('agent swarms'),
      'Low allocation': bodyText.includes('allocation') || bodyText.includes('memory'),
      'GitHub link': bodyText.includes('GitHub')
    };

    for (const [check, result] of Object.entries(contentChecks)) {
      console.log(`   ${result ? '✓' : '✗'} ${check}`);
    }
    console.log();

    // 12. Final Summary
    console.log('=== OVERALL PAGE HEALTH ===');
    const passCount = Object.values(contentChecks).filter(Boolean).length;
    const failCount = Object.values(contentChecks).filter(v => !v).length;

    console.log(`Page Title: ${await page.title()}`);
    console.log(`URL: ${page.url()}`);
    console.log(`Content Checks Passed: ${passCount}/${passCount + failCount}`);
    console.log(`Console Errors: ${pageErrors.length}`);
    console.log(`Console Warnings: ${pageWarnings.length}`);
    console.log(`\nStatus: ${pageErrors.length === 0 ? '✓ HEALTHY' : '⚠ HAS ERRORS'}`);

    // Take final screenshot
    await page.screenshot({ path: '/tmp/zap-final-report.png', fullPage: true });
    console.log(`\nScreenshot saved to /tmp/zap-final-report.png`);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    console.log(error.stack);
  } finally {
    await browser.close();
  }
})();
