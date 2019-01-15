import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup, FormControl }     from '@angular/forms';
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
            checkingInfo:             any;
            editAccount:              boolean = false;
            showCustomAmount:         boolean = false;
            policyDetails:            any;
            loading:                  boolean = false;
            newPaymentForm:           FormGroup;
            newPaymentRadioForm:      FormGroup;
            policyId:                 string;
            mailingAddress:           any;

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
    let radioAmount,
        paymentObj =                {};

    if (this.newPaymentRadioForm.controls['paymentAmount'].value == 'other' ) {
      radioAmount =                 this.newPaymentRadioForm.controls['otherAmount'].value;
    }
    else {
      radioAmount =                 this.newPaymentRadioForm.controls['paymentAmount'].value;
    }

    if ( this.newPaymentForm.controls.newPayment_aptNumber.value ) {
      this.mailingAddress['streetName'] = this.mailingAddress['streetName'] + '|' + (this.newPaymentForm.controls.newPayment_aptNumber.value || '');
    }
    this.getGooglePlaceService.updateAddress(this.mailingAddress);

    if ( this.checkingInfo[0].bankAccountDetails.accountNumber.digits == this.newPaymentForm.controls['newPayment_accountNumber'].value) {
      paymentObj = {
        bankAccount: {
          accountHolderName:            this.checkingInfo[0].bankAccountDetails.accountHolderName,
          routingNumber: {
            digits:                     this.checkingInfo[0].bankAccountDetails.routingNumber.digits
          },
          accountNumber:  {
            digits:                     this.checkingInfo[0].bankAccountDetails.accountNumber.digits
          },
          accountType:                  'CHECKING',
          mailingAddress:               this.mailingAddress
          },
          checkNumber:                  this.newPaymentForm.controls.newPayment_checkNumber.value || '',
          paymentAmount:                radioAmount
      };
    }
    else {
      if(this.newPaymentForm.controls['newPayment_confirmAccountNumber'].value != this.newPaymentForm.controls['newPayment_accountNumber'].value) {
        this.alertService.error('Account Number and Confirm Bank Account Number do not match');
        paymentObj = 'err' ;
      }
      else {
        paymentObj = {
          bankAccount: {
            accountHolderName:            this.newPaymentForm.controls['newPayment_accountName'].value,
            routingNumber: {
              digits:                     this.newPaymentForm.controls['newPayment_routingNumber'].value
            },
            accountNumber:  {
              digits:                     this.newPaymentForm.controls['newPayment_accountNumber'].value
            },
            accountType:                  'CHECKING',
            mailingAddress:               this.newPaymentForm.controls['newPayment_mailingAddress'].value
            },
            checkNumber:                  this.newPaymentForm.controls['newPayment_checkNumber'].value  || '',
            paymentAmount:                radioAmount
        };
      }
    }

    this.billingDataService.updateBillingDetails(paymentObj);
    this.router.navigate(['/billing', this.policyId, 'confirm']);
  }

  setValues(checkingInfo): void {
    const bDetails =                    checkingInfo[0].bankAccountDetails;
    const apartmentNo =                 bDetails.mailingAddress.streetName.split('|');
    const address = {
      "streetName":                     apartmentNo[0],
      "city":                           bDetails.mailingAddress.city,
      "state":                          bDetails.mailingAddress.state,
      "zipCode": {
        "code":                         bDetails.mailingAddress.zipCode.code
      }
    };

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

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
      this.policyDataService.$policyDetails
      .subscribe((policyResponse) => {
        this.policyDetails =          policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
      });
      this.userService.$user
      .subscribe((userResponse) => {
        this.checkingInfo =           userResponse;
      });
    });

    this.getGooglePlaceService.$address
    .subscribe((address) => {
      this.mailingAddress =           address;
    });

    this.newPaymentForm =             this.ipt.toFormGroup(this.inputs);
    this.newPaymentRadioForm =        new FormGroup({
      checkingNumberAmount:           new FormControl(),
      paymentAmount:                  new FormControl(),
      otherAmount:                    new FormControl()
    });
    this.setValues(this.checkingInfo);
  }
}
