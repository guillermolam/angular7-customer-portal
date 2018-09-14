import { Component, OnInit }              from '@angular/core';
import { User }                           from '../../_models/user';
import { UserService }                    from '../../_services/user.service';


@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {
  user:                               User;
  constructor(
    private userService:              UserService,
  ) { }

  ngOnInit() {
    this.userService.$user.subscribe(
      user => {
        this.user = user;
      }
    );
  }

}
