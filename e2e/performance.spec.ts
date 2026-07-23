import { test, expect, ROUTES, waitForAppReady } from './fixtures/test-fixtures';

test.describe('Performance & Loading', () => {

  test('homepage should load within 5 seconds', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(ROUTES.home);
    await waitForAppReady(page);
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(5000);
    console.log(`⏱  Homepage loaded in ${loadTime}ms`);
  });

  test('industry pages should load within 8 seconds', async ({ page }) => {
    const routes = [
      { name: 'Banking & Finance', path: ROUTES.bankingAndFinance },
      { name: 'High Tech', path: ROUTES.highTech },
      { name: 'EHR & PMS', path: ROUTES.ehrAndPms },
      { name: 'Cloud FinOps AI', path: ROUTES.cloudFinopsAi },
    ];

    for (const route of routes) {
      await test.step(`Load ${route.name}`, async () => {
        const startTime = Date.now();
        await page.goto(route.path);
        await waitForAppReady(page);
        const loadTime = Date.now() - startTime;

        expect(loadTime).toBeLessThan(8000);
        console.log(`⏱  ${route.name} loaded in ${loadTime}ms`);
      });
    }
  });

  test('should not have broken images on homepage', async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);
    // Wait for lazy images
    await page.waitForTimeout(3000);

    const brokenImages = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const broken: string[] = [];
      for (const img of images) {
        if (img.naturalWidth === 0 && img.src && !img.src.includes('data:')) {
          broken.push(img.src);
        }
      }
      return broken;
    });

    if (brokenImages.length > 0) {
      console.warn(`⚠️  Broken images found:`, brokenImages);
    }
    expect(brokenImages.length).toBe(0);
  });

  test('should not have console errors on key pages', async ({ page }) => {
    const errors: { page: string; error: string }[] = [];

    page.on('pageerror', (error) => {
      errors.push({ page: page.url(), error: error.message });
    });

    const routes = [
      ROUTES.home,
      ROUTES.bankingAndFinance,
      ROUTES.cloudFinopsAi,
      ROUTES.contact,
    ];

    for (const route of routes) {
      await page.goto(route);
      await waitForAppReady(page);
    }

    // Filter out known non-critical errors
    const critical = errors.filter(
      (e) =>
        !e.error.includes('ResizeObserver') &&
        !e.error.includes('Warning:') &&
        !e.error.includes('React')
    );

    if (critical.length > 0) {
      console.error('❌ Console errors detected:', critical);
    }
    expect(critical).toHaveLength(0);
  });

  test('should not have failed network requests on homepage', async ({ page }) => {
    const failedRequests: { url: string; status: number }[] = [];

    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedRequests.push({ url: response.url(), status: response.status() });
      }
    });

    await page.goto(ROUTES.home);
    await waitForAppReady(page);
    await page.waitForTimeout(3000);

    // Filter out expected 404s (e.g., optional API calls)
    const unexpected = failedRequests.filter(
      (r) => !r.url.includes('favicon') && !r.url.includes('analytics')
    );

    if (unexpected.length > 0) {
      console.warn('⚠️  Failed requests:', unexpected);
    }
    // Warn but allow some failures
    expect(unexpected.length).toBeLessThanOrEqual(3);
  });

  test('lazy-loaded routes should work after code splitting', async ({ page }) => {
    // Navigate to a lazy-loaded route
    await page.goto(ROUTES.cloudFinopsAi);
    await waitForAppReady(page);
    await expect(page.locator('#root')).toBeVisible();

    // Navigate to another lazy-loaded route
    await page.goto(ROUTES.aboutUsAi);
    await waitForAppReady(page);
    await expect(page.locator('#root')).toBeVisible();
  });
});
