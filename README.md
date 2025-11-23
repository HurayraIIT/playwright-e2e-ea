# Playwright E2E Testing - Essential Addons for Elementor

[![Playwright](https://img.shields.io/badge/Playwright-1.56.1-45ba4b?logo=playwright)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

> Automated end-to-end testing suite for all Essential Addons for Elementor demo pages

## 📋 Overview

This project provides comprehensive automated testing for [Essential Addons for Elementor](https://essential-addons.com/) demo pages. It uses Playwright to perform visual regression testing and functional validation across all widget demos.

**Live Test Reports:** [https://ea-visual-regression.hurayraiit.com/](https://ea-visual-regression.hurayraiit.com/)

## 🎯 Purpose

- Automate testing for all Essential Addons demo pages
- Perform visual regression testing using screenshot comparison
- Ensure widget functionality across different layouts
- Maintain quality and consistency of demo pages
- Provide continuous integration support

## ✨ Features

- **Visual Regression Testing**: Screenshot-based comparison with 3% pixel difference tolerance
- **Parallel Execution**: Tests run in parallel for faster execution
- **Comprehensive Coverage**: Tests for 115+ widgets and extensions
- **CI/CD Ready**: Configured for continuous integration environments
- **Detailed Reporting**: HTML reports with screenshots, traces, and videos
- **Network Optimization**: Blocks unnecessary third-party scripts for faster tests

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

### Run tests in debug mode

```bash
npx playwright test --debug
```

### View test report

```bash
npx playwright show-report
```

## 📁 Project Structure

```
playwright-e2e-ea/
├── tests/                          # Test files organized by category
│   ├── creative-elements/          # Creative element tests
│   │   ├── filterable-gallery.spec.js
│   │   ├── image-hotspots.spec.js
│   │   ├── interactive-cards.spec.js
│   │   ├── interactive-circle.spec.js
│   │   ├── interactive-promo.spec.js
│   │   └── one-page-nav.spec.js
│   └── example.spec.js             # Example test
├── global-setup.js                 # Global test configuration
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

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

## 📦 Dependencies

### Dev Dependencies

- `@playwright/test`: ^1.56.1
- `@types/node`: ^24.10.1

### Dependencies

- `dotenv`: ^17.2.3
- `playwright-slack-report`: ^1.1.100

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Tests

When adding tests for new widgets:

1. Create a new test file in the appropriate category folder under `tests/`
2. Follow the existing test pattern structure
3. Use descriptive test names that match the widget layouts
4. Include visual regression tests with `toHaveScreenshot()`
5. Test interactive elements where applicable

## 📈 Automation Progress

This section tracks the automation status of all Essential Addons for Elementor demo pages. Checked items have automated tests implemented.

### Content Elements (24)

- [ ] Advanced Search
- [ ] Event Calendar
- [ ] Info Box
- [ ] Testimonial Slider
- [ ] Testimonials
- [ ] Toggle
- [ ] Simple Menu
- [ ] Flip Box
- [ ] Team Member Carousel
- [ ] Team Member
- [ ] Protected Content
- [ ] Feature List
- [ ] Creative Buttons
- [ ] Logo Carousel
- [ ] Advanced Accordion
- [ ] Tooltip
- [ ] Offcanvas
- [ ] Breadcrumb
- [ ] Static Product
- [ ] Dual Color Heading
- [ ] Advanced Tabs
- [ ] Sticky Video
- [ ] Advanced Menu
- [ ] Code Snippet

### Dynamic Content Elements (13)

- [ ] Advanced Data Table
- [ ] Advanced Google Map
- [ ] Post Grid
- [ ] Business Reviews
- [ ] Post Block
- [ ] Content Ticker
- [ ] Data Table
- [ ] NFT Gallery
- [ ] Post Timeline
- [ ] Content Timeline
- [ ] Smart Post List
- [ ] Dynamic Gallery
- [ ] Post Carousel

### Marketing Elements (4)

- [ ] Pricing Table
- [ ] Call to Action
- [ ] Price Menu
- [ ] Multicolumn Pricing Table

### Creative Elements (20)

- [x] Interactive Circle
- [x] Filterable Gallery
- [ ] Divider
- [ ] Lightbox and Modal
- [ ] SVG Draw
- [x] Interactive Cards
- [x] Image Hotspots
- [ ] Fancy Text
- [ ] Flip Carousel
- [ ] Fancy Chart
- [x] Interactive Promo
- [ ] Image Scroller
- [ ] Counter
- [ ] Progress Bar
- [ ] Stacked Cards
- [x] One Page Navigation
- [ ] Image Comparison
- [ ] Countdown
- [ ] Image Accordion
- [ ] 360 Degree Photo Viewer

### Figma Design (1)

- [ ] Figma to Elementor Converter

### Form Styler Elements (11)

- [ ] Typeform
- [ ] MailChimp
- [ ] weForms
- [ ] Contact Form 7
- [ ] Caldera Forms
- [ ] Formstack
- [ ] WPForms
- [ ] Login Register Form
- [ ] Gravity Forms
- [ ] Ninja Forms
- [ ] FluentForm

### Social Elements (4)

- [ ] Twitter Feed Carousel
- [ ] Twitter Feed
- [ ] Instagram Feed
- [ ] Facebook Feed

### LearnDash Elements (1)

- [ ] LearnDash Course List

### Documentation Elements (3)

- [ ] BetterDocs Category Grid
- [ ] BetterDocs Category Box
- [ ] BetterDocs Search Form

### WooCommerce Elements (16)

- [ ] Woo Thank You
- [ ] Woo Cart
- [ ] Woo Product Carousel
- [ ] Woo Product Gallery
- [ ] Woo Checkout
- [ ] Woo Product Slider
- [ ] Woo Product Collections
- [ ] Woo Product Grid
- [ ] Woo Product Compare
- [ ] Woo Cross Sells
- [ ] Woo Account Dashboard
- [ ] Woo Product List
- [ ] Woo Product Price
- [ ] Woo Add To Cart
- [ ] Woo Product Rating
- [ ] Woo Product Images

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

**Total Progress:** 6/115 demos automated (5.2%)

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Abu Hurayra (HurayraIIT)**

## 🔗 Links

- [Essential Addons for Elementor](https://essential-addons.com/)
- [Demo Pages](https://essential-addons.com/demos/)
- [Live Test Reports](https://ea-visual-regression.hurayraiit.com/)
- [Playwright Documentation](https://playwright.dev/)

---

Made with ❤️ for automated testing
