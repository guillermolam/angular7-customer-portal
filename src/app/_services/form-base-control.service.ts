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
    let group: any = {},
        pattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/g;

    inputs.forEach(input => {
      if( input.value == 'email' ){
        group[input.key] = input.required ? 
          new FormControl(input.value || '',  [Validators.required, Validators.email] ) : 
          new FormControl(input.value || '',  Validators.email);
      }
      else if(input.key == 'createPassword'){
        group[input.key] = new FormControl
        (
          input.value, 
          [
            Validators.required, 
            Validators.minLength(input.minLength), 
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
