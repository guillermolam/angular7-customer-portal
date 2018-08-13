import { Component, OnInit }  from '@angular/core';
import { TranslateService }   from '@ngx-translate/core';
import { _ }                  from 'underscore';
import { AppComponent }       from '../../../app.component'
import { Language }           from '../../../app.language';
import { ModalOptions }       from '../../../_models/modal-options';

@Component({
  selector: 'mapfre-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent extends AppComponent implements OnInit {
	
	defaultLang:                        string = navigator.language;
	headerHelpModalOptions:             ModalOptions;

	constructor(public translate: TranslateService, public _languages:Language) { 
		super(translate, _languages);
		this.defaultLang =  ( this.defaultLang.indexOf("-") !==-1 ) ?  
		this.defaultLang.slice(0, this.defaultLang.indexOf("-")).toUpperCase() : this.defaultLang.toUpperCase();
		this.changeLang(this.defaultLang);
		this.headerHelpModalOptions = new ModalOptions({
			additionalButtonClasses:        "header-flat",
			animatePosition:                "top", 
			buttonCopy:                     "MODAL_HELP_TITLE",
			modalId:                        "helpModal",
			headerIconClass:                "help_outline",
			howManyIconsUsed:               1,
			iconClasses:                    "help_outline",
			iconFamily:                     "material-icons",
			modalTranslateCopy:             "MODAL_HELP_TITLE",
			typeOfModal:                    "header",
			screenReader:                   true,
			showIcons:                      true,
		});
	}

	changeLang(lang: string) {
		let self = this;
		let selectedObj =  _.findWhere(self._languages['lang'], {identifier: lang});
		if(selectedObj) {
			self.defaultLang = selectedObj['name'];
		}else{
			self.defaultLang = "Choose Language";
		}
		self.setLang(lang);
	}

	ngOnInit() {
		console.log(this.defaultLang);
	}

}