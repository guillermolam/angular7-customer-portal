import { Component } from '@angular/core';

import { FormBase } from '../../_models/form-base';
import { ForgotPasswordService } from '../../_services/forms/forgot-password/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [ ForgotPasswordService ]
})
export class ForgotPasswordComponent  {

  inputs: any[];
 
  constructor(service: ForgotPasswordService) {
    this.inputs = service.getInputs();
  }
}