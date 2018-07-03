import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormBase }                   from '../../../../_models/form-base';
import { FormBaseControlService }     from '../../../../_services/form-base-control.service';

@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class SendEmailFormComponent implements OnInit {
  @Input() inputs:                  FormBase<any>[] = [];
  @Input() inputValidation:         boolean;
  loading:                          boolean = false;
  returnUrl:                        string;
  passwordEmailForm:                FormGroup;
  @Output() emailAddressOuput:      EventEmitter<string> = new EventEmitter();

  isValid(event): boolean{
    return this.inputValidation = event === undefined ? false : event;
  }

  sendEmail(e): void{
    let emailAddress = this.passwordEmailForm.controls['sendEmail'].value;
    this.emailAddressOuput.emit(emailAddress);
  }
  
  constructor(
    private fb: FormBuilder,
    private ipt: FormBaseControlService,
    private router: Router
  ) {}

  ngOnInit() {
   this.passwordEmailForm = this.ipt.toFormGroup(this.inputs); 
  }
}
