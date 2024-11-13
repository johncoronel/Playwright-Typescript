import { Locator, Page } from "playwright";

export class FuncArea {

    page:Page;
    funcArea_Lbl: Locator;
    apply_Btn: Locator;

    constructor(page:Page) {
        this.page = page;
        this.funcArea_Lbl = page.getByText('Market Readiness Assistance');
        this.apply_Btn = page.getByRole('button', { name: 'Apply' });
    }

    async selectFunctionalArea() {
        await this.funcArea_Lbl.click();
    }

    async clickApplyBtn() {
        await this.apply_Btn.click();
    }

}