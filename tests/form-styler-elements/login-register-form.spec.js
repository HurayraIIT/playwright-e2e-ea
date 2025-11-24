// @ts-check

import { test, expect } from "../../global-setup";

test.describe("Login Register Form", () => {
  let heading = "Login Register Form";
  let slug = "/login-register-form";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.evaluate(() => {
      const el = document.querySelector('[data-elementor-id="283265"]');
      // @ts-ignore
      if (el) el.style.display = "none";
    });
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Login Form 01", async ({ page }) => {
    const section = page.getByTestId("dc7ae1a");
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(section).toHaveScreenshot();
  });
});
