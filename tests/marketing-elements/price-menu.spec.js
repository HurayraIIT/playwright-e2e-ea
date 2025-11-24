// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Price Menu", () => {
  let heading = "Price Menu";
  let slug = "/price-menu";

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
    const section = page.getByTestId("1eeda843");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("730f003");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("79b1d44f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("27745e2b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 05", async ({ page }) => {
    const section = page.getByTestId("b41f87");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 06", async ({ page }) => {
    const section = page.getByTestId("37b4b971");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });
});
