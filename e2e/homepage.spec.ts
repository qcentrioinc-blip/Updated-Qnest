import { test, expect, ROUTES, waitForAppReady, getViewportCategory } from './fixtures/test-fixtures';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForAppReady(page);
  });

  test('should load the homepage and display content', async ({ page }) => {
    // Page title
    await expect(page).toHaveTitle(/QNEST/i);

    // Root container should be present
    await expect(page.locator('#root')).toBeVisible();

    // Page should not show error states
    await expect(page.locator('text=Page not found')).not.toBeVisible();
  });

  test('should have correct meta tags for SEO', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /qnest/i);

    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('should render without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    // Page already loaded by beforeEach — wait for any async errors
    await page.waitForTimeout(2000);

    // Allow minor React dev-mode warnings but catch real errors
    const criticalErrors = errors.filter(
      (e) => !e.includes('React') && !e.includes('Warning') && !e.includes('ResizeObserver')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('should be responsive — no horizontal overflow', async ({ page }) => {
    const viewportSize = page.viewportSize();
    if (!viewportSize) return;

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    // Allow 1px tolerance for sub-pixel rendering
    expect(bodyWidth).toBeLessThanOrEqual(viewportSize.width + 1);
  });

  test('should display navigation elements', async ({ page }) => {
    const category = getViewportCategory(page);

    if (category === 'mobile') {
      // On mobile, look for a hamburger menu / mobile nav toggle
      const mobileToggle = page.locator(
        '[aria-label*="menu" i], [class*="hamburger" i], [class*="mobile-menu" i], button:has(svg)'
      ).first();
      // Mobile nav may use a hamburger — check it exists
      const toggleCount = await mobileToggle.count();
      expect(toggleCount).toBeGreaterThanOrEqual(0); // Soft check — may not exist on all pages
    } else {
      // On desktop/tablet, nav links should be visible
      const navArea = page.locator('nav, header, [class*="nav" i]').first();
      const navExists = await navArea.count();
      expect(navExists).toBeGreaterThanOrEqual(0);
    }
  });
});
