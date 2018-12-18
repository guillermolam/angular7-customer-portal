import { Component, OnInit, Input } from '@angular/core';
import { CookieService }            from 'ngx-cookie-service';
import { User }                     from '../../../../_models/user';
import { AuthenticationService }    from '../../../../_services/_iam/authentication-service.service';
import { WalletCardService }        from '../../../../_services/_iam/wallet-card.service';

@Component({
  selector: 'app-onboarding-wallet-back',
  templateUrl: './onboarding-wallet-back.component.html',
  styleUrls: ['./onboarding-wallet-back.component.scss']
})
export class OnboardingWalletBackComponent implements OnInit {
  @Input() policyNumber:                   string;

  constructor(
    private walletCardService:        WalletCardService,
    private cookieService:            CookieService
    ) { }

  createCookie(time, type): void {
    this.cookieService.set('walletcard', type, time);
  }

  downloadCard(policyNumber): void {
    this.walletCardService
      .generatePkPass(policyNumber)
      .subscribe(
        (success) => {
          console.log('Successfully Download of Card');
          this.createCookie(365, 'download');
          const blob = new Blob([success]);
          saveAs(blob, `${policyNumber}.pkpass`);
          //close the modal
          //
        },
        (err) => {
          console.log('ERR Download of Card');
        }
      )
    ;
  }

  ngOnInit() {
  }

}
