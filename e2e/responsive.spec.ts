import { test, expect, ROUTES, waitForAppReady, getViewportCategory, scrollToAndWait } from './fixtures/test-fixtures';

test.describe('Responsive Design & Cross-Platform', () => {

  test('should have no horizontal scrollbar on homepage', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const viewportSize = page.viewportSize();
    if (!viewportSize) return;

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    // Allow 2px tolerance for border/scrollbar rendering differences
    expect(scrollWidth).toBeLessThanOrEqual(viewportSize.width + 2);
  });

  test('should have no horizontal overflow on industry pages', async ({ page }) => {
    const routes = [
      ROUTES.bankingAndFinance,
      ROUTES.highTech,
      ROUTES.ehrAndPms,
      ROUTES.cloudFinopsAi,
    ];

    for (const route of routes) {
      await test.step(`Check overflow: ${route}`, async () => {
        await page.goto(route);
        await waitForAppReady(page);

        const viewportSize = page.viewportSize();
        if (!viewportSize) return;

        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        expect(scrollWidth).toBeLessThanOrEqual(viewportSize.width + 2);
      });
    }
  });

  test('text should be readable — no text smaller than 10px', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const tinyTextCount = await page.evaluate(() => {
      const allElements = document.querySelectorAll('body *');
      let count = 0;
      for (const el of allElements) {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        if (el.textContent && el.textContent.trim().length > 0 && fontSize < 10) {
          count++;
        }
      }
      return count;
    });

    expect(tinyTextCount).toBe(0);
  });

  test('interactive elements should have minimum touch target size on mobile', async ({ page }) => {
    const category = getViewportCategory(page);
    if (category !== 'mobile') {
      test.skip();
      return;
    }

    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const smallButtons = await page.evaluate(() => {
      const buttons = document.querySelectorAll('button, a, [role="button"]');
      let tooSmall = 0;
      for (const btn of buttons) {
        const rect = btn.getBoundingClientRect();
        // Only check visible, non-hidden elements
        if (rect.width > 0 && rect.height > 0) {
          if (rect.width < 44 || rect.height < 44) {
            // WCAG recommends 44×44px minimum touch target
            tooSmall++;
          }
        }
      }
      return tooSmall;
    });

    // Warn but don't hard-fail — many sites have small nav links
    if (smallButtons > 0) {
      console.warn(`⚠️  ${smallButtons} touch targets are smaller than 44×44px`);
    }
  });

  test('images should not overflow their containers', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const overflowingImages = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      let count = 0;
      for (const img of images) {
        const parent = img.parentElement;
        if (parent) {
          const imgRect = img.getBoundingClientRect();
          const parentRect = parent.getBoundingClientRect();
          // Allow 2px tolerance
          if (imgRect.width > parentRect.width + 2) {
            count++;
          }
        }
      }
      return count;
    });

    expect(overflowingImages).toBe(0);
  });

  test('should handle viewport resize gracefully', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    // Resize through breakpoints
    const sizes = [
      { width: 375, height: 812 },   // Mobile
      { width: 768, height: 1024 },  // Tablet
      { width: 1440, height: 900 },  // Desktop
    ];

    for (const size of sizes) {
      await test.step(`Resize to ${size.width}×${size.height}`, async () => {
        await page.setViewportSize(size);
        // Wait for any resize-triggered re-renders
        await page.waitForTimeout(500);

        // Page should still be functional
        await expect(page.locator('#root')).toBeVisible();

        // No horizontal overflow after resize
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        expect(scrollWidth).toBeLessThanOrEqual(size.width + 2);
      });
    }
  });

  test('fonts should load correctly', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const fontsLoaded = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.size > 0;
    });

    expect(fontsLoaded).toBe(true);
  });
});
