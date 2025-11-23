// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Cart", () => {
  let heading = "Woo Cart";
  let slug = "/woo-cart";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Preset 01", async ({ page }) => {
    const section = page.getByTestId("2268d06d");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Preset 02", async ({ page }) => {
    const section = page.getByTestId("37c61a39");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Preset 03", async ({ page }) => {
    const section = page.getByTestId("16d175d1");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Preset 04", async ({ page }) => {
    const section = page.getByTestId("69d252bb");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});
