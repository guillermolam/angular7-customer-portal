import { Component, OnInit }      from '@angular/core';
import { TranslateService }       from '@ngx-translate/core';

import { AppComponent }           from 		'../../../app.component'
import { Language }               from '../../../app.language';
import { ModalOptions }           from '../../../_models/modal-options';

@Component({
  selector: 'mapfre-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends AppComponent implements OnInit {
  year:                             number;
  defaultLanguage:                  string;
  footerHelpModalOptions:           ModalOptions
  
  constructor(
    public translate: TranslateService, 
    public _languages:Language,
    
  ) {
    super(translate, _languages)
    this.footerHelpModalOptions = new ModalOptions({
			additionalButtonClasses:        "basic, primary",  //example classes
			buttonCopy:                     "FOOTER_DEFAULT_LANGUAGE",
			modalId:                        "langModal",
			iconClasses:                    "language",
			iconFamily:						          "material-icons",
			modalTranslateCopy:             "MODAL_USER_LANGUAGE_TITLE",
			typeOfModal:					          "footer",
			screenReader:                   false,
			showIcons:                      false,
		  });
   }

  ngOnInit() {
    this.year = 2018;
    // get user default language from local stroge
    this.defaultLanguage = localStorage.getItem("defaultUserLanguage") || "EN"
    this.switchUserLanguage(event)
   
  }

  switchUserLanguage(event){
  	// set user default language into local storage
  	localStorage.setItem("defaultUserLanguage",this.defaultLanguage);
  	this.setLang(this.defaultLanguage)		
  }

}