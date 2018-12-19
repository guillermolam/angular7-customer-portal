import { Injectable }           from '@angular/core';
import { FormBase, TextBox,
  CheckBox, Select }            from 'mapfre-design-library';

@Injectable({
  providedIn: 'root'
})
export class EnrollEftEpayService {

  getInputs() {
    const inputs: FormBase<any>[] = [
      new Select({
        additionalClasses: 'form-control',
        inputType: 'select',
        key: 'enrollInEft_deductionDate',
        label: 'MONTHLY DEDUCTION DATE',
        required: true,
        options: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
        type: 'select',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'enrollInEft_accountName',
        label: 'ACCOUNT_HOLDERS_NAME',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'bank',
        key: 'enrollInEft_routingNumber',
        label: 'BANK_ROUTING_NUMBER',
        required: true,
        maxLength: 9,
        minLength: 9,
        type: 'tel',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'bank',
        key: 'enrollInEft_accountNumber',
        label: 'ACCOUNT_NUMBER',
        required: true,
        maxLength: 17,
        minLength: 4,
        type: 'tel',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'bank',
        key: 'enrollInEft_confirmAccountNumber',
        label: 'CONFIRM_BANK_ACCOUNT_NUMBER',
        required: true,
        type: 'tel',
        maxLength: 17,
        minLength: 4,
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new CheckBox({
        additionalClasses: 'form-control' ,
        key: 'enrollInEft_legal',
        inputType: 'checkbox',
        label: 'I have read and agreed to the terms below.',
        required: true,
        type: 'checkbox',
      }),
    ];
    return inputs;
  }
}
