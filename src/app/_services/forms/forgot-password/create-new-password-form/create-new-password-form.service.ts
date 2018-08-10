import { Injectable } from '@angular/core';

import { FormBase }   from '../../../../_models/form-base';
import { TextBox }    from '../../../../_models/form-base-extends/text-box'; 

@Injectable({
  providedIn: 'root'
})
export class CreateNewPasswordFormService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'password',
        key:                'createPassword',
        label:              'CREATE_PASSWORD',
        maxLength:          24,
        minLength:          7,
        required:           true,
        showPasswordIcon:   true,
        type:               'password',
        validationMessageError: 'VALID_PASSWORD_VALIDATION_MESSAGE'
      })
    ]
    return inputs;
  }
}
