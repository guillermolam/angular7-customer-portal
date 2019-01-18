import { Component, OnInit }              from '@angular/core';
import { Router, Params, ActivatedRoute}  from '@angular/router';
import { AlertService }                   from 'mapfre-design-library';
import { BillingDataService }             from './../../../../../_services/my-insurance/data-services/billing-data.service';
import { BillingDetailsService }          from './../../../../../_services/my-insurance/billing-details.service';
import { PolicyDataService }              from './../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                           from './../../../../../_models/user';
import { UserService }                    from './../../../../../_services/user.service';
import { BankAccountService }             from './../../../../../_services/profile-settings/bank-account.service';


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
    private billingDataService:           BillingDataService,
    private billingDetailsService:        BillingDetailsService,
    private policyDataService:            PolicyDataService,
    private router:                       Router,
    private userService:                  UserService,
    private bankAccountService:           BankAccountService
  ) { }

  sendPayment(): void {
    if(this.storeBankAccount){
      this.bankAccountService.addBankAccount(this.user.userDetails.email.address, this.billing.bankAccount).subscribe();
    }

    this.billingDetailsService
      .makeECheckPayment(this.billing, this.user.userDetails.email.address, this.policyId)
      .subscribe( (response) => {
        this.billingDataService.clearBilling();
        this.alertService.success('Congrats! You\'ve paid your bill!', true);
        this.router.navigate(['/my-insurance']);
      },
      (err) => {
        this.alertService.error('There was a problem');
        console.log(err);
      }
    );
  }

  ngOnInit() {

    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.policyId =                 params['policyid'];
        this.policyDataService.$policyDetails
        .subscribe(
          (policyResponse) => {
            this.policyDetails =            policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
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

    this.billingDataService.$storeBankAccount.subscribe((bankAccountCheck)=>{
      this.storeBankAccount = bankAccountCheck;
    });


  }

}
