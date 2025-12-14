// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Advanced Accordion", () => {
  let heading = "Advanced Accordion";
  let slug = "/advanced-accordion";

  test.beforeEach(async ({ page, browserName }) => {
    test.skip(browserName === "webkit", "This entire suite is unstable on WebKit");
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Style 01", async ({ page }) => {
    const section = page.getByTestId("2d7dc4ab");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("54d9bd84");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("e26794f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("5c936440");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
