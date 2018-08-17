//Importing classes by that we can perfomr web element actions or create object of pericular pages.
import { browser, protractor,element, by } 	from "protractor";
import { HeaderFooterPageObject } 			from "../pages/headerFooterPage";
import { LandingPageObject } 				from "../pages/landingPage";
import { $, ElementFinder } 				from "protractor";

//Creating page object to use there elements variable.
const headerFooter: HeaderFooterPageObject = new HeaderFooterPageObject();
const lPage: 		LandingPageObject 	   = new LandingPageObject();
//Creating variable which gonna use to develop step definition.
const { Given, When, Then } 	= require("cucumber");
const chai 						= require("chai").use(require("chai-as-promised"));
const expect 					= chai.expect;
var expected 					= protractor.ExpectedConditions;
let timeout  	: number 		= 5000;
//Implement implicit wait for the wait untill element is present.
browser.manage().timeouts().implicitlyWait(timeout);

//Step definition for click on help menu button on header
When(/^Click On Help Menu On Header.$/, async() => {
	await browser.wait(expected.elementToBeClickable(headerFooter.helpMenuButton)),timeout;
    await headerFooter.helpMenuButton.click();
});

//Step definition to verify the help menu page is opened.
Then(/^Verify The Help Menu Page.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.helpTitle)),timeout;
	var act_title = await headerFooter.helpTitle.getText();
	await expect(act_title).to.equal("Help");
});

//Step definition to click on call us link on header menu.
When(/^Click on Call Us link.$/, async() =>{
	await browser.wait(expected.elementToBeClickable(headerFooter.callUsData)),timeout;
	await headerFooter.callUsData.click();
	// await browser.wait(expected.alertIsPresent),timeout;
	var alert = await browser.driver.switchTo().alert().getText();
	console.log("alert ********************      ", alert);
	// browser.switchTo().alert().dismiss();
});

//Step definition to verify the call number on call us.
Then(/^Verify The Call Us - "(.*?)"$/, async(callUs) => {
	await browser.wait(expected.visibilityOf(headerFooter.callUsData)),timeout;
	var act_msg = await headerFooter.callUsData.getText();
	await expect(callUs).to.equal(act_msg);
});

//Step definition to verify the email link on email us.
Then(/^Verify The Email Us - "(.*?)"$/, async(eamilUs) => {
	await browser.wait(expected.visibilityOf(headerFooter.emailUsData)),timeout;
	var act_msg = await headerFooter.emailUsData.getText();
	await expect(eamilUs).to.equal(act_msg);
});

//Step definition to click on close button of help menu to close it.
When(/^Click on Close button of Help Menu.$/, async() =>{
	await browser.wait(expected.elementToBeClickable(headerFooter.helpMenuCloseButton)),timeout;
	await headerFooter.helpMenuCloseButton.click();
});

//Step definition to verify the help menu has closed.
Then(/^Verify The Help Menu Page after close.$/, async() => {
	await browser.wait(expected.invisibilityOf(headerFooter.helpModule)),timeout;
});

//Step definiton to click on language change to open language change module.
When(/^Click on Language Change Module.$/, async() => {
    await browser.wait(expected.elementToBeClickable(headerFooter.languageChangeButton)),timeout;
    await headerFooter.languageChangeButton.click();
});

//Step definition to verify th language change module has opened.
Then(/^Verify The Language Change Page.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.languageModule)),timeout;
	var act_title = await headerFooter.languageModule.getText();
	console.log("language ****************      .", act_title,".")
	await expect(act_title).to.include("language");
});

//Step definition to click on perticular language radio button.
When(/^Click on "(.*?)" radio button.$/, async(lang) => {
	if (lang.toLowerCase( ) == 'english'){
		await headerFooter.englishRadioButton.click().then(function(result){
			return true;
	    });
	}
	else if (lang.toLowerCase( ) == 'spanish'){
		await headerFooter.spanishRadioButton.click().then(function(result){
			return true;
	    });
	};
});

//Step definition to click on confirm language button to submit the selected language.
When(/^Click on Confirm Language Button.$/, async() => {
    // await browser.wait(expected.elementToBeClickable(headerFooter.confirmLanguage)),timeout;
    await headerFooter.confirmLanguage.click();
});

//Step definiton to verify the customer access text after perform the change language or according to selected language.
Then(/^Verify the Customer Access text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.customerAccessTitle)),timeout;
	var act_title = await lPage.customerAccessTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the email text after perform the change language or according to selected language.
Then(/^Verify the Email text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.emailTitle)),timeout;
	var act_title = await lPage.emailTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Password text after perform the change language or according to selected language.
Then(/^Verify the Password text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.passwordTitle)),timeout;
	var act_title = await lPage.passwordTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Remember Me text after perform the change language or according to selected language.
Then(/^Verify the Remember Me text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.rememberMeTitle)),timeout;
	var act_title = await lPage.rememberMeTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Forgot Password text after perform the change language or according to selected language.
Then(/^Verify the Forgot Password text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.forgotPasswordTitle)),timeout;
	var act_title = await lPage.forgotPasswordTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Submit Button text after perform the change language or according to selected language.
Then(/^Verify the Submit Button text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.clickSubmit)),timeout;
	var act_title = await lPage.clickSubmit.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Create Account text after perform the change language or according to selected language.
Then(/^Verify the Create account text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.clickCreateAccount)),timeout;
	var act_title = await lPage.clickCreateAccount.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Footer Copy Right text after perform the change language or according to selected language.
Then(/^Verify the Footer Copy Right text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(lPage.footerTitle)),timeout;
	var act_title = await lPage.footerTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Help text after perform the change language or according to selected language.
Then(/^Verify the Help Title text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.helpTitle)),timeout;
	var act_title = await headerFooter.helpTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Help Description text after perform the change language or according to selected language.
Then(/^Verify the Help Description text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.helpBodyContent)),timeout;
	var act_title = await headerFooter.helpBodyContent.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Trouble Shoot Title text after perform the change language or according to selected language.
Then(/^Verify the Trouble Shoot Title text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.troubleAccessTitle)),timeout;
	var act_title = await headerFooter.troubleAccessTitle.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Trouble Shoot Description text after perform the change language or according to selected language.
Then(/^Verify the Trouble Shoot Description text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.troubleAccessBodyContent)),timeout;
	var act_title = await headerFooter.troubleAccessBodyContent.getText();
	await expect(act_title).to.include();
});

//Step definiton to verify the Call us title text after perform the change language or according to selected language.
Then(/^Verify the Call Us Titile text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.callUsTitle)),timeout;
	var act_title = await headerFooter.languageModule.getText();
	await expect(act_title).to.include("language");
});

//Step definiton to verify the Email Us Title text after perform the change language or according to selected language.
Then(/^Verify the Email Us Title text according to selected language.$/, async() => {
	await browser.wait(expected.visibilityOf(headerFooter.emailUsTitle)),timeout;
	var act_title = await headerFooter.languageModule.getText();
	await expect(act_title).to.include("language");
});
