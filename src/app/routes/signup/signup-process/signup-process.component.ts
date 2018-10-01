import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
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
      additionalButtonClasses:        "flat normal-link", 
			animatePosition:                "bottom", 
			buttonCopy:                     "MODAL_WHERE_CAN_I_LINK",
			modalId:                        "helpModal",
			modalTranslateCopy:             "MODAL_WHERE_CAN_I_TITLE",
			typeOfModal:                    "default",
		});
  }

  testingData(): User {
    //This object is for development use. And will be taken out
    let object = {
      addPolicyAttempts:          3,
      firstName:                  'TestFirstName',
      middleName:                 'TM',
      lastName:                   'TestLastName',
      email:                      'testUpdate@email.com',
      password:                   'abcd12D!',
      policyDetails: [{
        InsName1:                 null,
        effDate:                  '12/12/2018',
        expDate:                  '12/12/2018',
        policynumbers:             { policynumber: 'BB0490' },
        policyStatus:             'cancelled',
        policyType:               'home',
        status:                   null,
      },
      {
        InsName1:                 null,
        effDate:                  '12/12/2018',
        expDate:                  '12/12/2018',
        policynumbers:             { policynumber: '120490' },
        policyStatus:             'cancelled',
        policyType:               'auto',
        status:                   null, 
      }]
    };
    return object;
  }

  ngOnInit() {
    
    this.userService.$user.subscribe(
      user => {
        this.user = user;
      }
    );
    
    this.user = this.testingData();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess = params['parm'];
    });
  }

}
