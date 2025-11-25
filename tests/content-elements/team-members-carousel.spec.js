// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Team Members Carousel", () => {
  let heading = "Team Members Carousel";
  let slug = "/team-members-carousel";

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
    const section = page.getByTestId("fb37185");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("3b904775");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("6d8df5b2");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("7d2f6362");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
