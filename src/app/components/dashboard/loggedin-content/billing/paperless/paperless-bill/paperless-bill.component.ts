import { Component, OnInit }        from '@angular/core';
import { AlertService, ModalOptions } from 'mapfre-design-library';
import { PaperlessService }         from '../../../../../../_services/_iam/paperless.service';
import { PolicyDataService }        from '../../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-bill',
  templateUrl: './paperless-bill.component.html',
  styleUrls: ['./paperless-bill.component.scss']
})
export class PaperlessBillComponent implements OnInit {
  endEnrollOptionsModal:            ModalOptions;
  enrollOptionsModal:               ModalOptions;
  hideModal:                        boolean = false;
  policyInfo:                       any;
  user:                             any;

  constructor(
    private alertService:           AlertService,
    private policyDataService:      PolicyDataService,
    private paperlessService:       PaperlessService,
    private userService:            UserService
  ) { 
    this.endEnrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium cancel-enroll modal-dialog',
      additionalButtonClasses:      'red-text float-right align-middle no-padding no-margin flat',
      animatePosition:              'top',
      buttonCopy:                   'MODAL_E-POLICY-REMOVAL_TITLE',
      modalId:                      'endEnrollModal',
      howManyIconsUsed:             1,
      iconClasses:                  'far fa-times-circle',
      modalTranslateCopy:           'MODAL_E-BILL-REMOVAL_TITLE',
      screenReader:                 true,
      showIcons:                    true,
    });
    this.enrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium enroll modal-dialog',
      additionalButtonClasses:      'no-margin float-right btn mapfre waves-light primary ghost w-100',
      animatePosition:              'top',
      buttonCopy:                   'ENROLL',
      modalId:                      'enrollModal',
      modalTranslateCopy:           'MODAL_E-BILL-ENROLL_TITLE',
    });
  }

  cancellEnroll(policyid, email): void {
    this.paperlessService
      .cancelPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled EBill. It may take up to 2 days to process.`);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);

        }
      )
    ;
  }

  enroll(policyid, email): void {
    this.paperlessService
      .enrollPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in e-Bill. It may take up to 2 days to process.`);
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
    this.policyDataService.$policyDetails
    .subscribe( (policyInfo) => {
      this.policyInfo = policyInfo;
    });
  }

}
