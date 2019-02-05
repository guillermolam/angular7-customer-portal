import { TestBed } from '@angular/core/testing';

import { CheckingAccountService } from './checking-account.service';
import { TextBox, FormBase } from 'mapfre-design-library';

describe('CheckingAccountService', () => {

  let checkingAccountService : CheckingAccountService;

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [CheckingAccountService]
  });

  checkingAccountService = TestBed.get(CheckingAccountService);

});

  xit('should return the checking account formbase', ()=>{
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'text',
        key:                'bankAccountHolder',
        label:              'BANK_ACCOUNT_HOLDER_NAME',
        required:           true,
        type:               'text',
        validationMessageError: 'VALID_ACCOUNT_HOLDER_NAME_MESSAGE'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'bank',
        key:                'bankAccountRoutingNumber',
        label:              'BANK_ROUTING_NUMBER',
        maxLength: 9,
        minLength: 9,
        required:           true,
        type:               'tel',
        validationMessageError: 'VALID_BANK_ROUTING_NUMBER'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'bank',
        key:                'bankAccountNumber',
        label:              'BANK_ACCOUNT_NUMBER',
        maxLength: 17,
        minLength: 4,
        required:           true,
        type:               'tel',
        validationMessageError: 'VALID_BANK_ACCOUNT_NUMBER'
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'address',
        key: 'changeAddress',
        label: 'ADDRESS',
        required: true,
        minLength: 1,
        maxLength: 150,
        type: 'text',
        validationMessageError: 'VALID_ADDRESS',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'changeAddressAPT',
        label: 'ADDRESS_APT',
        required: false,
        minLength: 1,
        maxLength: 50,
        type: 'text',
        validationMessageError: 'VALID_ADDRESS_APT',
      })
    ];


    // expect(checkingAccountService.getInputs()).toEqual(inputs);
    
  });

});
