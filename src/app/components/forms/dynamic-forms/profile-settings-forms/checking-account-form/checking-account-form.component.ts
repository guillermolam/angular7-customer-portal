import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CheckingAccountService } from '../../../../../_services/forms/profile-settings/checking-account.service';
import { FormBase, FormBaseControlService, AlertService } from 'mapfre-design-library';
import { Router } from '@angular/router';
import { FakeAccountSettings } from '../../../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';

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
    private profileConfirmModalService: ProfileConfirmModalService
    ) { }

  ngOnInit() {
    this.checkingAccountForm = this.ipt.toFormGroup(this.inputs);
  }

  onSubmitAccountDetails(){
    this.alertService.success('Checking account information succesfully updated',true);
    FakeAccountSettings.user.checkingAccount.accountHolderName = this.checkingAccountForm.controls.bankAccountHolder.value;
    FakeAccountSettings.user.checkingAccount.routingNumber = this.checkingAccountForm.controls.bankAccountRoutingNumber.value;
    FakeAccountSettings.user.checkingAccount.accountNumber = this.checkingAccountForm.controls.bankAccountNumber.value;
    FakeAccountSettings.user.checkingAccount.mailingAddress = this.checkingAccountForm.controls.changeAddress.value;
    FakeAccountSettings.user.checkingAccount.apartment = this.checkingAccountForm.controls.changeAddressAPT.value;
    this.router.navigate(['/profile']);
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

}
