import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

@Injectable()
export class LoginService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'loginEmail',
        label: 'EMAIL',
        required: true,
        type: 'email',
        validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'password',
        key: 'loginPassword',
        label: 'PASSWORD',
        maxLength: 24,
        minLength: 1,
        required: true,
        showPasswordIcon: true,
        type: 'password'
      })
    ]
    return inputs;
  }
}
