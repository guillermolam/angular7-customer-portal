import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AppComponent } from '../app.component'
import {Language} from '../app.language';
import { _ } from 'underscore';

@Component({
  selector: 'mapfre-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AppComponent implements OnInit {
	defaultLang:string =  navigator.language;
	constructor(public translate: TranslateService, public _languages:Language) { 
		super(translate, _languages);
		this.defaultLang =  ( this.defaultLang.indexOf("-") !==-1 ) ?  this.defaultLang.slice(0, this.defaultLang.indexOf("-")).toUpperCase() : this.defaultLang.toUpperCase();
		this.changeLang(this.defaultLang)
	}

	ngOnInit() {
		console.log(this.defaultLang);
						
	}

	changeLang(lang:string) {
		let self = this;
		let selectedObj =  _.findWhere(self._languages['lang'], {identifier: lang});
		if(selectedObj) {
			self.defaultLang = selectedObj['name'];
		}else{
			self.defaultLang = "Choose Language";
		}
		self.setLang(lang);
	}

}
