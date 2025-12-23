// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Post Grid", () => {
  let heading = "Post Grid";
  let slug = "/post-grid";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("2edb775c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("14661b71");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("2bdbcb57");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });
});
