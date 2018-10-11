import { Component, OnInit }                from '@angular/core';
import { CookieService }                    from 'ngx-cookie-service';

@Component({
  selector: 'app-onboarding-wallet-front',
  templateUrl: './onboarding-wallet-front.component.html',
  styleUrls: ['./onboarding-wallet-front.component.scss']
})
export class OnboardingWalletFrontComponent implements OnInit {

  constructor( private _cookieService:      CookieService) { }

  ngOnInit() {
  }

}
