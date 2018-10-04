import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { FormBase } from 'mapfre-design-library/lib/_models/form-base';
import { TextBox } from 'mapfre-design-library/lib/_models/form-base-extends/text-box';

describe('LoginService', () => {

  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });

    loginService = TestBed.get(LoginService);

  });

  it('should return formbase for creating login form', ()=>{
    let formBaseService = loginService.getInputs();
    let formBase: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'loginEmail',
        label: 'EMAIL',
        required: true,
        type: 'email',
        validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'password',
        key: 'loginPassword',
        label: 'PASSWORD',
        maxLength: 24,
        minLength: 1,
        required: true,
        showPasswordIcon: true,
        type: 'password'
      })
    ]

    expect(typeof formBaseService).toBe(typeof formBase);
    expect(formBaseService).toEqual(formBase);

  });
});
