// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Logo Carousel", () => {
  let heading = "Logo Carousel";
  let slug = "/logo-carousel";

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
    const section = page.getByTestId("3d9d823d");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("9d290a7");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("51f7bfa2");
    await section.scrollIntoViewIfNeeded();
    await section.locator('span[aria-label="Go to slide 1"]').click();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});

