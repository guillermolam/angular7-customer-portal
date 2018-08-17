import { browser } from "protractor";
import { LandingPageObject } from "../pages/landingPage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const lPage: LandingPageObject = new LandingPageObject();

Given(/^I am on "(.*?)" search page$/, async (text) => {
    
});
