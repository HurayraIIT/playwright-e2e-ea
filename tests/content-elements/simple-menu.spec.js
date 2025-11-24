// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Simple Menu", () => {
  let heading = "Simple Menu";
  let slug = "/simple-menu";

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
    const section = page.getByTestId("7bdd1b2");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("e360828");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const section = page.getByTestId("25176ed");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const section = page.getByTestId("72f7cc68");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 05", async ({ page }) => {
    const section = page.getByTestId("5d410a37");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 06", async ({ page }) => {
    const section = page.getByTestId("222bd8c5");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 07", async ({ page }) => {
    const section = page.getByTestId("cdd325f");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 08", async ({ page }) => {
    const section = page.getByTestId("469401bf");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 09", async ({ page }) => {
    const section = page.getByTestId("4683df93");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Layout 10", async ({ page }) => {
    const section = page.getByTestId("5aaccd4d");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});
