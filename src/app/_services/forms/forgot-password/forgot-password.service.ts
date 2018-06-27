import { Injectable }   from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 

@Injectable()
export class ForgotPasswordService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        key: 'forgotPassword',
        additionalClasses: 'form-control',
        label: 'Password',
        required: true,
        type: 'password',
        minLength: 7,
        maxLength: 24
      }),
      new TextBox({
        key: 'forgotPasswordRepeat',
        additionalClasses: 'form-control',
        label: 'Repeat Password',
        required: true,
        type: 'password'
      })
    ]
    return inputs;
  }
}
