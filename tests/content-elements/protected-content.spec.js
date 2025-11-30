// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Protected Content", () => {
  let heading = "Protected Content";
  let slug = "/protected-content";

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
    const section = page.getByTestId("3d01145b");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();

    // Submit the form
    await section.getByRole("textbox", { name: "Enter Password" }).click();
    await section.getByRole("textbox", { name: "Enter Password" }).fill("1234");
    await section.getByRole("button", { name: "Submit Code" }).click();
    await page.waitForLoadState("domcontentloaded");
    await section.scrollIntoViewIfNeeded();
    await expect.soft(section.getByRole("heading", { name: "Ya! You Have Typed The Right" })).toBeVisible();
    await expect.soft(section).toHaveScreenshot();
  });

  test("Layout 02", async ({ page }) => {
    const section = page.getByTestId("77e7065");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect.soft(section).toHaveScreenshot();

    // Submit the form
      await section.getByRole("textbox", { name: "Enter Password" }).click();
      await section.getByRole("textbox", { name: "Enter Password" }).fill("4321");
      await section.getByRole("button", { name: "Submit Now" }).click();
      await page.waitForLoadState("domcontentloaded");
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await expect.soft(section).toHaveScreenshot();
  });
});
