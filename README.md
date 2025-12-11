# Playwright E2E Testing - Essential Addons for Elementor

[![Playwright](https://img.shields.io/badge/Playwright-1.56.1-45ba4b?logo=playwright)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

> Automated end-to-end testing suite for all Essential Addons for Elementor demo pages

## 📋 Overview

This project provides comprehensive automated testing for [Essential Addons for Elementor](https://essential-addons.com/) demo pages. It uses Playwright to perform visual regression testing and functional validation across all widget demos.

---

## 🎯 **Project Status**

<div align="center">

### 📊 **Test Coverage**

![Coverage](https://img.shields.io/badge/Coverage-81%2F115-blue?style=for-the-badge)
![Automated](https://img.shields.io/badge/Automated-70.43%25-green?style=for-the-badge)
![Total Tests](https://img.shields.io/badge/Total_Tests-324-brightgreen?style=for-the-badge)
![Remaining](https://img.shields.io/badge/Remaining-34-orange?style=for-the-badge)

### 🔗 **[VIEW LIVE TEST REPORTS →](https://ea-visual-regression.hurayraiit.com/)**

**✅ 81 Demos Automated** | **🧪 324 Total Tests** | **⏳ 34 Demos Remaining** | **📈 70.43% Complete**

</div>

---

## 🎯 Purpose

- Automate testing for all Essential Addons demo pages
- Perform visual regression testing using screenshot comparison
- Ensure widget functionality across different layouts
- Maintain quality and consistency of demo pages
- Provide continuous integration support

## ✨ Features

- **Visual Regression Testing**: Screenshot-based comparison with 3% pixel difference tolerance
- **Parallel Execution**: Tests run in parallel for faster execution
- **Comprehensive Coverage**: 324 test cases across 81 widgets (70.43% of 115 total widgets)
- **CI/CD Ready**: Configured for continuous integration environments
- **Detailed Reporting**: HTML reports with screenshots, traces, and videos
- **Network Optimization**: Blocks unnecessary third-party scripts for faster tests
- **Category Completion**: 6 categories fully automated (Content, Documentation, Marketing, LearnDash, Form Styler, WooCommerce)

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd playwright-e2e-ea
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

### How To Update Playwright

```bash
# Update playwright
npm install -D @playwright/test@latest

# Install new browsers
npx playwright install

# See what version of Playwright you have by running the following command
npx playwright --version
```

### Configuration

The project uses environment variables for configuration. Create a `.env` file in the root directory:

```env
BASE_URL=https://essential-addons.com
```

## 🧪 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run specific test file

```bash
npx playwright test tests/creative-elements/interactive-cards.spec.js
```

### View test report

```bash
npx playwright show-report
```

## 📁 Project Structure

```
playwright-e2e-ea/
├── tests/                          # Test files organized by category (81 spec files, 324 tests)
│   ├── content-elements/            # Content element tests (25 specs, 111 tests) ✨
│   │   ├── advanced-accordion.spec.js
│   │   ├── advanced-google-map.spec.js
│   │   ├── advanced-menu.spec.js
│   │   ├── advanced-search.spec.js
│   │   ├── advanced-tabs.spec.js
│   │   ├── breadcrumbs.spec.js
│   │   ├── code-snippet.spec.js
│   │   ├── content-toggle.spec.js
│   │   ├── creative-buttons.spec.js
│   │   ├── dual-color-headline.spec.js
│   │   ├── event-calendar.spec.js
│   │   ├── feature-list.spec.js
│   │   ├── flip-box.spec.js
│   │   ├── info-box.spec.js
│   │   ├── logo-carousel.spec.js
│   │   ├── offcanvas-content.spec.js
│   │   ├── protected-content.spec.js
│   │   ├── simple-menu.spec.js
│   │   ├── static-product.spec.js
│   │   ├── sticky-video.spec.js
│   │   ├── team-members-carousel.spec.js
│   │   ├── team-members.spec.js
│   │   ├── testimonial-slider.spec.js
│   │   ├── testimonials.spec.js
│   │   └── tooltip.spec.js
│   ├── creative-elements/          # Creative element tests (15 specs, 71 tests)
│   │   ├── countdown.spec.js
│   │   ├── counter.spec.js
│   │   ├── divider.spec.js
│   │   ├── fancy-chart.spec.js
│   │   ├── fancy-text.spec.js
│   │   ├── filterable-gallery.spec.js
│   │   ├── image-accordion.spec.js
│   │   ├── image-comparison.spec.js
│   │   ├── image-hotspots.spec.js
│   │   ├── image-scroller.spec.js
│   │   ├── interactive-cards.spec.js
│   │   ├── interactive-circle.spec.js
│   │   ├── interactive-promo.spec.js
│   │   ├── one-page-nav.spec.js
│   │   └── progress-bar.spec.js
│   ├── documentation-elements/     # Documentation element tests (3 specs, 5 tests) ✨
│   │   ├── betterdocs-category-box.spec.js
│   │   ├── betterdocs-category-grid.spec.js
│   │   └── betterdocs-search-form.spec.js
│   ├── dynamic-content-elements/  # Dynamic content element tests (3 specs, 10 tests)
│   │   ├── advanced-data-table.spec.js
│   │   ├── content-timeline.spec.js
│   │   └── table.spec.js
│   ├── form-styler-elements/       # Form styler element tests (11 specs, 34 tests) ✨
│   │   ├── caldera-forms.spec.js
│   │   ├── contact-form-7.spec.js
│   │   ├── fluent-forms.spec.js
│   │   ├── formstack.spec.js
│   │   ├── gravity-forms.spec.js
│   │   ├── login-register-form.spec.js
│   │   ├── mailchimp.spec.js
│   │   ├── ninja-forms.spec.js
│   │   ├── typeform.spec.js
│   │   ├── weforms.spec.js
│   │   └── wpforms.spec.js
│   ├── learndash-elements/         # LearnDash element tests (1 spec, 5 tests) ✨
│   │   └── learndash-course-list.spec.js
│   ├── marketing-elements/         # Marketing element tests (4 specs, 22 tests) ✨
│   │   ├── call-to-action.spec.js
│   │   ├── multicolumn-pricing-table.spec.js
│   │   ├── price-menu.spec.js
│   │   └── pricing-table.spec.js
│   ├── social-elements/            # Social element tests (3 specs, 6 tests)
│   │   ├── instagram-feed.spec.js
│   │   ├── twitter-feed-carousel.spec.js
│   │   └── twitter-feed.spec.js
│   ├── woocommerce-elements/       # WooCommerce element tests (16 specs, 60 tests) ✨
│   │   ├── woo-account-dashboard.spec.js
│   │   ├── woo-add-to-cart.spec.js
│   │   ├── woo-cart.spec.js
│   │   ├── woo-checkout.spec.js
│   │   ├── woo-cross-sells.spec.js
│   │   ├── woo-product-carousel.spec.js
│   │   ├── woo-product-compare.spec.js
│   │   ├── woo-product-gallery.spec.js
│   │   ├── woo-product-grid.spec.js
│   │   ├── woo-product-images.spec.js
│   │   ├── woo-product-list.spec.js
│   │   ├── woo-product-price.spec.js
│   │   ├── woo-product-rating.spec.js
│   │   ├── woo-product-slider.spec.js
│   │   ├── woo-thank-you.spec.js
│   │   └── woocommerce-product-collections.spec.js
│   └── example.spec.js             # Example test
├── global-setup.js                 # Global test configuration
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

✨ = Fully automated category (100% coverage)

## ⚙️ Configuration Details

### Playwright Config

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Workers**: 4 (in CI and local)
- **Timeout**: 30 seconds per test
- **Retries**: 1 (in CI), 0 (local)
- **Screenshot Diff Tolerance**: 3% max pixel ratio
- **Base URL**: https://essential-addons.com

### Global Setup

The `global-setup.js` file includes:

- Route blocking for third-party analytics and tracking scripts
- Custom page goto wrapper with `domcontentloaded` wait
- Lightbox close button handler

## 📊 Publishing Reports

To publish test reports to the live server:

```bash
npm run publish-report
```

This command uses rsync to deploy the `playwright-report` directory to the remote server.

## 🎨 Test Patterns

### Basic Test Structure

```javascript
import { test, expect } from "../../global-setup";

test.describe("Widget Name", () => {
  let slug = "/widget-slug";
  let heading = "Widget Name";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Layout 01", async ({ page }) => {
    const section = page.getByTestId("element-id");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot();
  });
});
```

## 📈 Automation Progress

This section tracks the automation status of all Essential Addons for Elementor demo pages. Checked items have automated tests implemented.

### Content Elements (24)

- [x] Advanced Search
- [x] Event Calendar
- [x] Info Box
- [x] Testimonial Slider
- [x] Testimonials
- [x] Toggle
- [x] Simple Menu
- [x] Flip Box
- [x] Team Member Carousel
- [x] Team Member
- [x] Protected Content
- [x] Feature List
- [x] Creative Buttons
- [x] Logo Carousel
- [x] Advanced Accordion
- [x] Tooltip
- [x] Offcanvas
- [x] Breadcrumb
- [x] Static Product
- [x] Dual Color Heading
- [x] Advanced Tabs
- [x] Sticky Video
- [x] Advanced Menu
- [x] Code Snippet

### Dynamic Content Elements (13)

- [x] Advanced Data Table
- [x] Advanced Google Map
- [ ] Post Grid
- [ ] Business Reviews
- [ ] Post Block
- [ ] Content Ticker
- [x] Data Table
- [ ] NFT Gallery
- [ ] Post Timeline
- [x] Content Timeline
- [ ] Smart Post List
- [ ] Dynamic Gallery
- [ ] Post Carousel

### Marketing Elements (4)

- [x] Pricing Table
- [x] Call to Action
- [x] Price Menu
- [x] Multicolumn Pricing Table

### Creative Elements (20)

- [x] Interactive Circle
- [x] Filterable Gallery
- [x] Divider
- [ ] Lightbox and Modal
- [ ] SVG Draw
- [x] Interactive Cards
- [x] Image Hotspots
- [x] Fancy Text
- [ ] Flip Carousel
- [x] Fancy Chart
- [x] Interactive Promo
- [x] Image Scroller
- [x] Counter
- [x] Progress Bar
- [ ] Stacked Cards
- [x] One Page Navigation
- [x] Image Comparison
- [x] Countdown
- [x] Image Accordion
- [ ] 360 Degree Photo Viewer

### Figma Design (1)

- [ ] Figma to Elementor Converter

### Form Styler Elements (11)

- [x] Typeform
- [x] MailChimp
- [x] weForms
- [x] Contact Form 7
- [x] Caldera Forms
- [x] Formstack
- [x] WPForms
- [x] Login Register Form
- [x] Gravity Forms
- [x] Ninja Forms
- [x] FluentForm

### Social Elements (4)

- [x] Twitter Feed Carousel
- [x] Twitter Feed
- [x] Instagram Feed
- [ ] Facebook Feed

### LearnDash Elements (1)

- [x] LearnDash Course List

### Documentation Elements (3)

- [x] BetterDocs Category Grid
- [x] BetterDocs Category Box
- [x] BetterDocs Search Form

### WooCommerce Elements (16)

- [x] Woo Thank You
- [x] Woo Cart
- [x] Woo Product Carousel
- [x] Woo Product Gallery
- [x] Woo Checkout
- [x] Woo Product Slider
- [x] Woo Product Collections
- [x] Woo Product Grid
- [x] Woo Product Compare
- [x] Woo Cross Sells
- [x] Woo Account Dashboard
- [x] Woo Product List
- [x] Woo Product Price
- [x] Woo Add To Cart
- [x] Woo Product Rating
- [x] Woo Product Images

### Extensions (18)

- [ ] Dynamic Tags
- [ ] Scroll To Top
- [ ] Content Protection
- [ ] Post Duplicator
- [ ] Table of Contents
- [ ] Parallax
- [ ] Reading Progress Bar
- [ ] Particles
- [ ] Advanced Tooltip
- [ ] Conditional Display
- [ ] Wrapper Link
- [ ] Interactive Animations
- [ ] Hover Interaction
- [ ] Custom JS
- [ ] Cross-Domain Copy Paste
- [ ] Liquid Glass Effects
- [ ] Custom Cursor
- [ ] Image Masking
- [ ] Vertical Text Orientation

---

**Total Progress:** 81/115 demos automated (70.43%) | **324 individual test cases**

**Breakdown by Category:**

| Category                    | Demos | Tests     | Coverage |
| --------------------------- | ----- | --------- | -------- |
| ✅ Content Elements         | 24/24 | 111 tests | 100% ✨  |
| ✅ Creative Elements        | 15/20 | 71 tests  | 75%      |
| ✅ Documentation Elements   | 3/3   | 5 tests   | 100% ✨  |
| ✅ Dynamic Content Elements | 4/13  | 10 tests  | 31%      |
| ✅ Form Styler Elements     | 11/11 | 34 tests  | 100% ✨  |
| ✅ LearnDash Elements       | 1/1   | 5 tests   | 100% ✨  |
| ✅ Marketing Elements       | 4/4   | 22 tests  | 100% ✨  |
| ✅ Social Elements          | 3/4   | 6 tests   | 75%      |
| ✅ WooCommerce Elements     | 16/16 | 60 tests  | 100% ✨  |
| ⏳ Figma Design             | 0/1   | 0 tests   | 0%       |
| ⏳ Extensions               | 0/18  | 0 tests   | 0%       |

**🎉 Fully Automated Categories:** Content Elements, Documentation Elements, Marketing Elements, LearnDash Elements, Form Styler Elements, WooCommerce Elements

## 🔗 Links

- [Essential Addons for Elementor](https://essential-addons.com/)
- [Demo Pages](https://essential-addons.com/demos/)
- [Live Test Reports](https://ea-visual-regression.hurayraiit.com/)
- [Playwright Documentation](https://playwright.dev/)
