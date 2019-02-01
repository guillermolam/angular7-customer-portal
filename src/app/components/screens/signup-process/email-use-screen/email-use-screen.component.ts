import { Component, OnInit, Input } from '@angular/core';
import { Observable }               from 'rxjs';

import { User }                     from '../../../../_models/user';
import { UserService }              from '../../../../_services/user.service'


@Component({
  selector: 'app-email-use-screen',
  templateUrl: './email-use-screen.component.html',
  styleUrls: ['./email-use-screen.component.scss']
})
export class EmailUseScreenComponent implements OnInit {
  @Input() userData:              User;
  userEmail:                      string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.$user.subscribe((user)=>{
      this.userEmail = user.userDetails.email.address != undefined  ? user.userDetails.email.address : 'email@gmail.com';
    })
  } 

}
