import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup, FormControl, Validators }
                                      from '@angular/forms';
import { ActivatedRoute, Router, Params }
                                      from '@angular/router';
import { AlertService, RegExHelper, FormBase, FormBaseControlService, GetGooglePlaceService } 
                                      from 'mapfre-design-library';
import { BillingDataService }         from './../../../../_services/my-insurance/data-services/billing-data.service';
import { Billing }                    from '../../../../_models/billing';
import { PolicyDataService }          from '../../../../_services/my-insurance/data-services/policy-data.service';
import { UserService }                from '../../../../_services/user.service';

@Component({
  selector: 'app-new-payment-form',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss'],
  providers: [ FormBaseControlService ]
})
export class NewPaymentComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
  @Input()  checkingInfo:             any;
  @Input()  bankDetails:              any;
  @Input()  billingDetails:            any;
            policyDetails:             any;
            checkAmount:              boolean = true;
            editAccount:              boolean = false;
            showCustomAmount:         boolean = false;
            loading:                  boolean = false;
            newPaymentForm:           FormGroup;
            newPaymentRadioForm:      FormGroup;
            policyId:                 string;
            mailingAddress:           any;
            storeBankAccount:         string;

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingDataService:       BillingDataService,
    private getGooglePlaceService:    GetGooglePlaceService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private policyDataService:        PolicyDataService,
    private userService:              UserService
  ) {
  }

  OnClickEditButton(event): void {
    this.editAccount =              !this.editAccount;
  }

  OnChangeShowCustomAmountField(input): void {
    this.showCustomAmount =         input == 'other' ? true : false;
  }

  checkAmountNow(e): void {
    const amount =                  parseInt(e.target.value),
          minAmount =               this.billingDetails.minAmountDue;
    this.checkAmount =              amount > minAmount && !amount ? true : false;
  }

  createBankDetailsObject(){
    const paymentObj = {
      bankAccount: {
        accountHolderName:            this.newPaymentForm.controls.newPayment_accountName.value,
        routingNumber: {
          digits:                     this.newPaymentForm.controls.newPayment_routingNumber.value
        },
        accountNumber:  {
          digits:                     this.newPaymentForm.controls.newPayment_accountNumber.value
        },
        accountType:                  'CHECKING',
        mailingAddress:               this.mailingAddress
        },
        checkNumber:                  this.newPaymentForm.controls.newPayment_checkNumber.value || '',
    };

    return paymentObj;
  }

  getStoreAccountInfo(e): void {
    if (e.target.checked) {
      this.billingDataService.updateBankAccountCheck('checked');
    }
    else {
      this.billingDataService.updateBankAccountCheck(null);
    }
  }

  newPaymentFormSubmit(): void {
    let radioAmount,
        paymentObj =                    {};
    const bankingInfo =                 this.checkingInfo.bankAccountDetails,
          nPForm =                      this.newPaymentForm,
          errorString =                 `'ACCOUNT_NUMBER_CONFIRM_DO_NOT_MATCH' | translate`; 

    if (this.newPaymentRadioForm.controls['paymentAmount'].value == 'other' ) {
      radioAmount =                     this.newPaymentRadioForm.controls['otherAmount'].value;
    }
    else {
      radioAmount =                     this.newPaymentRadioForm.controls['paymentAmount'].value;
    }

    if ( nPForm.controls['newPayment_aptNumber'].value ) {
      this.mailingAddress['streetName'] = this.mailingAddress['streetName'] + '|' + (nPForm.controls['newPayment_aptNumber'].value || '');
    }

    this.getGooglePlaceService.updateAddress(this.mailingAddress);

    if ( bankingInfo.accountNumber.digits == nPForm.controls['newPayment_accountNumber'].value) {
      paymentObj =                      this.createBankDetailsObject();
      paymentObj['paymentAmount'] =     parseFloat(radioAmount);
      this.billingDataService.updateBillingDetails(paymentObj);
      this.router.navigate(['/billing', this.policyId, 'confirm']);
    }
    else {
      if (nPForm.controls['newPayment_confirmAccountNumber'].value != nPForm.controls['newPayment_accountNumber'].value) {
        this.alertService.error(errorString);
      }
      else {
        paymentObj =                      this.createBankDetailsObject();
        paymentObj['paymentAmount'] =     parseFloat(radioAmount);
        this.billingDataService.updateBillingDetails(paymentObj);
        this.router.navigate(['/billing', this.policyId, 'confirm']);
      }
    }
  }

  setValues(checkingInfo): void {
    const bDetails =                    checkingInfo.bankAccountDetails,
          apartmentNo =                 bDetails.mailingAddress.streetName.split('|'),
          address = {
          streetName:                   apartmentNo[0],
          city:                         bDetails.mailingAddress.city,
          state:                        bDetails.mailingAddress.state,
            zipCode: {
              code:                     bDetails.mailingAddress.zipCode.code
            }
          }
    ;

    this.newPaymentForm.patchValue({
      newPayment_accountName:           bDetails.accountHolderName,
      newPayment_routingNumber:         bDetails.routingNumber.digits,
      newPayment_accountNumber:         bDetails.accountNumber.digits,
      newPayment_confirmAccountNumber:  bDetails.accountNumber.digits,
      newPayment_mailingAddress:        apartmentNo[0] + ', ' +
                                        bDetails.mailingAddress.city + ', ' +
                                        bDetails.mailingAddress.state,
      newPayment_aptNumber:             apartmentNo[1]
    });

    this.getGooglePlaceService.updateAddress(address);
  }

  setDynamicInputValidation(radiobutton: string): void {
    const otherAmount =                 this.newPaymentRadioForm.controls['otherAmount'],
          validation =                  '^[0-9]+(\.[0-9]{2,2})?$'; //needs to be placed in teh regex helper
    if (radiobutton == 'other') {
      otherAmount.setValidators([Validators.required, Validators.maxLength(20),  Validators.pattern(validation)  ]);
      this.setMinCheckMarkValidation(true);
    }
    else {
      otherAmount.setValidators([Validators.maxLength(20),  Validators.pattern(validation)  ]);
      this.setMinCheckMarkValidation(false);
    }
    otherAmount.setValue('');
    otherAmount.updateValueAndValidity();
  }

  setMinCheckMarkValidation(checkmark): void {
    const notMinAmount =                 this.newPaymentRadioForm.controls['minAmountCheck'];
    if (checkmark) {
      notMinAmount.setValidators(Validators.required);
    } else {
      notMinAmount.setValidators([]);
    }
    notMinAmount.updateValueAndValidity();
  }

  test(e): void {
    // console.log(e.target.value, this.newPaymentRadioForm.controls.otherAmount.valid, e.target.value.length);
  }

  ngOnInit() {
    this.newPaymentForm =             this.ipt.toFormGroup(this.inputs);
    this.billingDataService.$storeBankAccount.subscribe((bankAccountCheck) => {
      this.storeBankAccount =         bankAccountCheck;
    });

    if (this.checkingInfo && this.checkingInfo.accountHolderName) {
      this.setValues(this.checkingInfo);
    }

    this.bankDetails = this.checkingInfo;

    this.getGooglePlaceService.$address
    .subscribe((address) => {
      this.mailingAddress =           address;
    });

    this.newPaymentRadioForm =        new FormGroup({
      checkingNumberAmount:           new FormControl(),
      paymentAmount:                  new FormControl('', Validators.required),
      otherAmount:                    new FormControl(''),
      minAmountCheck:                 new FormControl('')
    });
  }
}
