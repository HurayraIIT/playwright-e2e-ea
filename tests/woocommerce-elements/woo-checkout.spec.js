// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Woo Checkout", () => {
  test("Default", async ({ page }) => {
    await page.goto("/woo-checkout");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      const boxes = document.querySelectorAll('[data-widget_type="eael-sticky-video.default"]');
      // @ts-ignore
      if (el) el.style.display = "none";
      // @ts-ignore
      if (boxes.length > 0) boxes.forEach((el) => (el.style.display = "none"));
    });
    let heading = "Woo Checkout";
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const section = page.getByTestId("5bc31047");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect.soft(section).toHaveScreenshot();
  });

  test("Multi Steps", async ({ page }) => {
    await page.goto("/woo-checkout/woocommerce-checkout-multi-steps/");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      const boxes = document.querySelectorAll('[data-widget_type="eael-sticky-video.default"]');
      // @ts-ignore
      if (el) el.style.display = "none";
      // @ts-ignore
      if (boxes.length > 0) boxes.forEach((el) => (el.style.display = "none"));
    });
    let heading = "Woo Checkout (Multi Steps)";
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const section = page.getByTestId("6a85f4c3");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect.soft(section).toHaveScreenshot();

    await section.getByRole("button", { name: "Next" }).click();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();

    await section.getByRole("button", { name: "Next" }).click();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();

    await section.getByRole("button", { name: "Next" }).click();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();
  });

  test("Split", async ({ page }) => {
    await page.goto("/woo-checkout/woocommerce-checkout-split/");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      const boxes = document.querySelectorAll('[data-widget_type="eael-sticky-video.default"]');
      // @ts-ignore
      if (el) el.style.display = "none";
      // @ts-ignore
      if (boxes.length > 0) boxes.forEach((el) => (el.style.display = "none"));
    });
    let heading = "Woo Checkout (Split)";
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    const section = page.getByTestId("dcb8860");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect.soft(section).toHaveScreenshot();

    await section.getByRole("button", { name: "Next" }).click();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();

    await section.getByRole("button", { name: "Next" }).click();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();

    await section.getByRole("button", { name: "Next" }).click();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();
  });
});
