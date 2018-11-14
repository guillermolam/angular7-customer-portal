import { EmailPasswordFormService } from './../email-password-form/email-password-form.service';
import { TestBed } from '@angular/core/testing';

import { EditEmailService } from './edit-email.service';
import { TextBox } from 'mapfre-design-library';

describe('EditEmailService', () => {

  let editEmailService: EditEmailService;

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [EditEmailService, EmailPasswordFormService]
  })
  editEmailService = TestBed.get(EditEmailService)
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

    const formBase = [inputs]

    expect(editEmailService.getInputs('loginEmail')).toEqual(formBase);
  });
});
