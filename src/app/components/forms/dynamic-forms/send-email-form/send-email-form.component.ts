import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup }                    from "@angular/forms";
import { ActivatedRoute }               from '@angular/router';

import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { User }                         from '../../../../_models/user';

@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class SendEmailFormComponent implements OnInit {
  @Input()  emailPrefillParamater:      string;
  @Input()  inputs:                     FormBase<any>[] = [];
  @Input()  inputValidation:            boolean;
            passwordEmailForm:          FormGroup;
            user:                       User = {};

  @Output() showConfirmation:           EventEmitter<boolean> = new EventEmitter();

  constructor(
    private authService:                AuthenticationService,
    private alertService:               AlertService,
    private ipt:                        FormBaseControlService,
  ) {}

  isValid(event): boolean {
    return this.inputValidation = event === undefined ? false : event;
  }

  forgotPasswordSendEmailId(): void {
    let emailAddress =                  this.passwordEmailForm.controls.sendEmail.value;
    this.user.email =                   emailAddress.toLowerCase();

    if(this.user.email) {
      this.authService
        .forgotPasswordSendEmailId(this.user.email)
        .subscribe(
          (data) => {
            this.showConfirmation.emit(true);
          },
          (error) => {
            this.alertService.error('EMAIL_COULD_NOT_VALIDATE');
          }
        )
      ;
    }
  }

  getEmailFromParamater(): void {
    this.passwordEmailForm = this.ipt.toFormGroup(this.inputs); 
    this.passwordEmailForm.controls.sendEmail.setValue( this.emailPrefillParamater );
  }
  
  ngOnInit() {
    this.getEmailFromParamater();
  }
}
