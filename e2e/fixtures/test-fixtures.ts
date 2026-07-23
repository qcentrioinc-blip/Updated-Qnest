import { test as base, expect, Page } from '@playwright/test';

// ─────────────────────────────────────────────────────────
//  VIEWPORT BREAKPOINTS (mirrors your CSS/Tailwind config)
// ─────────────────────────────────────────────────────────
export const BREAKPOINTS = {
  mobile: { maxWidth: 639 },
  tablet: { minWidth: 640, maxWidth: 1023 },
  desktop: { minWidth: 1024 },
} as const;

// ─────────────────────────────────────────────────────────
//  APPLICATION ROUTES
// ─────────────────────────────────────────────────────────
export const ROUTES = {
  home: '/',
  landingPage: '/landingpage',

  // Industry home pages
  bankingAndFinance: '/industries/banking-and-finance',
  highTech: '/industries/high-tech',
  ehrAndPms: '/industries/ehr-and-pms',
  cloudFinopsAi: '/industries/cloud-finops-ai',

  // Banking & Finance products
  conciliare: '/industries/banking-and-finance/products/conciliare',
  remitree: '/industries/banking-and-finance/products/remitree',
  almanac: '/industries/banking-and-finance/products/almanac',
  pago: '/industries/banking-and-finance/products/pago',
  bankfair: '/industries/banking-and-finance/products/bankfair',
  sherlock: '/industries/banking-and-finance/products/sherlock',
  kyc: '/industries/banking-and-finance/products/kyc',
  sams: '/industries/banking-and-finance/products/sams',
  ibs: '/industries/banking-and-finance/products/internet-banking-system',
  loanOs: '/industries/banking-and-finance/products/loan-origination-system',
  allProducts: '/industries/banking-and-finance/all-products',

  // About Us
  aboutUsBnf: '/industries/banking-and-finance/about-us',
  aboutUsHighTech: '/industries/high-tech/aboutus',
  aboutUsAi: '/industries/cloud-finops-ai/about-us',

  // Contact
  contact: '/contact',

  // Blogs
  blogsBnf: '/industries/banking-and-finance/blogs',

  // EHR & PMS sub-pages
  ehrPhysician: '/industries/ehr-and-pms/physician',
  ehrPricing: '/industries/ehr-and-pms/pricing',
  ehrNurse: '/industries/ehr-and-pms/nurse',

  // Cloud FinOps AI sub-pages
  aiPricing: '/industries/cloud-finops-ai/pricing',
  aiCareers: '/industries/cloud-finops-ai/careers',
  aiGlossary: '/industries/cloud-finops-ai/glossary',

  // Platform & Marketplace
  platform: '/platform',
  marketplace: '/marketplace',
} as const;

// ─────────────────────────────────────────────────────────
//  HELPER UTILITIES
// ─────────────────────────────────────────────────────────

/**
 * Determine the viewport category from page dimensions.
 */
export function getViewportCategory(page: Page): 'mobile' | 'tablet' | 'desktop' {
  const vSize = page.viewportSize();
  if (!vSize) return 'desktop';
  if (vSize.width <= BREAKPOINTS.mobile.maxWidth) return 'mobile';
  if (vSize.width <= BREAKPOINTS.tablet.maxWidth) return 'tablet';
  return 'desktop';
}

/**
 * Wait for the React app to fully hydrate.
 */
export async function waitForAppReady(page: Page) {
  await page.waitForSelector('#root', { state: 'attached', timeout: 15000 });
  // Wait for Suspense fallback to disappear
  await page.waitForFunction(
    () => !document.querySelector('#root')?.textContent?.includes('...Loading'),
    { timeout: 20000 }
  ).catch(() => {
    // It's okay if app loaded without showing fallback
  });
}

/**
 * Scroll-triggered visibility check — waits for an element that
 * may only appear after scrolling (GSAP / Framer Motion etc.)
 */
export async function scrollToAndWait(page: Page, selector: string, opts?: { timeout?: number }) {
  const timeout = opts?.timeout ?? 10000;
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded({ timeout });
  await el.waitFor({ state: 'visible', timeout });
  return el;
}

// ─────────────────────────────────────────────────────────
//  EXTENDED TEST FIXTURE
// ─────────────────────────────────────────────────────────
type TestFixtures = {
  /** Current viewport category */
  viewportCategory: 'mobile' | 'tablet' | 'desktop';
};

export const test = base.extend<TestFixtures>({
  viewportCategory: async ({ page }, use) => {
    await use(getViewportCategory(page));
  },
});

export { expect };
