import { Injectable } from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

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

