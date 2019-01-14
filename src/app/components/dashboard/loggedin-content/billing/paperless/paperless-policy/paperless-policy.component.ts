import { Component, OnInit }        from '@angular/core';
import { AlertService, ModalOptions } from 'mapfre-design-library';
import { PaperlessService }         from '../../../../../../_services/_iam/paperless.service';
import { BillingDataService }       from './../../../../../../_services/my-insurance/data-services/billing-data.service';
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
  hideModal:                        boolean = false;
  policyInfo:                       any;
  user:                             any;

  constructor(
    private alertService:           AlertService, 
    private billingDataService:     BillingDataService,
    private paperlessService:       PaperlessService,
    private userService:            UserService
  ) {
    this.endEnrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium cancel-enroll modal-dialog',
      additionalButtonClasses:      'red-text float-right align-middle flat no-padding no-margin',
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
      additionalButtonClasses:      'no-margin float-right btn mapfre waves-light primary ghost',
      animatePosition:              'top',
      buttonCopy:                   'ENROLL',
      modalId:                      'enrollModal',
      modalTranslateCopy:           'MODAL_E-POLICY-ENROLL_TITLE',
    });
  }

  cancellEnroll(policyid, email): void {
    this.paperlessService
    .cancelPaperlessEPolicy(policyid, email)
    .subscribe(
      (success) => {
        this.alertService.error(`You have canceled e-policy. It may take up to 2 days to process.`);
      },
      (e) => {
        this.alertService.error(`There was a problem processing your request. Try again later`);
      }
    );
  }

  enroll(policyid, email): void {
    this.paperlessService
    .enrollPaperlessEPolicy(policyid, email)
    .subscribe(
      (success) => {
        this.alertService.success(`You have enrolled in e-policy. It may take up to 2 days to process.`);
      },
      (e) => {
        this.alertService.error(`There was a problem processing your request. Try again later`);

      }
    );
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

    this.billingDataService.$billingDetails //need to change this to policyObservable
    .subscribe( (policyInfo) => {
      this.policyInfo = policyInfo;
    });
  }

}
