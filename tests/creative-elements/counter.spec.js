// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Counter", () => {
  let heading = "Counter";
  let slug = "/counter";

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
    const section = page.getByTestId("7b09973a");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("385b5555");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("4660176f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("7e1e125b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 05", async ({ page }) => {
    const section = page.getByTestId("1a908272");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 06", async ({ page }) => {
    const section = page.getByTestId("167dec65");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Style 07", async ({ page }) => {
    const section = page.getByTestId("511a3859");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });
});
