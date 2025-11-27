// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Progress Bar", () => {
  let heading = "Progress Bar";
  let slug = "/progress-bar";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Style 00", async ({ page }) => {
    const section = page.getByTestId("3e523e0e");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 01", async ({ page }) => {
    const section = page.getByTestId("70496c4d");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("192931fa");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("158ff345");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 05", async ({ page }) => {
    const section = page.getByTestId("59498fd6");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 06", async ({ page }) => {
    const section = page.getByTestId("509f2645");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 07", async ({ page }) => {
    const section = page.getByTestId("a18e416");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 08", async ({ page }) => {
    const section = page.getByTestId("3806f884");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });
});
