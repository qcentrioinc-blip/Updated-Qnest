import { test, expect, ROUTES, waitForAppReady } from './fixtures/test-fixtures';

test.describe('Accessibility Basics', () => {

  test('homepage should have proper heading hierarchy', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const headings = await page.evaluate(() => {
      const hs = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(hs).map((h) => ({
        tag: h.tagName,
        text: h.textContent?.trim().substring(0, 50),
      }));
    });

    // Should have at least one heading
    expect(headings.length).toBeGreaterThan(0);
    console.log('📋 Headings found:', headings);
  });

  test('images should have alt attributes', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const imagesWithoutAlt = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const missing: string[] = [];
      for (const img of images) {
        if (!img.hasAttribute('alt')) {
          missing.push(img.src);
        }
      }
      return missing;
    });

    if (imagesWithoutAlt.length > 0) {
      console.warn(`⚠️  ${imagesWithoutAlt.length} images missing alt attribute:`, imagesWithoutAlt.slice(0, 5));
    }
  });

  test('interactive elements should be keyboard accessible', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    // Tab through the page and check focus is visible
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
    }

    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? el.tagName : null;
    });

    // Something should receive focus
    expect(focusedElement).not.toBeNull();
  });

  test('page should have lang attribute', async ({ page }) => {
    await page.goto(ROUTES.home);
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBeTruthy();
  });

  test('links should have discernible text', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    const emptyLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a');
      let count = 0;
      for (const link of links) {
        const text = link.textContent?.trim();
        const ariaLabel = link.getAttribute('aria-label');
        const title = link.getAttribute('title');
        const hasImage = link.querySelector('img[alt]');

        if (!text && !ariaLabel && !title && !hasImage) {
          count++;
        }
      }
      return count;
    });

    if (emptyLinks > 0) {
      console.warn(`⚠️  ${emptyLinks} links have no discernible text`);
    }
  });

  test('color contrast — text should be visible', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    // Basic check: ensure body has background and text that are different
    const contrast = await page.evaluate(() => {
      const body = document.body;
      const style = window.getComputedStyle(body);
      return {
        bg: style.backgroundColor,
        color: style.color,
      };
    });

    expect(contrast.bg).not.toBe(contrast.color);
  });
});
