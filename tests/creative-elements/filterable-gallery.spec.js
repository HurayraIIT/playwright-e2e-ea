// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Filterable Gallery", () => {
  let slug = "/filterable-gallery";
  let heading = "Filterable Gallery";

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
    const section = page.getByTestId("702c4d9e");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();

    await section.locator('li[data-filter=".eael-cf-mountains"]').click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("5f3be4e0");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();

    await section.locator('li[data-filter=".eael-cf-headphone"]').click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("21c7784d");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();

    await section.locator('li[data-filter=".eael-cf-pop-singer"]').click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("4c05a064");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();

    await section.locator("button.fg-filter-trigger").click();
    await section.locator('li[data-filter=".eael-cf-fast-food"]').click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });
});
