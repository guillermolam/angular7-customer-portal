import { DomSanitizer }             from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }        from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  schedualOrHistory:        boolean = true;
  checkBillingVar:          boolean = false;
  policyId:                 number;
  user:                     any;
  policyDetails:            any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private policyDataService: PolicyDataService,
    private sanitizer:      DomSanitizer,
    private userService:    UserService
  ) { }

  findOutstandingBalance(p): boolean {
    let returnBool;
    const billing = p.billingDetails;
    if ( billing[0] == undefined || billing[0].outstandingbalance == 0 || billing[0].outstandingbalance == undefined ) {
      returnBool = false;
    }
    else {
      returnBool = true;
    }
    return returnBool;
  }

  switchHistories(type): void {
    if (type == 'schedual') {
      this.schedualOrHistory = true;
    }
    else {
      this.schedualOrHistory = false;
    }
  }

  ngOnInit() {
    this.userService.$user
    .subscribe( (user) => {
      this.user = user;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      this.policyDataService.$policyDetails
      .subscribe((policyResponse) => {
        this.policyDetails = policyResponse;
      });
    });
  }

}
