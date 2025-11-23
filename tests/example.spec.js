// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Essential Addons for Elementor - Ultimate Elements Library for Elementor");
});
