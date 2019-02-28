import { Component, OnInit } from '@angular/core';
import { ModalOptions } from 'mapfre-design-library';
import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { PolicyDetailsService } from './../../../../../_services/my-insurance/policy-details.service';
import { PolicyDataService } from './../../../../../_services/data-services/policy-data.service';
import { UserService } from '../../../../../_services/user.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-my-insurance-main',
  templateUrl: './my-insurance-main.component.html',
  styleUrls: ['./my-insurance-main.component.scss']
})
export class MyInsuranceMainComponent implements OnInit {
  currentBillBool:  boolean;
  hideOrShow:       boolean = false;
  payNowModal:      ModalOptions;
  policyResponse:   any;
  user:             any;
  loading:          any;

  constructor(
    private userService: UserService,
    private policyDataService: PolicyDataService,
    private policyDetailsService: PolicyDetailsService,
    private storageService: StorageServiceObservablesService
  ) {
    this.payNowModal = new ModalOptions({
      additionalButtonClasses: 'ghost primary small pay-now-modal-button',
      additionalClasses: 'pay-now-modal  modal-medium modal-dialog center-on-page',
      buttonCopy: 'PAY_NOW',
      modalId: 'payNow',
      modalTranslateCopy: 'MODAL_MAKE_A_PAYMENT',
      size: 'modal-medium',
      typeOfModal: 'default'
    });
  }

  showMore(e): void {
    this.hideOrShow = !this.hideOrShow;
  }

  ngOnInit() {
    /*this.policyDataService.$policyDetails
    .subscribe((policyResponse: any) => {
      this.policyResponse =         _.sortBy(policyResponse, 'policyStatus');
      this.loading = false;
    });*/

    this.policyDetailsService
    .getPolicyDetailsByEmail(this.storageService.getUserFromStorage())
    .subscribe(() => {
      this.policyDataService.$policyDetails
      .subscribe((policyResponse: any) => {
        this.policyResponse =         _.sortBy(policyResponse, 'policyStatus');
        this.loading = false;
      });
    },
    (err) => { });

  }
}
