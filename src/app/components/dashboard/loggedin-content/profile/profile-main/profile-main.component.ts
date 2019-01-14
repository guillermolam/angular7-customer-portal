import { UserService } from './../../../../../_services/user.service';
import { FakeAccountSettings } from '../../../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { Component, OnInit } from '@angular/core';
import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {
  user: any = {};
  confirmModal: boolean;

  constructor(
    private profileConfirmModalService: ProfileConfirmModalService,
    private userService: UserService
  ) { }

  onRemoveAccount(){
    this.confirmModal = true;
  }

  ngOnInit() {

    console.log('called');

    this.userService.$user
    .subscribe( (userResponse) => {
      console.log(userResponse);
      this.user = userResponse;
    });

    this.profileConfirmModalService.$removeAccount
    .subscribe( (removeAccount) => {
      this.confirmModal = removeAccount;
    })
  }

}
