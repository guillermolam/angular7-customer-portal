//Importing classes by that we can perfomr web element actions or create object of pericular pages..
import { browser, protractor }     from "protractor";
import { HeaderFooterPageObject }  from "../pages/headerFooterPage";
import { LandingPageObject }       from "../pages/landingPage";

//Creating page object to use there elements variable.
const lPage:         LandingPageObject          = new LandingPageObject();
const headerFooter:  HeaderFooterPageObject     = new HeaderFooterPageObject();
//Creating variable which gonna use to develop step definition.
const { Given, When, Then }     = require("cucumber");
const chai                      = require("chai").use(require("chai-as-promised"));
const expect                    = chai.expect;
var expected                    = protractor.ExpectedConditions;

var languageSet  : string;
let timeout      : number       = 5000;

//Implement implicit wait for the wait untill element is present.
browser.manage().timeouts().implicitlyWait(timeout);

//Step definition to navigate on login page URL.
Given(/^Navigate to Landing Page of MAPFRE.$/, async()=>{
    await browser.get("http://localhost:4200/login?returnUrl=%2F"),timeout;
});

//Step definition to verify login page
Then(/^Verify The Login Page.$/, async() => {
    var exp_url = "http://localhost:4200/login?returnUrl=%2F";
    // console.log("english json files **********      ",menObject)
   //expect(browser.getCurrentUrl()).equal(exp_url).and.notify("Verified URL");
});

//Step definition to enter email in email field on login page.
When(/^I enter "(.*?)" in email field.$/, async (text) => {
    await browser.wait(expected.visibilityOf(lPage.setEmail)),timeout;
    await lPage.setEmail.clear();
    await lPage.setEmail.sendKeys(text);
});

//Step definition to enter password on password field on login page.
When(/^I enter "(.*?)" in password field.$/,  async (text) => {
    await browser.wait(expected.visibilityOf(lPage.setPassword)),timeout;
    await lPage.setPassword.clear(),timeout;
    await lPage.setPassword.sendKeys(text),timeout;
});

//Step definition to click on remember me toggle on login page.
When(/^I click on remember me toggle.$/, async () => {
    await browser.wait(expected.elementToBeClickable(lPage.clickToggle)),timeout;
    await lPage.clickToggle.click(),timeout;
});

//Step definition to click on submit button to perform login services.
When(/^Click on Submit Button.$/, async () => {
    await lPage.clickSubmit.click(),timeout;
});

//Step definition to click on Create Account link on login page.
When(/^I click on Create Account link.$/, async () => {
    await browser.wait(expected.elementToBeClickable(lPage.clickCreateAccount)),timeout;
    await lPage.clickCreateAccount.click(),timeout;
});

//Step definition to Verify the error message for invalid data in input fields.
Then(/^Verify the Error message - "(.*?)"$/, async(errorMessage) => {
    await browser.wait(expected.visibilityOf(lPage.getErrorMessage)),timeout;
	var act_msg = await lPage.getErrorMessage.getText();
    await expect(errorMessage).to.equal(act_msg),timeout;
});

//Step definition to click on Forgot Password link on login page.
When(/^Click on Forgot Password link.$/, async() => {
    await browser.wait(expected.elementToBeClickable(lPage.clickForgotPassword)),timeout;
    await lPage.clickForgotPassword.click(),timeout;
});

//Step definiton to get the selected language from language change module.
When(/^Get the set value from the footer language module.$/,  async() => {
    await browser.wait(expected.visibilityOf(headerFooter.languageChangeButton)),timeout;
    languageSet = await headerFooter.languageChangeButton.getText();
});

//Step definition to verify the Landing page landin page all contenct in perticular language.
Then(/^Verify the Landing page content language in - "(.*?)".$/, async (language) => {
    await browser.wait(expected.elementToBeClickable(lPage.clickForgotPassword)),timeout;
    // console.log("login language check *********             ",languageEnglish.login);
});

//Step definition to Navigate Create Account page on landing page.
Given(/^Navigate to Create Account Page of MAPFRE.$/, async()=>{
    browser.execute_script("return arguments[0].scrollIntoView(true);", lPage.clickCreateAccount)
    await browser.wait(expected.visibilityOf(lPage.clickCreateAccount)),timeout;
    await lPage.clickCreateAccount.click(),timeout;
});