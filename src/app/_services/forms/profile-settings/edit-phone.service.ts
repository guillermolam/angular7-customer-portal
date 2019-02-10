import { UserDataService } from './../../data-services/user-data.service';
import { UserService } from './../../user.service';
import { BankAccountService } from './../../profile-settings/bank-account.service';
import { FakeAccountSettings } from '../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { Injectable } from '@angular/core';
import { FormBase, TextBox } from 'mapfre-design-library';
import { map } from 'rxjs/operators';

@Injectable()
export class EditPhoneService {

  phoneNumber: string;

  constructor(
    private userDataService: UserDataService
  ) { }

  getInputs(){

    return this.userDataService.$userData.pipe(map((userResponse)=>{
      this.phoneNumber = userResponse.userDetails.phone ? userResponse.userDetails.phone.number : '';
      const inputs: FormBase<any>[] = [
        new TextBox({
          additionalClasses:  'form-control profile-input-border',
          inputType:          'phone',
          value:              this.phoneNumber,
          key:                'accountPhone',
          minLength:           10,
          maxLength:           13,
          label:              'Phone',
          required:           true,
          type:               'tel',
          validationMessageError: 'Please enter valid phone number'
        })
      ];
  
    return inputs;
    }));
  }
}
