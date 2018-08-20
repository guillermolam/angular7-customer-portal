<p align="center">
<img src= "./images/protractor-typescript-cucumber.png" height=300 alt="titleImage.png"/>
</p>

<p align="center">
   <i><strong>This project demonstrates the basic protractor-cucumber-typescript framework project setup.
</strong></i>
<p>

<p align="center">
<a href="https://circleci.com/gh/igniteram/protractor-cucumber-typescript/tree/master"><img alt="circleCI Status" src="https://circleci.com/gh/igniteram/protractor-cucumber-typescript/tree/master.svg?style=shield"></a>
<a href="https://david-dm.org/igniteram/protractor-cucumber-typescript"><img alt="dependencies status" src="https://david-dm.org/igniteram/protractor-cucumber-typescript.svg"></a>
<a href=#contributors><img alt="contributors" src="https://img.shields.io/badge/all_contributors-4-orange.svg"></a>
<a href="https://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/dub/l/vibe-d.svg"></a>
</p>

---

### Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json.
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with > Typescript2.0 & Cucumber2.0.
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation.
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Screenshots on failure feature scenarios.


### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm install webdriver 
** then install the dependency drivers.
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```
** make sure your project is running by ng serve **

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```
![result](https://raw.githubusercontent.com/igniteram/protractor-cucumber-typescript/master/images/protractor-cucumber-typescript-result.gif)

#### Writing Features
```
Feature: Verifying the functionality of Login to the application.
    @CucumberScenario
    Scenario Outline: Verifying the functionality of login feature with invalid data.
      Given Navigate to Landing Page of MAPFRE.
      Then Verify The Login Page.
      When I enter "email" in email field.
      When I enter "password" in password field.
      Then Verify the Error message - "Please Enter A Valid Email"
```
#### Writing Step Definitions
    
```
import { browser, protractor } from "protractor";
import { LandingPageObject } from "../pages/landingPage";
const { Given, When, Then } = require("cucumber");
const lPage: LandingPageObject = new LandingPageObject();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

Given(/^Navigate to Landing Page of MAPFRE.$/, async()=>{
    browser.get("http://localhost:4200/login?returnUrl=%2F");
});

Then(/^Verify The Login Page.$/, async() => {
    var exp_url = "http://localhost:4200/login?returnUrl=%2F";
   //expect(browser.getCurrentUrl()).equal(exp_url).and.notify("Verified URL");
});

When(/^I enter "(.*?)" in email field.$/, async (text) => {
    await lPage.setEmail.clear();
    await lPage.setEmail.sendKeys(text);
});

When(/^I enter "(.*?)" in password field.$/, async (text) => {
    await lPage.setPassword.clear();
    await lPage.setPassword.sendKeys(text);
});

When(/^I click on remember me toggle.$/, async () => {
    await lPage.clickToggle.click();
});

When(/^Click on Submit Button.$/, async () => {
    await lPage.clickSubmit.click();
});

Then (/^Verify the Error message - "(.*?)"$/, async(text) => {
    var act_msg = await lPage.getErrorMessage.getText();
    //expect(act_msg).toEqual(text).and.notify("Verified Error Message.");

});

When(/^Click on Forgot Password link.$/, async() => {
    await lPage.clickForgotPassword.click();
});
```

#### Writing Page Objects
```
import { $, ElementFinder } from "protractor";

export class LandingPageObject {
    public setEmail: ElementFinder;
    public setPassword: ElementFinder;
    public clickSubmit: ElementFinder;
    public clickToggle: ElementFinder;
    public clickForgotPassword: ElementFinder;
    public clickCreateAccount: ElementFinder;
    public getErrorMessage : ElementFinder;

    constructor() {
        this.setEmail = $("input[id='loginEmail']");
        this.setPassword = $("input[id='loginPassword']");
        this.clickSubmit = $("input[value='submit']");
    this.clickCreateAccount = $("a[class='mapfre strong uppercase normal-link']");
    this.clickForgotPassword = $("a[class='mapfre small-link underline switch-line-up']");
    this.clickToggle = $("span[class='slider round']");
    this.getErrorMessage = $("span[class='error-block']");
    }
}
```
#### Cucumber Hooks
Following method takes screenshot on failure of each scenario
```
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
```
#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
    strict: true,
    tags: "@TypeScriptScenario or @CucumberScenario or @ProtractorScenario",
},
```
#### HTML Reports
Currently this project has been integrated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter), which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.