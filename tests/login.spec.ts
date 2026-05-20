import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test.describe('Login Tests', () => {

    test('successful login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        const title = await inventoryPage.getPageTitle();
        
        expect(title).toBe('Products');
        console.log('Login test passed! ✅');
    });

    test('login fails with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');

        const errorMessage = await loginPage.getErrorMessage();
        
        expect(errorMessage).toContain('Username and password do not match');
        console.log('Invalid login test passed! ✅');
    });
});