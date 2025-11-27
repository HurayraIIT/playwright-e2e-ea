// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Fancy Chart", () => {
  let heading = "Fancy Chart";
  let slug = "/fancy-chart";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      const offcanvas = document.querySelector('[data-widget_type="eael-offcanvas.default"]');
      // @ts-ignore
      if (el) el.style.display = "none";
      // @ts-ignore
      if (offcanvas) offcanvas.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const section = page.getByTestId("29610a3d");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
  });

  test("Show All", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#show-all").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Bar Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#bar-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Area Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#area-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Line Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#line-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Radar Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#radar-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Pie Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#pie-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Donut Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#donut-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });

  test("Polar Chart", async ({ page }) => {
    const section = page.getByTestId("29610a3d");
    await page.locator("li#polar-chart").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });
});
