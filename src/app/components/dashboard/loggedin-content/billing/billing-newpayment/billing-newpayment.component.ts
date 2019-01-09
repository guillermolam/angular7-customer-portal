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
  checkingInfo:                     object;
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
    this.userService.$user.subscribe((userResponse)=>{
      // if(userResponse){
      this.checkingInfo = userResponse;
      console.log(this.checkingInfo);
      // }
    });
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      // forkJoin(
      this.billingDataService.$billingDetails
      // this.userService.$user
      // )
      // .pipe(map((policies: any[]) => {
      //   return policies.filter((policy) => policy.policynumber.policynumber === this.policyId);
      // }))
      .subscribe((billingResponse: any[]) => {
        if (billingResponse) {
          this.policyDetails = billingResponse;
          // .map((policies: any[]) => {
          //     return policies.filter((policy) => policy.policynumber.policynumber === this.policyId);
          // });
          // console.log(this.policyDetails);
          // this.sameMailingAddress = isEqual(this.policyDetails[0].mailingAddress, this.policyDetails[0].residentialAddress);
        }
        else {
          /* this will need to be removed for production */
          this.checkingInfo = this.testingData.testDataChecking(this.policyId);
          console.log('checking info', this.checkingInfo);
          this.userService.$user
          .subscribe(
            (user) => {
              if ( user != undefined ) {
                this.policyDetails = user ;
              }
            }
          );
        }
        this.loading = false;
      });
    });
  }
}
