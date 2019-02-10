import { UserDataService } from './../../../../../_services/data-services/user-data.service';
import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { UserDetailsService } from './../../../../../_services/profile-settings/user-details.service';
import { UserService } from './../../../../../_services/user.service';
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
  loading:       boolean;

  constructor(
    private profileConfirmModalService: ProfileConfirmModalService,
    private userService: UserService,
    private userDetailsService: UserDetailsService,
    private userDataService:    UserDataService
  ) { }

  onRemoveAccount() {
    this.confirmModal = true;
  }

  ngOnInit() {

    // this.userService.$user
    // .subscribe( (userResponse) => {
    
    //   this.user = userResponse;
    // });
    this.loading = true;
    this.userDetailsService.getUserDetailsByEmail().subscribe(()=>{
      this.userDataService.$userData.subscribe((userData)=>{
        this.user = userData;
        this.loading = false;
      });
    })
    
    this.profileConfirmModalService.$removeAccount
    .subscribe( (removeAccount) => {
      this.confirmModal = removeAccount;
    })
  }

}
