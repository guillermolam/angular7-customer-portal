//Importing classes by that we can perfomr web element actions or create object of pericular pages.
import { browser, protractor,element, by } 	from "protractor";
import { LandingPageObject } 				from "../pages/landingPage";
import { ForgotPasswordPageObject } 		from "../pages/forgotPasswordPage";
import { $, ElementFinder } 				from "protractor";

//Creating page object to use there elements variable.
const lPage: 	LandingPageObject 			= new LandingPageObject();
const fpPage: 	ForgotPasswordPageObject 	= new ForgotPasswordPageObject();

//Creating variable which gonna use to develop step definition.
const { Given, When, Then } 	= require("cucumber");
const chai 						= require("chai").use(require("chai-as-promised"));
const expect 					= chai.expect;
var expected 					= protractor.ExpectedConditions;
let timeout 	 : number 		= 2000;

//Implement implicit wait for the wait untill element is present.
browser.manage().timeouts().implicitlyWait(timeout);

//Step definition to Navigate Forgot password page by clickon on forgot password link on login page.
Given(/^Navigate to Forgot Password Page of MAPFRE.$/, async()=>{
	await browser.wait(expected.elementToBeClickable(lPage.clickForgotPassword)),timeout;
	await lPage.clickForgotPassword.click();
});

//Step definition to verify the Forgot Password Page URL.
Then(/^Verify The Forgot Password Page.$/, async() => {
	var act_url = browser.getCurrentUrl();
	var exp_url = "forgotpassword?emailPrefill=";
	browser.wait(expected.urlContains(exp_url));
});

//Step definition to Enter email on forgot password field of forgot password page.
When(/^Enter reset password email "(.*?)" In email field.$/, async (email) => {
	await browser.wait(expected.visibilityOf(fpPage.clickSendEMail)),timeout;
    await fpPage.forgotPasswordEmail.clear(),timeout;
    await fpPage.forgotPasswordEmail.sendKeys(email),timeout;
});

//Step definition to click on Send Email button to get the forgot password email.
When(/^Click on Send Email Button.$/, async () => {
	await browser.wait(expected.elementToBeClickable(fpPage.clickSendEMail)),timeout;
    await fpPage.clickSendEMail.click();
});

//Step definiton to Click on Login Link on forgot password page.
When(/^Click on Log In Button.$/, async () => {
	await browser.wait(expected.elementToBeClickable(fpPage.loginButton)),timeout;
    await fpPage.loginButton.click();
});

//Step definition to Verify the prefield email id on email field.
Then (/^Verify prefiled email id -"(.*?)".$/, async(email) => {
	return browser.executeScript("return document.getElementById('sendEmail').value").then(function(result){
		return expect(email).to.equal(result)
    });
});

//Step definiton to Verify success message response of api.
Then (/^Verify the Success message - "(.*?)"$/, async(text) => {
	await browser.wait(expected.visibilityOf(fpPage.getSuccessMessage)),500;
    var act_msg = fpPage.getSuccessMessage.getText();
    await expect(text).to.equal(act_msg);
});