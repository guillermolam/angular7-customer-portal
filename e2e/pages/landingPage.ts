import { $, ElementFinder } from "protractor";

export class LandingPageObject {
    //defining varibles and declare type of variables are Element finder
    public setEmail            : ElementFinder;
    public setPassword         : ElementFinder;
    public clickSubmit         : ElementFinder;
    public clickToggle         : ElementFinder;
    public clickForgotPassword : ElementFinder;
    public clickCreateAccount  : ElementFinder;
    public getErrorMessage     : ElementFinder;

    public customerAccessTitle : ElementFinder;
    public emailTitle          : ElementFinder;
    public passwordTitle       : ElementFinder;
    public rememberMeTitle     : ElementFinder;
    public forgotPasswordTitle : ElementFinder;
    public footerTitle         : ElementFinder;

    constructor() {
        //Define xpath for all web element by that we can call any action for them
        this.setEmail             = $("input[id='loginEmail']");
        this.setPassword          = $("input[id='loginPassword']");
        this.clickSubmit          = $("input[value='submit']");
    	this.clickCreateAccount   = $("button[class='btn mapfre waves-light flat link small']");
    	this.clickForgotPassword  = $("a[class='mapfre small-link underline switch-line-up']");
    	this.clickToggle          = $("span[class='slider round']");
    	this.getErrorMessage      = $("span[class='error-block']");

        this.customerAccessTitle  = $("h1[class='title-copy']");
        this.emailTitle           = $("label[for='loginEmail']");
        this.passwordTitle        = $("label[for='loginPassword']");
        this.rememberMeTitle      = $("span[class='slider-text']");
        this.forgotPasswordTitle  = $("span[class='link-content']");
        this.footerTitle          = $("div[class='container-fluid']");
    }
}
