// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Tooltip", () => {
  let heading = "Tooltip";
  let slug = "/tooltip";

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
    const section = page.getByTestId("1e3a3cd3");
    await section.scrollIntoViewIfNeeded();
    await section.locator('[data-id="69c2a632"] div.eael-tooltip').hover();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("194314f6");
    await section.scrollIntoViewIfNeeded();
    await section.locator('[data-id="2bb4c347"] div.eael-tooltip').hover();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("775c1317");
    await section.scrollIntoViewIfNeeded();
    await section.locator('[data-id="1197d8ba"] div.eael-tooltip').hover();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});

