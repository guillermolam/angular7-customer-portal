import { Component, OnInit }        from '@angular/core';
import { AlertService, ModalOptions }             from 'mapfre-design-library';
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
  firstTime:                        boolean;
  hideModal:                        boolean = false;
  user:                             User;

  constructor(
    private alertService:           AlertService, 
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

  allEPayMethod(): boolean {
    return this.paperlessService.allEPayMethod();
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

  cancellEnroll(policyid, where): void {
    if ( where == 'e-policy' ) {
      this.paperlessService
      .cancelPaperlessEPolicy(policyid)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);

        });
    }
    else if ( where == 'e-pay' ) {
      this.paperlessService
      .cancelPaperlessEPay(policyid)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);

        });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .cancelPaperlessEBill(policyid)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);

        });
    }
  }

  enroll(policyid, where): void {
    if ( where == 'e-policy' ) {
      this.paperlessService
      .enrollPaperlessEPolicy(policyid)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in ${where}. It may take up to 2 days to process.`);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);
        });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .enrollPaperlessEBill(policyid)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in ${where}. It may take up to 2 days to process.`);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);
        });
    }
  }

  firstTimeCheck(): void {
    let firstTime,
        userData;

    this.userService.$user.subscribe( (data) => {
      userData = data;
    });
    for( let policyDetails of userData['policyDetails'] ) {
      const policyFlags = policyDetails['policyFlags'];
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
    firstTime = true;
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
    this.userService.$user.subscribe( (user) => {
      this.user = user;
    });

    this.firstTimeCheck();
    this.allEPayMethod();

    console.log(this.user)
  }

}
