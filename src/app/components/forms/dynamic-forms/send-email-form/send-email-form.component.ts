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
  @Input() inputs:                      FormBase<any>[] = [];
  @Input() inputValidation:             boolean;
  emailPrefillParamater:                string;
  loading:                              boolean = false;
  returnUrl:                            string;
  passwordEmailForm:                    FormGroup;
  user:                                 User;

  @Output() showConfirmation:           EventEmitter<boolean> = new EventEmitter();

  constructor(
    private activatedRoute:             ActivatedRoute,
    private authService:                AuthenticationService,
    private alertService:               AlertService,
    private ipt:                        FormBaseControlService,
   
  ) {}

  isValid(event): boolean{
    return this.inputValidation = event === undefined ? false : event;
  }

  sendEmail(): void{
    let emailAddress = this.passwordEmailForm.controls.sendEmail.value;
    this.user =                       new User();
    this.user.email =                 emailAddress;
    
    if(this.user.email) {
      this.authService
        .sendEmail(this.user.email)
        .subscribe(
          (data) => {
            this.showConfirmation.emit(true);
          },
          (error) => {
            console.log(error)
            this.alertService.error(error);
          }
        )

    }
  }

  getEmailFromParamater(): void{
    this.passwordEmailForm = this.ipt.toFormGroup(this.inputs); 
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.emailPrefillParamater = params['emailPrefill'] || '';
      }
    );
    this.passwordEmailForm.controls.sendEmail.setValue( this.emailPrefillParamater );
  }
  


  ngOnInit() {
    this.getEmailFromParamater();
  }
  
}
