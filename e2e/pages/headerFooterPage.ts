import { $, $$, ElementFinder } from "protractor";

export class HeaderFooterPageObject {
    //defining varibles and declare type of variables are Element finder
    public helpModule                : ElementFinder;
    public helpMenuButton            : ElementFinder;
    public languageChangeButton      : ElementFinder;
    public helpTitle                 : ElementFinder;
    public helpMenuCloseButton       : ElementFinder;
    public helpBodyContent           : ElementFinder;
    public troubleAccessTitle        : ElementFinder;    
    public troubleAccessBodyContent  : ElementFinder;    
    public callUsTitle               : ElementFinder;    
    public callUsData                : ElementFinder;    
    public emailUsTitle              : ElementFinder;    
    public emailUsData               : ElementFinder;  

    public languageModule            : ElementFinder;
    public englishRadioButton        : ElementFinder;
    public spanishRadioButton        : ElementFinder;
    public confirmLanguage           : ElementFinder;
    public languageEnlishContent     : ElementFinder;
    public languageSpacnishContent   : ElementFinder;


    constructor() {
        //Define xpath for all web element by that we can call any action for them
        this.helpModule                  = $("div[class='modal-dialog modal-small help']");
        this.helpMenuButton              = $("button[class='btn mapfre waves-light header-flat btn-icon']");
        this.languageChangeButton        = $("span[class='button-content']");
        this.helpTitle                   = $("h4[id='myModalLabel']");
	    this.helpMenuCloseButton         = $("button[class='close']");
        this.helpBodyContent             = $("div[class='modal-body-content']");
        this.troubleAccessTitle          = $("div[class='modal-body-title']");
        this.troubleAccessBodyContent    = $$("div[class='modal-body-content']")[1];
        this.callUsTitle                 = $("mapfre-icon-information[titletype='CALL_US'] div[class='title']");
        this.callUsData                  = $("mapfre-icon-information[titletype='CALL_US'] div[class='data']");
        this.emailUsTitle                = $("mapfre-icon-information[titletype='EMAIL_US'] div[class='title']");
        this.emailUsData                 = $("mapfre-icon-information[titletype='EMAIL_US'] div[class='data']");
        this.englishRadioButton          = $("label[for='English']");
        this.spanishRadioButton          = $("label[for='Spanish']");
        this.languageModule              = $("div[id='langModal'] h4[id='myModalLabel']");
        this.confirmLanguage             = $("button[class='btn mapfre waves-light basic primary large']");
    }      
}
