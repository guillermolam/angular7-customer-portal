import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';
import { NewPaymentService }        from '../../../../../_services/forms/new-payment/new-payment.service';
import { PolicyDataService }        from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from './../../../../../_services/user.service';

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
    private router:                 Router,
    private userService:            UserService,
  ) {
    this.inputs = service.getInputs();
   }

  ngOnInit() {
    this.loading =                  true;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =               params['policyid'];
      this.policyDataService.$policyDetails
      .subscribe((policyResponse) => {
        this.policyDetails =        policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
        
        if ( Object.keys(this.policyDetails[0].billingDetails).length === 0 ) {
          this.router.navigate([`/my-insurance/${this.policyId}/details` ]);
        }
      });
      this.userService.$user
      .subscribe((userResponse) => {
        this.checkingInfo =         userResponse;
        this.loading =              false;
      });
    });
  }
}
