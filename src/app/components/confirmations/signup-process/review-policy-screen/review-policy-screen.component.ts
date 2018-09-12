import { Component, Input, OnInit }    from '@angular/core';

import { AuthenticationService }       from '../../../../_services/_iam/authentication-service.service';
import { User }                        from '../../../../_models/user';

@Component({
  selector: 'app-review-policy-screen',
  templateUrl: './review-policy-screen.component.html',
  styleUrls: ['./review-policy-screen.component.scss']
})
export class ReviewPolicyScreenComponent implements OnInit {
  @Input()  policyObject:              Object;
  @Input()  userData:                  User;
            user:                      User;

  constructor(
    private authService:               AuthenticationService
  ) { }

  downLoadWalletCard(): void {
    console.log("you just downloaded a walletcard");
  }

  confirmIfPaperLessEligible(): void {
    this.authService
      .confirmPaperLessPolicy(this.userData)
      .subscribe(
        data => {
          //go to paperless
        },
        err => {
          //go to dashboard
        }
      )
    ;
  }

  get userAgentTest() {
    return true;
  }

  ngOnInit() {
    console.log(this.userData);
  }

}
