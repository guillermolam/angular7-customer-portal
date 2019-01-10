import { DomSanitizer }             from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';
import { TestingDataService }       from '../../../../../_helpers/testing-data.service';
import { BillingDataService } from './../../../../../_services/my-insurance/data-services/billing-data.service';



@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  schedualOrHistory:        boolean = true;
  checkBillingVar:          boolean = false;
  policyId:                 number;
  user:                     User;
  policyDetails:            any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private userService:    UserService,
    private sanitizer:      DomSanitizer,

    private testingData:    TestingDataService,
    private billingDataService: BillingDataService,
  ) { }

  checkBilling(): boolean {
    return false;
  }

  pendingChecks(): boolean {
    return false;
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
    // When logging in go a verify user
    // We will need this once the new endpoints are set.

    this.userService.$user
    .subscribe( (user) => {
      this.user = user;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      this.billingDataService.$billingDetails
      .subscribe((billingResponse: any[]) => {
        if (billingResponse !== undefined) {
          this.policyDetails = billingResponse;
        }
        else {
          this.policyDetails = this.user;
        }
      });
    });
  }

}
