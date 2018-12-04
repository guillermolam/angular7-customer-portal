import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';

import { AuthenticationService }    from '../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../_models/user';
import { UserService }              from './../../../_services/user.service';
import { TestingDataService }       from './../../../_helpers/testing-data.service';
import { UserInfoService }          from '../../../_services/_userinformation/user-info.service';

//import { CheckingAccountService }   from './../../../_services/forms/profile-settings/checking-account.service';

import { NewPaymentService }        from '../../../_services/forms/new-payment/new-payment.service';


@Component({
  selector:     'app-billing-newpayment',
  templateUrl:  './billing-newpayment.component.html',
  styleUrls:    ['./billing-newpayment.component.scss'],
  providers:    [ NewPaymentService ]
})
export class BillingNewpaymentComponent implements OnInit {
  alerton;
  input:                    object;
  inputs:                   any[];
  loading:                  boolean = false;
  legalCheckbox:            boolean = false;
  policyId:                 number;
  user:                     User;
  showMessage:              boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertService:   AlertService,
    private authService:    AuthenticationService,
    private service:        NewPaymentService,
    private userService:    UserService,
    private userInformation: UserInfoService,
    private testingData:    TestingDataService
  ) {
    this.inputs = service.getInputs();
   }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
    });

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          this.loading = true;
          if (localStorage.getItem('access_token')) {
            // If a user comes straight to the page turn on loading
            this.loading = true;
            // That way we can gather the information
            this.userInformation
              .policyByEmail(this.user.email)
              .subscribe(
                (info: any) => {
                  console.log(info);
                  this.user = {
                    firstName: info[0].insurer['firstName'],
                    middleName: info[0].insurer['middleName'],
                    lastName: info[0].insurer['lastName'],
                    policyDetails: info
                  };
                  this.userService.updateUser(this.user);
                  this.loading = false;
                },
                (err) => {
                  this.loading = false;
                  console.log('login success but verifyuser err', err);
                }
              )
            ;
          }
          else {
            this.loading = false;
            this.user = this.testingData.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );
  }

}
