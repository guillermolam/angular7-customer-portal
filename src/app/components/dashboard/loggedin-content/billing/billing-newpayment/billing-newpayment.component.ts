import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';
import { NewPaymentService }        from '../../../../../_services/forms/new-payment/new-payment.service';
import { PolicyDataService }        from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from './../../../../../_services/user.service';
import { UserInfoService }          from '../../../../../_services/_userinformation/user-info.service';

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
  loading:                          boolean;
  legalCheckbox:                    boolean = false;
  policyId:                         number;
  user:                             User;
  showMessage:                      boolean = false;
  policyDetails:                    any;

  constructor(
    service:                        NewPaymentService,
    private activatedRoute:         ActivatedRoute,
    private alertService:           AlertService,
    private policyDataService:      PolicyDataService,
    private userService:            UserService,
    private userInformation:        UserInfoService,
  ) {
    this.inputs = service.getInputs();
   }

  checkForAccount(): boolean {
    const bankDetails = this.checkingInfo.bankAccountDetails;
    let returnBool;
    if (bankDetails.accountHolderName != '' || bankDetails.accountHolderName != undefined) {
      returnBool = true;
    }
    else {
      returnBool = false;
    }
    return returnBool;
  }

  ngOnInit() {
    this.loading = true;
    

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      this.policyDataService.$policyDetails
      .subscribe((policyResponse) => {
        if (policyResponse) {
          this.policyDetails = policyResponse;
        }
      });
      this.userService.$user
      .subscribe((userResponse) => {
        this.checkingInfo = userResponse;
      });
    });
    this.loading = false;
  }
}
