import { TestBed, inject } from '@angular/core/testing';

import { FormBaseControlService } from './form-base-control.service';

import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormBase }     from '../_models/form-base';
import { RegExHelper }  from '../_helpers/regex-helper';

describe('FormBaseControlService', () => {

  let formBaseControlService: FormBaseControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBaseControlService,
        RegExHelper
      ]
    });

    formBaseControlService =  TestBed.get(FormBaseControlService);

  });

  it('should return true if repeat password matches', ()=>{
     let formGroup = new FormGroup({
      createPassword : new FormControl('password')
     });
     let input = new FormControl('password');
     let matchPassword = formBaseControlService.matchPasswords(input,formGroup);
     expect(matchPassword).toEqual({matchPasswords: true});
  });

  it('should return null if repeat password does not match', ()=>{
    let formGroup = new FormGroup({
     createPassword : new FormControl('notmatch')
    });
    let input = new FormControl('password');
    let matchPassword = formBaseControlService.matchPasswords(input,formGroup);
    expect(matchPassword).toBeNull();
 });



});
