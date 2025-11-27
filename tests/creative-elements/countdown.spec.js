// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Countdown", () => {
  let heading = "Countdown";
  let slug = "/countdown";

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
    const section = page.getByTestId("4f635d50");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      document.querySelectorAll('[data-id="4f635d50"] span.eael-countdown-digits').forEach((span) => {
        span.remove();
      });
    });
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("29ded4d5");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("2793aee4");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("3410f71f");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 05", async ({ page }) => {
    const section = page.getByTestId("2ba755b1");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      document.querySelectorAll('[data-id="2ba755b1"] span.eael-countdown-digits').forEach((span) => {
        span.remove();
      });
    });
    await expect(section).toHaveScreenshot();
  });

  test("Style 06", async ({ page }) => {
    const section = page.getByTestId("1523f18a");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Style 07", async ({ page }) => {
    const section = page.getByTestId("5370485d");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
