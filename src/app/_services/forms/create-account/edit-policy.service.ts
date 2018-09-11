import { Injectable } from '@angular/core';
import { FormBase }   from '../../../_models/form-base';
import { TextBox }    from '../../../_models/form-base-extends/text-box'; 

@Injectable({
  providedIn: 'root'
})
export class EditPolicyService {

  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'editFirst_name',
        label: 'FIRST_NAME',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_NAME_VALIDATION_MESSAGE',
        userSubscription: 'firstName'
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'editMI_name',
        label: 'MIDDLE_INITIAL',
        required: false,
        type: 'text',
        validationMessageError: 'VALID_NAME_VALIDATION_MESSAGE',
        userSubscription: 'middleName'
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'editLast_name',
        label: 'LAST_NAME',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_NAME_VALIDATION_MESSAGE',
        userSubscription: 'lastName'
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'editPolicyNumber',
        label: 'POLICY_NUMBER',
        required: true,
        type: 'text',
        maxLength: 6,
        minLength: 5,
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
        userSubscription: 'policynumbers'
      }),
    ]
    return inputs;
  }
}
