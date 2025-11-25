// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Advanced Menu", () => {
  let heading = "Advanced Menu";
  let slug = "/advanced-menu";

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
    const section = page.getByTestId("529f18dc");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("25174124");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("780d2b34");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("580e5e1b");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});
