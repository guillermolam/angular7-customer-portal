import { Component, OnInit, Input } from '@angular/core';
import { User }                     from '../../../../_models/user';
import { AuthenticationService }    from '../../../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-onboarding-wallet-back',
  templateUrl: './onboarding-wallet-back.component.html',
  styleUrls: ['./onboarding-wallet-back.component.scss']
})
export class OnboardingWalletBackComponent implements OnInit {
  @Input() userData:                        User;

  constructor(private authService:          AuthenticationService) { }

  downloadCard(user): void {
    this.authService.walletCardDownload(user)
      .subscribe(
        success => {
          console.log("Successfully Download of Card");
        },
        err => {
          console.log("ERR Download of Card");
        }
      )
  }

  ngOnInit() {
  }


}
