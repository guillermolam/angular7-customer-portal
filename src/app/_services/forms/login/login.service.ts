import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 


@Injectable()
export class LoginService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        key: 'loginEmail',
        additionalClasses: 'form-control',
        label: 'Email',
        required: true,
        type: 'email',
        validationMessageError: 'Please Enter A Valid Email',
      }),
      new TextBox({
        key: 'loginPassword',
        additionalClasses: 'form-control',
        label: 'Password',
        required: true,
        showPasswordIcon: true,
        type: 'password'
      })
    ]
    return inputs;
  }
}
