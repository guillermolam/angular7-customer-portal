import { $, ElementFinder } from "protractor";

export class CreateAccountPageObject {
    //defining varibles and declare type of variables are Element finder
    public yourEmailInput        : ElementFinder;
    public emailRequiredMessage  : ElementFinder;
    public getErrorMessage       : ElementFinder;
    public getsuccessMessage     : ElementFinder;
    public yourPassword          : ElementFinder;
    public yourConfirmPassword   : ElementFinder;    
    public registerButton        : ElementFinder;    
    public cancelLink            : ElementFinder;    

    constructor() {
        //Define xpath for all web element by that we can call any action for them
        this.yourEmailInput          = $("input[id='emailId']");
        this.emailRequiredMessage    = $("div[class='alert alert-danger']");
        this.getErrorMessage         = $("span[class='inputVal text-danger']");
	    this.getsuccessMessage       = $("span[class='inputVal text-success']");
        this.yourPassword            = $("input[id='passwordId']");
        this.yourConfirmPassword     = $("input[id='confirmPasswordId']");
        this.registerButton          = $("button[type='submit']");
        this.cancelLink              = $("a[href='/login']");
        
    }       
}
