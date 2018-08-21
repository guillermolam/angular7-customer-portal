//Importing classes by that we can perfomr web element actions or create object of pericular pages.
import { browser, protractor,element, by } 	from "protractor";
import { CreatePasswordPage } 				from "../pages/createPasswordPage";

//Creating page object to use there elements variable.
const createPassPage: 				CreatePasswordPage 			= new CreatePasswordPage();

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
	browser.wait(expected.urlContains(exp_url));
});

When(/^Enter "(.*?)" password in Create Password Field.$/,async(newPassword) =>{
    // createPassPage.createPasswordInput.sendKeys(newPassword)
    console.log("hi");
});

Then(/^Verify the "(.*?)" pattern is not TRUE.$/, async(pattern) =>{
    // console.log("get password error message - ",createPassPage.getErrorMessage.getText())
    console.log("hi");
})

Then(/^Verify the New Password Button should not be able to click.$/, async() => {
    console.log("hi");
})