import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for ProductX (QNEST)
 * 
 * Cross-Browser:  Chromium (Chrome/Edge), Firefox, WebKit (Safari)
 * Cross-Platform: Windows & macOS emulation
 * Screen Sizes:   Desktop (1920×1080, 1440×900, 1280×720)
 *                 Tablet  (iPad, iPad Mini, iPad Pro landscape)
 *                 Mobile  (iPhone 14, iPhone SE, Pixel 7, Galaxy S23)
 * 
 * Usage:
 *   npm run test:e2e              — run all tests
 *   npm run test:e2e:chromium     — Chromium only
 *   npm run test:e2e:firefox      — Firefox only
 *   npm run test:e2e:webkit       — WebKit/Safari only
 *   npm run test:e2e:mobile       — mobile viewports only
 *   npm run test:e2e:tablet       — tablet viewports only
 *   npm run test:e2e:desktop      — desktop viewports only
 *   npm run test:e2e:ui           — interactive UI mode
 *   npm run test:e2e:report       — view last HTML report
 */

export default defineConfig({
  testDir: './e2e',
  outputDir: './e2e/test-results',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI (resource-constrained) */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter: use list for terminal + HTML for detailed review */
  reporter: [
    ['list'],
    ['html', { outputFolder: './e2e/playwright-report', open: 'never' }],
    ['json', { outputFile: './e2e/test-results/results.json' }],
  ],

  /* Shared settings for all projects */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:5173',

    /* Collect trace on first retry */
    trace: 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Video on first retry */
    video: 'on-first-retry',

    /* Default navigation timeout */
    navigationTimeout: 30000,

    /* Default action timeout */
    actionTimeout: 15000,
  },

  /* ─────────────────────────────────────────────────────────────
   * PROJECTS — Each project = a browser + viewport + platform
   * Tags enable running subsets: @desktop, @tablet, @mobile
   * ───────────────────────────────────────────────────────────── */
  projects: [
    // ═══════════════════════════════════════════════════════════
    //  DESKTOP — Windows
    // ═══════════════════════════════════════════════════════════
    {
      name: 'Desktop Chrome — Windows 1920×1080',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      },
      metadata: { tags: ['@desktop', '@windows', '@chromium'] },
    },
    {
      name: 'Desktop Chrome — Windows 1440×900',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      },
      metadata: { tags: ['@desktop', '@windows', '@chromium'] },
    },
    {
      name: 'Desktop Chrome — Windows 1280×720',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      },
      metadata: { tags: ['@desktop', '@windows', '@chromium'] },
    },
    {
      name: 'Desktop Edge — Windows 1920×1080',
      use: {
        ...devices['Desktop Edge'],
        viewport: { width: 1920, height: 1080 },
      },
      metadata: { tags: ['@desktop', '@windows', '@edge'] },
    },
    {
      name: 'Desktop Firefox — Windows 1920×1080',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
      },
      metadata: { tags: ['@desktop', '@windows', '@firefox'] },
    },
    {
      name: 'Desktop Firefox — Windows 1440×900',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1440, height: 900 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
      },
      metadata: { tags: ['@desktop', '@windows', '@firefox'] },
    },

    // ═══════════════════════════════════════════════════════════
    //  DESKTOP — macOS
    // ═══════════════════════════════════════════════════════════
    {
      name: 'Desktop Chrome — macOS 1920×1080',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      },
      metadata: { tags: ['@desktop', '@macos', '@chromium'] },
    },
    {
      name: 'Desktop Chrome — macOS 1440×900',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      },
      metadata: { tags: ['@desktop', '@macos', '@chromium'] },
    },
    {
      name: 'Desktop Safari — macOS 1920×1080',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
      metadata: { tags: ['@desktop', '@macos', '@webkit'] },
    },
    {
      name: 'Desktop Safari — macOS 1440×900',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 900 },
      },
      metadata: { tags: ['@desktop', '@macos', '@webkit'] },
    },
    {
      name: 'Desktop Firefox — macOS 1920×1080',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:128.0) Gecko/20100101 Firefox/128.0',
      },
      metadata: { tags: ['@desktop', '@macos', '@firefox'] },
    },

    // ═══════════════════════════════════════════════════════════
    //  TABLET
    // ═══════════════════════════════════════════════════════════
    {
      name: 'iPad Pro 11 — Portrait',
      use: {
        ...devices['iPad Pro 11'],
      },
      metadata: { tags: ['@tablet', '@webkit'] },
    },
    {
      name: 'iPad Pro 11 — Landscape',
      use: {
        ...devices['iPad Pro 11 landscape'],
      },
      metadata: { tags: ['@tablet', '@webkit'] },
    },
    {
      name: 'iPad Mini — Portrait',
      use: {
        ...devices['iPad Mini'],
      },
      metadata: { tags: ['@tablet', '@webkit'] },
    },
    {
      name: 'iPad Mini — Landscape',
      use: {
        ...devices['iPad Mini landscape'],
      },
      metadata: { tags: ['@tablet', '@webkit'] },
    },
    {
      name: 'Galaxy Tab S4 — Chromium',
      use: {
        ...devices['Galaxy Tab S4'],
      },
      metadata: { tags: ['@tablet', '@chromium', '@android'] },
    },

    // ═══════════════════════════════════════════════════════════
    //  MOBILE
    // ═══════════════════════════════════════════════════════════
    {
      name: 'iPhone 14 — Safari',
      use: {
        ...devices['iPhone 14'],
      },
      metadata: { tags: ['@mobile', '@webkit', '@ios'] },
    },
    {
      name: 'iPhone 14 Pro Max — Safari',
      use: {
        ...devices['iPhone 14 Pro Max'],
      },
      metadata: { tags: ['@mobile', '@webkit', '@ios'] },
    },
    {
      name: 'iPhone SE — Safari',
      use: {
        ...devices['iPhone SE'],
      },
      metadata: { tags: ['@mobile', '@webkit', '@ios'] },
    },
    {
      name: 'iPhone 14 — Landscape',
      use: {
        ...devices['iPhone 14 landscape'],
      },
      metadata: { tags: ['@mobile', '@webkit', '@ios'] },
    },
    {
      name: 'Pixel 7 — Chromium',
      use: {
        ...devices['Pixel 7'],
      },
      metadata: { tags: ['@mobile', '@chromium', '@android'] },
    },
    {
      name: 'Galaxy S9+ — Chromium',
      use: {
        ...devices['Galaxy S9+'],
      },
      metadata: { tags: ['@mobile', '@chromium', '@android'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
