import { Component } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { Language } from './app.language';
import { _ } from 'underscore';

@Component({
  selector: "mapfre-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  	title = "Mapfre Insurance";
	constructor(public translate: TranslateService, public _languages:Language){}

	ngOnInit() {
		let self = this;
		let lang = navigator.language;

		lang =  ( lang.indexOf("-") !==-1 ) ?  lang.slice(0, lang.indexOf("-")).toUpperCase() : lang.toUpperCase();

		_.each(self._languages['lang'], function(val, index	){
			self.translate.setTranslation(val['identifier'], val['sentences']);
		})
		self.translate.setDefaultLang('EN');
        self.setLang(lang);
	}

	setLang(lang:string) {
		let self = this;
		self.translate.use(lang);
	}
}
