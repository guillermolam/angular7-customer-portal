import { UserService } from './../../user.service';
import { Injectable }               from '@angular/core';
import { FormBase, TextBox, GetGooglePlaceService }        from 'mapfre-design-library';
import { ChangeAddressService }     from '../change-address/change-address.service';
import { FakeAccountSettings }      from '../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { map } from 'rxjs/operators';

@Injectable()
export class CheckingAccountService {

  checkingAccount: any;

  constructor(
    private changeAddressService: ChangeAddressService,
    private userService:            UserService,
    private getGooglePlaceService:  GetGooglePlaceService
    ) { }

  getInputs(){
   return this.userService.$user.pipe(map((userResponse)=>{
      let streetAddress: any = [];
      this.checkingAccount = userResponse.bankAccountDetails;
      if(this.checkingAccount.accountHolderName){
        this.getGooglePlaceService.updateAddress(this.checkingAccount.mailingAddress);
        streetAddress = this.checkingAccount.mailingAddress.streetName.split('|');
      }

      const inputs: FormBase<any>[] = [
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'text',
        value:               this.checkAccountDetails(this.checkingAccount)? '': this.checkingAccount.accountHolderName ,
        key:                'bankAccountHolder',
        label:              'Bank account holder\'s name',
        required:           true,
        type:               'text',
        validationMessageError: 'Please enter a valid name. You may have an extra space at the end of your name.'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'bank',
        key:                'bankAccountRoutingNumber',
        label:              'Bank routing number',
        maxLength:          9,
        minLength:          9,
        required:           true,
        type:               'tel',
        value:              this.checkAccountDetails(this.checkingAccount)? '': this.checkingAccount.routingNumber.digits,
        validationMessageError: 'Please enter valid routing number'
      }),
      new TextBox({
        additionalClasses:  'form-control',
        inputType:          'bank',
        key:                'bankAccountNumber',
        label:              'Bank account number',
        maxLength:          17,
        minLength:          4,
        required:           true,
        type:               'tel',
        value:              this.checkAccountDetails(this.checkingAccount)? '': this.checkingAccount.accountNumber.digits,        
        validationMessageError: 'Please enter valid account number'
      }),
      ...this.changeAddressService.getInputs(
        'checking-account-address',
        this.checkAccountDetails(this.checkingAccount)? '': `${streetAddress[0]}, ${this.checkingAccount.mailingAddress.city}, ${this.checkingAccount.mailingAddress.stateCode}, USA`,
        this.checkAccountDetails(this.checkingAccount)? '': `${streetAddress[1] || ''}`
        )
    ];

    return inputs;
    }))
  }

  checkAccountDetails(accountDetails){
    if(accountDetails.accountHolderName){
      return false;
    }else{
      return accountDetails;
    }
  }


}
