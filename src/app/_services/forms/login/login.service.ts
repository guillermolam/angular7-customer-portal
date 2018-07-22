import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 


@Injectable()
export class LoginService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'loginEmail',
        label: 'Email',
        required: true,
        type: 'email',
        validationMessageError: 'Please Enter A Valid Email',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'password',
        key: 'loginPassword',
        label: 'Password',
        maxLength: 24,
        minLength: 7,
        required: true,
        showPasswordIcon: true,
        type: 'password'
      })
    ]
    return inputs;
  }
}
