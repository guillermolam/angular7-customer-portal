import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

@Injectable({
  providedIn : 'root'
})
export class ChangeAddressService {
  getInputs(classes?:string, address?:string, apartment?:string) {
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: `form-control ${classes}`,
        inputType: 'address',
        key: 'changeAddress',
        label: 'ADDRESS',
        value: address,
        required: true,
        minLength: 1,
        maxLength: 150,
        type: 'text',
        validationMessageError: 'VALID_ADDRESS',
      }),
      new TextBox({
        additionalClasses: `form-control ${classes}`,
        inputType: 'text',
        key: 'changeAddressAPT',
        label: 'ADDRESS_APT',
        value: apartment,
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
