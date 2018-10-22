import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { ModalOptions }                   from 'mapfre-design-library';
import { AddPolicyService }               from '../../../_services/forms/create-account/add-policy.service';
import { CreateNewPasswordFormService }   from '../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { EditPolicyService }              from '../../../_services/forms/create-account/edit-policy.service';
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
  user:                                User  = {};
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
      additionalButtonClasses:        'flat normal-link small',
      animatePosition:                'bottom',
      buttonCopy:                     'MODAL_WHERE_CAN_I_LINK',
      modalId:                        'helpModal',
      modalTranslateCopy:             'MODAL_WHERE_CAN_I_TITLE',
      typeOfModal:                    'default',
    });
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      (user) => {
        this.user = user;
      }
    );
    this.activatedRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess = params['parm'];
    });
  }

}
