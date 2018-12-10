// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup, FormControl }     from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { BillingObservableService }   from '../../../../_services/billing.service';
import { Billing }                    from '../../../../_models/billing';


@Component({
  selector: 'app-new-payment-no-checking-form',
  templateUrl: './new-payment-no-checking.component.html',
  styleUrls: ['./new-payment-no-checking.component.scss'],
  providers: [ FormBaseControlService ]
})
export class NewPaymentNoCheckingComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
            showCustomAmount:         boolean = false;
            loading:                  boolean = false;
            newPaymentForm:           FormGroup;
            newPaymentRadioForm:      FormGroup;
            policyId:                 string;

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingObservableService: BillingObservableService,
    private ipt:                      FormBaseControlService,
    private router:                   Router
  ) {
  }
  

  OnChangeShowCustomAmountField(input): void {
    if (input == 'other') {
      this.showCustomAmount =       true;
    }
    else {
      this.showCustomAmount =       false;
    }
  }

  newPaymentFormSubmit(): void {
    let radioAmount;

    if (this.newPaymentRadioForm.controls['paymentAmount'].value == 'other' ) {
      radioAmount =                 this.newPaymentRadioForm.controls['otherAmount'].value;
    }
    else {
      radioAmount =                 this.newPaymentRadioForm.controls['paymentAmount'].value;
    }

    const bill: Billing = {
      billingInfo: [{
        accountName:                this.newPaymentForm.controls['newPayment_accountName'].value,
        accountNumber:              this.newPaymentForm.controls['newPayment_accountNumber'].value,
        bankRoutingNumber:          this.newPaymentForm.controls['newPayment_routingNumber'].value,
        mailingAddress:             this.newPaymentForm.controls['newPayment_mailingAddress'].value,
        apartment:                  this.newPaymentForm.controls['newPayment_aptNumber'].value,
        checkNumber:                this.newPaymentForm.controls['newPayment_checkNumber'].value
      }],
      amount:                       radioAmount,
      policyId:                     this.policyId
    };

    if ( this.newPaymentForm.controls['newPayment_storeInformation'] ) {
      this.saveCheckingInformation(bill.billingInfo);
    }

    if ( this.newPaymentForm.controls['newPayment_accountNumber'].value != this.newPaymentForm.controls['newPayment_confirmAccountNumber'].value ) {
      this.alertService.error('Account Number and Confirm Account Number are not the same');
    }
    else {
      this.billingObservableService.updateBilling(bill);
      this.router.navigate(['/billing', this.policyId, 'confirm' ]);
    }
  }

  saveCheckingInformation(account): void {
    console.log('saveCheckingInformation', account);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    });

    this.newPaymentForm =             this.ipt.toFormGroup(this.inputs);
    this.newPaymentRadioForm =        new FormGroup({
      paymentAmount:                  new FormControl(),
      otherAmount:                    new FormControl()
    });
  }
}
