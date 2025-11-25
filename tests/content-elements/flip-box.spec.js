// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Flip Box", () => {
  let heading = "Flip Box";
  let slug = "/flip-box";

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
    const section = page.getByTestId("6c1c7f44");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("2477a452");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("4347ca3b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("64e006e1");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("30b0a126");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 06", async ({ page }) => {
    const section = page.getByTestId("3e83c144");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});

