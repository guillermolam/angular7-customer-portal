import { TestBed } from '@angular/core/testing';

import { EmailPasswordFormService } from './email-password-form.service';
import { TextBox } from 'mapfre-design-library';

describe('EmailEmailPasswordFormService', () => {

 let emailPasswordFormService: EmailPasswordFormService;

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [EmailPasswordFormService]
  });
  
  emailPasswordFormService = TestBed.get(EmailPasswordFormService);
  });

  it('should return the password textbox', ()=>{
    const inputs = new TextBox({
      additionalClasses: 'form-control',
      inputType: 'password',
      key: 'loginPassword',
      label: 'PASSWORD',
      maxLength: 24,
      minLength: 1,
      required: true,
      showPasswordIcon: true,
      type: 'password'
    });
    expect(emailPasswordFormService.getPasswordInputs('loginPassword')).toEqual(inputs);
  });

  it('should return the email textbox', ()=>{
    const inputs =  new TextBox({
      additionalClasses: 'form-control',
      inputType: 'email',
      key: 'loginEmail',
      label: 'EMAIL',
      required: true,
      type: 'email',
      validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
    })
    expect(emailPasswordFormService.getEmailInputs('loginEmail')).toEqual(inputs);
  });


});
