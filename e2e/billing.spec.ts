import { test, expect } from '@playwright/test';

test.describe('Billing Flow', () => {
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

  test('should show account billing page', async ({ page }) => {
    await page.goto('/account/billing');

    // Should show billing content
    await expect(page.getByText(/billing|payment|overview/i).first()).toBeVisible({ timeout: 10000 });
  });

  test('should show payment methods tab', async ({ page }) => {
    await page.goto('/account/billing');

    // Navigate to payment methods if needed or check it exists
    await expect(page.getByText(/payment method|credit|card/i).first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe('Billing Plans', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('user', JSON.stringify({
        id: 'user-test',
        name: 'Test User',
        email: 'test@example.com',
        avatar: null
      }));
    });
  });

  test('should show pricing page', async ({ page }) => {
    await page.goto('/pricing');

    await expect(page.getByText(/pricing|plan|free/i).first()).toBeVisible({ timeout: 10000 });
  });
});
