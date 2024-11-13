import { Locator, Page } from "playwright";

export class Proposal {

    page: Page;
    projTitle_txtbx: Locator;
    startDate_date: Locator;
    endDate_date: Locator;
    projDesc_txtbx: Locator;
    activity_Selection: Locator;
    targetMarket_Selection: Locator;
    expandingQuestionYes_rdioBtn: Locator;
    expandingQuestionNo_rdioBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.projTitle_txtbx = page.getByTestId('text-field');
        this.startDate_date = page.getByLabel('Start Date *');
        this.endDate_date = page.getByLabel('End Date *');
        this.projDesc_txtbx = page.getByPlaceholder('Describe the products/');
        this.activity_Selection = page.locator('#react-select-project-activity--value').getByText('Select...');
        this.targetMarket_Selection = page.getByText('Select...');
        this.expandingQuestionYes_rdioBtn = page.getByText('Yes');
        this.expandingQuestionNo_rdioBtn = page.getByText('No', { exact: true });

    }

    async inputProjectTitle(projTitle: string) {
        await this.page.getByText('Project Title *').click();
        await this.projTitle_txtbx.click();
        await this.projTitle_txtbx.focus();
        await this.projTitle_txtbx.fill(projTitle);
    }

    async inputStartDate(start: string) {
        await this.page.getByText('Start Date *').click();
        await this.startDate_date.focus();
        await this.startDate_date.fill(start);
        await this.page.getByText('Start Date *').click();
    }

    async inputEndDate(end: string) {
        await this.page.getByText('End Date *').click();
        await this.endDate_date.focus();
        await this.endDate_date.fill(end);
        await this.page.getByText('End Date *').click();
        await this.page.getByText('Project Title *').click();
    }

    async inputProjectDescription(input: string) {
        await this.projDesc_txtbx.click();
        await this.projDesc_txtbx.focus();
        await this.projDesc_txtbx.fill(input);
    }

    async selectActivity(activity: string) {
        await this.activity_Selection.click();
        await this.page.locator('#react-select-project-activity--value').getByText('Select...').click();
        // await this.page.getByLabel('Overseas Marketing Presence').click();
        await this.page.getByLabel(activity).click();
    }

    async selectTargetMarket(market: string) {
        await this.targetMarket_Selection.click();
        await this.page.locator('#react-select-project-primary_market--value').getByRole('combobox').fill(market);
        await this.page.locator('#react-select-project-primary_market--value').getByRole('combobox').press('Enter');
    }

    async clickExpandRdioBtn(rdioBtn: string) {
        if((rdioBtn.match('yes')) || (rdioBtn.match('Yes'))) {
            await this.expandingQuestionYes_rdioBtn.click();
        } else {
            await this.expandingQuestionNo_rdioBtn.click();
        }
    }

}