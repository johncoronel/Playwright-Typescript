import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { MyGrant } from '../pages/myGrant_dashboard';
import { Sector } from '../pages/mygrant_sectorpage';
import { DevArea } from '../pages/mygrant_devareapage';
import { FuncArea } from '../pages/mygrant_funcareapage';
import { Eligibility } from '../pages/eligibilitypage';
import { ContactDetails } from '../pages/contactdetailspage';
import { Proposal } from '../pages/proposalpage';
import { BusinessImpact } from '../pages/businessimpactpage';
import { Cost } from '../pages/costpage';
import { DeclareAndReview } from '../pages/declarereviewpage';
import { Review } from '../pages/reviewpage';

test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);

    await homepage.gotoHomepage();
    await homepage.userLogin("", "");
});

test('User Story 3 – E2E Flow', async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    const mygrant = new MyGrant(page);
    const sector = new Sector(page);
    const devarea = new DevArea(page);
    const funcarea = new FuncArea(page);
    const eligibility = new Eligibility(page);
    const contactdetails = new ContactDetails(page);
    const proposal = new Proposal(page);
    const businessimpact = new BusinessImpact(page);
    const cost = new Cost(page);
    const declarereview = new DeclareAndReview(page);
    const reviewpage = new Review(page);

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

    /* Fill up Eligibility Form */
    // Expects Check Your Eligibility header is displayed.
    await expect(page.getByRole('heading', { name: 'Check Your Eligibility' })).toBeVisible();
    await eligibility.clickApplicantRdioBtn("Yes");
    await eligibility.clickgroupSalesRdioBtn("Yes");
    await eligibility.clickEquityRdioBtn("Yes");
    await eligibility.clickTargetMarketRdioBtn("Yes");
    await eligibility.clickAllStatementsRdioBtn("Yes");
    await mygrant.clickNextBtn();

    /* Fill up Contact Details Form */
    // Expects Provide Your Contact Details header is displayed.
    await expect(page.getByRole('heading', { name: 'Provide Your Contact Details' })).toBeVisible();
    // Expects Main Contact Person header is displayed.
    await expect(page.getByRole('heading', { name: 'Main Contact Person' })).toBeVisible();
    await contactdetails.inputMainContactPersonName("Tan Ah Kow");
    await contactdetails.inputMainContactPersonJobTitle("Businessman");
    await contactdetails.inputMainContactPersonContactNo("91912345");
    await contactdetails.inputMainContactPersonEmail("playwrightTest@email.com");
    await contactdetails.clickMainCOntactPersonSameAddressCheckBox();

    // Expects Letter Of Offer Addressee header is displayed.
    await expect(page.getByRole('heading', { name: 'Letter Of Offer Addressee' })).toBeVisible();
    await contactdetails.clickAddresseeSamDetailsCheckBox();
    await mygrant.clickNextBtn();
    
    /* Fill up Proposal Form */
    // Expects Submit Your Proposal header is displayed.
    await expect(page.getByRole('heading', { name: 'Submit Your Proposal' })).toBeVisible();
    await proposal.inputProjectTitle("Automation Assessment");
    await proposal.inputStartDate("20 Nov 2024");
    await proposal.inputEndDate("20 Apr 2025");
    await proposal.inputProjectDescription("Playwright Assessment");
    await proposal.selectActivity("Overseas Marketing Presence");
    await proposal.selectTargetMarket("Philippines");
    await proposal.clickExpandRdioBtn("yes");

    await mygrant.clickNextBtn();

    /* Fill up Business Impact Form */
    // Expects Explain The Business Impact header is displayed.
    await expect(page.getByRole('heading', { name: 'Explain The Business Impact' })).toBeVisible();
    await businessimpact.inputEndDate("20 Nov 2024");
    await businessimpact.inputOverseesSales0TxtBx("100");
    await businessimpact.inputOverseesSales1TxtBx("500");
    await businessimpact.inputOverseesSales2TxtBx("1000");
    await businessimpact.inputOverseesSales3TxtBx("1500");
    await businessimpact.inputOverseesInvestment0TxtBx("100");
    await businessimpact.inputOverseesInvestment1TxtBx("500");
    await businessimpact.inputOverseesInvestment2TxtBx("1000");
    await businessimpact.inputOverseesInvestment3TxtBx("1500");
    await businessimpact.inputProjectionTxtBx("Projections");
    await businessimpact.inputBenefitsTxtBx("Technology");

    await mygrant.clickNextBtn();

    /* Fill up Cost Form */
    // Expects Provide Details of Costs header is displayed.
    await expect(page.getByRole('heading', { name: 'Provide Details of Costs' })).toBeVisible();
    await cost.clickRentalBtn();
    await cost.clickAddNewItem_Btn();
    await cost.inputDescriptionTxtBx("Rent");
    await cost.inputRentAmountTextBox("500");
    await cost.inputRentalDurationTxtBx("6");

    await mygrant.clickNextBtn();

    /* Fill up Declare & Acknowledge Terms Form */
    // Expects Declare & Acknowledge Terms header is displayed.
    await expect(page.getByRole('heading', { name: 'Declare & Acknowledge Terms' })).toBeVisible();
    await declarereview.clickQuestion1RdioBtn("No");
    await declarereview.clickQuestion2RdioBtn("No");
    await declarereview.clickQuestion3RdioBtn("No");
    await declarereview.clickQuestion4RdioBtn("No");
    await declarereview.clickQuestion5RdioBtn("No");
    await declarereview.clickQuestion6RdioBtn("No");
    await declarereview.clickQuestion7RdioBtn("No");
    await declarereview.clickQuestion8RdioBtn("No");
    await declarereview.clickConsentAndAcknowledgementChkBx();

    await mygrant.clickReviewBtn();

    /* Review Page */
    // Expects Declare & Acknowledge Terms header is displayed.
    await expect(page.getByRole('heading', { name: 'Review Your Application' })).toBeVisible();
    await reviewpage.clickConsentCheckBox();

    await mygrant.clickSubmitBtn();
    
    // Expects Success Message box displayed.
    await expect(page.getByRole('heading', { name: 'Your application has been' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Ref ID:' })).toBeVisible();
    await expect(page.getByText('Enterprise Singapore', { exact: true })).toHaveText('Enterprise Singapore');

    await mygrant.clickMyGrantLinkText();
    await mygrant.clickProcessingTab();

});

test.afterEach(async ({ page }) => {
    await page.close();
});

