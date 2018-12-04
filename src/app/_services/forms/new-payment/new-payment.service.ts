
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
        inputType: 'number',
        key: 'newPayment-routingNumber',
        label: 'BANK_ROUTING_NUMBER',
        required: true,
        type: 'number',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'number',
        key: 'newPayment-accountNumber',
        label: 'ACCOUNT_NUMBER',
        required: true,
        type: 'number',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'number',
        key: 'newPayment-confirmAccountNumber',
        label: 'CONFIRM_BANK_ACCOUNT_NUMBER',
        required: true,
        type: 'number',
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
        inputType: 'number',
        key: 'newPayment-aptNumber',
        label: 'APARTMENT',
        required: true,
        type: 'number',
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
        inputType: 'number',
        key: 'newPayment-checkNumber',
        label: 'CHECK_NUMBER_OPTIONAL',
        required: false,
        type: 'number',
        validationMessageError: 'VALID_POLICY_VALIDATION_MESSAGE',
      }),
    ];
    return inputs;
  }
}

