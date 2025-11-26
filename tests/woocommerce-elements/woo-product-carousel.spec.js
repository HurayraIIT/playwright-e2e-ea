// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Carousel", () => {
  let heading = "Woo Product Carousel";
  let slug = "/woo-product-carousel";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.getByTestId("ace5bb1");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("14fc1ae");
    await section.scrollIntoViewIfNeeded();
    await section.locator('div[aria-label="1 / 4"]').first().click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("2664153");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("657fc18");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
