import { Page } from '@playwright/test';

export class InventoryPage {

    private page: Page;

    // Locators
    private pageTitle = '.title';
    private addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
    private cartBadge = '.shopping_cart_badge';
    private cartIcon = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    async getPageTitle() {
        return await this.page.textContent(this.pageTitle);
    }

    async addFirstItemToCart() {
        await this.page.click(this.addToCartButton);
    }

    async getCartCount() {
        return await this.page.textContent(this.cartBadge);
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}