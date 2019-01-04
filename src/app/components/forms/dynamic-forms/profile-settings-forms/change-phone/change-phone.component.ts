import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { ChangePhoneService } from './../../../../../_services/profile-settings/change-phone.service';
import { FakeAccountSettings } from '../../../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBase, FormBaseControlService, AlertService } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.component.html',
  styleUrls: ['./change-phone.component.scss']
})
export class ChangePhoneComponent implements OnInit {

@Input() inputs: FormBase<any>[] = [];
         phoneAccountForm: FormGroup;
         phoneNumber: string;
         confirmModal:        boolean;

constructor(
  private ipt:                      FormBaseControlService,
  private router:                   Router,
  private alertService:             AlertService,
  private profileConfirmModalService: ProfileConfirmModalService,
  private changePhoneService: ChangePhoneService,
  private storageService: StorageServiceObservablesService
  ) { }

ngOnInit() {
      this.phoneNumber = this.inputs[0].value;
      this.phoneAccountForm = this.ipt.toFormGroup(this.inputs);
}

onSubmitPhoneDetails(){

  this.phoneNumber = this.phoneAccountForm.controls.accountPhone.value.replace(/[^0-9]/g,"");
  this.changePhoneService.addUpdatePhone(this.storageService.getUserFromStorage(), this.phoneNumber).subscribe((response)=>{  
    this.alertService.success('Phone number succesfully updated',true);
    // FakeAccountSettings.user.phone = this.phoneAccountForm.controls.accountPhone.value.replace(/[^0-9]/g,"");
    this.router.navigate(['/profile']);
  });
  
}

onCheckDirty(){
  this.profileConfirmModalService.onCheckDirty(this.phoneAccountForm);
  this.profileConfirmModalService.$checkDirty.subscribe((value)=>{
    this.confirmModal = value;
  });
  
  if(this.confirmModal===false){
    this.router.navigate(['/profile']);
  }
}

}
