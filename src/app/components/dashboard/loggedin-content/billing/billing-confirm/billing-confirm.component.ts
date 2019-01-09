import { Component, OnInit }                from '@angular/core';
import { Router, Params, ActivatedRoute}    from '@angular/router';
import { AlertService }                     from 'mapfre-design-library';

import { BillingService }                   from './../../../../../_services/_iam/billing-service.service';
import { BillingObservableService }         from './../../../../../_services/billing.service';
import { Billing }                          from './../../../../../_models/billing';
import { User }                             from './../../../../../_models/user';
import { UserService }                      from './../../../../../_services/user.service';
import { BillingDataService } from './../../../../../_services/my-insurance/data-services/billing-data.service';
import { BillingDetailsService } from './../../../../../_services/my-insurance/billing-details.service';


@Component({
  selector: 'app-billing-confirm',
  templateUrl: './billing-confirm.component.html',
  styleUrls: ['./billing-confirm.component.scss']
})
export class BillingConfirmComponent implements OnInit {
  billing:                                any;
  loading:                                boolean;
  policyId:                               string;
  policyDetails:                                   any;
  user:                                   any;

  constructor(
    private activatedRoute:               ActivatedRoute,
    private alertService:                 AlertService,
    private billingService:               BillingService,
    private billingObservableService:     BillingObservableService,
    private router:                       Router,
    private userService:                  UserService,
    private billingDataService: BillingDataService,
    private billingDetailsService: BillingDetailsService
  ) { }

  sendPayment(): void {
    this.billingDetailsService
      .makeECheckPayment(this.billing, this.user[0].userDetails.email.address, this.policyId)
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
        this.billingDataService.$billingDetails.subscribe((billingResponse) => {
        this.policyDetails = billingResponse;
    });
    });

    this.userService.$user.subscribe(
      (user) => {
        this.user =                   user;
        console.log(this.user);
    });

    this.billingObservableService.$billing.subscribe( 
      (billing) => {
        this.billing =                     billing;
    });
  }

}
