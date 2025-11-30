// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Event Calendar", () => {
  let heading = "Event Calendar";
  let slug = "/event-calendar";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";

      document.querySelectorAll("h2.fc-toolbar-title").forEach((title) => {
        title.textContent = "January 2025";
      });
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const id = "22bed70e";
    const section = page.getByTestId(`${id}`);
    const toolbar = section.locator(`div.fc-header-toolbar`);
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(toolbar).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const id = "31718838";
    const section = page.getByTestId(`${id}`);
    const toolbar = section.locator(`div.fc-header-toolbar`);
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(toolbar).toHaveScreenshot();
  });

  test("Layout 03", async ({ page }) => {
    const id = "29ed295b";
    const section = page.getByTestId(`${id}`);
    const toolbar = section.locator(`div.fc-header-toolbar`);
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(toolbar).toHaveScreenshot();
  });

  test("Layout 04", async ({ page }) => {
    const id = "31cfa40f";
    const section = page.getByTestId(`${id}`);
    const toolbar = section.locator(`div.fc-header-toolbar`);
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(toolbar).toHaveScreenshot();
  });
});
