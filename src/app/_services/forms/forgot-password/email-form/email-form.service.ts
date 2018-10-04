import { Injectable }   from '@angular/core';
import { FormBase }   from 'mapfre-design-library/lib/_models/form-base';
import { TextBox }    from 'mapfre-design-library/lib/_models/form-base-extends/text-box';

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

