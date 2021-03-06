import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PolicyDataService } from './../../../../_services/data-services/policy-data.service';
import { PaymentDataServiceService } from './../../../../_services/data-services/payment-data-service.service';
import { PolicyDetailsService } from './../../../../_services/my-insurance/policy-details.service';
import { BillingDetailsService } from './../../../../_services/my-insurance/billing-details.service';
import { BankAccountService } from './../../../../_services/profile-settings/bank-account.service';

import { StorageServiceObservablesService } from '../../../../_services/storage-service-observables/storage-service-observables.service';
import { TestingDataService } from '../../../../_helpers/testing-data.service';

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
    private policyDetailsService:   PolicyDetailsService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private paymentDataServiceService: PaymentDataServiceService,
    private policyDataService:       PolicyDataService,
    private testingData:             TestingDataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.policyDetailsService.getPoliciesByEmail(this.storageServiceObservablesService.getUserFromStorage())
    .subscribe((policyResponse) => {
      this.paymentDataServiceService.updatePolicyData(policyResponse);
      this.loading =              false;
    });
  }
}
