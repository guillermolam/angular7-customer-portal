import { TestBed, inject } from '@angular/core/testing';

import { CreateAccountService } from './create-account-service.service';
import { FormBase } from '../../../_models/form-base';
import { TextBox } from '../../../_models/form-base-extends/text-box';

describe('CreateAccountService', () => {

  let createAccountService : CreateAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAccountService]
    });

    createAccountService = TestBed.get(CreateAccountService);

  });

  it('should return formbase to create account service',()=>{
    let formBaseService = createAccountService.getInputs();
    let formBase : FormBase<any>[] = [
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
      })
    ]
    
    expect(typeof formBaseService).toBe(typeof formBase);
    expect(formBaseService).toEqual(formBase);


  });

});
