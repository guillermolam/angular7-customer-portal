import { ActivatedRoute, Router }     from '@angular/router';
import { Component, enableProdMode, OnInit }  from '@angular/core';
import { TranslateService }           from '@ngx-translate/core';
import * as _                         from 'underscore';
import { Language }                   from 'mapfre-design-library';
import { environment }                from './../environments/environment';
import { ErrorServiceService }        from './_services/error-service/error-service.service';


@Component({
  selector: 'mapfre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:                    string = 'Mapfre Insurance';
  checkThisRoute:           boolean = false;

  constructor(
    public _languages:      Language,
    private activeRoute:    ActivatedRoute,
    private errorServices:  ErrorServiceService,
    private router:         Router,
    public translate:       TranslateService,
  ) {
     this.checkRoute();
  }

  checkRoute() {
    /* ** ToDo: Create a better loop ** */
    const rs = [
      '/my-insurance',
      '/billing',
      '/claims',
      '/information',
      '/contact',
      '/profile',
      '/policy',
      '/policy',
      '/contact'];
    if ( this.router.isActive(rs[0], null) || this.router.isActive(rs[1], null) ||
      this.router.isActive(rs[2], null) || this.router.isActive(rs[3], null) ||
      this.router.isActive(rs[4], null) || this.router.isActive(rs[5], null) ||
      this.router.isActive(rs[6], null) || this.router.isActive(rs[7], null) ||
      this.router.isActive(rs[8], null) ) {
      return 'loggedin-footer';
    }
    else {
      return 'footer';
    }
  }

  findLanguage(): void {
    const self = this;
    let lang = navigator.language;

    lang = ( lang.indexOf('-') !== -1 ) ?
      lang.slice(0, lang.indexOf('-')).toUpperCase() :
      lang.toUpperCase()
    ;

    _.each(self._languages['lang'], (val, index	) => {
      self.translate.setTranslation(val['identifier'], val['sentences']);
    });
    self.translate.setDefaultLang('EN');
    self.setLang(lang);
  }

  setLang(lang: string): void {
    this.translate.use(lang);
  }

  ngOnInit() {
    // this.login();
    this.findLanguage();
    // if (localStorage.getItem('isLoggedIn') === 'true') {
    //   this.auth.renewTokens();
    // }
    // this.errorServices.noConsolesInProd(environment.production);
  }

}
