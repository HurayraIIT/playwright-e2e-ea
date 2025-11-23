// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Compare", () => {
  let heading = "Woo Product Compare";
  let slug = "/woo-product-compare";

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
    const section = page.getByTestId("ea2f240");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("dd3df09");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("b59eff3");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("21080c3");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("642c92d");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 06", async ({ page }) => {
    const section = page.getByTestId("be32335");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });
});
