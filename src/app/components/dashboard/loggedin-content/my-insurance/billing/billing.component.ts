import { PolicyDetailsService } from './../../../../../_services/my-insurance/policy-details.service';
import { BillingDetailsService } from './../../../../../_services/my-insurance/billing-details.service';
import { DomSanitizer }             from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }        from '../../../../../_services/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  schedualOrHistory:        boolean = true;
  checkBillingVar:          boolean = false;
  loading:                  boolean;
  policyId:                 string;
  user:                     any;
  billingData:            any;
  policyDetails:          any;
  currentBill:        any;
  billingHistory:      any;
  scheduledBills:       any;
  pendingCheckPayments: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private policyDataService: PolicyDataService,
    private policyDetailsService: PolicyDetailsService,
    private sanitizer:      DomSanitizer,
    private userService:    UserService,
    private billingDetailsService:  BillingDetailsService
  ) { }

  findOutstandingBalance(billing): boolean {
    let returnBool;
    if ( !billing || billing.outstandingbalance == 0 || !billing.outstandingbalance) {
      returnBool = false;
    }
    else {
      returnBool = true;
    }
    return returnBool;
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
    this.userService.$user
    .subscribe( (user) => {
      this.user = user;
    });

    this.loading = true;
    
    this.policyDataService.$policyDetails.subscribe((policyResponse)=>{
      this.policyDetails = policyResponse;
    })


    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];

      forkJoin(
        this.billingDetailsService.getScheduledBillsByPolicy(this.policyId),
        this.billingDetailsService.getHistoryBillsByPolicy(this.policyId),
        this.billingDetailsService.getPendingChecksByPolicy(this.policyId),
        
      ).subscribe(([scheduledBills, historyResponse, pendingCheckPayments]) => {  
        this.billingHistory=       historyResponse;
        this.scheduledBills=       scheduledBills;
        this.pendingCheckPayments= pendingCheckPayments;
        this.loading = false;
      });
    });
  }

}
