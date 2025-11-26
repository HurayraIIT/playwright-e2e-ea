// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Twitter Feed", () => {
  let heading = "Twitter Feed";
  let slug = "/twitter-feed";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForSelector(".eael-twitter-feed-item-content p");
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";

      document.querySelectorAll(".eael-twitter-feed-item-content p").forEach((p) => {
        p.textContent = "STATIC TWITTER CONTENT FOR VISUAL TESTING 123";
      });
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test.skip("Layout 01", async ({ page }) => {
    const section = page.getByTestId("203b5134");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  // test("Layout 02", async ({ page }) => {
  //   const section = page.getByTestId("78689f37");
  //   await section.scrollIntoViewIfNeeded();
  //   await page.waitForTimeout(500);
  //   await expect(section).toHaveScreenshot();
  // });

  test.skip("Layout 03", async ({ page }) => {
    const section = page.getByTestId("42ad9a90");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });

  // test("Layout 04", async ({ page }) => {
  //   const section = page.getByTestId("76e0958");
  //   await section.scrollIntoViewIfNeeded();
  //   await page.waitForTimeout(500);
  //   await expect(section).toHaveScreenshot();
  // });
});
