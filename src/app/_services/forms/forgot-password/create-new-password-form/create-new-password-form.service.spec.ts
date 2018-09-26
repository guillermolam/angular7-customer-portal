import { TestBed, inject } from '@angular/core/testing';

import { CreateNewPasswordFormService } from './create-new-password-form.service';
import { FormBase } from '../../../../_models/form-base';
import { TextBox } from '../../../../_models/form-base-extends/text-box';

describe('CreateNewPasswordFormService', () => {

  let createNewPasswordFormService: CreateNewPasswordFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateNewPasswordFormService]
    });

    createNewPasswordFormService = TestBed.get(CreateNewPasswordFormService);

  });

 it('should create new password form', ()=>{
    let formBaseService = createNewPasswordFormService.getInputs();
     let formBase: FormBase<any>[] = [
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
    ];

    expect(typeof formBaseService).toBe(typeof formBase);
    expect(formBaseService).toEqual(formBase);

 });


});
