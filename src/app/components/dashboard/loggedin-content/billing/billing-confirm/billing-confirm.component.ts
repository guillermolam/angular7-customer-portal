import { Component, OnInit }                from '@angular/core';
import { Router, Params, ActivatedRoute}    from '@angular/router';
import { AlertService }                     from 'mapfre-design-library';

import { BillingService }                   from './../../../../../_services/_iam/billing-service.service';
import { BillingObservableService }         from './../../../../../_services/billing.service';
import { Billing }                          from './../../../../../_models/billing';
import { User }                             from './../../../../../_models/user';
import { UserService }                      from './../../../../../_services/user.service';

@Component({
  selector: 'app-billing-confirm',
  templateUrl: './billing-confirm.component.html',
  styleUrls: ['./billing-confirm.component.scss']
})
export class BillingConfirmComponent implements OnInit {
  billing:                                any;
  loading:                                boolean;
  policyId:                               string;
  user:                                   User;

  constructor(
    private activatedRoute:               ActivatedRoute,
    private alertService:                 AlertService,
    private billingService:               BillingService,
    private billingObservableService:     BillingObservableService,
    private router:                       Router,
    private userService:                  UserService
  ) { }

  sendPayment(): void {
    this.billingService
      .payBillByCheck(this.billing)
      .subscribe( (response) => {
        this.billingObservableService.clearBilling();
        this.alertService.success('you paid your bill', true);
        this.router.navigate(['/my-insurance']);
      },
      (err) => {
        this.alertService.error('There was a problem');
        console.log(err);
      }
    );
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.policyId =                 params['policyid'];
    });

    this.userService.$user.subscribe(
      (user) => {
        this.user =                   user;
        console.log('user', user, typeof user)
    });

    this.billingObservableService.$billing.subscribe( 
      (billing) => {
        this.billing =                     billing;
        console.log('billing', billing, typeof billing)
    });
  }

}
