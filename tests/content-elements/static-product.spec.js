// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Static Product", () => {
  let heading = "Static Product";
  let slug = "/static-product";

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
    const section = page.getByTestId("49f41c64");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("22b56ceb");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("5373174c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});

