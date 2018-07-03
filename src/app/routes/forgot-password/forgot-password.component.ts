import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

import { FormBase }                 from '../../_models/form-base';
import { EmailFormService }         from '../../_services/forms/forgot-password/email-form/email-form.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [ EmailFormService ]
})

export class ForgotPasswordComponent  {
  emailInputs:            any[];
  sentEmail:              boolean;
  testingParm:            boolean;
  testingIdParm:          string;
  successChangePassword:  boolean;
 
  constructor (
    emailService: EmailFormService,
    private activatedRoute: ActivatedRoute
  ) {
    this.emailInputs = emailService.getInputs();
  }

  showConfirmation(event): void {
    this.successChangePassword = event;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.testingParm = params.testingParm;
        this.testingIdParm = params.testingIdParm;
        this.successChangePassword = params.successChangePassword;
      }
    );
  }

}
