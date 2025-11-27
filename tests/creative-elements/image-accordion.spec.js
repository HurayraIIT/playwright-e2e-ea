// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Image Accordion", () => {
  let heading = "Image Accordion";
  let slug = "/image-accordion";

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
    const section = page.getByTestId("3b8cacd3");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("162ed3f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("498fa181");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("5e1d207c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });
});
