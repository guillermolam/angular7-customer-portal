import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { forkJoin }                 from 'rxjs';
import { filter, map }              from 'rxjs/operators';
import { AlertService }             from 'mapfre-design-library';
import { NewPaymentService }        from '../../../../../_services/forms/new-payment/new-payment.service';
import { PolicyDataService }        from '../../../../../_services/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from './../../../../../_services/user.service';
import { PaymentDataServiceService } from './../../../../../_services/data-services/payment-data-service.service';
import { PolicyDetailsService }     from './../../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { BankAccountService }       from './../../../../../_services/profile-settings/bank-account.service';
import { BillingDetailsService }    from './../../../../../_services/my-insurance/billing-details.service';
import { TestingDataService }       from './../../../../../_helpers/testing-data.service';

@Component({
  selector:     'app-billing-newpayment',
  templateUrl:  './billing-newpayment.component.html',
  styleUrls:    ['./billing-newpayment.component.scss'],
  providers:    [ NewPaymentService ]
})
export class BillingNewpaymentComponent implements OnInit {
  alerton;
  checkingInfo:                     any = '';
  input:                            object;
  inputs:                           any[];
  loading:                          boolean;
  legalCheckbox:                    boolean = false;
  policyId:                         string;
  user:                             User;
  showMessage:                      boolean = false;
  policy:                           any;
  billingData:                      any;


  constructor(
    private service:                NewPaymentService,
    private activatedRoute:         ActivatedRoute,
    private alertService:           AlertService,
    private policyDetailsService:   PolicyDetailsService,
    private billingDetailsService:  BillingDetailsService,
    private bankAccountService:     BankAccountService,
    private router:                 Router,
    private userService:            UserService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private paymentDataServiceService: PaymentDataServiceService,
    private policyDataService:      PolicyDataService,
    private testingDataService:     TestingDataService
  ) {
   }

  ngOnInit() {
    this.inputs = this.service.getInputs();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =               params['policyid'];

      this.policyDataService.$policyDetails
      .pipe(
        map( (policyResponse) => {
          return policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
        })
      )
      .subscribe(
      (policyResponse) => {
        this.policy = policyResponse[0];
        this.billingData = this.policy.billingDetails[0];

        this.bankAccountService.getBankAccountByEmail(this.storageServiceObservablesService.getUserFromStorage())
        .subscribe((checkingInfo) => {
          this.checkingInfo = checkingInfo;
        });
      },
      () => {
        this.loading = false;
      });

      /*
      
      Don't remove just yet

      this.bankAccountService.getBankAccountByEmail(this.storageServiceObservablesService.getUserFromStorage())
      .subscribe((checkingInfo) => {
        this.checkingInfo = checkingInfo;
      });

      this.billingDetailsService.getCurrentBillByPolicy(this.policyId).subscribe((billingResponse)=>{
        this.billingData = billingResponse[0];
      });

      this.paymentDataServiceService.$policyData.
      // this.policyDetailsService.getPoliciesByEmail(this.storageServiceObservablesService.getUserFromStorage()).
      pipe(map((policyResponse: any) => {
        if(policyResponse) {
          return policyResponse.filter(
            (policy) => policy.policynumber.policynumber == this.policyId)
        }
      })).
      subscribe((policyResponse) => {
        if (policyResponse) { this.policy = policyResponse[0]; }
      });
      */
    });
  }
}
