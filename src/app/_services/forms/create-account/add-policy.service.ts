import { Injectable } from '@angular/core';
import { FormBase }   from 'mapfre-design-library/lib/_models/form-base';
import { TextBox }    from 'mapfre-design-library/lib/_models/form-base-extends/text-box';

@Injectable({
  providedIn: 'root'
})
export class AddPolicyService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'addPolicy',
        label: 'POLICY_NUMBER',
        required: true,
        type: 'text',
        maxLength: 6,
        minLength: 5,
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
    ]
    return inputs;
  }
}

