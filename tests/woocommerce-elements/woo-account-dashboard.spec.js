// @ts-check

import { test, expect } from "../../global-setup";

let heading = "Woo Account Dashboard";

test.describe("Woo Account Dashboard", () => {
  test("Dashboard", async ({ page }) => {
    await page.goto("/woo-account-dashboard");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const preset_01 = page.getByTestId("7f10cab");
    const preset_02 = page.getByTestId("42d1eac5");
    const preset_03 = page.getByTestId("2d31138d");

    await preset_01.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_01).toHaveScreenshot();

    await preset_02.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_02).toHaveScreenshot();

    await preset_03.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_03).toHaveScreenshot();
  });

  test("Orders", async ({ page }) => {
    await page.goto("/woo-account-dashboard/orders");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const preset_01 = page.getByTestId("7f10cab");
    const preset_02 = page.getByTestId("42d1eac5");
    const preset_03 = page.getByTestId("2d31138d");

    await preset_01.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_01).toHaveScreenshot();

    await preset_02.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_02).toHaveScreenshot();

    await preset_03.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_03).toHaveScreenshot();
  });

  test("Downloads", async ({ page }) => {
    await page.goto("/woo-account-dashboard/downloads");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const preset_01 = page.getByTestId("7f10cab");
    const preset_02 = page.getByTestId("42d1eac5");
    const preset_03 = page.getByTestId("2d31138d");

    await preset_01.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_01).toHaveScreenshot();

    await preset_02.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_02).toHaveScreenshot();

    await preset_03.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_03).toHaveScreenshot();
  });

  test("Addresses", async ({ page }) => {
    await page.goto("/woo-account-dashboard/edit-address");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const preset_01 = page.getByTestId("7f10cab");
    const preset_02 = page.getByTestId("42d1eac5");
    const preset_03 = page.getByTestId("2d31138d");

    await preset_01.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_01).toHaveScreenshot();

    await preset_02.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_02).toHaveScreenshot();

    await preset_03.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_03).toHaveScreenshot();
  });

  test("Account Details", async ({ page }) => {
    await page.goto("/woo-account-dashboard/edit-account");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const preset_01 = page.getByTestId("7f10cab");
    const preset_02 = page.getByTestId("42d1eac5");
    const preset_03 = page.getByTestId("2d31138d");

    await preset_01.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_01).toHaveScreenshot();

    await preset_02.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_02).toHaveScreenshot();

    await preset_03.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(preset_03).toHaveScreenshot();
  });
});
