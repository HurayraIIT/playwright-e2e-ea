// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Thank You", () => {
  let slug = "/woo-thank-you";
  let heading = "Woo Thank You";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Preset 01", async ({ page }) => {
    const section = page.getByTestId("ea9c8b4");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Preset 02", async ({ page }) => {
    const section = page.getByTestId("4c4ceb2");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Preset 03", async ({ page }) => {
    const section = page.getByTestId("74ff754");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});
