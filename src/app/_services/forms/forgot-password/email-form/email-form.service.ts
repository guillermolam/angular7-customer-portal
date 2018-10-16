import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

@Injectable()
export class EmailFormService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'sendEmail',
        label: 'EMAIL',
        required: true,
        type: 'email',
        validationMessageError: 'VALID_EMAIL_VALIDATION_MESSAGE',
      })
    ]
    return inputs;
  }
}

