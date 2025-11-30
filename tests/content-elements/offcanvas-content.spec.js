// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Offcanvas", () => {
  let heading = "Offcanvas";
  let slug = "/offcanvas-content";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Style 01 > Left Side", async ({ page }) => {
    const id = "61ed617f";
    const section = page.getByTestId(id);
    const sidebar = page.locator(`div.eael-offcanvas-content.eael-offcanvas-content-${id}`);

    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator(`div.eael-offcanvas-toggle.eael-offcanvas-toogle-${id}`).click();
    await page.waitForTimeout(500);
    await expect.soft(sidebar).toHaveScreenshot();
  });

  test("Style 01 > Right Side", async ({ page }) => {
    const id = "1440ea8c";
    const section = page.getByTestId(id);
    const sidebar = page.locator(`div.eael-offcanvas-content.eael-offcanvas-content-${id}`);

    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator(`div.eael-offcanvas-toggle.eael-offcanvas-toogle-${id}`).click();
    await page.waitForTimeout(500);
    await expect.soft(sidebar).toHaveScreenshot();
  });

  test("Style 02", async ({ page }) => {
    const id = "3e35ecdf";
    const section = page.getByTestId(id);
    const sidebar = page.locator(`div.eael-offcanvas-content.eael-offcanvas-content-${id}`);

    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator(`div.eael-offcanvas-toggle.eael-offcanvas-toogle-${id}`).click();
    await page.waitForTimeout(500);
    await expect.soft(sidebar).toHaveScreenshot();
  });

  test("Style 03", async ({ page }) => {
    const section = page.getByTestId("133668a7");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();
  });

  test("Style 04", async ({ page }) => {
    const id = "5a6843bf";
    const section = page.getByTestId(id);
    const sidebar = page.locator(`div.eael-offcanvas-content.eael-offcanvas-content-${id}`);

    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator(`div.eael-offcanvas-toggle.eael-offcanvas-toogle-${id}`).click();
    await page.waitForTimeout(500);
    await expect.soft(sidebar).toHaveScreenshot();
  });

  test("Style 05 > Custom Content", async ({ page }) => {
    const id = "3b2b48a8";
    const section = page.getByTestId(id);
    const sidebar = page.locator(`div.eael-offcanvas-content.eael-offcanvas-content-${id}`);

    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator(`div.eael-offcanvas-toggle.eael-offcanvas-toogle-${id}`).click();
    await page.waitForTimeout(500);
    await expect.soft(sidebar).toHaveScreenshot();
  });

  test("Style 05 > Saved Widget", async ({ page }) => {
    const id = "6aa5ba7";
    const section = page.getByTestId(id);
    const sidebar = page.locator(`div.eael-offcanvas-content.eael-offcanvas-content-${id}`);

    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await section.locator(`div.eael-offcanvas-toggle.eael-offcanvas-toogle-${id}`).click();
    await page.waitForTimeout(500);
    await expect.soft(sidebar).toHaveScreenshot();
  });
});
