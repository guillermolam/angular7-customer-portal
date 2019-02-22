import { Component, Input, OnInit } from '@angular/core';
import { Router  }                  from '@angular/router';
import { AddPolicyDataService }     from './../../../../_services/signup-process-service/add-policy-data.service';
import { AuthenticationService }    from '../../../../_services/_iam/authentication-service.service';
import { UserService }              from '../../../../_services/user.service';
import { User }                     from '../../../../_models/user';
import { PolicyDataService }        from '../../../../_services/my-insurance/data-services/policy-data.service';
import { Location }                       from '@angular/common';


@Component({
  selector: 'app-policy-not-found-screen',
  templateUrl: './policy-not-found-screen.component.html',
  styleUrls: ['./policy-not-found-screen.component.scss']
})
export class PolicyNotFoundScreenComponent implements OnInit {
    userData:               any;
    amountOfTries:          number;
    policyHolderName:       string;
    policyNumber:           string;

  constructor(
    private addPolicyDataService:   AddPolicyDataService,
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService,
    private policyService:          PolicyDataService,
    private location:               Location
  ) { }

  getObservableData(userData): void {
    this.policyHolderName =         `${userData.userDetails.firstName} ${userData.userDetails.middleName} ${userData.userDetails.lastName}`;
    this.policyNumber =             `${userData.policyDetails.policynumber.policynumber}`;
  }

  goBackAPage(){
    this.location.back();
  }

  tryAgain(): void {
    this.updateObservable(this.userData);
    this.authService
      .verifyPolicy(this.userService)
      .subscribe(
        (data) => {
          this.userService.$user.subscribe((userService) => {
            const checkPassword = userService.password,
              email = this.userData.email,
              password = this.userData.password;

            if ( checkPassword != '' || checkPassword != undefined || checkPassword != null ) {
              this.authService.login(email, password).subscribe(
                (data) => { this.router.navigate(['/my-insurance']); }
              );
            }
            else {
              this.router.navigate(['/verifyaccount']);
            }
          });
        },
        (err) => {
          if (err.status === 404) {
            // Policy is not found
            this.router.navigate(['signup', 'notfound']);
          }
          else if (err.status === 400) {
            // bad requrest - 400 - Biz Policy
            this.router.navigate(['signup', 'bop']);
          }
          else if (err.status === 409) {
            // conflict - 409 - if the policy belongs to another
            this.router.navigate(['signup', 'policybelongstoanother']);
          }
        }
      )
    ;
  }

  updateObservable(userData): void {
    userData.addPolicyAttempts = userData.addPolicyAttempts + 1;
    this.userData = userData;
  }

  ngOnInit() {
    this.userService.$user.subscribe((user) => {
      if (!user.addPolicyAttempts) user.addPolicyAttempts = 0;
      this.updateObservable(user);
    });

    this.addPolicyDataService.$newPolicy.subscribe((userData) => {
      this.userData = userData;
    });

    this.getObservableData(this.userData);
  }

}
