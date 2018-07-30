import { Component, OnInit } from '@angular/core';
import { AppComponent } from 		'../../../app.component'
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../app.language';

@Component({
  selector: 'mapfre-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends AppComponent implements OnInit {
  year:         number;
  defaultLanguage: string;
  constructor(public translate: TranslateService, public _languages:Language) {
  	super(translate, _languages)
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