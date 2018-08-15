import { Component, enableProdMode }  from "@angular/core";
import { TranslateService }           from '@ngx-translate/core';
import { Language }                   from './app.language';
import { _ }                          from 'underscore';
import { environment }                from "../environments/environment";

@Component({
  selector: "mapfre-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Mapfre Insurance";
	constructor(public translate: TranslateService, public _languages:Language){}

  findLanguage(): void {
    let self = this,
        lang = navigator.language;
    
    lang = ( lang.indexOf("-") !==-1 ) ?  
      lang.slice(0, lang.indexOf("-")).toUpperCase() : 
      lang.toUpperCase();

		_.each(self._languages['lang'], function(val, index	){
			self.translate.setTranslation(val['identifier'], val['sentences']);
		})
		self.translate.setDefaultLang('EN');
    self.setLang(lang);
  }

	setLang(lang: string): void {
		let self = this;
		self.translate.use(lang);
  }

  setProduction(production): void {
    if(production) {
      enableProdMode();
    }
  }
  
  ngOnInit() {
    this.findLanguage();
    this.setProduction(environment.production);
	}

}
