import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

import { EmailFormService }         from '../../_services/forms/forgot-password/email-form/email-form.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [ EmailFormService ]
})

export class ForgotPasswordComponent implements OnInit  {
  emailInputs:                        any[];
  emailPrefillParamater:              string;
  showConfirmation:                   boolean = false;
  tooManyAttempts:                    boolean = false;

  constructor (
    private activatedRoute:           ActivatedRoute,
    emailService:                     EmailFormService,
  ) {
    this.emailInputs = emailService.getInputs();
  }
  
  getEmailFromParamater(): void{
    this.activatedRoute.params
      .subscribe(params => {
        this.emailPrefillParamater = params['emailPrefill'] || '';
      }
    );
  }
  
  showConfirmationAction(event): void {
    this.showConfirmation = event;
  }

  ngOnInit() {
    this.getEmailFromParamater();
  }
}
