import { TestBed } from '@angular/core/testing';

import { EditPasswordService } from './edit-password.service';
import { TextBox, FormBase } from 'mapfre-design-library';

describe('EditPasswordService', () => {

  let editPasswordService: EditPasswordService;

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [EditPasswordService]
  });

  editPasswordService = TestBed.get(EditPasswordService);

});



fit('should return the password textbox', ()=>{
  const inputs = new TextBox({
    additionalClasses: 'form-control',
    inputType: 'password',
    key: 'currentPassword',
    label: 'PASSWORD',
    maxLength: 24,
    minLength: 1,
    required: true,
    showPasswordIcon: true,
    type: 'password'
  });

  const formBase = [inputs]

  expect(editPasswordService.getInputs('currentPassword')).toEqual(formBase);

});
});
