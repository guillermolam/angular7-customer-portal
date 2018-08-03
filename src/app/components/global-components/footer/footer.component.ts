import { Component, Input, OnInit, Output }      from '@angular/core';
import { TranslateService }       from '@ngx-translate/core';

import { AppComponent }           from '../../../app.component'
import { Language }               from '../../../app.language';
import { ModalOptions }           from '../../../_models/modal-options';

@Component({
  selector: 'mapfre-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends AppComponent implements OnInit {
  defaultLanguage:                  string;
  footerHelpModalOptions:           ModalOptions;
  hideModal:                        boolean = false;
  year:                             number;
  
  
  constructor(
    public translate:               TranslateService, 
    public _languages:              Language,
  ) {
    super(translate, _languages)
    this.footerHelpModalOptions = new ModalOptions({
      additionalButtonClasses:        "footer-flat", 
      animatePosition:                "bottom",
			buttonCopy:                     "FOOTER_DEFAULT_LANGUAGE",
			headerIconClass:                "language",
			howManyIconsUsed:               2,
			iconClasses:                    "language, unfold_more",
			iconFamily:						          "material-icons",
			modalId:                        "langModal",
			modalTranslateCopy:             "MODAL_USER_LANGUAGE_TITLE",
			screenReader:                   false,
			showIcons:                      true,
			typeOfModal:					          "footer",
		});
  }

  hideModalAction(event): void {
    if(event) this.hideModal = true;
  }

  resetHideModal(event): void {
    this.hideModal = false;
  }

  switchUserLanguage(event): void {
  	// set user default language into local storage
  	localStorage.setItem("defaultUserLanguage", this.defaultLanguage);
  	this.setLang(this.defaultLanguage);		
  }

  ngOnInit() {
    this.year = 2018;
    // get user default language from local stroge
    this.defaultLanguage = localStorage.getItem("defaultUserLanguage") || "EN"
    this.switchUserLanguage(event)
  }

}