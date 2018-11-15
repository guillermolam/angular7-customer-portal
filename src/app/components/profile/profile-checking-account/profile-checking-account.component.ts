import { CheckingAccountService } from './../../../_services/forms/profile-settings/checking-account.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'mapfre-design-library';

@Component({
  selector: 'app-profile-checking-account',
  templateUrl: './profile-checking-account.component.html',
  styleUrls: ['./profile-checking-account.component.scss'],
  providers: [CheckingAccountService]
})
export class ProfileCheckingAccountComponent implements OnInit {

  checkingAccountForm : any[];

  constructor(private checkingAccountService: CheckingAccountService) { }

  ngOnInit() {
    this.checkingAccountForm = this.checkingAccountService.getInputs();
  }

}
