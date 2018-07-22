import { Injectable }   from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 

@Injectable()
export class ForgotPasswordService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'password',
        key: 'createPassword',
        label: 'New Password',
        maxLength: 24,
        minLength: 7,
        required: true,
        type: 'password',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'password',
        key: 'repeatPassword',
        label: 'Repeat Password',
        required: true,
        type: 'password',
      }),
    ]
    return inputs;
  }
}
