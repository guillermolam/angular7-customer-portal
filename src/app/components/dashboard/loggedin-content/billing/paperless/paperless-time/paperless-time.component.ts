import { Component, OnInit }        from '@angular/core';
import { ModalOptions }             from 'mapfre-design-library';
import { PaperlessService }         from './../../../../../../_services/paperless.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-time',
  templateUrl: './paperless-time.component.html',
  styleUrls: ['./paperless-time.component.scss']
})
export class PaperlessFirstTimeComponent implements OnInit {
  allEPay:                          boolean;
  endEnrollOptionsModal:            ModalOptions;
  enrollOptionsModal:               ModalOptions;
  firstTime:                        boolean;
  hideModal:                        boolean = false;
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

  allEPayMethod(): void {
    let all = false,
        userData;

    this.userService.$user.subscribe( (data) => {
      userData = data;
    });

    for (let policyDetails of userData['policyDetails']) {
      const policyFlags = policyDetails['policyFlags'];
      if ( !policyFlags.isEft ) {
        all = false;
        break;
      }
      else {
        all = true;
      }
    }

    this.allEPay = all;
    console.log('this.allEPay', this.allEPay);
  }

  anyEPay( policyDetail ): boolean {
    let payOrBill;
    if (policyDetail.policyFlags.isEft) {
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
      .cancelPaperlessEPolicy(policyid);
    }
    else if ( where == 'e-pay' ) {
      this.paperlessService
      .cancelPaperlessEPay(policyid);
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .cancelPaperlessEBill(policyid);
    }
  }

  enroll(policyid, where): void {
    if ( where == 'e-policy' ) {
      this.paperlessService
      .enrollPaperlessEPolicy(policyid);
    }
    else if ( where == 'e-pay' ) {
      this.paperlessService
      .enrollPaperlessEPay(policyid);
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .enrollPaperlessEBill(policyid);
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
