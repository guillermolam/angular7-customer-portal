//Importing classes by that we can perfomr web element actions or create object of pericular pages.
import { browser, protractor,element, by } 	from "protractor";
import { LandingPageObject } 				from "../pages/landingPage";
import { CreateAccountPageObject } 			from "../pages/createAccountPage";
import { $, ElementFinder } 				from "protractor";

//Creating page object to use there elements variable.
const lPage: 				LandingPageObject 			= new LandingPageObject();
const createAccountPage: 	CreateAccountPageObject 	= new CreateAccountPageObject();

//Creating variable which gonna use to develop step definition.
const { Given, When, Then } = require("cucumber");
const chai 					= require("chai").use(require("chai-as-promised"));
const expect 				= chai.expect;
var expected 				= protractor.ExpectedConditions;
let timeout  : number 		= 5000;

//Implement implicit wait for the wait untill element is present.
browser.manage().timeouts().implicitlyWait(timeout);

//Step definition to Verify Create Account Page URL.
Then(/^Verify The Create Account Page.$/, async() => {
	var act_url = browser.getCurrentUrl();
	var exp_url = "signup";
	browser.wait(expected.urlContains(exp_url));
});

//Step definition to Enter Email in your email field to create account.
When(/^Enter email "(.*?)" in your email field.$/, async (email) => {
	await browser.wait(expected.visibilityOf(createAccountPage.yourEmailInput)),timeout;
    await createAccountPage.yourEmailInput.clear(),timeout;
    await createAccountPage.yourEmailInput.sendKeys(email),timeout;
});

//Step definition to verify the email required error message when email gets empty.
Then (/^Verify the email required message - "(.*?)"$/, async(emailRequired) => {
	return createAccountPage.emailRequiredMessage.getText().then(function(text)
	{ return expect(emailRequired).to.equal(text); });
});

//Step definition to verify Valid email pattern of create account page.
Then (/^Verify the create email to be success - "(.*?)"$/, async(successValidation) => {
    return createAccountPage.getsuccessMessage.getText().then(function(text)
	{ return expect(successValidation).to.equal(text); }),timeout;
});

//Step definiton to verify the invalid email pattern message of create account page.
Then (/^Verify the create email to be wrong - "(.*?)"$/, async(errorValidation) => {
    return createAccountPage.getErrorMessage.then(function(text)
	{ return expect(errorValidation).to.equal(text.getText()); }),timeout; 
});

//Step definition to enter password in password field of create account page.
When(/^Enter password "(.*?)" in your password field.$/, async (password) => {
	await browser.wait(expected.visibilityOf(createAccountPage.yourPassword)),timeout;
    await createAccountPage.yourPassword.clear(),timeout;
    await createAccountPage.yourPassword.sendKeys(password),timeout;
});

//Step definition to enter confirm password on confirm password filed of create account page.
When(/^Enter confirm password "(.*?)" in your confirm password field.$/, async (cPassword) => {
	await browser.wait(expected.visibilityOf(createAccountPage.yourConfirmPassword)),timeout;
    await createAccountPage.yourConfirmPassword.clear(),timeout;
    await createAccountPage.yourConfirmPassword.sendKeys(cPassword),timeout;
});

//Step definition to Click on Register button of create password page.
When(/^Click on Register Button.$/, async () => {
	browser.wait(expected.elementToBeClickable(createAccountPage.registerButton)),timeout;
    createAccountPage.registerButton.click();
});

//Step definition to click on Cancel button on create password page.
When(/^Click on Cancel Button.$/, async () => {
	await browser.wait(expected.elementToBeClickable(createAccountPage.cancelLink)),timeout;
    await createAccountPage.cancelLink.click();
});

//Step definition to click on login link to go back on login page.
When(/^Click on Login link.$/, async () => {
	await browser.wait(expected.elementToBeClickable(createAccountPage.cancelLink)),timeout;
    await createAccountPage.cancelLink.click();
});

//Step definition to verify success message after create account successfully.
Then (/^Verify the account create success message - "(.*?)"$/, async(successMessage) => {
	// var a =createAccountPage.get_the_required_message;
	console.log("Hello");
});