import { UserDetailsService } from './../../../../../_services/profile-settings/user-details.service';
import { Component, OnInit, Input }                         from '@angular/core';
import { FormGroup }                                        from '@angular/forms';
import { Router }                                           from '@angular/router';
import { FormBase, FormBaseControlService, AlertService }   from 'mapfre-design-library';
import { StorageServiceObservablesService }                 from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { ChangePhoneService }                               from './../../../../../_services/profile-settings/change-phone.service';
import { ProfileConfirmModalService }                       from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { AuthenticationService }                            from '../../../../../_services/_iam/authentication-service.service';
import { UserService }                                      from '../../../../../_services/user.service';

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.component.html',
  styleUrls: ['./change-phone.component.scss']
})
export class ChangePhoneComponent implements OnInit {

@Input() inputs:                        FormBase<any>[] = [];
         phoneAccountForm:              FormGroup;
         phoneNumber:                   string;
         confirmModal:                  boolean;

constructor(
  private alertService:                 AlertService,
  private authenticationService:        AuthenticationService,
  private changePhoneService:           ChangePhoneService,
  private ipt:                          FormBaseControlService,
  private router:                       Router,
  private profileConfirmModalService:   ProfileConfirmModalService,
  private storageService:               StorageServiceObservablesService,
  private userService:                  UserService,
  private userDetailsService:           UserDetailsService
  ) { }

  onCheckDirty() {
    this.profileConfirmModalService.onCheckDirty(this.phoneAccountForm);
    this.profileConfirmModalService.$checkDirty.subscribe((value) => {
      this.confirmModal = value;
    });

    if ( this.confirmModal === false ) {
      this.router.navigate(['/profile']);
    }
  }

  onSubmitPhoneDetails(){
    this.phoneNumber = this.phoneAccountForm.controls.accountPhone.value.replace(/[^0-9]/g, '');
    this.changePhoneService
    .addUpdatePhone(this.storageService.getUserFromStorage(), this.phoneNumber)
    .subscribe((response) => {
        this.userDetailsService.getUserDetailsByEmail().subscribe();
        this.alertService.success('Phone number succesfully updated',true);
        this.router.navigate(['/profile']);
    });
  }

  ngOnInit() {
    this.phoneNumber = this.inputs[0].value;
    this.phoneAccountForm = this.ipt.toFormGroup(this.inputs);
  }

}
