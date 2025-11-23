// @ts-check

import { test, expect } from "../../global-setup";

test.describe("One Page Navigation", () => {
  let slug = "/one-page-nav";
  let heading = "One Page Navigation";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.locator("ul#eael-one-page-nav-2221bcee");
    await section.locator("a[data-row-id='blog-posts-section']").click();
    await page.waitForTimeout(2000);
    await expect(section).toHaveScreenshot();
  });
});
