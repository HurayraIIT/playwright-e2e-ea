// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product Rating", () => {
  let heading = "Woo Product Rating";
  let slug = "/woo-product-rating";

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
    const section = page.getByTestId("c346a12");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 02", async ({ page }) => {
    const section = page.getByTestId("00d3625");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Markup 03", async ({ page }) => {
    const section = page.getByTestId("e1a5a7c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
