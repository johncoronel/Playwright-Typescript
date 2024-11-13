import { Locator, Page } from "playwright";

export class Cost {
    page: Page;
    rental_btn: Locator;
    addNewItem_btn: Locator;
    rentAmount_txtBx: Locator;
    description_txtBx: Locator;
    rentalDuration_txtBx: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rental_btn = page.getByText('Office Space Rental', { exact: true });
        this.addNewItem_btn = page.getByRole('button', { name: 'Add New Item' });
        this.rentAmount_txtBx = page.getByLabel('Monthly Rental in Billing');
        this.description_txtBx = page.getByLabel('Description *');
        this.rentalDuration_txtBx = page.getByLabel('Rental Duration *');
    }

    async clickRentalBtn() {
        await this.rental_btn.click();
    }

    async clickAddNewItem_Btn() {
        await this.addNewItem_btn.click();
    }

    async inputRentAmountTextBox(amount: string) {
        await this.rentAmount_txtBx.click();
        await this.rentAmount_txtBx.fill(amount);
    }

    async inputDescriptionTxtBx(desc: string) {
        await this.description_txtBx.fill(desc);
    }

    async inputRentalDurationTxtBx(duration: string) {
        await this.rentalDuration_txtBx.click();
        await this.rentalDuration_txtBx.fill(duration);
    }
    
}