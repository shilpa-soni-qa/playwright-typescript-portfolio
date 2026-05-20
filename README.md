# Playwright TypeScript Automation Portfolio
### QA Automation Framework | Shilpa Soni | CTFL Certified

---

## 🧪 About This Project
End-to-end test automation framework for [SauceDemo](https://www.saucedemo.com)
e-commerce application, built using Playwright with TypeScript.
Demonstrates modern QA automation skills including Page Object Model,
parallel test execution, and built-in HTML reporting.

---

## 🛠️ Tech Stack
| Tool | Purpose |
|---|---|
| TypeScript | Programming language |
| Playwright | Browser automation framework |
| Node.js | Runtime environment |
| Page Object Model | Design pattern |
| Git & GitHub | Version control |

---

## 📁 Project Structure
playwright-typescript-portfolio/
├── tests/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── e2e.spec.ts
├── playwright.config.ts
└── package.json
---

## ✅ Test Cases Covered
| Test | Description | Status |
|---|---|---|
| Successful Login | Verify valid user can login | ✅ Pass |
| Invalid Login | Verify error on wrong credentials | ✅ Pass |
| Add Item To Cart | Verify item added to cart correctly | ✅ Pass |
| Remove Item From Cart | Verify item removed from cart | ✅ Pass |
| Successful Checkout | Verify complete checkout flow | ✅ Pass |
| Complete E2E Journey | Login → Cart → Checkout → Confirmation | ✅ Pass |

---

## 🚀 How To Run

**Prerequisites:**
- Node.js 18+
- npm

**Install dependencies:**
```bash
npm install
npx playwright install chromium
```

**Run all tests:**
```bash
npx playwright test --project=chromium
```

**View HTML report:**
```bash
npx playwright show-report
```

---

## ⚡ Key Features
- Parallel test execution — all tests run simultaneously
- Built-in HTML report — no extra setup needed
- Auto-waiting — no manual waits required
- Clean TypeScript syntax — more readable than Java/Selenium

---

## 👩‍💻 Author
**Shilpa Soni** — QA Engineer | CTFL Certified  
📧 shilpasoni4991@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/shilpasoni94)  
🔗 [Selenium Java Portfolio](https://github.com/shilpa-soni-qa/selenium-java-portfolio)