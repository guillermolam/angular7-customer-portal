import { FakeAccountSettings } from './../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit() {
    FakeAccountSettings.getUserData().subscribe((user)=>{
      this.user = user;
    });
  }

}
