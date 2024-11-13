import { Locator, Page } from "playwright";

export class Sector {

    page:Page;
    sector_Lbl: Locator;

    constructor(page:Page) {
        this.page = page;
        this.sector_Lbl = page.locator('div').filter({ hasText: /^IT$/ }).nth(2);
    }

    async selectSector() {
        await this.sector_Lbl.click();
    }

}