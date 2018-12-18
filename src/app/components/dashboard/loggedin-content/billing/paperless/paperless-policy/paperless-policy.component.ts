import { Component, OnInit }        from '@angular/core';
import { ModalOptions }             from 'mapfre-design-library';
import { PaperlessService }         from './../../../../../../_services/paperless.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-policy',
  templateUrl: './paperless-policy.component.html',
  styleUrls: ['./paperless-policy.component.scss']
})
export class PaperlessPolicyComponent implements OnInit {
  endEnrollOptionsModal:            ModalOptions;
  enrollOptionsModal:               ModalOptions;
  user:                             User;

  constructor(
    private paperlessService:       PaperlessService,
    private userService:            UserService
  ) {
    this.endEnrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium cancel-enroll modal-dialog',
      additionalButtonClasses:      'red-text float-right align-middle no-padding no-margin',
      animatePosition:              'top',
      buttonCopy:                   'MODAL_E-POLICY-REMOVAL_TITLE',
      modalId:                      'endEnrollModal',
      howManyIconsUsed:             1,
      iconClasses:                  'far fa-times-circle',
      modalTranslateCopy:           'MODAL_E-POLICY-REMOVAL_TITLE',
      screenReader:                 true,
      showIcons:                    true,
    });
    this.enrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium enroll modal-dialog',
      additionalButtonClasses:      'no-margin float-right btn mapfre waves-light primary ghost w-100',
      animatePosition:              'top',
      buttonCopy:                   'ENROLL',
      modalId:                      'enrollModal',
      modalTranslateCopy:           'MODAL_E-POLICY-ENROLL_TITLE',
    });
  }
  
   cancellEnroll(policyid): void {
    this.paperlessService
    .cancelPaperlessEPolicy(policyid);
  }

  enroll(policyid, where): void {
    this.paperlessService
    .enrollPaperlessEPolicy(policyid);
  }

  ngOnInit() {
    this.userService.$user.subscribe( (user) => {
      this.user = user;
    });
  }

}
