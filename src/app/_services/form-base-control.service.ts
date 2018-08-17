import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase }     from '../_models/form-base';
import { RegExHelper }  from '../_helpers/regex-helper';

@Injectable()
export class FormBaseControlService {
  constructor(
    private regExHelper: RegExHelper
  ) { }

  matchPasswords(input: FormControl, group: FormGroup) {
    let password = input.value == group['createPassword'].value;
    return password ? null : { matchPasswords: true }
  }

  toFormGroup(inputs: FormBase<any>[] ) {
    let group:            any = {},
        createPasswordPattern = this.regExHelper.passwordRulesPattern['patternForDynamicForm'],
        emailPattern          = this.regExHelper.strictEmailPattern;

    inputs.forEach(input => {
      if( input.inputType == 'email' ){
        group[input.key] = input.required ? 
          new FormControl(input.value || '',  [Validators.required, Validators.pattern(emailPattern)] ) : 
          new FormControl(input.value || '',  Validators.pattern(emailPattern));
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
            Validators.maxLength(input.maxLength),
            Validators.minLength(input.minLength),
            Validators.pattern(createPasswordPattern),
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
