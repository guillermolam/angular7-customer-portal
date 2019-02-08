import { FormGroup }                          from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router }                             from '@angular/router';
import { FormBase, FormBaseControlService, AlertService, GetGooglePlaceService, ValidateAddressService }
                                              from 'mapfre-design-library';
import { StorageServiceObservablesService }   from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { BankAccountService }                 from './../../../../../_services/profile-settings/bank-account.service';
import { ProfileConfirmModalService }         from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { AuthenticationService }              from '../../../../../_services/_iam/authentication-service.service';
import { CheckingAccountService }             from '../../../../../_services/forms/profile-settings/checking-account.service';
import { UserService }                        from '../../../../../_services/user.service';

@Component({
  selector: 'app-checking-account-form',
  templateUrl: './checking-account-form.component.html',
  styleUrls: ['./checking-account-form.component.scss']
})
export class CheckingAccountFormComponent implements OnInit, OnDestroy {

  @Input()  inputs:                   FormBase<any>[] = [];
            changeAddressError:       boolean;
            checkingAccountForm:      FormGroup;
            confirmModal:             boolean;
            mailingAddress:           any;
            addressAlert:             boolean;
            addressInput:             string;
          //  addressObservable: any;
          //  googlePlaceObservable:   any;

  constructor(
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private alertService:             AlertService,
    private profileConfirmModalService: ProfileConfirmModalService,
    private bankAccountService:       BankAccountService,
    private storageService:           StorageServiceObservablesService,
    private getGooglePlaceService:    GetGooglePlaceService,
    private authenticationService:    AuthenticationService,
    private userService:              UserService,
    private validateAddressService:   ValidateAddressService
    ) { }
  

  createBankAccountObject(){
    let bankAccount: any = {};
    if(this.checkingAccountForm.controls.changeAddressAPT.value) {
      this.mailingAddress.streetName = this.mailingAddress.streetName.split('|')[0] + '|' + this.checkingAccountForm.controls.changeAddressAPT.value; 
    }
    else {
      this.mailingAddress.streetName = this.mailingAddress.streetName.split('|')[0];
    }
    bankAccount = {
      accountHolderName: this.checkingAccountForm.controls.bankAccountHolder.value,
      routingNumber: {
        digits: this.checkingAccountForm.controls.bankAccountRoutingNumber.value
      },
      accountNumber: {
        digits: this.checkingAccountForm.controls.bankAccountNumber.value
      },
      accountType: 'CHECKING',
      mailingAddress: this.mailingAddress

    };

    return bankAccount;
  }

  onCheckDirty(){
    this.profileConfirmModalService.$checkDirty.subscribe((value) => {
      this.confirmModal = value;
    });
    this.profileConfirmModalService.onCheckDirty(this.checkingAccountForm);
    if(this.confirmModal === false) {
      this.router.navigate(['/profile']);
    }
  }

  onSubmitAccountDetails(){
    // Do not remove for future use
    // let validateAddress: boolean = true;
    // console.log(this.mailingAddress);
    // if(this.checkingAccountForm.controls.changeAddress.dirty){
    //   let address = this.checkingAccountForm.controls.changeAddress.value.split(',');
    //   validateAddress = address[0] === this.mailingAddress.streetName.split('|')[0] && address[1].trim() === this.mailingAddress.city.trim();
    // }
    // console.log(address[0] + " "+ this.mailingAddress.streetName.split('|')[0] "&&" address[1].trim() === this.mailingAddress.city.trim());
    // if(!validateAddress){
    //   this.alertService.error('Please select address from dropdown',false);
    // }else {
    const validateAddress = this.validateAddressService.validateAddress(this.addressInput, this.getGooglePlaceService);

    if (validateAddress) {
      const bankAccountDetails =  this.createBankAccountObject();
      const email =               this.storageService.getUserFromStorage();
      this.bankAccountService
        .addBankAccount(email, bankAccountDetails)
        .subscribe((response) => {
          this.authenticationService
          .getUserDetailsByEmail(this.storageService.getUserFromStorage())
          .subscribe(([userResponse, accountResponse]) => {
            this.userService.updateUser(
            {
              userDetails:          {...userResponse},
              bankAccountDetails:   {...accountResponse}
            }
            );
            this.alertService.success('CHECKING_ACCOUNT_INFO_UPDATED');
            this.router.navigate(['/profile']);
          });
      },
      (err) => {
        this.alertService.error(`ERROR_CHECKING_INFO`);
      });
      }
      else {
        this.changeAddressError = true;
        //this.alertService.error('PLEASE_ENTER_VALID_ADDRESS');
      }
  }

  setCheckingForm() {
    this.checkingAccountForm.patchValue({
      changeAddress: `${this.mailingAddress.streetName.split('|')[0]}, ${this.mailingAddress.city}, ${this.mailingAddress.stateCode}, USA`
    });
  }

  ngOnInit() {
    this.checkingAccountForm = this.ipt.toFormGroup(this.inputs);
    this.getGooglePlaceService.$address.subscribe((address) => {
      this.mailingAddress = address;
    });

    this.validateAddressService.$address
    .subscribe((resp) => {
        this.addressInput = resp === undefined ? this.mailingAddress : resp;
    });
    this.setCheckingForm();
  }

  ngOnDestroy(): void {
  }

}
