import { test, expect, ROUTES, waitForAppReady, getViewportCategory } from './fixtures/test-fixtures';

test.describe('Navigation & Routing', () => {

  test('should navigate to all industry pages without errors', async ({ page }) => {
    const industryRoutes = [
      { name: 'Banking & Finance', path: ROUTES.bankingAndFinance },
      { name: 'High Tech', path: ROUTES.highTech },
      { name: 'EHR & PMS', path: ROUTES.ehrAndPms },
      { name: 'Cloud FinOps AI', path: ROUTES.cloudFinopsAi },
    ];

    for (const route of industryRoutes) {
      await test.step(`Navigate to ${route.name}`, async () => {
        const response = await page.goto(route.path);
        expect(response?.status()).toBeLessThan(400);
        await waitForAppReady(page);
        await expect(page.locator('#root')).toBeVisible();
      });
    }
  });

  test('should navigate to Banking & Finance product pages', async ({ page }) => {
    const productRoutes = [
      { name: 'Conciliare', path: ROUTES.conciliare },
      { name: 'Remitree', path: ROUTES.remitree },
      { name: 'Almanac (AML)', path: ROUTES.almanac },
      { name: 'Pago', path: ROUTES.pago },
      { name: 'Bankfair', path: ROUTES.bankfair },
      { name: 'Sherlock', path: ROUTES.sherlock },
      { name: 'KYC', path: ROUTES.kyc },
      { name: 'SAMS', path: ROUTES.sams },
      { name: 'IBS', path: ROUTES.ibs },
      { name: 'Loan OS', path: ROUTES.loanOs },
    ];

    for (const route of productRoutes) {
      await test.step(`Navigate to product: ${route.name}`, async () => {
        const response = await page.goto(route.path);
        expect(response?.status()).toBeLessThan(400);
        await waitForAppReady(page);
        await expect(page.locator('#root')).toBeVisible();
        // Should NOT show productnotfound
        const notFound = page.locator('text=/product.*not.*found/i');
        const notFoundCount = await notFound.count();
        expect(notFoundCount).toBe(0);
      });
    }
  });

  test('should navigate to About Us pages', async ({ page }) => {
    const aboutRoutes = [
      { name: 'BNF About Us', path: ROUTES.aboutUsBnf },
      { name: 'HighTech About Us', path: ROUTES.aboutUsHighTech },
      { name: 'AI About Us', path: ROUTES.aboutUsAi },
    ];

    for (const route of aboutRoutes) {
      await test.step(`Navigate to ${route.name}`, async () => {
        const response = await page.goto(route.path);
        expect(response?.status()).toBeLessThan(400);
        await waitForAppReady(page);
      });
    }
  });

  test('should navigate to Contact page', async ({ page }) => {
    const response = await page.goto(ROUTES.contact);
    expect(response?.status()).toBeLessThan(400);
    await waitForAppReady(page);
    await expect(page.locator('#root')).toBeVisible();
  });

  test('should handle invalid routes gracefully', async ({ page }) => {
    await page.goto('/industries/banking-and-finance/products/nonexistent');
    await waitForAppReady(page);
    // Should show the ProductNotFound component
    await expect(page.locator('#root')).toBeVisible();
  });

  test('should handle browser back/forward navigation', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);

    await page.goto(ROUTES.bankingAndFinance);
    await waitForAppReady(page);

    await page.goBack();
    await waitForAppReady(page);
    expect(page.url()).toContain('/');

    await page.goForward();
    await waitForAppReady(page);
    expect(page.url()).toContain('banking-and-finance');
  });
});
