import { Component, Input, OnInit }    from '@angular/core';

import { AuthenticationService }       from '../../../../_services/_iam/authentication-service.service';
import { User }                        from '../../../../_models/user';

@Component({
  selector: 'app-review-policy-screen',
  templateUrl: './review-policy-screen.component.html',
  styleUrls: ['./review-policy-screen.component.scss']
})
export class ReviewPolicyScreenComponent implements OnInit {
  @Input()  policyObject:              object;
  @Input()  userData:                  User;
            user:                      User = {};

  constructor(
    private authService:               AuthenticationService
  ) { }

  downLoadWalletCard(): void {
    // console.log('You just downloaded a walletcard');
  }

  get userAgentTest() {
    return true;
  }

  ngOnInit() {
    // console.log(this.userData);
  }

}
