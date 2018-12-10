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
  selector: 'app-new-payment-form',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss'],
  providers: [ FormBaseControlService ]
})
export class NewPaymentComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
  @Input()  userData:                 object;
            editAccount:              boolean = false;
            showCustomAmount:         boolean = false;
            checkingInfo;
            loading:                  boolean = false;
            newPaymentForm:           FormGroup;
            newPaymentRadioForm:      FormGroup;
            policyId:                 string;

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingObservableService: BillingObservableService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
  ) {
  }

  OnClickEditButton(event): void {
    if (event) {
      this.editAccount =             !this.editAccount;
    }
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
      radioAmount = this.newPaymentRadioForm.controls['otherAmount'].value;
    }
    else {
      radioAmount = this.newPaymentRadioForm.controls['paymentAmount'].value;
    }

    const bill: Billing = {
      billingInfo: [{
        accountName:                this.checkingInfo[0].accountName,
        accountNumber:              this.checkingInfo[0].accountNumber,
        bankRoutingNumber:          this.checkingInfo[0].bankRoutingNumber,
        mailingAddress:             this.checkingInfo[0].mailingAddress,
        apartment:                  this.checkingInfo[0].appartment || '',
        checkNumber:                this.newPaymentRadioForm.controls['checkingNumberAmount'].value || ''
      }],
      amount:                       radioAmount,
      policyId:                     this.policyId

    };

    this.billingObservableService.updateBilling(bill);
    this.router.navigate(['/billing', this.policyId, 'confirm' ]);
  }

  setValues(checkingInfo: object): void {
    this.newPaymentForm.patchValue({
      newPayment_accountName:         checkingInfo[0].accountName,
      newPayment_routingNumber:       checkingInfo[0].bankRoutingNumber,
      newPayment_accountNumber:       checkingInfo[0].accountNumber,
      newPayment_confirmAccountNumber: checkingInfo[0].accountNumber,
      newPayment_mailingAddress:      checkingInfo[0].mailingAddress,
      newPayment_aptNumber:           checkingInfo[0].appartment || ''
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    });

    this.newPaymentForm =             this.ipt.toFormGroup(this.inputs);
    this.newPaymentRadioForm =        new FormGroup({
      checkingNumberAmount:           new FormControl(),
      paymentAmount:                  new FormControl(),
      otherAmount:                    new FormControl()
    });

    this.checkingInfo = this.userData;
    this.setValues(this.checkingInfo);
  }
}
