// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Images", () => {
  let heading = "Woo Product Images";
  let slug = "/woo-product-images";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Style 01", async ({ page }) => {
    const section = page.getByTestId("56917fe");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator('div[aria-label="1 / 6"]').first().click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("5cfc4ef");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator('div[aria-label="1 / 6"]').first().click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("9c1e85d");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator('span[aria-label="Go to slide 1"]').first().click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("75d77f9");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator('div[aria-label="1 / 6"]').first().click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
