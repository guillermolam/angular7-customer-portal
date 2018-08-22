import { $, ElementFinder } from "protractor";

export class CreatePasswordPage {
    //defining varibles and declare type of variables are Element finder
    public createPasswordInput   : ElementFinder;
    public showPasswordSymbol    : ElementFinder;
    // public getErrorMessage       : WebElement;
    public getsuccessMessage     : ElementFinder;
    public yourPassword          : ElementFinder;
    public yourConfirmPassword   : ElementFinder;    
    public registerButton        : ElementFinder;    
    public cancelLink            : ElementFinder;    

    constructor() {
        //Define xpath for all web element by that we can call any action for them
        this.createPasswordInput     = $("input[id='createPassword']");
        this.showPasswordSymbol      = $("div[class='alert alert-danger']");
        // this.getErrorMessage         = browser.findElement(by.xpath("//span[.=' Have at least 1 number ']/../../.."));
	    this.getsuccessMessage       = $("span[class='inputVal text-success']");
        this.yourPassword            = $("input[id='passwordId']");
        this.yourConfirmPassword     = $("input[id='confirmPasswordId']");
        this.registerButton          = $("button[type='submit']");
        this.cancelLink              = $("a[href='/login']");
        
    }       
}
