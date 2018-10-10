import { Component, OnInit, Input }         from '@angular/core';
import { User }                             from '../../../../_models/user';
import { AuthenticationService }            from '../../../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-onboarding-wallet-back-list',
  templateUrl: './onboarding-wallet-back-list.component.html',
  styleUrls: ['./onboarding-wallet-back-list.component.scss']
})
export class OnboardingWalletBackListComponent implements OnInit {
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
