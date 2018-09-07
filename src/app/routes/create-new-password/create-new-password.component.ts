import { Component, OnInit, Input }       from '@angular/core';
import { ActivatedRoute }                 from '@angular/router';
import { AuthenticationService }          from '../../_services/_iam/authentication-service.service';
import { CreateNewPasswordFormService }   from '../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'], 
  providers: [ CreateNewPasswordFormService ]
})

export class CreateNewPasswordComponent implements OnInit {
  createNewPassword:              any[];
  expiredLink:                    boolean = true;
  paramSubmission:                any;
  successChangePassword:          boolean = false;
  tooManyAttempts:                boolean = false;
  waitingForResponse:             boolean = false;  // waiting token api response
  
  constructor( 
    service: CreateNewPasswordFormService,
  	private route: ActivatedRoute,
    private authenticationService:  AuthenticationService 
  ) {
      this.createNewPassword = service.getInputs();
      this.route = route
  }

  checkForConfirmation(event): void {
    if(event) this.successChangePassword = event;
  }

  getTokenfromUrl() {
    console.log("get token")
  	this.route.queryParams.subscribe(params => {
      if(params) {
        return this.isTokenValid(params.token, params.email);
      }
    });
  	//return false;
  }

  isTokenValid(token,email) {
    console.log("is token valid")
    if(!token || !email) return false;
  	
    this.waitingForResponse = true;

    return 	this.authenticationService
      .tokenVerification(token, email)
      .subscribe((data)=>{
        this.expiredLink = false
        this.waitingForResponse = false
      },(error)=>{
        this.expiredLink = true
        this.waitingForResponse = false
      }
    );
  }

  userConfirmation(event): void {
    this.successChangePassword = event;
  }

  ngOnInit(): void {
    this.getTokenfromUrl()
  }
}
