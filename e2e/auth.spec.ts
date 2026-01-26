import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  });

  test('should show login page', async ({ page }) => {
    await page.goto('/login');

    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('should show signup page', async ({ page }) => {
    await page.goto('/signup');

    await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#confirmPassword')).toBeVisible();
  });

  test('should require email and password to login', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('button', { name: /sign in/i }).click();

    // Should show error toast (with extended timeout for toast animation)
    await expect(page.getByText(/please enter both email and password/i)).toBeVisible({ timeout: 10000 });
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.locator('#email').fill('test@example.com');
    await page.locator('#password').fill('password123');
    await page.getByRole('button', { name: /sign in/i }).click();

    // Should show success toast (with extended timeout for toast animation)
    await expect(page.getByText(/login successful/i)).toBeVisible({ timeout: 10000 });

    // Should redirect to account page
    await expect(page).toHaveURL(/\/account/);
  });

  test('should complete full signup flow', async ({ page }) => {
    await page.goto('/signup');

    // Step 1: Account details
    await page.locator('#email').fill('newuser@example.com');
    await page.locator('#password').fill('SecurePass123!');
    await page.locator('#confirmPassword').fill('SecurePass123!');
    await page.locator('#terms').click(); // Agree to terms
    await page.getByRole('button', { name: /continue/i }).click();

    // Step 2: Profile setup
    await expect(page.getByText(/set up your profile/i)).toBeVisible({ timeout: 10000 });
    await page.locator('#name').fill('Test User');
    await page.locator('#organization').fill('Test Company');
    await page.locator('#role').fill('Developer');
    await page.getByRole('button', { name: /create account/i }).click();

    // Should show success toast
    await expect(page.getByText(/account created successfully/i)).toBeVisible({ timeout: 10000 });

    // Should redirect to billing
    await expect(page).toHaveURL(/\/billing/);
  });

  test('should validate password match during signup', async ({ page }) => {
    await page.goto('/signup');

    await page.locator('#email').fill('test@example.com');
    await page.locator('#password').fill('password123');
    await page.locator('#confirmPassword').fill('differentpassword');
    await page.locator('#terms').click();
    await page.getByRole('button', { name: /continue/i }).click();

    // Should show error toast
    await expect(page.getByText(/passwords do not match/i)).toBeVisible({ timeout: 10000 });
  });

  test('should require terms agreement during signup', async ({ page }) => {
    await page.goto('/signup');

    await page.locator('#email').fill('test@example.com');
    await page.locator('#password').fill('password123');
    await page.locator('#confirmPassword').fill('password123');
    // Don't check terms
    await page.getByRole('button', { name: /continue/i }).click();

    // Should show error toast
    await expect(page.getByText(/you must agree to the terms/i)).toBeVisible({ timeout: 10000 });
  });

  test('should navigate between login and signup', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('link', { name: /sign up/i }).click();
    await expect(page).toHaveURL(/\/signup/);

    await page.getByRole('link', { name: /sign in/i }).click();
    await expect(page).toHaveURL(/\/login/);
  });
});
