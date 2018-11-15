import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CheckingAccountService } from '../../../../../_services/forms/profile-settings/checking-account.service';
import { FormBase, FormBaseControlService } from 'mapfre-design-library';

@Component({
  selector: 'app-checking-account-form',
  templateUrl: './checking-account-form.component.html',
  styleUrls: ['./checking-account-form.component.scss']
})
export class CheckingAccountFormComponent implements OnInit {

  @Input() inputs: FormBase<any>[] = [];
           checkingAccountForm: FormGroup;

  constructor(private ipt:                      FormBaseControlService) { }

  ngOnInit() {
    this.checkingAccountForm = this.ipt.toFormGroup(this.inputs);
  }

}
