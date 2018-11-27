import { ChangeAddressService } from './../change-address/change-address.service';
import { Injectable } from '@angular/core';
import { FormBase, TextBox } from 'mapfre-design-library';
import { FakeAccountSettings } from '../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';

@Injectable()
export class CheckingAccountService {

  checkingAccount: any;

  constructor(private changeAddressService: ChangeAddressService) { }

  getInputs(){

    // bankName: "PNC Financial Services Group, Inc.",
    // accountHolderName: "John",
    // routingNumber: 123456789,
    // accountNumber: 1111222233334444,
    // mailingAddress: "17 Lothian Road, Brighton, MA",
    // apartment: ""

      this.checkingAccount = FakeAccountSettings.user.checkingAccount;
    


    const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  'form-control profile-input-border',
        inputType:          'text',
        value:               this.checkingAccount.accountHolderName,
        key:                'bankAccountHolder',
        label:              'BANK_ACCOUNT_HOLDER_NAME',
        required:           true,
        type:               'text',
        validationMessageError: 'VALID_ACCOUNT_HOLDER_NAME_MESSAGE'
      }),
      new TextBox({
        additionalClasses:  'form-control profile-input-border',
        inputType:          'bank',
        key:                'bankAccountRoutingNumber',
        label:              'BANK_ROUTING_NUMBER',
        maxLength: 9,
        minLength: 9,
        required:           true,
        type:               'tel',
        value:              this.checkingAccount.routingNumber,
        validationMessageError: 'VALID_BANK_ROUTING_NUMBER'
      }),
      new TextBox({
        additionalClasses:  'form-control profile-input-border',
        inputType:          'bank',
        key:                'bankAccountNumber',
        label:              'BANK_ACCOUNT_NUMBER',
        maxLength: 17,
        minLength: 4,
        required:           true,
        type:               'tel',
        value:              this.checkingAccount.accountNumber,
        validationMessageError: 'VALID_BANK_ACCOUNT_NUMBER'
      }),
      ...this.changeAddressService.getInputs(
        'profile-input-border checking-account-address',
        this.checkingAccount.mailingAddress,
        this.checkingAccount.apartment
        )
    ];

    return inputs; 
  }

}
