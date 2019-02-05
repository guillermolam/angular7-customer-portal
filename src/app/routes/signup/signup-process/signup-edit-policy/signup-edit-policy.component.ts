import { Component, OnInit } from '@angular/core';
import { EditPolicyService } from '../../../../_services/forms/create-account/edit-policy.service';
import { ModalOptions } from 'mapfre-design-library';

@Component({
  selector: 'app-signup-edit-policy',
  templateUrl: './signup-edit-policy.component.html',
  styleUrls: ['./signup-edit-policy.component.scss']
})
export class SignupEditPolicyComponent implements OnInit {

  editPolicyInfo:                       any[];  
  whereToFindModalOptions:              ModalOptions;

  constructor(
    private  editPolicyService:                  EditPolicyService,
  ) { }

  ngOnInit() {
    this.editPolicyInfo = this.editPolicyService.getInputs();
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
