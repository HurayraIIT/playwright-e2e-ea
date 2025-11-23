// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Interactive Circle", () => {
  let slug = "/interactive-circle";
  let heading = "Interactive Circle";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.getByTestId("e1d6ade");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("fc91e08");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("d5a5f88");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("de46d23");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await expect(section).toHaveScreenshot();
  });
});
