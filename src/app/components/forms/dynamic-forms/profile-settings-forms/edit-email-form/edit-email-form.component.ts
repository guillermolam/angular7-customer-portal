
import { Component, OnInit, Input } from '@angular/core';
import { FormBase, FormBaseControlService,AlertService } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { ChangeProfileEmailService } from '../../../../../_services/profile-settings/change-profile-email.service';

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
  private changeProfileEmailService: ChangeProfileEmailService
  ) { }

ngOnInit() {
      // this.email = this.inputs[0].value;
      this.editEmailForm = this.ipt.toFormGroup(this.inputs);
}

onChangeEmail(){

    const email = this.editEmailForm.controls.changeEmail.value;

    this.changeProfileEmailService.checkIfEmailExists(email).subscribe((response)=>{
      this.router.navigate(['/profile','email-confirmation']);
    },
    (err)=>{
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
