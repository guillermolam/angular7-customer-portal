import { Component, OnInit }        from '@angular/core';
import { AlertService, ModalOptions } from 'mapfre-design-library';
import { BillingDataService }       from './../../../../../../_services/my-insurance/data-services/billing-data.service';
import { PaperlessService }         from '../../../../../../_services/_iam/paperless.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-time',
  templateUrl: './paperless-time.component.html',
  styleUrls: ['./paperless-time.component.scss']
})
export class PaperlessFirstTimeComponent implements OnInit {
  endEnrollOptionsModal:            ModalOptions;
  enrollOptionsModal:               ModalOptions;
  firstTime:                        boolean = false;
  hideModal:                        boolean;
  user:                             any;

  constructor(
    private alertService:           AlertService,
    private billingDataService:     BillingDataService,
    private paperlessService:       PaperlessService,
    private userService:            UserService
  ) {
    this.endEnrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium cancel-enroll modal-dialog',
      additionalButtonClasses:      'red-text float-right align-middle flat no-padding no-margin flat',
      animatePosition:              'top',
      buttonCopy:                   'MODAL_REMOVAL_TITLE',
      modalId:                      'endEnrollModal',
      howManyIconsUsed:             1,
      iconClasses:                  'far fa-times-circle',
      modalTranslateCopy:           'MODAL_REMOVAL_TITLE',
      screenReader:                 true,
      showIcons:                    true,
    });
    this.enrollOptionsModal = new ModalOptions({
      additionalClasses:            'modal-medium enroll modal-dialog',
      additionalButtonClasses:      'no-margin float-right btn mapfre waves-light primary ghost ',
      animatePosition:              'top',
      buttonCopy:                   'ENROLL',
      modalId:                      'enrollModal',
      modalTranslateCopy:           'MODAL_ENROLL_TITLE',
    });
   }

  allEPayMethod(userData): boolean {
    return this.paperlessService.checkIfEnrolledInEPay(userData);
  }

  anyEPay( policyDetail ): boolean {
    let payOrBill;
    if (policyDetail.policyFlags.isEft == true ) {
      payOrBill =                   true;
    }
    else {
      payOrBill =                   false;
    }
    return payOrBill;
  }

  cancel(policyid, where, email): void {
    if ( where == 'e-policy' ) {
      this.paperlessService
      .cancelPaperlessEPolicy(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.hideModal = !this.hideModal;
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Try again later ${error}`);
          this.hideModal = !this.hideModal;
        },
        () => {
          this.alertService.error(`test`);
        });
    }
    else if ( where == 'e-pay' ) {
      this.paperlessService
      .cancelPaperlessEPay(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.hideModal = !this.hideModal;
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Try again later ${error}`);
          this.hideModal = !this.hideModal;
        },
          () => {
            this.alertService.error(`test`);
          });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .cancelPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.hideModal = !this.hideModal;
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Try again later ${error}`);
          this.hideModal = !this.hideModal;

        },
        () => {
          this.alertService.error(`test`);
        });
    }
  }

  enroll(policyid, where, email): void {
    if ( where == 'e-policy' ) {
      this.paperlessService
      .enrollPaperlessEPolicy(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in ${where}. It may take up to 2 days to process.`);
          this.hideModal = !this.hideModal;
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);
        });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .enrollPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in ${where}. It may take up to 2 days to process.`);
          this.hideModal = !this.hideModal;
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);
        });
    }
  }

  firstTimeCheck(data): void {
    let firstTime;
    console.log('data', data)
    for ( let policyDetails of data ) {
      const policyFlags = policyDetails.policyFlags;
      if ( !policyFlags.isEbill && !policyFlags.isEbillElig  &&
          !policyFlags.isEdf  && !policyFlags.isEdfElig  &&
          !policyFlags.isEft  && !policyFlags.isEftEligi  )
      {
        firstTime = false;
      }
      else {
        firstTime = true;
        break;
      }
    }
    this.firstTime = firstTime;
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
    this.billingDataService.$billingDetails
    .subscribe( (billingResponse) => {
      console.log('billingDataService', billingResponse);
      if ( billingResponse === undefined) {
        this.userService.$user.subscribe( (user) => {
          this.user = user;
        });
      }
      else {
        this.user = billingResponse;
      }
      console.log('this.user', this.user);
      this.firstTimeCheck(this.user);
      this.allEPayMethod(this.user);
    });

    console.log('firstTime', this.firstTime);
  }

}
