// @ts-check

import { test, expect } from "../../global-setup";

test.describe("TypeForm", () => {
  let heading = "TypeForm";
  let slug = "/typeform";

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
    const section = page.getByTestId("af7e5c4");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("2224002");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3500);
    await expect(section).toHaveScreenshot();
  });
});
