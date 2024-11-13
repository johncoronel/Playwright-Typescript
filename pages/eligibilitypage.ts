import { Locator, Page } from "playwright";

export class Eligibility {

    page: Page;
    applicantYes_rdioBtn: Locator;
    applicantNo_rdioBtn: Locator;
    groupSalesYes_rdioBtn: Locator;
    groupSalesNo_rdioBtn: Locator;
    equityYes_rdioBtn: Locator;
    equityNo_rdioBtn: Locator;
    targetMarketYes_rdioBtn: Locator;
    targetMarketNo_rdioBtn: Locator;
    allStatementsYes_rdioBtn: Locator;
    allStatementsNo_rdioBtn: Locator;
    faq_linkTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.applicantYes_rdioBtn = page.getByText('Yes').first();
        this.applicantNo_rdioBtn = page.getByText('No', { exact: true }).first();
        this.groupSalesYes_rdioBtn = page.getByText('Yes').nth(1);
        this.groupSalesNo_rdioBtn = page.getByText('No', { exact: true }).nth(1);
        this.equityYes_rdioBtn = page.getByText('Yes').nth(2);
        this.equityNo_rdioBtn = page.getByText('No', { exact: true }).nth(2);
        this.targetMarketYes_rdioBtn = page.getByText('Yes').nth(3);
        this.targetMarketNo_rdioBtn = page.getByText('No', { exact: true }).nth(3);
        this.allStatementsYes_rdioBtn = page.getByText('Yes').nth(4);
        this.allStatementsNo_rdioBtn = page.getByText('No', { exact: true }).nth(4);
        this.faq_linkTxt = page.locator('span').filter({ hasText: 'The applicant may not meet' }).getByRole('link');
    }

    async clickApplicantRdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.applicantYes_rdioBtn.click();
        } else {
            await this.applicantNo_rdioBtn.click();
        }
    }

    async clickgroupSalesRdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.groupSalesYes_rdioBtn.click();
        } else {
            await this.groupSalesNo_rdioBtn.click();
        }
    }

    async clickEquityRdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.equityYes_rdioBtn.click();
        } else {
            await this.equityNo_rdioBtn.click();
        }
    }

    async clickTargetMarketRdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.targetMarketYes_rdioBtn.click();
        } else {
            await this.targetMarketNo_rdioBtn.click();
        }
    }

    async clickAllStatementsRdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.allStatementsYes_rdioBtn.click();
        } else {
            await this.allStatementsNo_rdioBtn.click();
        }
    }

    async clickFAQLinkTxt() {
        await this.faq_linkTxt.click();
        // await page.getByRole('link', { name: 'FAQ' }).nth(1).click();
    }

}