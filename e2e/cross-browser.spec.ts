import { test, expect, ROUTES, waitForAppReady, getViewportCategory } from './fixtures/test-fixtures';

/**
 * Cross-Browser Consistency Tests
 * 
 * These tests verify that critical functionality works identically
 * across Chromium, Firefox, and WebKit (Safari).
 * Each test runs on ALL configured browser projects.
 */

test.describe('Cross-Browser Consistency', () => {

  test('homepage renders consistently across browsers', async ({ page, browserName }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    // Root renders
    await expect(page.locator('#root')).toBeVisible();

    // No horizontal overflow
    const viewportSize = page.viewportSize();
    if (viewportSize) {
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(viewportSize.width + 2);
    }

    console.log(`✅ Homepage passed on ${browserName}`);
  });

  test('CSS animations and transitions load without errors', async ({ page, browserName }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto(ROUTES.home);
    await waitForAppReady(page);
    // Allow animations to trigger
    await page.waitForTimeout(2000);

    const criticalErrors = errors.filter(
      (e) => !e.includes('ResizeObserver') && !e.includes('Warning')
    );

    expect(criticalErrors).toHaveLength(0);
    console.log(`✅ No animation errors on ${browserName}`);
  });

  test('SVG and WebP images render across browsers', async ({ page, browserName }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);
    await page.waitForTimeout(2000);

    // Check SVG rendering
    const svgCount = await page.locator('svg').count();
    console.log(`🎨 ${svgCount} SVGs rendered on ${browserName}`);

    // Check WebP images loaded
    const brokenWebP = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img[src$=".webp"]');
      let broken = 0;
      for (const img of imgs) {
        if ((img as HTMLImageElement).naturalWidth === 0) broken++;
      }
      return broken;
    });

    expect(brokenWebP).toBe(0);
  });

  test('scroll behavior works across browsers', async ({ page, browserName }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    const scrollTop = await page.evaluate(() => window.scrollY);
    expect(scrollTop).toBe(0);

    console.log(`✅ Scrolling works on ${browserName}`);
  });

  test('React Router navigation works across browsers', async ({ page, browserName }) => {
    // Start at home
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    // Navigate via URL to industry page
    await page.goto(ROUTES.bankingAndFinance);
    await waitForAppReady(page);
    expect(page.url()).toContain('banking-and-finance');

    // Navigate to product
    await page.goto(ROUTES.conciliare);
    await waitForAppReady(page);
    expect(page.url()).toContain('conciliare');

    console.log(`✅ Routing works on ${browserName}`);
  });

  test('custom fonts render across browsers', async ({ page, browserName }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const fontInfo = await page.evaluate(async () => {
      await document.fonts.ready;
      const fonts: string[] = [];
      document.fonts.forEach((font) => {
        if (font.status === 'loaded') {
          fonts.push(font.family);
        }
      });
      return [...new Set(fonts)];
    });

    console.log(`🔤 Fonts loaded on ${browserName}:`, fontInfo);
    // At least some custom fonts should load
    expect(fontInfo.length).toBeGreaterThan(0);
  });

  test('form inputs work across browsers', async ({ page, browserName }) => {
    await page.goto(ROUTES.contact);
    await waitForAppReady(page);

    // Find any input on the page
    const inputs = page.locator('input, textarea');
    const inputCount = await inputs.count();

    if (inputCount > 0) {
      const firstInput = inputs.first();
      await firstInput.scrollIntoViewIfNeeded();
      await firstInput.click({ timeout: 5000 }).catch(() => {});

      // Type test
      const inputType = await firstInput.getAttribute('type');
      if (inputType !== 'submit' && inputType !== 'hidden' && inputType !== 'file') {
        await firstInput.fill('Playwright Test');
        const value = await firstInput.inputValue();
        expect(value).toBe('Playwright Test');
      }
    }

    console.log(`✅ Forms work on ${browserName} (${inputCount} inputs found)`);
  });
});
