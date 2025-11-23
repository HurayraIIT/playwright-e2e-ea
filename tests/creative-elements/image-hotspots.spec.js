// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Image Hotspot", () => {
  let slug = "/image-hotspots";
  let heading = "Image Hotspot";

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
    const section = page.getByTestId("1a3dd460");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("1f348079");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("3d8128dd");
    await section.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
    await expect(section).toHaveScreenshot();
  });
});
