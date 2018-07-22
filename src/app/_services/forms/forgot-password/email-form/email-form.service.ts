import { Injectable }   from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBase }   from '../../../../_models/form-base';
import { TextBox }    from '../../../../_models/form-base-extends/text-box'; 

@Injectable()
export class EmailFormService {
  getInputs() {
    let inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses: 'form-control',
        inputType: 'email',
        key: 'sendEmail',
        label: 'Email',
        required: true,
        type: 'email',
      })
    ]
    return inputs;
  }
}

