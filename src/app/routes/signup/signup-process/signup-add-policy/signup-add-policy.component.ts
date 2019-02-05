import { ModalOptions } from 'mapfre-design-library';
import { Component, OnInit } from '@angular/core';
import { AddPolicyService } from '../../../../_services/forms/create-account/add-policy.service';

@Component({
  selector: 'app-signup-add-policy',
  templateUrl: './signup-add-policy.component.html',
  styleUrls: ['./signup-add-policy.component.scss']
})
export class SignupAddPolicyComponent implements OnInit {

  addPolicy:                            any[];
  whereToFindModalOptions:              ModalOptions;


  constructor(
    private policyService:                      AddPolicyService,
  ) { }

  ngOnInit() {
    this.addPolicy = this.policyService.getInputs();
    this.whereToFindModalOptions = new ModalOptions({
      additionalClasses:              'modal-small center-on-page modal-dialog', 
      additionalButtonClasses:        'no-padding-horizontal link-button blue-link font-weight normal-text text-capitalize small underline',
      animatePosition:                'bottom',
      buttonCopy:                     'MODAL_WHERE_CAN_I_LINK',
      modalId:                        'helpModal',
      modalTranslateCopy:             'MODAL_WHERE_CAN_I_TITLE',
      typeOfModal:                    'default',
    });
  }

}
