import { $, ElementFinder } from "protractor";

export class CreatePasswordPage {
    //defining varibles and declare type of variables are Element finder
    public createPasswordInput   : ElementFinder;
    public showPasswordSymbol    : ElementFinder;
    public getErrorMessage       : ElementFinder;
    public getsuccessMessage     : ElementFinder;
    public newPasswordButton     : ElementFinder;
    public requestNewLink        : ElementFinder;
    public loginLink             : ElementFinder;

    constructor() {
        //Define xpath for all web element by that we can call any action for them
        this.createPasswordInput     = $("input[id='createPassword']");
        this.showPasswordSymbol      = $("i[class='fas fa-eye active']");
        this.getErrorMessage         = $("div[class='row not-fullfilled']");
	    this.getsuccessMessage       = $("span[class='inputVal text-success']");
        this.newPasswordButton       = $("input[value='NEW_PASSWORD']");
        this.requestNewLink          = $("button[class='btn mapfre waves-light basic primary large']");
        this.loginLink               = $("button[class='btn mapfre waves-light flat link small']"); 
    }       
}
