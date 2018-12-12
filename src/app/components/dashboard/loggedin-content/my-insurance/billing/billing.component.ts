import { DomSanitizer }             from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';
import { TestingDataService }       from '../../../../../_helpers/testing-data.service';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  schedualOrHistory:        boolean = true;
  checkBillingVar:          boolean = false;
  policyId:                 number;
  user:                     User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private userService:    UserService,
    private sanitizer:      DomSanitizer,

    private testingData:    TestingDataService
  ) { }

  checkBilling(): boolean {
    return false;
  }

  pendingChecks(): boolean {
    return false;
  }

  switchHistories(type): void {
    if (type == 'schedual') {
      this.schedualOrHistory = true;
    }
    else {
      this.schedualOrHistory = false;
    }
  }

  ngOnInit() {
    // When logging in go a verify user
    // We will need this once the new endpoints are set.
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
    });

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          if (localStorage.getItem('access_token')) {
            this.authService
            .verifyUser(this.user)
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
              },
              (err) => {
                console.log('login success but verifyuser err', err);
              }
            );
          }
          else {
            this.user = this.testingData.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );
  }

}
