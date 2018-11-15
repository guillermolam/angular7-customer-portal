import { Injectable } from '@angular/core';
import { TextBox } from 'mapfre-design-library';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordFormService {

  getPasswordInputs(id: string){
    const inputs = new TextBox({
      additionalClasses: 'form-control',
      inputType: 'password',
      key: id,
      label: 'PASSWORD',
      maxLength: 24,
      minLength: 1,
      required: true,
      showPasswordIcon: true,
      type: 'password'
    });
    return inputs;
  }

  getEmailInputs(id: string){
    const inputs =  new TextBox({
      additionalClasses: 'form-control',
      inputType: 'email',
      key: id,
      label: 'EMAIL',
      required: true,
      type: 'email',
      validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
    });
    return inputs;
  }

  
}
