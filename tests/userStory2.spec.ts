import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { MyGrant } from '../pages/myGrant_dashboard';
import { Sector } from '../pages/mygrant_sectorpage';
import { DevArea } from '../pages/mygrant_devareapage';
import { FuncArea } from '../pages/mygrant_funcareapage';
import { Eligibility } from '../pages/eligibilitypage';
import { ContactDetails } from '../pages/contactdetailspage';

test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);

    await homepage.gotoHomepage();
    await homepage.userLogin("", "");
});

test('User Story 2 – Contact Details Section', async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const mygrant = new MyGrant(page);
    const sector = new Sector(page);
    const devarea = new DevArea(page);
    const funcarea = new FuncArea(page);
    const eligibility = new Eligibility(page);
    const contactdetails = new ContactDetails(page);

    // Expects page to have a header link with the name of Business Grants Portal.
    await expect(page.getByRole('link', { name: 'Business Grants Portal' })).toBeVisible();
    await homepage.clickLoginTxt();

    // Expects Manual Log In header to be displayed.
    await expect(page.getByRole('heading', { name: 'Manual Log In' })).toBeVisible();
    await loginpage.inputEID("");
    await loginpage.inputUserID("");
    await loginpage.inputUserRole("");
    await loginpage.inputFullName("");
    await loginpage.clickLogin();

    // Expects page to have a header link with the name of Business Grants Portal.
    await expect(page.getByRole('link', { name: 'Business Grants Portal' })).toBeVisible();

    // Expects fullname to be displayed as logged in user.
    await expect(page.locator('#user-info-item').getByText('Tan Ah Kow')).toBeVisible();

    await mygrant.clickApplyGrantBtn();

    // Select Sector
    await sector.selectSector();

    // Select Development Area
    await devarea.selectDevelopmentArea();

    // Functional Area
    await funcarea.selectFunctionalArea();
    await funcarea.clickApplyBtn();

    // await expect(page.getByRole('heading', { name: 'Application Form' })).toBeVisible();
    await mygrant.clickProceedBtn();

    // Expects Check Your Eligibility header is displayed.
    await expect(page.getByRole('heading', { name: 'Check Your Eligibility' })).toBeVisible();
    await eligibility.clickApplicantRdioBtn("Yes");
    await eligibility.clickgroupSalesRdioBtn("Yes");
    await eligibility.clickEquityRdioBtn("Yes");
    await eligibility.clickTargetMarketRdioBtn("Yes");
    await eligibility.clickAllStatementsRdioBtn("Yes");
    await mygrant.clickNextBtn();

    // Expects Provide Your Contact Details header is displayed.
    await expect(page.getByRole('heading', { name: 'Provide Your Contact Details' })).toBeVisible();
    // Expects Main Contact Person header is displayed.
    await expect(page.getByRole('heading', { name: 'Main Contact Person' })).toBeVisible();
    await contactdetails.inputMainContactPersonName("Tan Ah Kow");
    await contactdetails.inputMainContactPersonJobTitle("Businessman");
    await contactdetails.inputMainContactPersonContactNo("91912345");
    await contactdetails.inputMainContactPersonEmail("playwrightTest@email.com");
    // contactdetails.inputMainContactPersonAlternateEmail("typeScript@email.com");
    await contactdetails.inputMainContactPersonMailingAddress("117438");
    await contactdetails.clickMainCOntactPersonSameAddressCheckBox();

    // Expects Letter Of Offer Addressee header is displayed.
    await expect(page.getByRole('heading', { name: 'Letter Of Offer Addressee' })).toBeVisible();
    await contactdetails.inputAddresseeName("Tan Ah Kow");
    await contactdetails.inputAddresseeJobTitle("Businessman");
    await contactdetails.inputAddresseeEmail("playwrightTest@email.com");

    await mygrant.clickSaveBtn();

    await page.reload();

});

test.afterEach(async ({ page }) => {
    await page.close();
});

