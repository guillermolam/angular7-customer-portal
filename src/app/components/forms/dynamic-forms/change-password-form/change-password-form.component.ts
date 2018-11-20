import { Component, OnInit, Input } from '@angular/core';
import { CreateNewPasswordFormService } from '../../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { FormBaseControlService, FormBase } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class ChangePasswordFormComponent implements OnInit {

  @Input()  inputs:                 FormBase<any>[] = [];
            changePasswordForm:     FormGroup;

  constructor(
    private ipt:                      FormBaseControlService,
    private router:                   Router,
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.ipt.toFormGroup(this.inputs);
  }

  onConfirmChange(){
  // console.log(this.changePasswordForm.controls.changePassword.value);
  const passwd = this.changePasswordForm.controls.changePassword.value;
  if(this.changePasswordForm.controls.changePassword.value === 'password' ){
    this.router.navigate(['/profile','edit-password']);
  }
  }

}
