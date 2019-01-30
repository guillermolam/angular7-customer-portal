import { Component, OnInit }              from '@angular/core';
import { Router, Params, ActivatedRoute}  from '@angular/router';
import { AlertService }                   from 'mapfre-design-library';
import { AuthenticationService }          from '../../../../../_services/_iam/authentication-service.service';
import { BankAccountService }             from '../../../../../_services/profile-settings/bank-account.service';
import { BillingDataService }             from './../../../../../_services/my-insurance/data-services/billing-data.service';
import { BillingDetailsService }          from './../../../../../_services/my-insurance/billing-details.service';
import { PolicyDataService }              from './../../../../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }           from '../../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }
                                          from '../../../../../_services/storage-service-observables/storage-service-observables.service';
import { User }                           from './../../../../../_models/user';
import { UserService }                    from './../../../../../_services/user.service';

import { TestingDataService }             from '../../../../../_helpers/testing-data.service';

@Component({
  selector: 'app-billing-confirm',
  templateUrl: './billing-confirm.component.html',
  styleUrls: ['./billing-confirm.component.scss']
})
export class BillingConfirmComponent implements OnInit {
  billing:                                any;
  checkAmount:                            boolean;
  loading:                                boolean;
  policyId:                               string;
  policyDetails:                          any;
  user:                                   any;
  storeBankAccount:                       string;

  constructor(
    private activatedRoute:               ActivatedRoute,
    private alertService:                 AlertService,
    private authenticationService:        AuthenticationService,
    private bankAccountService:           BankAccountService,
    private billingDataService:           BillingDataService,
    private billingDetailsService:        BillingDetailsService,
    private policyDataService:            PolicyDataService,
    private router:                       Router,
    private storageService:               StorageServiceObservablesService,
    private userService:                  UserService,
) { }

  checkMethodForMinAmount(bill, billingDetails): void {
    if (bill > billingDetails) {
      this.checkAmount =                  true;
    }
    else {
      this.checkAmount =                  false;
    }
  }

  payment(billing, email, policyId): boolean  {
    let boolForSub;
    this.billingDetailsService
      .makeECheckPayment( billing, email, policyId )
      .subscribe( (response) => {
        boolForSub =                      true;
        this.billingDataService.clearBilling();
      },
      (err) => {
        boolForSub =                      false;
      }
    );
    return boolForSub;
  }

  saveCheckingAccount(email, bankAccountDetails): boolean {
    let boolForSub;
    this.bankAccountService
    .addBankAccount(email, bankAccountDetails)
    .subscribe( (response) => {
      this.authenticationService
      .getUserDetailsByEmail(this.storageService.getUserFromStorage())
      .subscribe(([userResponse, accountResponse]) => {
        const resObject = {
          userDetails:              {...userResponse},
          bankAccountDetails:       {...accountResponse}
        };
        this.userService.updateUser(resObject);
        boolForSub =                true;
      });
    },
    (err) => {
      boolForSub =                    false;
    });
    return boolForSub;
  }

  sendPayment(): void {
    this.loading =                    true;
    if (this.storeBankAccount) {
      if ( this.payment(this.billing, this.user.userDetails.email.address, this.policyId) ) {
        if ( this.saveCheckingAccount(this.user.userDetails.email.address, this.billing.bankAccount) ) {
          this.loading =              false;
          this.alertService.success('Congrats! You\'ve paid your bill and saved your bank information!', true);
          this.router.navigate(['/my-insurance']);
        }
        else {
          this.loading =              false;
          this.alertService
          .success('We were able to pay your bill; however we could not save your bank information. If you would like to try saving your informtion again for to <a routerlink="[`/profile/edit-checking-account`]">Profile > Edit Checking Account Information</a> ', true);
          this.router.navigate(['/my-insurance']);
        }
      }
      else {
        this.loading =                false;
        this.alertService.error('There was a problem paying your bill, please review your details.');
      }
    }
    else {
      if ( this.payment( this.billing, this.user.userDetails.email.address, this.policyId ) ) {
        this.loading =                false;
        this.alertService.success('Congrats! You\'ve paid your bill!', true);
        this.router.navigate(['/my-insurance']);
      }
      else {
        this.loading =                false;
        this.alertService.error('There was a problem paying your bill, please review your details.');
      }
    }
  }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.policyId =                params['policyid'];
        this.policyDataService.$policyDetails
        .subscribe(
          (policyResponse) => {
            this.policyDetails =       policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
        });
        this.userService.$user
        .subscribe(
          (user) => {
            this.user =                user;
        });
        this.billingDataService.$billingDetails
        .subscribe(
          (billing) => {
            this.billing =             billing;
        });
        this.billingDataService.$storeBankAccount
        .subscribe((bankAccountCheck) => {
          this.storeBankAccount =      bankAccountCheck;
        });
        this.checkMethodForMinAmount( this.policyDetails[0].billingDetails[0].minAmountDue, this.billing.paymentAmount );
    });
  }

}
