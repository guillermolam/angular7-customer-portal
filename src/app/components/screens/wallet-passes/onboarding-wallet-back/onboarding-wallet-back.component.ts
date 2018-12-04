import { Component, OnInit, Input } from '@angular/core';
import { User }                     from '../../../../_models/user';
import { AuthenticationService }    from '../../../../_services/_iam/authentication-service.service';
import { CookieService } from 'ngx-cookie-service';
import { WalletCardService } from '../../../../_services/_iam/wallet-card.service';

@Component({
  selector: 'app-onboarding-wallet-back',
  templateUrl: './onboarding-wallet-back.component.html',
  styleUrls: ['./onboarding-wallet-back.component.scss']
})
export class OnboardingWalletBackComponent implements OnInit {
  @Input() userData:                   User;

  constructor(  
    private walletCardService:        WalletCardService,
    private cookieService:            CookieService
    ) { }

  createCookie(time, type): void {
    this.cookieService.set('walletcard', type, time);
  }

  downloadCard(user): void {
    console.log(user)
    this.walletCardService
      .generatePkPass('testMfre@gmail.com')
      .subscribe(
        (success) => {
          console.log("Successfully Download of Card");
          this.createCookie(365, 'download');
          //close the modal
          //
        },
        err => {
          console.log("ERR Download of Card");
        }
      )
  }
  ngOnInit() {
  }


}
