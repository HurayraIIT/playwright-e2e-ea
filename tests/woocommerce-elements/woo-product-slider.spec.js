// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Slider", () => {
  let heading = "Woo Product Slider";
  let slug = "/woo-product-slider";

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
    const section = page.getByTestId("349931a");
    await section.scrollIntoViewIfNeeded();

    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("4943e05");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("2382c99");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("5e0a8fa");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });
});
