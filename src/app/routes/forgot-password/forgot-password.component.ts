import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

import { EmailFormService }         from '../../_services/forms/forgot-password/email-form/email-form.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [ EmailFormService ]
})

export class ForgotPasswordComponent implements OnInit  {
  showConfirmation:                   boolean = false;
  tooManyAttempts:                    boolean = false;
  emailInputs:                        any[];
  emailPrefillParamater:              string;
 
  constructor (
    private activatedRoute:           ActivatedRoute,
    emailService:                     EmailFormService,
  ) {
    this.emailInputs = emailService.getInputs();
  }
  
  getEmailFromParamater(): void{
    this.activatedRoute.queryParams
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
