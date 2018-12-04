
import { Injectable }           from '@angular/core';
import { FormBase, TextBox, CheckBox }    from 'mapfre-design-library';

@Injectable({
  providedIn: 'root'
})
export class NewPaymentService {
  getInputs() {
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'newPayment-accountName',
        label: 'ACCOUNT_HOLDERS_NAME',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'bank',
        key: 'newPayment-routingNumber',
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
        key: 'newPayment-accountNumber',
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
        key: 'newPayment-confirmAccountNumber',
        label: 'CONFIRM_BANK_ACCOUNT_NUMBER',
        required: true,
        type: 'tel',
        maxLength: 17,
        minLength: 4,
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'address',
        key: 'newPayment-mailingAddress',
        label: 'MAILING_ADDRESS',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'newPayment-aptNumber',
        label: 'APARTMENT',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new CheckBox({
        key: 'newPayment-storeInformation',
        inputType: 'checkbox',
        label: 'STORE_INFORMATION',
        required: false,
        type: 'checkbox',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'newPayment-checkNumber',
        label: 'CHECK_NUMBER_OPTIONAL',
        required: false,
        type: 'tel',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
    ];
    return inputs;
  }
}

