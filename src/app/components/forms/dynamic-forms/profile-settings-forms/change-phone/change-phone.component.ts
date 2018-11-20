import { Component, OnInit, Input } from '@angular/core';
import { FormBase, FormBaseControlService } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.component.html',
  styleUrls: ['./change-phone.component.scss']
})
export class ChangePhoneComponent implements OnInit {

@Input() inputs: FormBase<any>[] = [];
         phoneAccountForm: FormGroup;
         phoneNumber: string;

constructor(private ipt:                      FormBaseControlService) { }

ngOnInit() {
      this.phoneNumber = this.inputs[0].value;
      this.phoneAccountForm = this.ipt.toFormGroup(this.inputs);
}

}
