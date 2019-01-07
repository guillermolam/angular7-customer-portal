import { BillingDataService } from './../../../../_services/my-insurance/data-services/billing-data.service';
// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup, FormControl }     from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { BillingObservableService }   from '../../../../_services/billing.service';
import { Billing }                    from '../../../../_models/billing';
import { UserService } from './../../../../_services/user.service';

@Component({
  selector: 'app-new-payment-form',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss'],
  providers: [ FormBaseControlService ]
})
export class NewPaymentComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
            editAccount:              boolean = false;
            showCustomAmount:         boolean = false;
            policyDetails:          any;
            checkingInfo: any;
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
    private userService: UserService,
    private billingDataService: BillingDataService
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
        accountName:                this.checkingInfo.accountName,
        accountNumber:              this.checkingInfo.accountNumber,
        bankRoutingNumber:          this.checkingInfo.bankRoutingNumber,
        mailingAddress:             this.checkingInfo.mailingAddress,
        apartment:                  this.checkingInfo.appartment || '',
        checkNumber:                this.newPaymentRadioForm.controls['checkingNumberAmount'].value || ''
      }],
      amount:                       radioAmount,
      policyId:                     this.policyId

    };

    this.billingObservableService.updateBilling(bill);
    this.router.navigate(['/billing', this.policyId, 'confirm' ]);
  }

  setValues(checkingInfo: any): void {
    // console.log(checkingInfo);
    this.newPaymentForm.patchValue({
      newPayment_accountName:         checkingInfo.bankAccountDetails.accountHolderName,
      newPayment_routingNumber:       checkingInfo.bankAccountDetails.routingNumber.digits,
      newPayment_accountNumber:       checkingInfo.bankAccountDetails.accountNumber.digits,
      newPayment_confirmAccountNumber: checkingInfo.bankAccountDetails.accountNumber.digits,
      newPayment_mailingAddress:      checkingInfo.bankAccountDetails.mailingAddress.streetName + ' ' +
                                      checkingInfo.bankAccountDetails.mailingAddress.city + ' ' +
                                      checkingInfo.bankAccountDetails.mailingAddress.state,
      newPayment_aptNumber:           checkingInfo.bankAccountDetails.mailingAddress.apartment || ''
    });
  }

  ngOnInit() {

    this.userService.$user.subscribe((userResponse)=>{
      this.checkingInfo = userResponse[0];
      this.setValues(userResponse[0]);
    });

   

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
      this.billingDataService.$billingDetails.subscribe((billingResponse: any[])=>{
        this.policyDetails = billingResponse.filter(response => response.policynumber.policynumber);
      });
    });

    this.newPaymentForm =             this.ipt.toFormGroup(this.inputs);
    this.newPaymentRadioForm =        new FormGroup({
      checkingNumberAmount:           new FormControl(),
      paymentAmount:                  new FormControl(),
      otherAmount:                    new FormControl()
    });

    // this.checkingInfo = this.userData.bankAccountDetails;
   
    

  }
}
