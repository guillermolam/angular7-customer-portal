import { Injectable } from '@angular/core';
import { FormBase, TextBox } from 'mapfre-design-library';

@Injectable()
export class EditPhoneService {

  constructor() { }

  getInputs(){
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  'form-control',
        additionalDirectives: 'appNumericInput',
        inputType:          'tel',
        key:                'accountPhone',
        label:              'Phone',
        required:           true,
        type:               'tel',
        validationMessageError: 'VALID_PHONE_NUMBER_MESSAGE'
      })
    ];

    return inputs;
  }
}
