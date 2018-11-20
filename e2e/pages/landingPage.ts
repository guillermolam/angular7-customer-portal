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
    public invalidEmailMessage: ElementFinder;

    public customerAccessTitle : ElementFinder;
    public emailTitle          : ElementFinder;
    public passwordTitle       : ElementFinder;
    public rememberMeTitle     : ElementFinder;
    public forgotPasswordTitle : ElementFinder;
    public footerTitle         : ElementFinder;
    public forgotPassword      : ElementFinder;

    constructor() {
        //Define xpath for all web element by that we can call any action for them
            this.setEmail             = $("input[id='loginEmail']");
            this.setPassword          = $("input[id='loginPassword']");
            this.clickSubmit          = $("input[value='Login']");
            this.clickCreateAccount   = $("button[class='btn mapfre waves-light flat link small']");
            this.clickForgotPassword  = $("a[class='mapfre small-link underline switch-line-up']");
            this.clickToggle          = $("span[class='slider round']");
            this.getErrorMessage      = $('form[name="loginForm"]>div:nth-of-type(1)>div:nth-of-type(1)>mapfre-validation>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)');
            this.invalidEmailMessage  = $("mapfre-alert>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)");
            this.customerAccessTitle  = $("h1[class='title-copy']");
            this.emailTitle           = $("label[for='loginEmail']");
            this.passwordTitle        = $("label[for='loginPassword']");
            this.rememberMeTitle      = $("span[class='slider-text']");
            this.forgotPasswordTitle  = $("span[class='link-content']");
            this.footerTitle          = $("div[class='container-fluid']");
            this.forgotPassword       = $('mapfre-link>a>span');
    }
}
