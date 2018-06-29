import { Injectable } from '@angular/core';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 

@Injectable()
export class ForgotPasswordSendEmailService {

  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        key: 'sendEmail',
        additionalClasses: 'form-control',
        label: 'Email',
        maxLength: 24,
        minLength: 7,
        pattern: /^[a-b]$/g,
        required: true,
        type: 'email',
      })
    ]
    return inputs;
  }
}
