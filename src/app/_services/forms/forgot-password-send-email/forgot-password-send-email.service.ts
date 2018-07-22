import { Injectable } from '@angular/core';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 

@Injectable()
export class ForgotPasswordSendEmailService {

  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'sendEmail',
        label: 'Email',
        maxLength: 24,
        minLength: 7,
        required: true,
        type: 'email',
      })
    ]
    return inputs;
  }
}
