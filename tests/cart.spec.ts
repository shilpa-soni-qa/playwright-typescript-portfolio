import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';

test.describe('Cart Tests', () => {

    test('add item to cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        await inventoryPage.addFirstItemToCart();

        const cartCount = await inventoryPage.getCartCount();
        expect(cartCount).toBe('1');
        console.log('Add to cart test passed! ✅');
    });

    test('remove item from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.goToCart();

        const cartPage = new CartPage(page);
        await cartPage.removeFirstItem();

        const itemCount = await cartPage.getCartItemCount();
        expect(itemCount).toBe(0);
        console.log('Remove from cart test passed! ✅');
    });
});