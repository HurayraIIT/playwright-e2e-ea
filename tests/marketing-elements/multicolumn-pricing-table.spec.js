// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Multicolumn Pricing Table", () => {
  let heading = "Multicolumn Pricing Table";
  let slug = "/multicolumn-pricing-table";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Design 01", async ({ page }) => {
    const section = page.getByTestId("d39c790");
    await section.scrollIntoViewIfNeeded();
    await section.locator('li#design-1').click();
    await page.waitForTimeout(1500);
    await expect(section.locator("div.eael-tabs-content")).toHaveScreenshot();
  });

  test("Design 02", async ({ page }) => {
    const section = page.getByTestId("d39c790");
    await section.scrollIntoViewIfNeeded();
    await section.locator("li#design-2").click();
    await page.waitForTimeout(1500);
    await expect(section.locator("div.eael-tabs-content")).toHaveScreenshot();
  });

  test("Design 03", async ({ page }) => {
    const section = page.getByTestId("d39c790");
    await section.scrollIntoViewIfNeeded();
    await section.locator("li#design-3").click();
    await page.waitForTimeout(1500);
    await expect(section.locator("div.eael-tabs-content")).toHaveScreenshot();
  });

  test("Design 04", async ({ page }) => {
    const section = page.getByTestId("d39c790");
    await section.scrollIntoViewIfNeeded();
    await section.locator("li#design-4").click();
    await page.waitForTimeout(1500);
    await expect(section.locator("div.eael-tabs-content")).toHaveScreenshot();
  });
});
