import { Locator, Page } from "playwright";

export class LoginPage {

    page:Page;
    eid_txtBx: Locator;
    userID_txtBx: Locator;
    userRole_txtBx: Locator;
    fullName_txtBx: Locator;
    login_btn: Locator;

    constructor(page:Page) {
        this.page = page;
        // this.eid_txtBx = page.getByTestId('entityId');
        this.eid_txtBx = page.locator('//*[@id="entityId"]');
        this.userID_txtBx = page.locator('//*[@id="userId"]');
        this.userRole_txtBx = page.locator('//*[@id="userRole"]');
        this.fullName_txtBx = page.locator('//*[@id="userFullName"]');
        this.login_btn = page.getByRole('button', { name: 'Log In' });
    }

    async inputEID(eid: string) {
        await this.eid_txtBx.fill(eid);
    }

    async inputUserID(userID: string) {
        await this.userID_txtBx.fill(userID);
    }

    async inputUserRole(role: string) {
        await this.userRole_txtBx.fill(role);
    }

    async inputFullName(fname: string) {
        await this.fullName_txtBx.fill(fname);
    }

    async clickLogin() {
        await this.login_btn.click();
    }

}