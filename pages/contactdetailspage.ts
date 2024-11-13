import { Locator, Page } from "playwright";

export class ContactDetails {
    page: Page;
    mainName_txtBx: Locator;
    mainJobTitle_txtBx: Locator;
    mainContactNo_txtBx: Locator;
    mainEmail_txtBx: Locator;
    mainAltEmail_txtBx: Locator;
    sameAddress_chkBx: Locator;
    mainPostalCode_txtBx: Locator;
    addresseeName_txtBx: Locator;
    addresseeJobTitle_txtBx: Locator;
    addresseeEmail_txtBx: Locator;
    addresseeSameDet_chkBx: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainName_txtBx = page.locator('#react-contact_info-name');
        this.mainJobTitle_txtBx = page.locator('#react-contact_info-designation');
        this.mainContactNo_txtBx = page.getByTestId('number-field');
        this.mainEmail_txtBx = page.locator('#react-contact_info-primary_email');
        this.mainAltEmail_txtBx = page.getByLabel('Alternate Contact Person\'s');
        this.sameAddress_chkBx = page.getByText('Same as registered address in');
        this.mainPostalCode_txtBx = page.getByPlaceholder('Enter your Postal Code');
        this.addresseeName_txtBx = page.locator('#react-contact_info-offeree_name');
        this.addresseeJobTitle_txtBx = page.locator('#react-contact_info-offeree_designation');
        this.addresseeEmail_txtBx = page.locator('#react-contact_info-offeree_email');
        this.addresseeSameDet_chkBx = page.getByText('Same as main contact person');
    }

    async inputMainContactPersonName(pName: string) {
        // this.mainName_txtBx.click();
        await this.mainName_txtBx.click();
        await this.mainName_txtBx.focus();
        await this.mainName_txtBx.fill(pName);
    }

    async inputMainContactPersonJobTitle(jobTitle: string) {
        await this.page.locator('#react-contact_info-designation-label').click();
        await this.mainJobTitle_txtBx.click();
        await this.mainJobTitle_txtBx.focus();
        await this.mainJobTitle_txtBx.fill(jobTitle);
    }

    async inputMainContactPersonContactNo(contactNo: string) {
        await this.page.getByText('Contact No. *').click();
        await this.mainContactNo_txtBx.click();
        await this.mainContactNo_txtBx.focus();
        await this.mainContactNo_txtBx.fill(contactNo);
    }

    async inputMainContactPersonEmail(email: string) {
        await this.page.locator('#react-contact_info-primary_email-label').click();
        await this.mainEmail_txtBx.click();
        await await this.mainEmail_txtBx.focus();
        await this.mainEmail_txtBx.fill(email);
        await this.page.getByText('Alternate Contact Person\'s').click();
    }

    async inputMainContactPersonAlternateEmail(altEmail: string) {
        await this.page.getByText('Alternate Contact Person\'s').click();
        await this.mainAltEmail_txtBx.click();
        await this.mainEmail_txtBx.focus();
        await this.mainAltEmail_txtBx.fill(altEmail);
    }

    async inputMainContactPersonMailingAddress(mAddr: string) {
        await this.mainPostalCode_txtBx.click();
        await this.mainPostalCode_txtBx.focus();
        await this.mainPostalCode_txtBx.fill(mAddr);
    }

    async clickMainCOntactPersonSameAddressCheckBox() {
        await this.sameAddress_chkBx.click();
    }

    async inputAddresseeName(addName: string) {
        await this.page.locator('#react-contact_info-offeree_name-label').click();
        await this.addresseeName_txtBx.click();
        await this.addresseeName_txtBx.focus();
        await this.addresseeName_txtBx.fill(addName);
    }

    async inputAddresseeJobTitle(jobTitle: string) {
        await this.page.locator('#react-contact_info-offeree_designation-label').click();
        await this.addresseeJobTitle_txtBx.click();
        await this.addresseeJobTitle_txtBx.focus();
        await this.addresseeJobTitle_txtBx.fill(jobTitle);
    }

    async inputAddresseeEmail(addEmail: string) {
        await this.page.locator('#react-contact_info-offeree_email-label').click();
        await this.addresseeEmail_txtBx.click();
        await this.addresseeEmail_txtBx.focus();
        await this.addresseeEmail_txtBx.fill(addEmail);
    }

    async clickAddresseeSamDetailsCheckBox() {
        await this.addresseeSameDet_chkBx.click();
    }
    
}