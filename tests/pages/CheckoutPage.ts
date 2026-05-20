import { Page } from '@playwright/test';

export class CheckoutPage {

    private page: Page;

    // Locators
    private firstNameField = '#first-name';
    private lastNameField = '#last-name';
    private zipCodeField = '#postal-code';
    private continueButton = '#continue';
    private finishButton = '#finish';
    private confirmationMessage = '.complete-header';

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutDetails(firstName: string, lastName: string, zipCode: string) {
        await this.page.fill(this.firstNameField, firstName);
        await this.page.fill(this.lastNameField, lastName);
        await this.page.fill(this.zipCodeField, zipCode);
        await this.page.click(this.continueButton);
    }

    async clickFinish() {
        await this.page.click(this.finishButton);
    }

    async getConfirmationMessage() {
        return await this.page.textContent(this.confirmationMessage);
    }
}