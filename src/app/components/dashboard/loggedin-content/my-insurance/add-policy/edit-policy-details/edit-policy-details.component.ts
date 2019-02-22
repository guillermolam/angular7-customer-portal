
import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { ModalOptions, User }           from 'mapfre-design-library';
import { EditPolicyService }            from './../../../../../../_services/forms/create-account/edit-policy.service';
import { AddPolicyDataService }         from './../../../../../../_services/signup-process-service/add-policy-data.service';

@Component({
  selector: 'app-edit-policy-details',
  templateUrl: './edit-policy-details.component.html',
  styleUrls: ['./edit-policy-details.component.scss']
})
export class EditPolicyDetailsComponent implements OnInit {

  editPolicyDetails:                   any[];
  whereToFindModalOptions:             ModalOptions;
  user:                                User  = {};

  constructor(
    private activatedRoute:            ActivatedRoute,
    private addPolicyDataService:      AddPolicyDataService,
    editPolicyService:                 EditPolicyService
  ) {
    this.editPolicyDetails = editPolicyService.getInputs();
    this.whereToFindModalOptions = new ModalOptions({
      additionalClasses:              'modal-small modal-dialog center-on-page',
      additionalButtonClasses:        'link-button small blue-link',
      animatePosition:                'bottom',
      buttonCopy:                     'MODAL_WHERE_CAN_I_LINK',
      modalId:                        'helpModal',
      modalTranslateCopy:             'MODAL_WHERE_CAN_I_TITLE',
      typeOfModal:                    'default',
    });

  }

  ngOnInit() {
    this.addPolicyDataService.$newPolicy.subscribe(
      (userAndPolicy) => {
        console.log(userAndPolicy);
        this.user =  userAndPolicy;
      }
    );
  }

}
