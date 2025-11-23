// @ts-check

import { test, expect } from "../../global-setup";

test.describe("BetterDocs Search Form", () => {
  let slug = "/betterdocs-search-form";
  let heading = "BetterDocs Search Form";

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
    const section = page.getByTestId("3fafa7e6");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});
