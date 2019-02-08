
import { Component, OnInit, Input }   from '@angular/core';
import { FormGroup, FormControl }     from '@angular/forms';
import { ActivatedRoute, Router, Params }
                                      from '@angular/router';
import { AlertService, FormBase, FormBaseControlService, User }
                                      from 'mapfre-design-library';
import { Billing }                    from './../../../../_models/billing';
import { BillingDataService }         from './../../../../_services/my-insurance/data-services/billing-data.service';
import { PaperlessService }           from '../../../../_services/_iam/paperless.service';
import { PolicyDataService }          from './../../../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }       from '../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }   from '../../../../_services/storage-service-observables/storage-service-observables.service';
import { UserService }                from './../../../../_services/user.service';


@Component({
  selector: 'app-enroll-eft-epay-form',
  templateUrl: './enroll-eft-epay-form.component.html',
  styleUrls: ['./enroll-eft-epay-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class EnrollEftEpayFormComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
            accountType:              string;
            deducDate:                string = '';
            enrollInEft:              FormGroup;
            enrollAccountType:        FormGroup;
            loading:                  boolean = false;
            policyDetails:            any;
            policyId:                 string;
            userData:                 any;

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingDataService:       BillingDataService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private paperlessService:         PaperlessService,
    private policyDataService:        PolicyDataService,
    private policyDetailsService:     PolicyDetailsService,
    private storageService:           StorageServiceObservablesService,
    private userService:              UserService
  ) { }

  checkForPrefillData(eftData): void {
    const bankDetails = eftData.bankAccountDetails || '';
    if (bankDetails != '') {
      this.enrollInEft.patchValue({
        enrollInEft_accountName:      bankDetails.accountHolderName,
        enrollInEft_accountNumber:    bankDetails.accountNumber.digits,
        enrollInEft_routingNumber:    bankDetails.routingNumber.digits,
        enrollInEft_confirmAccountNumber: bankDetails.accountNumber.digits
      });

      this.enrollAccountType.controls['bankType'].setValue(bankDetails.accountType);

      if (this.router.url.includes('edit-enroll') ) {
        this.enrollInEft.patchValue({
          enrollInEft_deductionDate:  this.policyDetails[0].pendingCheckPayments[0].deductionDay
        });
        this.deducDate =              this.policyDetails[0].pendingCheckPayments[0].deductionDay;
      }
    }
  }

  enroll(email, policyid) {
    if( this.enrollInEft.controls['enrollInEft_accountNumber'].value !=  this.enrollInEft.controls['enrollInEft_confirmAccountNumber'].value) {
      this.alertService.error('Account number and Confirmation are not the same');
      return;
    }

    const enrollForm = {
      bankAccount: {
        accountHolderName:          this.enrollInEft.controls['enrollInEft_accountName'].value,
        routingNumber: {
          digits:                   this.enrollInEft.controls['enrollInEft_routingNumber'].value,
       },
        accountNumber: {
          digits:                   this.enrollInEft.controls['enrollInEft_accountNumber'].value
       },
        accountType:                this.enrollAccountType.controls['bankType'].value,
        mailingAddress: {
            streetName:             this.userData.bankAccountDetails.mailingAddress.streetName,
            city:                   this.userData.bankAccountDetails.mailingAddress.city,
            state:                  this.userData.bankAccountDetails.mailingAddress.state,
            zipCode: {
              code:                 this.userData.bankAccountDetails.mailingAddress.zipCode.code,
           }
         }
       },
        checkNumber:                '',
        paymentAmount:              '',
        deductionDay:               this.enrollInEft.controls['enrollInEft_deductionDate'].value,
    };

    if (this.router.url.includes('edit-enroll') ) {
      this.paperlessService
      .updatePaperlessEPay( policyid, enrollForm, email )
      .subscribe( (success) => {
        this.billingDataService.updateBillingDetails( enrollForm );
        this.reSync();
        this.router.navigate(['/billing/paperless/e-pay/' + policyid + '/confirm']);
      },
      (error) => {
        this.alertService.error(`We could not Update your Billing info in the program ${error.message}`, true);
      });
    }
    else {
      this.paperlessService
      .enrollPaperlessEPay( policyid, enrollForm, email )
      .subscribe( (success) => {
        this.billingDataService.updateBillingDetails( enrollForm );
        this.reSync();
        this.router.navigate(['/billing/paperless/e-pay/' + policyid + '/confirm']);
      },
      (error) => {
        this.alertService.error(`We could not Enroll you in the program ${error.message}`, true);
      });
    }
  }

  reSync(): void {
    this.loading = true;
    this.policyDataService.clear();
    this.policyDetailsService
      .getPolicyDetailsByEmail( this.storageService.getUserFromStorage())
      .subscribe(
        () => {
          this.loading = false;
        }
      );
  }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.policyId =                 params['policyid'];
    });
    this.enrollInEft =                  this.ipt.toFormGroup(this.inputs);
    this.enrollAccountType =            new FormGroup({
      bankType:                         new FormControl(''),
    });
    this.policyDataService.$policyDetails
    .subscribe((policyResponse) => {
      this.policyDetails =            policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
    });
    this.userService.$user.subscribe((userResponse) => {
      this.userData = userResponse;
      this.accountType = userResponse.bankAccountDetails.accountType || '';
      this.checkForPrefillData(userResponse);
      this.loading = false;
    });
  }

}
