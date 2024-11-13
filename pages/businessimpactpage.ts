import { Locator, Page } from "playwright";

export class BusinessImpact {
    page: Page;
    endDate_date: Locator;
    overseasSale0_txtBx: Locator;
    overseasSale1_txtBx: Locator;
    overseasSale2_txtBx: Locator;
    overseasSale3_txtBx: Locator;
    overseasInvestment0_txtBx: Locator;
    overseasInvestment1_txtBx: Locator;
    overseasInvestment2_txtBx: Locator;
    overseasInvestment3_txtBx: Locator;
    projection_txtBx: Locator;
    benefits_txtBx: Locator;

    constructor(page: Page) {
        this.page = page;
        this.endDate_date = page.locator('#react-project_impact-fy_end_date_0');
        this.overseasSale0_txtBx = page.locator('#react-project_impact-overseas_sales_0');
        this.overseasSale1_txtBx = page.locator('#react-project_impact-overseas_sales_1');
        this.overseasSale2_txtBx = page.locator('#react-project_impact-overseas_sales_2');
        this.overseasSale3_txtBx = page.locator('#react-project_impact-overseas_sales_3');
        this.overseasInvestment0_txtBx = page.locator('#react-project_impact-overseas_investments_0');
        this.overseasInvestment1_txtBx = page.locator('#react-project_impact-overseas_investments_1');
        this.overseasInvestment2_txtBx = page.locator('#react-project_impact-overseas_investments_2');
        this.overseasInvestment3_txtBx = page.locator('#react-project_impact-overseas_investments_3');
        this.projection_txtBx = page.getByPlaceholder('Provide reasons for overseas');
        this.benefits_txtBx = page.getByPlaceholder('e.g. first mover advantage,');
    }

    async inputEndDate(date: string) {
        // await this.page.getByText('FY End date *').click();
        await this.endDate_date.click();
        await this.endDate_date.focus();
        await this.endDate_date.fill(date);
    }

    async inputOverseesSales0TxtBx(value: string) {
        await this.overseasSale0_txtBx.click();
        await this.overseasSale0_txtBx.focus();
        await this.overseasSale0_txtBx.fill(value);
    }

    async inputOverseesSales1TxtBx(value: string) {
        await this.overseasSale1_txtBx.click();
        await this.overseasSale1_txtBx.focus();
        await this.overseasSale1_txtBx.fill(value);
    }

    async inputOverseesSales2TxtBx(value: string) {
        await this.overseasSale2_txtBx.click();
        await this.overseasSale2_txtBx.focus();
        await this.overseasSale2_txtBx.fill(value);
    }

    async inputOverseesSales3TxtBx(value: string) {
        await this.overseasSale3_txtBx.click();
        await this.overseasSale3_txtBx.focus();
        await this.overseasSale3_txtBx.fill(value);
    }

    async inputOverseesInvestment0TxtBx(value: string) {
        await this.overseasInvestment0_txtBx.click();
        await this.overseasInvestment0_txtBx.focus();
        await this.overseasInvestment0_txtBx.fill(value);
    }

    async inputOverseesInvestment1TxtBx(value: string) {
        await this.overseasInvestment1_txtBx.click();
        await this.overseasInvestment1_txtBx.focus();
        await this.overseasInvestment1_txtBx.fill(value);
    }

    async inputOverseesInvestment2TxtBx(value: string) {
        await this.overseasInvestment2_txtBx.click();
        await this.overseasInvestment2_txtBx.focus();
        await this.overseasInvestment2_txtBx.fill(value);
    }

    async inputOverseesInvestment3TxtBx(value: string) {
        await this.overseasInvestment3_txtBx.click();
        await this.overseasInvestment3_txtBx.focus();
        await this.overseasInvestment3_txtBx.fill(value);
    }

    async inputProjectionTxtBx(projection: string) {
        // await this.page.getByText('Rationale for Projections *').click();
        await this.projection_txtBx.click();
        await this.projection_txtBx.fill(projection);
    }

    async inputBenefitsTxtBx(benefits: string) {
        // await this.page.getByText('Non Tangible Benefits *').click();
        await this.benefits_txtBx.click();
        await this.benefits_txtBx.fill(benefits);
    }

}