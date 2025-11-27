// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Fancy Text", () => {
  let heading = "Fancy Text";
  let slug = "/fancy-text";

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
    const section = page.getByTestId("2214e4e4");
    await section.scrollIntoViewIfNeeded();
    await page.evaluate(() => {
      document.querySelectorAll('[data-id="2214e4e4"] span.eael-fancy-text-strings').forEach((span) => {
        span.remove();
      });
      document.querySelectorAll('[data-id="2214e4e4"] span.typed-cursor').forEach((span) => {
        span.remove();
      });
    });
    await expect(section).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const section = page.getByTestId("3b131c2d");
    await section.scrollIntoViewIfNeeded();
    await page.evaluate(() => {
      document.querySelectorAll('[data-id="3b131c2d"] span.eael-fancy-text-strings').forEach((span) => {
        span.remove();
      });
      document.querySelectorAll('[data-id="3b131c2d"] span.typed-cursor').forEach((span) => {
        span.remove();
      });
    });
    await expect(section).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("45ae6b3c");
    await section.scrollIntoViewIfNeeded();
    await page.evaluate(() => {
      document.querySelectorAll('[data-id="45ae6b3c"] span.eael-fancy-text-strings').forEach((span) => {
        span.remove();
      });
      document.querySelectorAll('[data-id="45ae6b3c"] span.typed-cursor').forEach((span) => {
        span.remove();
      });
    });
    await expect(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const section = page.getByTestId("486076a2");
    await section.scrollIntoViewIfNeeded();
    await page.evaluate(() => {
      document.querySelectorAll('[data-id="486076a2"] span.eael-fancy-text-strings').forEach((span) => {
        span.remove();
      });
      document.querySelectorAll('[data-id="486076a2"] span.typed-cursor').forEach((span) => {
        span.remove();
      });
    });
    await expect(section).toHaveScreenshot();
  });
});
