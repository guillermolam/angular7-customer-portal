
import { Component, OnInit, Input }   from '@angular/core';
import { FormGroup, FormControl }      from '@angular/forms';
import { ActivatedRoute, Router,
  Params }                            from '@angular/router';
import { AlertService,
  FormBase, FormBaseControlService, User }  from 'mapfre-design-library';
import { UserService }                from './../../../../_services/user.service';
import { Billing }                    from './../../../../_models/billing';
import { BillingDataService }         from './../../../../_services/my-insurance/data-services/billing-data.service';
import { PaperlessService }           from '../../../../_services/_iam/paperless.service';

@Component({
  selector: 'app-enroll-eft-epay-form',
  templateUrl: './enroll-eft-epay-form.component.html',
  styleUrls: ['./enroll-eft-epay-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class EnrollEftEpayFormComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
  @Input()  userData:                 any;
            enrollInEft:              FormGroup;
            enrollAccountType:        FormGroup;
            accountType:              string;
            loading:                  boolean = false;
            policyId:                 string;

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingDataService:       BillingDataService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private paperlessService:         PaperlessService,
    private userService:              UserService
  ) { }

  checkForPrefillData(eftData): void {
    const bankDetails = eftData[0].bankAccountDetails || '';
    if (bankDetails != '') {
      this.enrollInEft.patchValue({
        enrollInEft_accountName:      bankDetails.accountHolderName,
        enrollInEft_accountNumber:    bankDetails.accountNumber.digits,
        enrollInEft_routingNumber:    bankDetails.routingNumber.digits,
        enrollInEft_confirmAccountNumber: bankDetails.accountNumber.digits
      });

      this.enrollAccountType.controls['bankType'].setValue(bankDetails.accountType);
    }
  }

  enroll(email) {
    if( this.enrollInEft.controls['enrollInEft_accountNumber'].value !=  this.enrollInEft.controls['enrollInEft_confirmAccountNumber'].value) {
      this.alertService.error('Account number and Confirmation are not the same');
      return;
    }

    const enrollForm: Billing = {
      billingInfo: [{
        accountName:                this.enrollInEft.controls['enrollInEft_accountName'].value,
        accountNumber:              this.enrollInEft.controls['enrollInEft_accountNumber'].value,
        accountType:                this.enrollAccountType.controls['bankType'].value,
        bankRoutingNumber:          this.enrollInEft.controls['enrollInEft_routingNumber'].value,
      }],
      deductionDate:                this.enrollInEft.controls['enrollInEft_deductionDate'].value,
    };

    this.paperlessService
      .enrollPaperlessEPay( this.policyId, enrollForm, email )
      .subscribe( (success) => {
        this.billingDataService.updateBillingDetails( enrollForm );
        this.router.navigate(['/billing/paperless/e-pay/' + this.policyId + '/confirm']);
      },
      (error) => {
        this.billingDataService.updateBillingDetails( enrollForm );
        this.router.navigate(['/billing/paperless/e-pay/' + this.policyId + '/confirm']);
        this.alertService.error(`We could not Enroll you in the program ${error.message}`, true);
      });
  }

  ngOnInit() {
    this.accountType = this.userData[0].bankAccountDetails.accountType;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.policyId =                 params['policyid'];
    });
    this.enrollInEft =                  this.ipt.toFormGroup(this.inputs);
    this.enrollAccountType =            new FormGroup({
      bankType:                         new FormControl(''),
    });
    this.checkForPrefillData(this.userData);
  }

}
