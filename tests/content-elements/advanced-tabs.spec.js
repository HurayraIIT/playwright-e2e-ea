// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Advanced Tabs", () => {
  let heading = "Advanced Tabs";
  let slug = "/advanced-tabs";

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
    const section = page.getByTestId("14f9b86f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("2ad86016");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("5bc509eb");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("87064fb");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("d35e614");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});

