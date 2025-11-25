// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Breadcrumb", () => {
  let heading = "Breadcrumb";
  let slug = "/breadcrumbs";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Markup 01", async ({ page }) => {
    const section = page.getByTestId("fdaf672");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Markup 02", async ({ page }) => {
    const section = page.getByTestId("cc5a759");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });

  test("Markup 03", async ({ page }) => {
    const section = page.getByTestId("4199ed8");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});

