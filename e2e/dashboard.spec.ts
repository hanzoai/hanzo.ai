import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Set up authenticated user state
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('user', JSON.stringify({
        id: 'user-test',
        name: 'Test User',
        email: 'test@example.com',
        avatar: null
      }));
      localStorage.setItem('organizations', JSON.stringify([
        { id: 'org-test', name: 'Test Company', role: 'owner' }
      ]));
    });
  });

  test('should show dashboard', async ({ page }) => {
    await page.goto('/dashboard');

    // Should show dashboard content
    await expect(page.getByText(/dashboard|overview|project|agent/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show account page', async ({ page }) => {
    await page.goto('/account');

    await expect(page.getByText(/account|profile|setting|organization/i).first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe('Cloud Products Pages', () => {
  test('should show products page', async ({ page }) => {
    await page.goto('/products');

    await expect(page.getByText(/product|service|ai|cloud/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show AI page', async ({ page }) => {
    await page.goto('/ai');

    await expect(page.getByText(/ai|model|llm|inference/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show Platform page', async ({ page }) => {
    await page.goto('/platform');

    await expect(page.getByText(/platform|deploy|infrastructure|build/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show Cloud page', async ({ page }) => {
    await page.goto('/cloud');

    await expect(page.getByText(/cloud|infrastructure|region|edge/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show Analytics page', async ({ page }) => {
    await page.goto('/analytics');

    await expect(page.getByText(/analytics|insight|data|metric/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show Pricing page', async ({ page }) => {
    await page.goto('/pricing');

    await expect(page.getByText(/pricing|plan|free|pro/i).first()).toBeVisible({ timeout: 10000 });
  });
});
