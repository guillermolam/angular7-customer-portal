import { Injectable } from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

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
