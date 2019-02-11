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
  policyDetails:                    any;
  billingData:                      any;


  constructor(
    service:                        NewPaymentService,
    private activatedRoute:         ActivatedRoute,
    private alertService:           AlertService,
    private policyDetailsService:      PolicyDetailsService,
    private billingDetailsService:  BillingDetailsService,
    private bankAccountService:     BankAccountService,
    private router:                 Router,
    private userService:            UserService,
    private storageServiceObservablesService: StorageServiceObservablesService
  ) {
    this.inputs = service.getInputs();
   }

  ngOnInit() {
    this.loading =                  true;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =               params['policyid'];

      forkJoin(
        this.billingDetailsService.getCurrentBillByPolicy(this.policyId),
        this.bankAccountService.getBankAccountByEmail(this.storageServiceObservablesService.getUserFromStorage()),

      ).subscribe(([billingData,userResponse]) => {
        this.checkingInfo =         userResponse;
        this.billingData =          billingData;
        if ( Object.keys(this.billingData[0]).length === 0 ) {
          this.router.navigate(['my-insurance',this.policyId,'billing' ]);
        }
        this.loading =              false;
      });


      // this.policyDataService.$policyDetails
      // .subscribe((policyResponse) => {
      //   this.policyDetails =        policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
        
       
      // });
      this.userService.$user
      .subscribe((userResponse) => {
        this.checkingInfo =         userResponse;
        this.loading =              false;
      });
    });
  }
}
