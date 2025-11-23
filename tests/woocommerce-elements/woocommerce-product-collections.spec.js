// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Collection", () => {
  let heading = "Woo Product Collection";
  let slug = "/woocommerce-product-collections";

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
    const section = page.getByTestId("1eb9cdb2");
    await section.scrollIntoViewIfNeeded();

    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("69244da7");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("43f6361b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("3ba8c7a8");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });
});
