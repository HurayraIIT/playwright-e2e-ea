// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Instagram Feed", () => {
  let heading = "Instagram Feed";
  let slug = "/instagram-feed";

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
    const section = page.getByTestId("1db29dc0");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("847eb7d");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("ec79f28");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await section.locator("a.eael-instafeed-item").first().hover();
    await page.waitForTimeout(1000);
    await expect(section).toHaveScreenshot();
  });
});
