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

    private testingDataService:           TestingDataService
  ) { }

  payment(): boolean  {
    let boolForSub;

    this.billingDetailsService
      .makeECheckPayment(this.billing, this.user.userDetails.email.address, this.policyId)
      .subscribe( (response) => {
        boolForSub =                      true;
        this.billingDataService.clearBilling();
        this.alertService.success('Congrats! You\'ve paid your bill!', true);
        this.router.navigate(['/my-insurance']);
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
    .subscribe((response) => {
      this.authenticationService
        .getUserDetailsByEmail(this.storageService.getUserFromStorage())
        .subscribe(([userResponse, accountResponse]) => {
          const response = {
            userDetails:            {...userResponse},
            bankAccountDetails:     {...accountResponse}
          };
          this.userService.updateUser(response);
        },
        (err) => {
          let ui = [{
            userDetails: this.testingDataService.testUserInfo(),
            bankAccountDetails: this.testingDataService.testBankingInfo()
          }];
          this.userService.updateUser( ui );
          this.userService.$user.subscribe(() => {});
        }).add( () => {
          this.loading =              false;
        })
      ;
      this.alertService.success('Checking account information succesfully updated',true);
      boolForSub =                    true;
    }, (err) => {
      boolForSub =                    false;
    });
    return boolForSub;
  }

  sendPayment(): void {
    if(this.storeBankAccount){
      this.bankAccountService.addBankAccount(this.user.userDetails.email.address, this.billing.bankAccount).subscribe();
    }
  }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.policyId =                 params['policyid'];
        this.policyDataService.$policyDetails
        .subscribe(
          (policyResponse) => {
            this.policyDetails =          policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
        });
        this.userService.$user
        .subscribe(
          (user) => {
            this.user =                   user;
        });
        this.billingDataService.$billingDetails
        .subscribe(
          (billing) => {
            this.billing =                billing;
        });
    });
    console.log(this.billing)

    this.billingDataService.$storeBankAccount.subscribe((bankAccountCheck)=>{
      this.storeBankAccount = bankAccountCheck;
    });
  }

}
