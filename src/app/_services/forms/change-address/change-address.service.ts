import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';

@Injectable()
export class ChangeAddressService {
  getInputs() {
    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'text',
        key: 'changeAddress',
        label: 'ADDRESS',
        required: true,
        type: 'text',
        validationMessageError: 'VALID_ADDRESS',
      })
    ];
    return inputs;
  }
}
