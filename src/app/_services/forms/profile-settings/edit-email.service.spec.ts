import { TestBed } from '@angular/core/testing';

import { EditEmailService } from './edit-email.service';
import { TextBox, FormBase } from 'mapfre-design-library';

describe('EditEmailService', () => {

  let editEmailService: EditEmailService;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      providers: [
        EditEmailService]
    });
    editEmailService = TestBed.get(EditEmailService);
  });

  it('should return the email textbox and the confirm email textbox', () => {
    let formBase: FormBase<any>[] = [
      new TextBox({
      additionalClasses: 'form-control profile-input-border',
      inputType: 'email',
      key: 'loginEmail',
      label: 'EMAIL',
      required: true,
      type: 'email',
      validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
    }),
    new TextBox({
      additionalClasses:  `form-control profile-input-border`,
      inputType: 'email',
      key: `confirmation_loginEmail`,
      label: 'CONFIRM_EMAIL',
      required: true,
      type: 'email',
      validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
    })
  ];

    expect(editEmailService.getInputs('loginEmail')).toEqual(formBase);
  });
});
