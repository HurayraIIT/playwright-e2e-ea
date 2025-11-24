// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Twitter Feed Carousel", () => {
  let heading = "Twitter Feed Carousel";
  let slug = "/twitter-feed-carousel";

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

  test("Style 01", async ({ page }) => {
    const section = page.getByTestId("2a81445");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
