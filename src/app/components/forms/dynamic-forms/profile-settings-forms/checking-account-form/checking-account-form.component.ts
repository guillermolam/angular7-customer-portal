import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { BankAccountService } from './../../../../../_services/profile-settings/bank-account.service';
import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CheckingAccountService } from '../../../../../_services/forms/profile-settings/checking-account.service';
import { FormBase, FormBaseControlService, AlertService } from 'mapfre-design-library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checking-account-form',
  templateUrl: './checking-account-form.component.html',
  styleUrls: ['./checking-account-form.component.scss']
})
export class CheckingAccountFormComponent implements OnInit {

  @Input() inputs: FormBase<any>[] = [];
           checkingAccountForm: FormGroup;
           confirmModal:        boolean;

  constructor(
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private alertService:             AlertService,
    private profileConfirmModalService: ProfileConfirmModalService,
    private bankAccountService: BankAccountService,
    private storageService: StorageServiceObservablesService
    ) { }

  ngOnInit() {
    this.checkingAccountForm = this.ipt.toFormGroup(this.inputs);
  }

  onSubmitAccountDetails(){

    const bankAccountDetails = this.createBankAccountObject();
    const email = this.storageService.getUserFromStorage();
    this.bankAccountService.addBankAccount(email,bankAccountDetails).subscribe((response)=>{
      this.alertService.success('Checking account information succesfully updated',true);
      this.router.navigate(['/profile']);
    }, (err)=>{
      //to do
    })
  }

  onCheckDirty(){
    
    this.profileConfirmModalService.$checkDirty.subscribe((value)=>{
      this.confirmModal = value;
    });
    this.profileConfirmModalService.onCheckDirty(this.checkingAccountForm);
    if(this.confirmModal===false){
      this.router.navigate(['/profile']);
    }
  }


  createBankAccountObject(){

      let bankAccount: any = {};
      bankAccount = {
        accountHolderName: this.checkingAccountForm.controls.bankAccountHolder.value,
        routingNumber: {
          digits: this.checkingAccountForm.controls.bankAccountRoutingNumber.value
        },
        accountNumber: {
          digits: this.checkingAccountForm.controls.bankAccountNumber.value
        },
        accountType: 'CHECKING',
        mailingAddress:
              {
                  streetName: this.checkingAccountForm.controls.changeAddress.value,
                  city: "",
                  state: "UNKNOWN",
                  zipCode: {
                      code: "02720"
                  }
              }

      };

      return bankAccount;
      // bankAccount.accountHolderName = this.checkingAccountForm.controls.bankAccountHolder.value;
      // bankAccount.routingNumber = this.checkingAccountForm.controls.bankAccountRoutingNumber.value;
      // bankAccount.accountNumber = this.checkingAccountForm.controls.bankAccountNumber.value;
      // bankAccount.mailingAddress.streetName = this.checkingAccountForm.controls.changeAddress.value;
      // bankAccount.accountType = 'CHECKING';
      // bankAccount.apartment = this.checkingAccountForm.controls.changeAddressAPT.value;
  }

}
