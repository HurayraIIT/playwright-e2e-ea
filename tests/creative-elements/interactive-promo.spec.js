// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Interactive Circle", () => {
  let slug = "/interactive-promo";
  let heading = "Interactive Promo";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.getByTestId("696e3946");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.locator("figure.effect-lily").hover();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("76f2005b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.locator("figure.effect-layla").hover();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("1abd3e9");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.locator("figure.effect-marley").hover();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("23df18ea");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.locator("figure.effect-apollo").hover();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });
});
