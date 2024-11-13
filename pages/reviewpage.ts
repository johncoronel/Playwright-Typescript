import { Locator, Page } from "playwright";

export class Review { 
    page: Page;
    consent_chckBx:Locator

    constructor(page) {
        this.page = page;
        this.consent_chckBx = page.getByText('We, the Applicant, declare');
    }

    async clickConsentCheckBox() {
        await this.consent_chckBx.click();
    }

}