import { Injectable } from '@angular/core';
import { FormBase, TextBox, TextArea }   from 'mapfre-design-library';

@Injectable({
  providedIn: 'root'
})
export class ContactBillingRepService {
  getInputs() {
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  `form-control`,
        inputType: 'email',
        key: 'contact_email',
        label: 'YOUR_EMAIL_ADDRESS',
        required: true,
        type: 'email',
        validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
      }),
      new TextArea({
        additionalClasses: `form-control md-textarea`,
        inputType: 'textarea',
        key: 'contact_message',
        label: 'YOUR_COMMENTS',
        required: true,
        minLength: 5,
        maxLength: 500,
        validationMessageError: 'VALID_MESSAGE',
      })
    ];
    return inputs;
  }
}
