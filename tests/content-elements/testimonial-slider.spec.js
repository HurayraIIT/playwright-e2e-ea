// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Testimonial Slider", () => {
  let heading = "Testimonial Slider";
  let slug = "/testimonial-slider";

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
    const section = page.getByTestId("7e89498e");
    await section.scrollIntoViewIfNeeded();
    // await section.locator('span[aria-label="Go to slide 1"]').click();
    // await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("55437072");
    await section.scrollIntoViewIfNeeded();
    // await section.locator('span[aria-label="Go to slide 1"]').click();
    // await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("695ee53e");
    await section.scrollIntoViewIfNeeded();
    // await section.locator('span[aria-label="Go to slide 1"]').click();
    // await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("4d022b09");
    await section.scrollIntoViewIfNeeded();
    // await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(200);
    await expect(section).toHaveScreenshot();
  });
});

