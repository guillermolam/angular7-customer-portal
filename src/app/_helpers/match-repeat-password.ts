import { AbstractControl } from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
      const password = AC.get('createPassword').value; // to get value in input tag
      const confirmPassword = AC.get('repeatPassword').value; // to get value in input tag
      if(password != '' && confirmPassword != '' ) {
        if(password != confirmPassword) {
            console.log('false');
            AC.get('repeatPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null;
        }
      }
  }
}
