// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";
import { test } from "./global-setup";

config({ quiet: true });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 4 : 4,
  timeout: 60 * 1000,

  expect: {
    timeout: 15_000,
    toMatchSnapshot: { maxDiffPixelRatio: 0.03 },
    toHaveScreenshot: { maxDiffPixelRatio: 0.03 },
  },
  reporter: "html",
  use: {
    baseURL: process.env.BASE_URL ?? "https://essential-addons.com",
    testIdAttribute: "data-id",

    screenshot: "on",
    trace: "on-first-retry",
    video: "on-first-retry",

    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], ...test },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], ...test },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], ...test },
    },
  ],
});
