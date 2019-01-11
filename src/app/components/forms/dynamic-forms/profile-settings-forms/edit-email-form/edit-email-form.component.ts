
import { Component, OnInit, Input } from '@angular/core';
import { FormBase, FormBaseControlService,AlertService } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { ChangeProfileEmailService } from '../../../../../_services/profile-settings/change-profile-email.service';
import { StorageServiceObservablesService } from '../../../../../_services/storage-service-observables/storage-service-observables.service';


@Component({
  selector: 'app-edit-email-form',
  templateUrl: './edit-email-form.component.html',
  styleUrls: ['./edit-email-form.component.scss']
})
export class EditEmailFormComponent implements OnInit {

@Input() inputs: FormBase<any>[] = [];
         editEmailForm: FormGroup;
         confirmModal:        boolean;
        //  email: string;

constructor(
  private ipt:                      FormBaseControlService,
  private alertService:             AlertService,
  private router:                   Router,
  private profileConfirmModalService: ProfileConfirmModalService,
  private changeProfileEmailService: ChangeProfileEmailService,
  private storageService: StorageServiceObservablesService
  ) { }

ngOnInit() {
      // this.email = this.inputs[0].value;
      this.editEmailForm = this.ipt.toFormGroup(this.inputs);
}

onChangeEmail(){

    const newEmail = this.editEmailForm.controls.changeEmail.value;
    const oldEmail = this.storageService.getUserFromStorage();
    this.changeProfileEmailService.checkIfEmailExists(oldEmail, newEmail).subscribe((response)=>{
      this.router.navigate(['/profile','email-confirmation']);
    },
    (err)=>{
      console.log(err.status);
      this.alertService.error('Email is already in use');
    })

  }


  onCheckDirty(){
    this.profileConfirmModalService.onCheckDirty(this.editEmailForm);
    this.profileConfirmModalService.$checkDirty.subscribe((value)=>{
      this.confirmModal = value;
    });
    
    if(this.confirmModal===false){
      this.router.navigate(['/profile']);
    }
  }

}
