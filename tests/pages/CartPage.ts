import { Page } from '@playwright/test';

export class CartPage {

    private page: Page;

    // Locators
    private cartItems = '.cart_item';
    private removeButton = 'button[data-test="remove-sauce-labs-backpack"]';
    private checkoutButton = '#checkout';

    constructor(page: Page) {
        this.page = page;
    }

    async getCartItemCount() {
        return await this.page.locator(this.cartItems).count();
    }

    async removeFirstItem() {
        await this.page.click(this.removeButton);
    }

    async clickCheckout() {
        await this.page.click(this.checkoutButton);
    }
}