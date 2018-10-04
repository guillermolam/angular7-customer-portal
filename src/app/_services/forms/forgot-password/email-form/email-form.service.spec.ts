import { TestBed, inject } from '@angular/core/testing';

import { EmailFormService } from './email-form.service';
import { FormBase } from 'mapfre-design-library/lib/_models/form-base';
import { TextBox } from 'mapfre-design-library/lib/_models/form-base-extends/text-box';

describe('EmailFormService', () => {

  let emailFormService: EmailFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailFormService]
    });

    emailFormService = TestBed.get(EmailFormService);

  });

  it('should return the formbase for email', ()=>{
    
    let formBaseService = emailFormService.getInputs();
    let formBase: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'sendEmail',
        label: 'EMAIL',
        required: true,
        type: 'email',
        validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
      })
    ];

    expect(typeof formBaseService).toBe(typeof formBase);
    expect(formBaseService).toEqual(formBase);


  });
});
