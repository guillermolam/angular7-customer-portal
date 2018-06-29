import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { FormBase }                   from '../../../_models/form-base';
import { FormBaseControlService }     from '../../../_services/form-base-control.service';

@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class SendEmailFormComponent implements OnInit {
  @Input() inputs:                FormBase<any>[] = [];
  sendEmailForgotPassword:        FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private ipt: FormBaseControlService
  ) {}

  ngOnInit() {
    this.sendEmailForgotPassword = this.ipt.toFormGroup(this.inputs);
  }
}
