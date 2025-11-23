// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Interactive Cards", () => {
  let slug = "/interactive-cards";
  let heading = "Interactive Cards";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.getByTestId("368e06c7");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.click();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("1c833cae");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.click();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("123b0300");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.click();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("6afedf11");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.click();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("59215f9c");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
    await section.click();
    await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });
});
