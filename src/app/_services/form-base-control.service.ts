import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../_models/form-base';

@Injectable()
export class FormBaseControlService {
  constructor() { }

  toFormGroup(inputs: FormBase<any>[] ) {
    let group: any = {},
        validGroup: any = {};

    inputs.forEach(input => {
      if( input.value == 'email' ){
        group[input.key] = input.required ? 
          new FormControl(input.value || '',  [Validators.required, Validators.email] ) : 
          new FormControl(input.value || '',  Validators.email);
      }
      else if( input.minLength <= 1 ){
        group[input.key] = input.required ? 
          new FormControl(input.value || '',  [Validators.required, Validators.minLength(input.minLength)] ) : 
          new FormControl(input.value || '',  Validators.minLength(input.minLength));
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
