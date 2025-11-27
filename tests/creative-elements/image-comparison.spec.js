// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Image Comparison", () => {
  let heading = "Image Comparison";
  let slug = "/image-comparison";

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
    const section = page.getByTestId("6c7b9df4");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("7acc8263");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("37398381");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("4d550ebf");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });
});
