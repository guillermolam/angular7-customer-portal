import { TestBed, inject } from '@angular/core/testing';

import { CreateAccountService } from './create-account-service.service';
import { FormBase, TextBox }   from 'mapfre-design-library';

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
