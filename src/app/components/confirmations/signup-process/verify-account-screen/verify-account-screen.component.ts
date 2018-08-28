import { Component, Input, OnInit } from '@angular/core';
import { User }                     from '../../../../_models/user-interface';

@Component({
  selector: 'app-verify-account-screen',
  templateUrl: './verify-account-screen.component.html',
  styleUrls: ['./verify-account-screen.component.scss']
})
export class VerifyAccountScreenComponent implements OnInit {
  @Input() userData:              User;
  userEmail:                      string;

  constructor() { }

  ngOnInit() {
    this.userEmail = this.userData.email != undefined ? this.userData.email : 'email@gmail.com';
    console.log(this.userEmail);
  }

}
