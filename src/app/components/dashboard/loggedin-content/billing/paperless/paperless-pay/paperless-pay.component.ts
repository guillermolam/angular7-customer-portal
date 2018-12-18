import { Component, OnInit, OnChanges }        from '@angular/core';
import { ModalOptions }             from 'mapfre-design-library';
import { PaperlessService }         from './../../../../../../_services/paperless.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-pay',
  templateUrl: './paperless-pay.component.html',
  styleUrls: ['./paperless-pay.component.scss']
})
export class PaperlessPayComponent implements OnInit, OnChanges {
  allEPay:                          boolean = false;
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

  allEPayMethod(): void {
    let all = false;

    for (let policyDetails of this.user['policyDetails']) {
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

   cancellEnroll(policyid): void {
    this.paperlessService
    .cancelPaperlessEPay(policyid);
  }

  enroll(policyid): void {
    this.paperlessService
    .enrollPaperlessEPay(policyid);
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
