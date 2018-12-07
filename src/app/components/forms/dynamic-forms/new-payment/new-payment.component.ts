// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup, FormControl }     from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { BillingService }             from '../../../../_services/_iam/billing-service.service';
import { UserService }                from '../../../../_services/user.service';
import { User }                       from '../../../../_models/user';

import { TestingDataService }         from '../../../../_helpers/testing-data.service';

@Component({
  selector: 'app-new-payment-form',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss'],
  providers: [ FormBaseControlService ]
})
export class NewPaymentComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
            checkingInfo;
            loading:                  boolean = false;
            newPaymentForm:           FormGroup;
            newPaymentRadioForm:      FormGroup;
            policyId:                 string;
            user:                     User = {};

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingService:           BillingService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private userService:              UserService,

    private testingData:              TestingDataService
  ) {}

  checkingForAccount(): void {
    let checkAccount;

    if (this.testingData.testDataChecking().length != 0) {
      checkAccount =                  this.testingData.testDataChecking();
      //this.newPaymentForm.setErrors({ valid: true });
    }
    else {
      checkAccount =                  '';
    }

    this.checkingInfo =               checkAccount;
  }

  newPaymentFormSubmit(): void {
    let bill;

    if ( this.checkingInfo != '' ) {
      bill = {
        billInfo:                     this.newPaymentForm.value,
        amount:                       this.newPaymentRadioForm.value,
        policyId:                     this.policyId,
      };
    }

    else {
      bill = {
        billInfo: [{
          accountName:                this.checkingInfo.accountName,
          bankRoutingNumber:          this.checkingInfo.bankRoutingNumber,
          accountNumber:              this.checkingInfo.accountNumber,
          mailingAddress:             this.checkingInfo.mailingAddress,
          apartment:                  this.checkingInfo.appartment
        }],
        amount:                       this.newPaymentRadioForm.value,
        policyId:                     this.policyId,
      };
    }

    this.billingService
      .payBillByCheck(bill)
      .subscribe( (response) => {
        console.log(response);
        this.alertService.success('You have paid your bill');
      },
      (err) => {
        this.alertService.error('There was an error', err);
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    });

    this.checkingForAccount();

    this.newPaymentForm =             this.ipt.toFormGroup(this.inputs);
    this.newPaymentRadioForm =        new FormGroup({
      paymentAmount:                  new FormControl()
    })
  }

}
