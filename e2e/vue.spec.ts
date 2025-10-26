import { test, expect } from '@playwright/test';

test('Visit my Main Page', async ({ page }) => {
  await page.goto('/Main');

  // Check for URL
  // Option 1 - Check only for the Page Name
  await expect(page).toHaveURL('\/Main');
  // Option 2 - Check only One Part of the URL
  const currentURL = page.url();
  await expect(currentURL).toContain('/Main');

  // Test the Form
  await page
    .getByPlaceholder('Name')
    .fill('testing');
  await page
    .getByPlaceholder('Email')
    .fill('testing@gmail.com');
})
