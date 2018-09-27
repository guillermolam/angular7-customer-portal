import { Component, Input, OnInit } from '@angular/core';
import { Router  }                  from '@angular/router';

import { AuthenticationService }    from '../../../../_services/_iam/authentication-service.service';
import { UserService }              from '../../../../_services/user.service';
import { User }                     from '../../../../_models/user';

@Component({
  selector: 'app-policy-not-found-screen',
  templateUrl: './policy-not-found-screen.component.html',
  styleUrls: ['./policy-not-found-screen.component.scss']
})
export class PolicyNotFoundScreenComponent implements OnInit {
  @Input()  userData:               User;
            amountOfTries:          number;
            policyHolderName:       string;
            policyNumber:           string;

  constructor(
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService
  ) { }

  getObservableData(userData): void {
    this.policyHolderName =         `${userData.firstName} ${userData.middleName} ${userData.lastName}`;
    this.policyNumber =             `${userData.policyDetails[0].policynumbers.policynumber}`;
  }

  tryAgain(): void {
    this.updateObservable(this.userData);
    this.authService
      .verifyPolicy(this.userService)
      .subscribe(
        data => {
          this.userService.$user.subscribe(userService => {
            let checkPassword = userService.password,
              email = this.userData.email,
              password = this.userData.password;
              
            if( checkPassword != "" || checkPassword != undefined || checkPassword != null ) {
              this.authService.login(email, password).subscribe(
                data => { this.router.navigate(['/dashboard']); }
              )
            }
            else {
              this.router.navigate(['/verifyaccount']);
            }
          })
        },
        err => {
          if(err.status === 404){
            //Policy is not found
            this.router.navigate(['signup', 'notfound']);
          }
          else if(err.status === 400) {
            //bad requrest - 400 - Biz Policy
            this.router.navigate(['signup', 'bop']);
          }
          else if(err.status === 409){
            //conflict - 409 - if the policy belongs to another
            this.router.navigate(['signup', 'policybelongstoanother']);
          }
        }
      )
    ;
  }

  updateObservable(userData): void {
    userData.addPolicyAttempts = userData.addPolicyAttempts+1;
    this.userService.updateUser(userData);
  }

  ngOnInit() {
    this.getObservableData(this.userData);
  }

}
