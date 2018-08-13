import { Component, OnInit, Input } from '@angular/core';

import { CreateNewPasswordFormService }  from '../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'], 
  providers: [ CreateNewPasswordFormService ]
})

export class CreateNewPasswordComponent implements OnInit {
  createNewPassword:              any[];
  expiredLink:                    boolean = false;
  paramSubmission:                any;
  successChangePassword:          boolean = false;
  tooManyAttempts:                boolean = false;
  
  constructor( service: CreateNewPasswordFormService ) {
    this.createNewPassword = service.getInputs();
  }

  checkForConfirmation(event): void{
    if(event) this.successChangePassword = event;
  }

  /*
  checkForExpiredPassword(param): void 
  {
    let testingParam = 'testingforexpireparam';
    //insert service
    if(param == testingParam) {
      this.expiredLink = false;
    }
  }

  userConfirmation(event): void 
  {
    this.successChangePassword = event;
  }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe
    (
      params => [
        this.paramSubmission = params['temporaryPassword']
      ]
    );
    this.checkForExpiredPassword(this.paramSubmission) 
  } 
  */ 
 ngOnInit(){
  
 }      
}
