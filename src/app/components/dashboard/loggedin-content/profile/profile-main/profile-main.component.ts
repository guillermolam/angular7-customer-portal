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
    private profileConfirmModalService: ProfileConfirmModalService
  ) { }

  onRemoveAccount(){
    this.confirmModal = true; 
  }

  ngOnInit() {
    FakeAccountSettings.getUserData().subscribe((user)=>{
      this.user = user;
    });
    this.profileConfirmModalService.$removeAccount.subscribe((removeAccount)=>{
      this.confirmModal = removeAccount;
    })
  }

}
