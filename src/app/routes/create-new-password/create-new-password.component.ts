import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { FormBase }               from '../../_models/form-base';
import { ForgotPasswordService }  from '../../_services/forms/forgot-password/forgot-password-form/forgot-password.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
  providers: [ ForgotPasswordService ]
})

export class CreateNewPasswordComponent implements OnInit {
  passwordInputs:         any[];
  successChangePassword:  boolean;
  paramsSub:              any;
 
  constructor(
    passwordService:        ForgotPasswordService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.passwordInputs = passwordService.getInputs();
  }

  userConfirmation(event): void{
    this.successChangePassword = event;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.paramsSub = params['temporaryPassword']
    );
    console.log(this.paramsSub);
  }    

 


    /*this.activatedRoute.paramMap
      .subscribe(params => {
        this.testingParm = params.testingParm;
        this.testingIdParm = params.testingIdParm;
        this.successChangePassword = params.successChangePassword;
      }
    );*/

    /*this.activatedRoute.params.subscribe((params: Params) => {
      this.sentEmail = params['sentEmail']
    });*/
    

}
