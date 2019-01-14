import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';
import { NewPaymentService }        from '../../../../../_services/forms/new-payment/new-payment.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from './../../../../../_services/user.service';
import { UserInfoService }          from '../../../../../_services/_userinformation/user-info.service';

import { TestingDataService }       from './../../../../../_helpers/testing-data.service';
import { BillingDataService }       from './../../../../../_services/my-insurance/data-services/billing-data.service';
import { forkJoin }                 from 'rxjs';

@Component({
  selector:     'app-billing-newpayment',
  templateUrl:  './billing-newpayment.component.html',
  styleUrls:    ['./billing-newpayment.component.scss'],
  providers:    [ NewPaymentService ]
})
export class BillingNewpaymentComponent implements OnInit {
  alerton;
  checkingInfo:                     any;
  input:                            object;
  inputs:                           any[];
  loading:                          boolean = false;
  legalCheckbox:                    boolean = false;
  policyId:                         number;
  user:                             User;
  showMessage:                      boolean = false;
  policyDetails:                    any;

  constructor(
    service:                        NewPaymentService,
    private activatedRoute:         ActivatedRoute,
    private alertService:           AlertService,
    private userService:            UserService,
    private userInformation:        UserInfoService,
    private testingData:            TestingDataService,
    private billingDataService:     BillingDataService,

  ) {
    this.inputs = service.getInputs();
   }

  ngOnInit() {
    this.userService.$user.subscribe((userResponse) => {
      this.checkingInfo = userResponse;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      this.billingDataService.$billingDetails
      .subscribe((billingResponse: any[]) => {
        if (billingResponse) {
          this.policyDetails = billingResponse;
        }
        this.loading = false;
      });
    });
  }
}
