import { Injectable }   from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBase }   from '../../../../_models/form-base';
import { TextBox }    from '../../../../_models/form-base-extends/text-box'; 

@Injectable()
export class ForgotPasswordService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        key: 'createPassword',
        additionalClasses: 'form-control',
        label: 'New Password',
        maxLength: 24,
        minLength: 7,
      //  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/g,
        required: true,
        type: 'password',
      }),
      new TextBox({
        key: 'repeatPassword',
        additionalClasses: 'form-control',
        label: 'Repeat Password',
        required: true,
        type: 'password',
      }),
    ]
    return inputs;
  }
}
