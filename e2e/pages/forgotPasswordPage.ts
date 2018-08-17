import { $, ElementFinder } from "protractor";

export class ForgotPasswordPageObject {
    //defining varibles and declare type of variables are Element finder
    public forgotPasswordEmail    : ElementFinder;
    public clickSendEMail         : ElementFinder;
    public loginButton            : ElementFinder;
    public getErrorMessage        : ElementFinder;
    public getSuccessMessage      : ElementFinder;    

    constructor() {
        //Define xpath for all web element by that we can call any action for them
        this.forgotPasswordEmail     = $("input[id='sendEmail']");
        this.clickSendEMail          = $("div[class='help-block']");//$("button[class='btn mapfre success full']");
        this.loginButton             = $("button[class='btn mapfre waves-light flat link small']");
	    this.getErrorMessage         = $("div[class='error']");
        this.getSuccessMessage       = $('p');
    }
}
