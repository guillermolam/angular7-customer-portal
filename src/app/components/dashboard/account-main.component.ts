import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';
import { AuthenticationService }  from '../../_services/_iam/authentication-service.service';
import { TestingDataService }     from './../../_helpers/testing-data.service';


@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {
  hideOrShow:                     boolean = false;
  user:                           User;

  constructor(
    private authenticationService: AuthenticationService,
    private router:               Router,
    private userService:          UserService,
    private testingData:          TestingDataService
  ) {
  }

  showMore(e): void {
    this.hideOrShow = !this.hideOrShow;
  }

  // This will be removed
 

  ngOnInit() {
    // When logging in go a verify user
    // We will need this once the new endpoints are set.

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          if (localStorage.getItem('access_token')) {
            this.authenticationService
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
