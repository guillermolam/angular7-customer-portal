import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 


@Injectable()
export class LoginService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        key: 'emailAddress',
        additionalClasses: 'form-control testing-classes',
        label: 'Email',
        required: true,
        type: 'email'
      }),
      new TextBox({
        key: 'password',
        additionalClasses: 'form-control testing-classes2',
        label: 'Password',
        required: false,
        type: 'password'
      })
    ]
    return inputs;
  }
}
