import { TestBed, inject } from '@angular/core/testing';

import { CreateNewPasswordFormService } from './create-new-password-form.service';
import { FormBase, TextBox }   from 'mapfre-design-library';

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
