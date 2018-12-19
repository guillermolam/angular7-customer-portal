
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { EditPolicyService } from './../../../../../../_services/forms/create-account/edit-policy.service';
import { ModalOptions, User } from 'mapfre-design-library';
import { UserService } from './../../../../../../_services/user.service';
import { FakeAccountResponse } from './../../../../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';


@Component({
  selector: 'app-edit-policy-details',
  templateUrl: './edit-policy-details.component.html',
  styleUrls: ['./edit-policy-details.component.scss']
})
export class EditPolicyDetailsComponent implements OnInit {

  editPolicyDetails:                      any[];
  whereToFindModalOptions:             ModalOptions;
  user:                                User  = {};

  constructor(
    private activatedRoute:            ActivatedRoute,
    private userService:               UserService,
    editPolicyService:                 EditPolicyService
  ) {
    this.editPolicyDetails = editPolicyService.getInputs();
    this.whereToFindModalOptions = new ModalOptions({
      additionalButtonClasses:        'flat link-button normal-link small',
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
        this.user =  FakeAccountResponse.getUserData();;
      }
    );
  }

}