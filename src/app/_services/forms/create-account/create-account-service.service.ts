import { Injectable } from '@angular/core';
import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'signUpFirst_name',
        label: 'FIRST_NAME',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_NAME_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'signUpMI_name',
        label: 'MIDDLE_INITIAL',
        required: false,
        type: 'text',
        validationMessageError: 'VALID_NAME_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'signUpLast_name',
        label: 'LAST_NAME',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_NAME_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'signUpEmail',
        label: 'EMAIL',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
      }),
      
    ]
    return inputs;
  }
}