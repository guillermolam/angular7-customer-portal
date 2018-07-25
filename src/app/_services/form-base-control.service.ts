import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../_models/form-base';

@Injectable()
export class FormBaseControlService {
  constructor() { }

  matchPasswords(input: FormControl, group: FormGroup) {
    let password = input.value == group['createPassword'].value;
    return password ? null : { matchPasswords: true }
  }

  toFormGroup(inputs: FormBase<any>[] ) {
    let group:            any = {},
        pattern:          RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/g,
        emailPattern:     RegExp = /^^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        noSpacePattern:   RegExp = /^\s*$/; 

    inputs.forEach(input => {
      if( input.inputType == 'email' ){
        group[input.key] = input.required ? 
          new FormControl(input.value || '', ) : 
          new FormControl(input.value || '');
      }
      else if(input.inputType =='password' && input.key != 'createPassword'){
        group[input.key] = new FormControl
        (
          input.value, 
          [
            Validators.required, 
            Validators.minLength(input.minLength), 
            Validators.maxLength(input.maxLength)
          ]
        );
      }
      else if(input.key == 'createPassword'){
        group[input.key] = new FormControl
        (
          input.value, 
          [
            Validators.required, 
            , 
            Validators.maxLength(input.maxLength),
            Validators.pattern(pattern) 
          ]
        );
      }
      else if(input.key == 'repeatPassword'){
        group[input.key] = new FormControl
        (
          input.value,
          [
            Validators.required,
            //matchPasswords
          ]
        );
      }
      else {
        group[input.key] = input.required ? 
          new FormControl(input.value || '',  [Validators.required] ) : 
          new FormControl(input.value || '');
      }
    });
    return new FormGroup(group);
  }
}
