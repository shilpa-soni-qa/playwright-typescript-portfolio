import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

test.describe('Checkout Tests', () => {

    test('successful checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.goToCart();

        const cartPage = new CartPage(page);
        await cartPage.clickCheckout();

        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCheckoutDetails('Shilpa', 'Soni', '682001');
        await checkoutPage.clickFinish();

        const confirmation = await checkoutPage.getConfirmationMessage();
        expect(confirmation).toBe('Thank you for your order!');
        console.log('Checkout test passed! ✅');
    });
});