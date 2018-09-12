import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { Observable }                     from 'rxjs';
import { switchMap }                      from 'rxjs/operators';

import { AddPolicyService }               from '../../../_services/forms/create-account/add-policy.service';
import { CreateNewPasswordFormService }   from '../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { EditPolicyService }              from '../../../_services/forms/create-account/edit-policy.service';
import { ModalOptions }                   from '../../../_models/modal-options';
import { User }                           from '../../../_models/user';
import { UserService }                    from '../../../_services/user.service';

@Component({
  selector: 'app-signup-process',
  templateUrl: './signup-process.component.html',
  styleUrls: ['./signup-process.component.scss']
})
export class SignupProcessComponent implements OnInit {
  addPolicy:                           any[];
  createNewPassword:                   any[];
  editPolicyInfo:                      any[];
  user:                                any; //need to use the user model
  whereInTheProcess:                   string;
  whereToFindModalOptions:             ModalOptions;

  constructor( 
    private activatedRoute:            ActivatedRoute,
    private userService:               UserService,
    editPolicyService:                 EditPolicyService,
    passwordService:                   CreateNewPasswordFormService,
    policyService:                     AddPolicyService,
  ) {
    this.addPolicy = policyService.getInputs();
    this.createNewPassword = passwordService.getInputs();
    this.editPolicyInfo = editPolicyService.getInputs();
    this.whereToFindModalOptions = new ModalOptions({
      additionalButtonClasses:        "flat link", 
			animatePosition:                "bottom", 
			buttonCopy:                     "MODAL_WHERE_CAN_I_LINK",
			modalId:                        "helpModal",
			modalTranslateCopy:             "MODAL_WHERE_CAN_I_TITLE",
			typeOfModal:                    "default",
		});
  }

  testingData(): void{
    this.user = {
      addPolicyToAccountAttempts:  1,
      firstName:                  'TestFirstName',
      middleName:                 'TestMiddleName',
      lastName:                   'TestLastName',
      email:                      'test@email.com',
      policynumbers:              123456,
      policyDetails:              [{
        policyNumber: 123456,
        policy: {
          effectiveDate: '12/12/2018',
          type: 'home',
        }
      },
      {
        policyNumber: 123456,
        policy: {
          effectiveDate: '12/12/2018',
          type: 'home',
        }
      }]
    };
    this.userService.updateUser(this.user);
  } 

  ngOnInit() {
    this.user = new User();

    this.userService.$user.subscribe((user) => {
      if(user.firstName == undefined){
        this.testingData();
      }
      else {
        this.user = user;
      }
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess = params['parm'];
    });

    console.log("userData " + this.whereInTheProcess, this.user);
  }

}
