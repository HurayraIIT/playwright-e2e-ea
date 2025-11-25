// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Product List", () => {
  let heading = "Woo Product List";
  let slug = "/woo-product-list";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Preset 01", async ({ page }) => {
    const section = page.getByTestId("f698a46");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Preset 02", async ({ page }) => {
    const section = page.getByTestId("fd30047");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Preset 03", async ({ page }) => {
    const section = page.getByTestId("522879b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });
});
