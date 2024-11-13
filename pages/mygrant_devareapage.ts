import { Locator, Page } from "playwright";

export class DevArea {

    page:Page;
    devArea_Lbl: Locator;

    constructor(page:Page) {
        this.page = page;
        this.devArea_Lbl = page.locator('label').filter({ hasText: 'Bring my business overseas or' }).locator('div').first();
    }

    async selectDevelopmentArea() {
        await this.devArea_Lbl.click();
    }

}