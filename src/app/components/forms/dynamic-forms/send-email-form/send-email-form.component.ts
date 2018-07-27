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
  emailPrefillParamater:            string;
  loading:                          boolean = false;
  returnUrl:                        string;
  passwordEmailForm:                FormGroup;
  sub: ActivatedRoute;
  @Output() emailAddressOuput:      EventEmitter<boolean> = new EventEmitter();

  isValid(event): boolean{
    return this.inputValidation = event === undefined ? false : event;
  }

  sendEmail(): void{
    let emailAddress = this.passwordEmailForm.controls.sendEmail.value;
    //insert backend service here. No matter what still have the bottom bit go through
    this.emailAddressOuput.emit(emailAddress);
  }
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ipt: FormBaseControlService,
    private router: Router
  ) {}

  ngOnInit() {
    this.passwordEmailForm = this.ipt.toFormGroup(this.inputs); 

    this.activatedRoute.queryParams
      .subscribe(params => {
        this.emailPrefillParamater = params['emailPrefill'] || '';
      }
    );
    this.passwordEmailForm.controls.sendEmail.setValue( this.emailPrefillParamater );
  }
  
}
