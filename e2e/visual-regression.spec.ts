import { test, expect, ROUTES, waitForAppReady } from './fixtures/test-fixtures';

/**
 * Visual Regression Tests
 * 
 * These tests capture screenshots and compare them against baseline images.
 * First run creates the baselines in `e2e/__screenshots__/`.
 * Subsequent runs compare against them.
 * 
 * To update baselines:  npx playwright test --update-snapshots
 */

test.describe('Visual Regression — Key Pages', () => {

  test('Homepage — full page screenshot', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);
    // Wait for animations to settle
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05, // 5% tolerance for cross-browser rendering
      animations: 'disabled',
    });
  });

  test('Banking & Finance — full page screenshot', async ({ page }) => {
    await page.goto(ROUTES.bankingAndFinance);
    await waitForAppReady(page);
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('banking-finance.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
      animations: 'disabled',
    });
  });

  test('Cloud FinOps AI — full page screenshot', async ({ page }) => {
    await page.goto(ROUTES.cloudFinopsAi);
    await waitForAppReady(page);
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('cloud-finops-ai.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
      animations: 'disabled',
    });
  });

  test('EHR & PMS — full page screenshot', async ({ page }) => {
    await page.goto(ROUTES.ehrAndPms);
    await waitForAppReady(page);
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('ehr-and-pms.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
      animations: 'disabled',
    });
  });

  test('High Tech — full page screenshot', async ({ page }) => {
    await page.goto(ROUTES.highTech);
    await waitForAppReady(page);
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('high-tech.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
      animations: 'disabled',
    });
  });

  test('Contact page — full page screenshot', async ({ page }) => {
    await page.goto(ROUTES.contact);
    await waitForAppReady(page);
    await page.waitForTimeout(2000);

    await expect(page).toHaveScreenshot('contact.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
      animations: 'disabled',
    });
  });
});

test.describe('Visual Regression — Product Pages', () => {
  const products = [
    { name: 'Conciliare', path: ROUTES.conciliare },
    { name: 'Remitree', path: ROUTES.remitree },
    { name: 'Bankfair', path: ROUTES.bankfair },
    { name: 'Sherlock', path: ROUTES.sherlock },
  ];

  for (const product of products) {
    test(`${product.name} — full page screenshot`, async ({ page }) => {
      await page.goto(product.path);
      await waitForAppReady(page);
      await page.waitForTimeout(2000);

      await expect(page).toHaveScreenshot(`product-${product.name.toLowerCase()}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.05,
        animations: 'disabled',
      });
    });
  }
});
