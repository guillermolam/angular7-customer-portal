import { TestBed, inject } from '@angular/core/testing';

import { CreateNewPasswordFormService } from './create-new-password-form.service';
import { FormBase } from 'mapfre-design-library/lib/_models/form-base';
import { TextBox } from 'mapfre-design-library/lib/_models/form-base-extends/text-box';

describe('CreateNewPasswordFormService', () => {

  let createNewPasswordFormService: CreateNewPasswordFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateNewPasswordFormService]
    });

    createNewPasswordFormService = TestBed.get(CreateNewPasswordFormService);

  });

 xit('should create new password form', ()=>{
    let formBaseService = createNewPasswordFormService.getInputs();
     let formBase: FormBase<any>[] = [];

    expect(typeof formBaseService).toBe(typeof formBase);
 });


});
