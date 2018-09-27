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
    let formBase : FormBase<any>[] = [];
    
    expect(typeof formBaseService).toBe(typeof formBase);

  });

});
