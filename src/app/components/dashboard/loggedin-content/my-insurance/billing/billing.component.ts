import { DomSanitizer }             from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { forkJoin }                 from 'rxjs';
import { filter, map }              from 'rxjs/operators';
import { ModalOptions }             from 'mapfre-design-library';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }        from '../../../../../_services/data-services/policy-data.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';
import { PolicyDetailsService } from './../../../../../_services/my-insurance/policy-details.service';
import { BillingDetailsService } from './../../../../../_services/my-insurance/billing-details.service';
import { TestingDataService } from '../../../../../_helpers/testing-data.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  currentBillBool:              boolean;
  schedualOrHistory:        boolean = true;
  checkBillingVar:          boolean = false;
  loading:                  boolean;
  policyId:                 string;
  user:                     any;
  billingData:              any;
  policyDetails:            any;
  currentBill:              any;
  billingHistory:           any;
  scheduledBills:           any;
  pendingCheckPayments:     any;
  payNowModal:              any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private policyDataService: PolicyDataService,
    private policyDetailsService: PolicyDetailsService,
    private sanitizer:      DomSanitizer,
    private userService:    UserService,
    private billingDetailsService:  BillingDetailsService,
    private testingDataService: TestingDataService
  ) {
    this.payNowModal =  new ModalOptions({
      additionalButtonClasses:    'basic primary large btn w-75 mx-auto',
      additionalClasses:          'pay-now-modal  modal-medium modal-dialog center-on-page',
      buttonCopy:                 'MAKE_A_PAYMENT',
      modalId:                    'payNow',
      modalTranslateCopy:         'MODAL_MAKE_A_PAYMENT',
      size:                       'modal-medium',
      typeOfModal:                'default'
    });
   }

  checkCurrentBill() {
    const bill = this.policyDetails.billingDetails;
    if (!bill || bill.length > 0 || bill == {} ) {
      this.currentBillBool = false;
    }
    else if (bill[0].outstandingbalance === 0 || !bill[0].outstandingbalance) {
      this.currentBillBool = false;
    }
    else {
      this.currentBillBool = true;
    }
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
    // this.loading = true
    this.userService.$user
    .subscribe( (user) => {
      this.user = user;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];

      this.policyDataService.$policyDetails
      .pipe(
        map( (policyResponse) => {
          return policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
      }))
      .subscribe((policyResponse) => {
        this.policyDetails = policyResponse;
        this.checkCurrentBill();
        //this.loading = false;
      });

      forkJoin(
        this.billingDetailsService.getHistoryBillsByPolicy(this.policyId),
        this.billingDetailsService.getPendingChecksByPolicy(this.policyId),
      ).subscribe(([ historyResponse, pendingCheckPayments]) => {
        this.billingHistory =         historyResponse;
        this.pendingCheckPayments =   pendingCheckPayments;
      });

      this.billingHistory = this.testingDataService.testHistoryBills();
      this.pendingCheckPayments =  this.testingDataService.testPendingBills();

      this.billingDetailsService
      .getScheduledBillsByPolicy(this.policyId)
      .subscribe(
        (scheduledBills) => {
          this.scheduledBills =         scheduledBills;
          this.loading =                false;
        },
        (err) => {
          this.scheduledBills =         false;
          this.loading =                false;
      });
    });
  }

}
