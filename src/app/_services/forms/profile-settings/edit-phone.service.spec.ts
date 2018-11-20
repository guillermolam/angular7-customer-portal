import { TestBed } from '@angular/core/testing';

import { EditPhoneService } from './edit-phone.service';
import { FormBase, TextBox } from 'mapfre-design-library';

describe('EditPhoneService', () => {

  let editPhoneService: EditPhoneService;

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [EditPhoneService]
  })

  editPhoneService = TestBed.get(EditPhoneService);

});

xit('should return the phone formbase', ()=> {
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

  expect(editPhoneService.getInputs()).toEqual(inputs);

  });
});
