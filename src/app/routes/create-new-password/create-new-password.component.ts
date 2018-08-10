import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { FormBase }               from '../../_models/form-base';
import { ForgotPasswordService }  from '../../_services/forms/forgot-password/forgot-password-form/forgot-password.service';
import { AuthenticationService }      from '../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
  providers: [ ForgotPasswordService ]
})

export class CreateNewPasswordComponent implements OnInit {
  expiredLink:                    boolean = false;
  // waiting token api response  
  waitingForResponse:			  boolean = false;	
  paramSubmission:                any;
  passwordInputs:                 any[];
  successChangePassword:  boolean;
  
  constructor
  (
    private passwordService:      ForgotPasswordService,
    private activatedRoute:       ActivatedRoute,
    private authenticationService:	AuthenticationService
  ) {
    this.passwordInputs = passwordService.getInputs();
  }

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
    this.getTokenfromUrl()
  } 

  getTokenfromUrl():any{
  	
  	this.activatedRoute.queryParams.subscribe(params=>{
  		if(params)
  			return this.isTokenValid(params.token,params.email)

  	})
  	return false
  }

  isTokenValid(token,email):any{
  	
  	if(!token || !email)
  		return false
  	
  	this.waitingForResponse  = true
  	return 	this.authenticationService.tokenVerification(token,email).subscribe((data)=>{
  		this.expiredLink = false
  		this.waitingForResponse = false
  	},(error)=>{
  		this.expiredLink = true
  		this.waitingForResponse = false

  	}) 	
  }	
} 





