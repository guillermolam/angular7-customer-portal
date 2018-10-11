import { Component, OnInit, Input }         from '@angular/core';
import { CookieService }                    from 'ngx-cookie-service';

import { User }                             from '../../../../_models/user';
import { WalletCardService }                from '../../../../_services/_iam/wallet-card.service';

@Component({
  selector: 'app-onboarding-wallet-back-list',
  templateUrl: './onboarding-wallet-back-list.component.html',
  styleUrls: ['./onboarding-wallet-back-list.component.scss']
})
export class OnboardingWalletBackListComponent implements OnInit {
  @Input() userData:                        User;

  constructor(  
    private walletCardService:        WalletCardService,
    private cookieService:            CookieService
    ) { }

  createCookie(time, type): void {
    this.cookieService.set('walletcard', type, time);
  }

  downloadCard(user): void {
    this.walletCardService
      .generatePkPass(user.email)
      .subscribe(
        success => {
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
