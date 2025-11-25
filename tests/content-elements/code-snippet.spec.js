// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Code Snippet", () => {
  let heading = "Code Snippet";
  let slug = "/code-snippet";

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
    const section = page.getByTestId("fb9c731");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Features", async ({ page }) => {
    const section = page.getByTestId("e31d581");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});

