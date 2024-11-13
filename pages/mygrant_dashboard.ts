import { Locator, Page } from "playwright";

export class MyGrant {

    page:Page;
    applyGrant_btn: Locator;
    proceed_btn: Locator;
    save_btn: Locator;
    next_btn: Locator;
    review_btn: Locator;
    submit_btn: Locator;
    myGrant_linkTxt: Locator;
    processing_tab: Locator;

    constructor(page:Page) {
        this.page = page;
        this.proceed_btn = page.getByRole('button', { name: 'Proceed' });
        this.save_btn = page.getByRole('button', { name: 'Save' });
        this.next_btn = page.getByRole('button', { name: 'Next' });
        this.review_btn = page.getByRole('button', { name: 'Review' });
        this.submit_btn = page.getByRole('button', { name: 'Submit' });
        this.myGrant_linkTxt = page.getByRole('link', { name: 'My Grants' });
        this.processing_tab = page.getByRole('link', { name: 'Processing ' });
        this.applyGrant_btn = page.getByRole('link', { name: 'Get new grant Apply for a' }).locator('div').first();
    }

    async clickApplyGrantBtn() {
        await this.applyGrant_btn.click();
    }

    async clickProceedBtn() {
        await this.proceed_btn.click();
    }

    async clickSaveBtn() {
        await this.save_btn.click();
    }

    async clickNextBtn() {
        await this.next_btn.click();
    }

    async clickReviewBtn() {
        await this.review_btn.click();
    }

    async clickSubmitBtn() {
        await this.submit_btn.click();
    }

    async clickMyGrantLinkText() {
        await this.myGrant_linkTxt.click();
    }

    async clickProcessingTab() {
        await this.processing_tab.click();
    }

}