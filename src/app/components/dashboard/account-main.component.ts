import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';
import { AuthenticationService }  from '../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {
  user:                           User;

  constructor(
    private authService:          AuthenticationService,
    private router:               Router,
    private userService:          UserService
  ) {
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          this.user = {
            firstName: 'Testone',
            policyDetails: [{
              InsName1: 'TestTwo'
            }]
          };
        }
      }
    );
  }
}
