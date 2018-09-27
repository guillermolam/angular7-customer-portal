import { TestBed, inject } from '@angular/core/testing';

import { AddPolicyService } from './add-policy.service';
import { TextBox } from '../../../_models/form-base-extends/text-box';
import { FormBase } from '../../../_models/form-base';

describe('AddPolicyService', () => {

  let addPolicyService: AddPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPolicyService]
    });

    addPolicyService = TestBed.get(AddPolicyService);

  });

  it('should return Formbase to add policy', ()=>{
    let formBase: FormBase<any>[] = [
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
    expect(typeof addPolicyService.getInputs()).toBe(typeof formBase);
    expect(addPolicyService.getInputs()).toEqual(formBase);

  });

});
