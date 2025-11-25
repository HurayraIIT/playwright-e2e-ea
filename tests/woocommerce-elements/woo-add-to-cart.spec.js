// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Add To Cart", () => {
  let heading = "Woo Add To Cart";
  let slug = "/woo-add-to-cart";

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
    const section = page.getByTestId("ca6718f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 02", async ({ page }) => {
    const section = page.getByTestId("8c6ff9a");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 03", async ({ page }) => {
    const section = page.getByTestId("a9fd126");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 04", async ({ page }) => {
    const section = page.getByTestId("3bacd30");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
