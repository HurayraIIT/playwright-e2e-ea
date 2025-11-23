// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";
import { test } from "./global-setup";

config({ quiet: true });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : 4,
  timeout: 30 * 1000,

  expect: {
    timeout: 5_000,
    toMatchSnapshot: { maxDiffPixelRatio: 0.03 },
    toHaveScreenshot: { maxDiffPixelRatio: 0.03 },
  },
  reporter: "html",
  use: {
    baseURL: process.env.BASE_URL ?? "https://essential-addons.com",
    testIdAttribute: "data-id",

    //screenshot: "on",
    trace: "retain-on-failure",
    video: "retain-on-failure",

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
