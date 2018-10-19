import { Component, OnInit }              from '@angular/core';
import { User }                           from '../../_models/user';
import { UserService }                    from '../../_services/user.service';
import { AuthenticationService }          from '../../_services/_iam/authentication-service.service';

@Component({
  selector: "app-account-main",
  templateUrl: "./account-main.component.html",
  styleUrls: ["./account-main.component.scss"]
})
export class AccountMainComponent implements OnInit {
  hideModal:                          boolean = false;
  onClickEventWalletPass:             boolean = false;
  user:                               User;

  constructor(
    private authService:              AuthenticationService,
    private userService:              UserService
  ) {
  }


  ngOnInit() {
    
    this.userService.$user.subscribe(
      user => {
        this.user = user;
      }
    );
    
  }
}