import { Injectable } from '@angular/core';
import { TextBox } from 'mapfre-design-library';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordFormService {

  getPasswordInputs(id: string, classes?: string) {
    const inputs = new TextBox({
      additionalClasses: `form-control ${classes}`,
      inputType: 'password',
      key: id,
      label: 'PASSWORD',
      maxLength: 24,
      minLength: 1,
      required: true,
      showPasswordIcon: true,
      type: 'password',
      validationMessageError: 'VALID_PASSWORD_VALIDATION_MESSAGE'
    });
    return inputs;
  }

  getEmailInputs(id: string, classes?: string) {
    const inputs =  new TextBox({
      additionalClasses:  `form-control ${classes}`,
      inputType: 'email',
      key: id,
      label: 'EMAIL',
      required: true,
      type: 'email',
      validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
    });
    return inputs;
  }

  getEmailConfirmation(id, classes?: string) {
    const inputs = new TextBox({
      additionalClasses:  `form-control ${classes}`,
      inputType: 'email',
      key: `confirmation_${id}`,
      label: 'CONFIRM_EMAIL',
      required: true,
      type: 'email',
      validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
    });
    return inputs;
  }
}
