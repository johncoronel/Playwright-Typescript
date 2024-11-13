import { Locator, Page } from "playwright";

export class DeclareAndReview {
    page: Page;
    question1Yes_rdioBtn: Locator;
    question2Yes_rdioBtn: Locator;
    question3Yes_rdioBtn: Locator;
    question4Yes_rdioBtn: Locator;
    question5Yes_rdioBtn: Locator;
    question6Yes_rdioBtn: Locator;
    question7Yes_rdioBtn: Locator;
    question8Yes_rdioBtn: Locator;
    question1No_rdioBtn: Locator;
    question2No_rdioBtn: Locator;
    question3No_rdioBtn: Locator;
    question4No_rdioBtn: Locator;
    question5No_rdioBtn: Locator;
    question6No_rdioBtn: Locator;
    question7No_rdioBtn: Locator;
    question8No_rdioBtn: Locator;
    consent_chkBx: Locator;

    constructor(page: Page) {
        this.page = page;
        this.question1No_rdioBtn = page.locator('.bgp-radio > .bgp-label').first();
        this.question1Yes_rdioBtn = page.locator('label:nth-child(2) > .bgp-label').first();
        this.question2No_rdioBtn = page.locator('li:nth-child(2) > .form-group > .controls > label > .bgp-label').first();
        this.question2Yes_rdioBtn = page.locator('li:nth-child(2) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.question3No_rdioBtn = page.locator('li:nth-child(3) > .form-group > .controls > label > .bgp-label').first();
        this.question3Yes_rdioBtn = page.locator('li:nth-child(3) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.question4No_rdioBtn = page.locator('li:nth-child(4) > .form-group > .controls > label > .bgp-label').first();
        this.question4Yes_rdioBtn = page.locator('li:nth-child(4) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.question5No_rdioBtn = page.locator('li:nth-child(5) > .form-group > .controls > label > .bgp-label').first();
        this.question5Yes_rdioBtn = page.locator('li:nth-child(5) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.question6No_rdioBtn = page.locator('li:nth-child(6) > .form-group > .controls > label > .bgp-label').first();
        this.question6Yes_rdioBtn = page.locator('li:nth-child(6) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.question7No_rdioBtn = page.locator('li:nth-child(7) > .form-group > .controls > label > .bgp-label').first();
        this.question7Yes_rdioBtn = page.locator('li:nth-child(7) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.question8No_rdioBtn = page.locator('li:nth-child(8) > .form-group > .controls > label > .bgp-label').first();
        this.question8Yes_rdioBtn = page.locator('li:nth-child(8) > .form-group > .controls > label:nth-child(2) > .bgp-label');
        this.consent_chkBx = page.getByText('The Applicant hereby');
    }

    async clickQuestion1RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question1Yes_rdioBtn.click();
        } else {
            await this.question1No_rdioBtn.click();
        }
    }

    async clickQuestion2RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question2Yes_rdioBtn.click();
        } else {
            await this.question2No_rdioBtn.click();
        }
    }

    async clickQuestion3RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question3Yes_rdioBtn.click();
        } else {
            await this.question3No_rdioBtn.click();
        }
    }

    async clickQuestion4RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question4Yes_rdioBtn.click();
        } else {
            await this.question4No_rdioBtn.click();
        }
    }

    async clickQuestion5RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question5Yes_rdioBtn.click();
        } else {
            await this.question5No_rdioBtn.click();
        }
    }

    async clickQuestion6RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question6Yes_rdioBtn.click();
        } else {
            await this.question6No_rdioBtn.click();
        }
    }

    async clickQuestion7RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question7Yes_rdioBtn.click();
        } else {
            await this.question7No_rdioBtn.click();
        }
    }

    async clickQuestion8RdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.question8Yes_rdioBtn.click();
        } else {
            await this.question8No_rdioBtn.click();
        }
    }
    
    async clickConsentAndAcknowledgementChkBx() {
        await this.page.getByRole('heading', { name: 'Consent & Acknowledgement' }).click();
        await this.consent_chkBx.click();
    }
}