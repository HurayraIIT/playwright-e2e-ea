// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Dual Color Heading", () => {
  let heading = "Dual Color Heading";
  let slug = "/dual-color-headline";

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
    const section = page.getByTestId("1a367022");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("51e71f1f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("41b451fb");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("2a4150af");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("292d0ff8");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 06", async ({ page }) => {
    const section = page.getByTestId("606c302");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 07", async ({ page }) => {
    const section = page.getByTestId("163b95da");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});

