// @ts-check

import { test, expect } from "../../global-setup";

test.describe("BetterDocs Category Box", () => {
  let slug = "/betterdocs-category-box";
  let heading = "BetterDocs Category Box";

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
    const section = page.getByTestId("5655788f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Needed to load the icons
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("783034e0");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Needed to load the icons
    await expect(section).toHaveScreenshot();
  });
});
