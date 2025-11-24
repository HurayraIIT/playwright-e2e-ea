// @ts-check

import { test, expect } from "../../global-setup";

test.describe("LearnDash Course List", () => {
  let heading = "LearnDash Course List";
  let slug = "/learndash-course-list";

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
    const section = page.getByTestId("362fe4a0");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("151c1d90");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("13eb12cb");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("6abec2d3");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("36b83f0c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });
});
