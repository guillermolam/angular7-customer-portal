import { PaymentDataServiceService } from './../../../../_services/data-services/payment-data-service.service';
import { PolicyDetailsService } from './../../../../_services/my-insurance/policy-details.service';
import { BillingDetailsService } from './../../../../_services/my-insurance/billing-details.service';
import { BankAccountService } from './../../../../_services/profile-settings/bank-account.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StorageServiceObservablesService } from '../../../../_services/storage-service-observables/storage-service-observables.service';

@Component({
  selector: 'app-billing-main',
  templateUrl: './billing-main.component.html',
  styleUrls: ['./billing-main.component.scss']
})
export class BillingMainComponent implements OnInit {

  checkingInfo: any;
  billingData: any;
  policyId: string;
  loading: boolean;
  policyResponse: any;


  constructor(
    private activatedRoute:         ActivatedRoute,
    private billingDetailsService:  BillingDetailsService,
    private bankAccountService:     BankAccountService,
    private router:                 Router,
    private policyDetailsService: PolicyDetailsService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private paymentDataServiceService: PaymentDataServiceService
  ) { }

  ngOnInit() {

  //   this.loading = true;
    
  //   this.activatedRoute.params.subscribe((params: Params) => {
  //     this.policyId =               params['policyid'];
  //   forkJoin(
  //     this.billingDetailsService.getCurrentBillByPolicy(this.policyId),
  //     this.bankAccountService.getBankAccountByEmail(this.storageServiceObservablesService.getUserFromStorage()),
  //     this.policyDetailsService.getPolicyDetailsByNumber(this.policyId)
  //   ).subscribe(([billingData,userResponse, policyResponse]) => {
  //     this.checkingInfo =         userResponse;
  //     this.billingData =          billingData;
  //     this.policyResponse =       policyResponse;
  //     if ( Object.keys(this.billingData[0]).length === 0 ) {
  //       this.router.navigate(['my-insurance',this.policyId,'billing' ]);
  //     }
  //     this.paymentDataServiceService.updateCheckingInfo(this.checkingInfo);
  //     this.paymentDataServiceService.updateBillingAccount(this.billingData);
  //     this.paymentDataServiceService.updatePolicyData(this.policyResponse);
  //     this.loading =              false;
  //   });

  // });


  }

}
