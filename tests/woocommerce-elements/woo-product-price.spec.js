// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Price", () => {
  let heading = "Woo Product Price";
  let slug = "/woo-product-price";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Markup 01", async ({ page }) => {
    const section = page.getByTestId("b46d7b1");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 02", async ({ page }) => {
    const section = page.getByTestId("eff317c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 03", async ({ page }) => {
    const section = page.getByTestId("0413b6a");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 04", async ({ page }) => {
    const section = page.getByTestId("dfa2a62");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
