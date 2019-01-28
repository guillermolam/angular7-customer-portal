import { Component, OnInit } from '@angular/core';
import { CreateNewPasswordFormService } from '../../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';

@Component({
  selector: 'app-signup-create-password',
  templateUrl: './signup-create-password.component.html',
  styleUrls: ['./signup-create-password.component.scss']
})
export class SignupCreatePasswordComponent implements OnInit {

  createNewPassword:                    any[];

  constructor(
    private passwordService:                    CreateNewPasswordFormService,
  ) { }

  ngOnInit() {
    this.createNewPassword = this.passwordService.getInputs();
  }

}
