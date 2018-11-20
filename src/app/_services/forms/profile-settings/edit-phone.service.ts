import { FakeAccountSettings } from './../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { Injectable } from '@angular/core';
import { FormBase, TextBox } from 'mapfre-design-library';

@Injectable()
export class EditPhoneService {

  phoneNumber: string;

  constructor() { }

  getInputs(){

    FakeAccountSettings.getUserData().subscribe((user)=>{
      this.phoneNumber = user.phone;
      console.log(this.phoneNumber);
    });

    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'phone',
        value:              this.phoneNumber,
        key:                'accountPhone',
        minLength:           7,
        maxLength:           10,
        label:              'Phone',
        required:           true,
        type:               'tel',
        validationMessageError: 'VALID_PHONE_NUMBER_MESSAGE'
      })
    ];

    return inputs;
  }
}
