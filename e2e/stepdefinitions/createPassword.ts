//Importing classes by that we can perfomr web element actions or create object of pericular pages.
import { browser, protractor,element, by } 	from "protractor";
import { CreatePasswordPage } 				from "../pages/createPasswordPage";

//Creating page object to use there elements variable.
const createPasswordPage: 				CreatePasswordPage 			= new CreatePasswordPage();

//Creating variable which gonna use to develop step definition.
const { Given, When, Then } = require("cucumber");
const chai 					= require("chai").use(require("chai-as-promised"));
const expect 				= chai.expect;
var expected 				= protractor.ExpectedConditions;
let timeout  : number 		= 5000;

//Implement implicit wait for the wait untill element is present.
browser.manage().timeouts().implicitlyWait(timeout);

//Step definition to navigate on login page URL.
Given(/^I Redirect to Create password page using given link.$/, async()=>{
    await browser.get("http://localhost:4200/createpassword?email=vandana.jagadeesh@northout.com&token=-209d84995ff0f56c"),timeout;
});

//Step definition to Verify Create Account Page URL.
Then(/^Verify the Create password page url.$/, async() => {
	var exp_url = "createpassword?email";
	await browser.wait(expected.urlContains(exp_url));
});

When(/^Enter "(.*?)" password in Create Password Field.$/,async(newPassword) =>{
	await createPasswordPage.createPasswordInput.clear();
    await createPasswordPage.createPasswordInput.sendKeys(newPassword);
});

Then(/^Verify the "(.*?)" pattern is not TRUE.$/, async(pattern) =>{
	return browser.findElement(by.xpath("//div[@class='row not-fullfilled']//div[2]")).getText().then(function(result){
		return expect(pattern.trim()).to.equal(result.trim());
    });
});

When(/^Click on Password Show icon.$/, async() =>{
	await createPasswordPage.showPasswordSymbol.click();
});

Then(/^Verify Enter Password is in visible mode.$/, async() => {
	var passwordType = await createPasswordPage.createPasswordInput.getAttribute('type');
	await expect(passwordType.trim()).to.equal('text');
});

Then(/^Verify Enter Password isn't in visible mode.$/, async() => {
	var passwordType = await createPasswordPage.createPasswordInput.getAttribute('type');
	await expect(passwordType.trim()).to.equal('password');
});

Then(/^Verify the New Password Button should not clickable.$/, async() => {
     var buttonProp= await browser.findElement(by.xpath("//input[@type='submit']")).getAttribute('disabled');
     expect(buttonProp).to.equal('true');
});

When(/^Click on New Password button.$/, async() => {
	await createPasswordPage.newPasswordButton.click();
});

Then(/^Verify the password reset success message - "(.*?)".$/, async(successMessage) => {
	
});

Then(/^Verify the Link Expired message title after reset the password.$/, async() => {
	return browser.findElement(by.xpath("//h1[@class='title-copy']")).getText().then(function(result){
		return expect(result.trim()).to.equal('Link has expired');
    });
});

When(/^Click on Request A New Link button.$/, async() => {
	await createPasswordPage.requestNewLink.click();
});

When(/^Click on Login Link button on expired link page.$/, async() => {
	await createPasswordPage.loginLink.click();
});