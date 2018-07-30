import { Component, OnInit, Input } from '@angular/core';

import { EmailFormService }         from '../../_services/forms/forgot-password/email-form/email-form.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [ EmailFormService ]
})

export class ForgotPasswordComponent  {
  showConfirmation:                   boolean = false;
  emailInputs:                        any[];
 
  constructor (
    emailService:                     EmailFormService,
  ) {
    this.emailInputs = emailService.getInputs();
  }
  
  showConfirmationAction(event): void {
    this.showConfirmation = event;
  }
}
