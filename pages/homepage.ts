import { Locator, Page } from "playwright";

export class HomePage {

    page:Page;
    userName_txtBx: Locator;
    password_txtBx: Locator;
    login_btn: Locator;
    login_txt: Locator;

    constructor(page:Page) {
        this.page = page;
        this.userName_txtBx = page.getByRole('textbox', { name: 'Username' });
        this.password_txtBx = page.getByRole('textbox', { name: 'Password' });
        this.login_btn = page.getByRole('button', { name: 'submit' });
        this.login_txt = page.locator('a').filter({ hasText: 'LOG IN' });
    }

    async gotoHomepage() {
        await this.page.goto('https://qa-internet.bgp.onl/');
    }

    async userLogin(userName: string, password: string) {
        await this.userName_txtBx.fill(userName);
        await this.password_txtBx.fill(password);
        await this.login_btn.click();
    }

    async clickLoginTxt() {
        await this.login_txt.click();
    }

}