import { PaymentDataServiceService } from './../../../../../_services/data-services/payment-data-service.service';
import { PolicyDetailsService } from './../../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { BankAccountService } from './../../../../../_services/profile-settings/bank-account.service';
import { BillingDetailsService } from './../../../../../_services/my-insurance/billing-details.service';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';
import { NewPaymentService }        from '../../../../../_services/forms/new-payment/new-payment.service';
import { PolicyDataService }        from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from './../../../../../_services/user.service';
import { forkJoin } from 'rxjs';

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
  policyId:                         string;
  user:                             User;
  showMessage:                      boolean = false;
  policy:                    any;
  billingData:                      any;


  constructor(
    private service:                        NewPaymentService,
    private activatedRoute:         ActivatedRoute,
    private alertService:           AlertService,
    private policyDetailsService:      PolicyDetailsService,
    private billingDetailsService:  BillingDetailsService,
    private bankAccountService:     BankAccountService,
    private router:                 Router,
    private userService:            UserService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private paymentDataServiceService: PaymentDataServiceService
  ) {
   }

  ngOnInit() {
     this.loading =                  true;

    this.inputs = this.service.getInputs();

      this.activatedRoute.params.subscribe((params: Params) => {
        this.policyId =               params['policyid'];

        this.billingDetailsService.getCurrentBillByPolicy(this.policyId).subscribe((billingData)=>{
          this.billingData = billingData;
        });
        this.bankAccountService.getBankAccountByEmail(this.storageServiceObservablesService.getUserFromStorage()).subscribe((userResponse)=>{
          this.checkingInfo = userResponse;
        });
        this.policyDetailsService.getPolicyDetailsByNumber(this.policyId).subscribe((policyResponse)=>{
          this.policy = policyResponse;
        });
    });
  }
}
