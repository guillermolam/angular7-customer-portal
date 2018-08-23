import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { Observable }                     from 'rxjs';
import { switchMap }                      from 'rxjs/operators';

import { AddPolicyService }               from '../../../_services/forms/create-account/add-policy.service';
import { CreateNewPasswordFormService }   from '../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
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
  user:                                User;
  whereInTheProcess:                   string;
  whereToFindModalOptions:             ModalOptions;

  constructor( 
    private activatedRoute:            ActivatedRoute,
    private userData:                  UserService,
    passwordService:                   CreateNewPasswordFormService,
    policyService:                     AddPolicyService,
  ) {
    this.addPolicy = policyService.getInputs();
    this.createNewPassword = passwordService.getInputs();
    this.whereToFindModalOptions = new ModalOptions({
      additionalButtonClasses:        "flat link small", 
			animatePosition:                "bottom", 
			buttonCopy:                     "MODAL_WHERE_CAN_I_TITLE",
			modalId:                        "helpModal",
			modalTranslateCopy:             "MODAL_WHERE_CAN_I_TITLE",
			typeOfModal:                    "default",
		});
  }

  ngOnInit() {
    this.user = new User();
    this.userData.$user.subscribe((user) => {
      this.user = user;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess = params['parm'];
    });
  }

}
