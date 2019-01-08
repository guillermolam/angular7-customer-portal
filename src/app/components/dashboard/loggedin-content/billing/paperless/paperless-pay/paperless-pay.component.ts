import { Component, OnInit,
  OnChanges }                       from '@angular/core';
import { AlertService, ModalOptions } from 'mapfre-design-library';
import { PaperlessService }         from '../../../../../../_services/_iam/paperless.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-pay',
  templateUrl: './paperless-pay.component.html',
  styleUrls: ['./paperless-pay.component.scss']
})
export class PaperlessPayComponent implements OnInit, OnChanges {
  endEnrollOptionsModal:            ModalOptions;
  enrollOptionsModal:               ModalOptions;
  hideModal:                        boolean = false;
  user:                             User;

  constructor(
    private alertService:           AlertService,
    private paperlessService:       PaperlessService,
    private userService:            UserService
  ) { 
    this.endEnrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium cancel-enroll modal-dialog',
      additionalButtonClasses:      'red-text float-right align-middle no-padding  flat no-margin',
      animatePosition:              'top',
      buttonCopy:                   'MODAL_E-POLICY-REMOVAL_TITLE',
      modalId:                      'endEnrollModal',
      howManyIconsUsed:             1,
      iconClasses:                  'far fa-times-circle',
      modalTranslateCopy:           'MODAL_E-PAY-REMOVAL_TITLE',
      screenReader:                 true,
      showIcons:                    true,
    });
    this.enrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium enroll modal-dialog',
      additionalButtonClasses:      'no-margin float-right btn mapfre waves-light primary ghost',
      animatePosition:              'top',
      buttonCopy:                   'ENROLL',
      modalId:                      'enrollModal',
      modalTranslateCopy:           'MODAL_E-PAY-ENROLL_TITLE',
    });
  }

  allEPayMethod(): boolean {
    return this.paperlessService.allEPayMethod();
  }

   cancellEnroll(policyid): void {
    this.paperlessService
    .cancelPaperlessEPay(policyid)
    .subscribe(
      (success) => {
        this.alertService.error(`You have canceled e-Pay. It may take up to 2 days to process.`);
      },
      (e) => {
        this.alertService.error(`There was a problem processing your request. Try again later`);

      });
  }

  hideModalAction(event): void {
    if (event) {
      this.hideModal = !this.hideModal;
    }
  }

  resetHideModal(event): void {
    this.hideModal = !this.hideModal;
  }

  ngOnInit() {
    this.userService.$user.subscribe( (user) => {
      this.user = user;
    });
    this.allEPayMethod();
  }

  ngOnChanges(): void {
    this.allEPayMethod();
  }

}
