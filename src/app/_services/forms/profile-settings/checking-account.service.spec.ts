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

  it('should return the checking account formbase', ()=>{
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
        inputType:          'number',
        key:                'bankAccountRoutingNumber',
        label:              'BANK_ROUTING_NUMBER',
        maxLength: 9,
        minLength: 9,
        required:           true,
        type:               'number',
        validationMessageError: 'VALID_BANK_ROUTING_NUMBER'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'number',
        key:                'bankAccountNumber',
        label:              'BANK_ACCOUNT_NUMBER',
        maxLength: 4,
        minLength: 17,
        required:           true,
        type:               'number',
        validationMessageError: 'VALID_BANK_ACCOUNT_NUMBER'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'text',
        key:                'bankAccountMailingAddress',
        label:              'BANK_ACCOUNT_MAILING_ADDRESS',
        required:           true,
        type:               'text',
        validationMessageError: 'VALID_BANK_ACCOUNT_MAILING_ADDRESS_MESSAGE'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'text',
        key:                'bankAccountMailingApartment',
        label:              'BANK_ACCOUNT_MAILING_APARTMENT',
        required:           true,
        type:               'text'
      }),
    ];


    expect(checkingAccountService.getInputs()).toEqual(inputs);
    
  });

});
