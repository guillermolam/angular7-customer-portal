import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

@Injectable({
  providedIn : 'root'
})
export class ChangeAddressService {
  getInputs() {
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'address',
        key: 'changeAddress',
        label: 'ADDRESS',
        required: true,
        minLength: 1,
        maxLength: 150,
        type: 'text',
        validationMessageError: 'VALID_ADDRESS',
      }),
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'changeAddressAPT',
        label: 'ADDRESS_APT',
        required: false,
        minLength: 1,
        maxLength: 50,
        type: 'text',
        validationMessageError: 'VALID_ADDRESS_APT',
      })
    ];
    return inputs;
  }
}
