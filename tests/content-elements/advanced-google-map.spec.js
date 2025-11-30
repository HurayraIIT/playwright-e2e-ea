// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Advanced Google Map", () => {
  let heading = "Advanced Google Map";
  let slug = "/advanced-google-map";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    //scroll to all sections to load the maps properly before deleting elements
    await page.getByTestId("4841d250").first().scrollIntoViewIfNeeded();
    await page.getByTestId("36398769").first().scrollIntoViewIfNeeded();
    await page.getByTestId("5fafd007").first().scrollIntoViewIfNeeded();
    await page.getByTestId("7cb5ef4b").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      // Delete the offcanvas and header elements
      const offcanvas = document.querySelector('[data-widget_type="eael-offcanvas.default"]');
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
      // @ts-ignore
      if (offcanvas) offcanvas.style.display = "none";

      // Delete the map background
      document
        .querySelectorAll(
          '[data-widget_type="eael-google-map.default"] > div > div > div > div:nth-child(3) > div:nth-child(1)'
        )
        .forEach((bg) => bg.remove());
      // Delete the map footer
      document
        .querySelectorAll(
          '[data-widget_type="eael-google-map.default"] > div > div > div > div:nth-child(3) > div:nth-child(15) > div'
        )
        .forEach((footer) => footer.remove());
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.getByTestId("4841d250");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("36398769");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("5fafd007");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("7cb5ef4b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
