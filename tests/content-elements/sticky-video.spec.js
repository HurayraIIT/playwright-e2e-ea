// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Sticky Video", () => {
  let heading = "Sticky Video";
  let slug = "/sticky-video";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      const mainStickyVideo = document.querySelector('[data-id="47ece85d"]');
      // @ts-ignore
      if (el) el.style.display = "none";
      // @ts-ignore
      if (mainStickyVideo) mainStickyVideo.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true }).first()).toBeVisible();
  });

  test("Youtube", async ({ page }) => {
    const section = page.getByTestId("34cc5059");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Vimeo", async ({ page }) => {
    const section = page.getByTestId("468461fe");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Self Hosted", async ({ page }) => {
    const section = page.getByTestId("30cfea50");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });

  test("Interactive", async ({ page }) => {
    const section = page.getByTestId("b17e0ae");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(section).toHaveScreenshot();
  });
});

