import { Component, OnInit }        from '@angular/core';
import { AlertService, ModalOptions } from 'mapfre-design-library';
import { BillingDataService }       from './../../../../../../_services/my-insurance/data-services/billing-data.service';
import { PaperlessService }         from '../../../../../../_services/_iam/paperless.service';
import { PolicyDetailsService }     from '../../../../../../_services/my-insurance/policy-details.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';

@Component({
  selector: 'app-paperless-time',
  templateUrl: './paperless-time.component.html',
  styleUrls: ['./paperless-time.component.scss']
})
export class PaperlessFirstTimeComponent implements OnInit {
  emailaddress:                     string;
  endEnrollOptionsModal:            ModalOptions;
  enrollOptionsModal:               ModalOptions;
  firstTime:                        boolean = false;
  hideModal:                        boolean;
  loading:                          boolean = true;
  policyInfo:                       any;
  user:                             any;

  constructor(
    private alertService:           AlertService,
    private billingDataService:     BillingDataService,
    private paperlessService:       PaperlessService,
    private policyDetailsService:   PolicyDetailsService,
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
          this.reQueryPolicyDetailService(email);
          this.hideModal = !this.hideModal;
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Try again later ${error}`);
          this.hideModal = !this.hideModal;
        });
    }
    else if ( where == 'e-pay' ) {
      this.paperlessService
      .cancelPaperlessEPay(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.reQueryPolicyDetailService(email);
          this.hideModal = !this.hideModal;
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Try again later ${error}`);
          this.hideModal = !this.hideModal;
        });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .cancelPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.reQueryPolicyDetailService(email);
          this.hideModal = !this.hideModal;
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Try again later ${error}`);
          this.hideModal = !this.hideModal;
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
          this.reQueryPolicyDetailService(email);
          this.hideModal =          !this.hideModal;
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
          this.reQueryPolicyDetailService(email);
          this.hideModal =            !this.hideModal;
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Try again later`);
          this.hideModal =          !this.hideModal;
        });
    }
  }

  firstTimeCheck(data): void {
    let firstTime, firstTimeArray = [];
    console.log('data', data)
    for ( let policyDetails of data ) {
      const policyFlags = policyDetails.policyFlags;
      if ( policyFlags.isEbill != 'UNENROLLED' && policyFlags.isEbillElig != 'UNENROLLED'  &&
          policyFlags.isEdf != 'UNENROLLED'  && policyFlags.isEdfElig != 'UNENROLLED'  &&
          policyFlags.isEft != 'UNENROLLED'  && policyFlags.isEftEligi != 'UNENROLLED'  )
      {
        firstTimeArray.push(false);
        firstTime = false;
      }
      else {
        firstTimeArray.push(true);
        firstTime = true;
        break;
      }
    }



    this.firstTime = false;
  }

  hideModalAction(event): void {
    if (event) {
      this.hideModal = !this.hideModal;
    }
  }

  resetHideModal(event): void {
    this.hideModal = !this.hideModal;
  }

  reQueryPolicyDetailService(email): void {
    this.policyDetailsService
      .getPolicyDetailsByEmail( email )
      .subscribe( () => { this.loading = false; });
  }

  ngOnInit() {
    this.loading = true;

    this.userService.$user
    .subscribe( (userInfo) => {
      console.log(userInfo);
      this.emailaddress = userInfo.userDetails.email.address;
    });

    this.billingDataService.$billingDetails
    .subscribe( (policyInfo) => {
      this.policyInfo = policyInfo;
      this.firstTimeCheck(this.user);
      this.allEPayMethod(this.user);
    });

    this.loading = false;
  }

}
