import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

test.describe('E2E Tests', () => {

    test('complete user journey', async ({ page }) => {
        // Step 1 - Login
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        console.log('Step 1: Login successful ✅');

        // Step 2 - Verify products page
        const inventoryPage = new InventoryPage(page);
        const title = await inventoryPage.getPageTitle();
        expect(title).toBe('Products');
        console.log('Step 2: Products page verified ✅');

        // Step 3 - Add item to cart
        await inventoryPage.addFirstItemToCart();
        const cartCount = await inventoryPage.getCartCount();
        expect(cartCount).toBe('1');
        console.log('Step 3: Item added to cart ✅');

        // Step 4 - Go to cart
        await inventoryPage.goToCart();
        const cartPage = new CartPage(page);
        const itemCount = await cartPage.getCartItemCount();
        expect(itemCount).toBe(1);
        console.log('Step 4: Cart verified ✅');

        // Step 5 - Checkout
        await cartPage.clickCheckout();
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillCheckoutDetails('Shilpa', 'Soni', '682001');
        console.log('Step 5: Checkout details filled ✅');

        // Step 6 - Confirm order
        await checkoutPage.clickFinish();
        const confirmation = await checkoutPage.getConfirmationMessage();
        expect(confirmation).toBe('Thank you for your order!');
        console.log('Step 6: Order confirmed ✅');

        console.log('\n🎉 Full E2E Test Passed!');
    });
});