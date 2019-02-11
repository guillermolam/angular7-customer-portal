import { Component, OnInit }        from '@angular/core';
import { concatMap }                from 'rxjs/operators';
import { Observable, of }           from 'rxjs';
import { AlertService, ModalOptions } from 'mapfre-design-library';
import { PolicyDataService }        from '../../../../../../_services/my-insurance/data-services/policy-data.service';
import { PaperlessService }         from '../../../../../../_services/_iam/paperless.service';
import { PolicyDetailsService }     from '../../../../../../_services/my-insurance/policy-details.service';
import { User }                     from './../../../../../../_models/user';
import { UserService }              from '../../../../../../_services/user.service';
import { TestingDataService }       from './../../../../../../_helpers/testing-data.service';
import { StorageServiceObservablesService } from './../../../../../../_services/storage-service-observables/storage-service-observables.service';

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
    private paperlessService:       PaperlessService,
    private policyDataService:      PolicyDataService,
    private policyDetailsService:   PolicyDetailsService,
    private userService:            UserService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private testingDataService:     TestingDataService
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

  cancel(policyid, where): void {
    const email = this.storageServiceObservablesService.getUserFromStorage();

    if ( where == 'e-policy' ) {
      this.paperlessService
      .cancelPaperlessEPolicy(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.` );
          this.reSync(email);
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Please try again later.`);
        });
    }
    else if ( where == 'e-pay' ) {
      this.paperlessService
      .cancelPaperlessEPay(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.reSync(email);
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Please try again later.`);
        });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .cancelPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.error(`You have canceled your ${where}. It may take up to 2 days to process.`);
          this.reSync(email);
        },
        (error) => {
          this.alertService.error(`There was a problem processing your request. Please try again later.`);
        });
    }
  }

  enroll(policyid, where): void {
    const email = this.storageServiceObservablesService.getUserFromStorage();

    if ( where == 'e-policy' ) {
      this.paperlessService
      .enrollPaperlessEPolicy(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in ${where}. It may take up to 2 days to process.`);
          this.reSync(email);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Please try again later.`);
        });
    }
    else if ( where == 'e-bill' ) {
      this.paperlessService
      .enrollPaperlessEBill(policyid, email)
      .subscribe(
        (success) => {
          this.alertService.success(`You have enrolled in ${where}. It may take up to 2 days to process.`);
          this.reSync(email);
        },
        (e) => {
          this.alertService.error(`There was a problem processing your request. Please try again later.`);
        });
    }
  }

  //pls do not remove
  
  // firstTimeCheck(data): void {
  //   console.log(data.length);
  //   let firstTime = true;
  //   console.log('data', data);
  //   for(let i=0;i<data.length;i++){
  //     console.log(i);
  //   }
  //   // const fta = [];
  //   data.forEach((policyDetails)=> { 
  //     const policyFlags = policyDetails.policyFlags;
  //     console.log(policyDetails);
  //     if ( policyFlags.isEbill === 'UNENROLLED' && policyFlags.isEdf === 'UNENROLLED'  && policyFlags.isEft === 'UNENROLLED' ) {
  //       firstTime = firstTime && true;
  //       console.log('called');
  //     }
  //     else {
  //       firstTime = firstTime && false;
  //     }
  //   });
  //   this.firstTime = firstTime;
  //   console.log(this.firstTime);
  // }

  hideModalAction(event): void {
    if (event) {
      this.hideModal = !this.hideModal;
    }
  }

  resetHideModal(event): void {
    this.hideModal = !this.hideModal;
  }

  reSync(email): void {
    this.loading = true;
    this.policyDataService.clear();
    this.policyDetailsService
      .getPolicyDetailsByEmail( email )
      .subscribe( () => { this.loading = false; });
  }

  ngOnInit() {
    this.loading = true;

    // this.userService.$user
    // .subscribe( (userInfo) => {
    //   this.user = userInfo;
    // });

    this.user = this.storageServiceObservablesService.getUserFromStorage();

    this.policyDetailsService
    .getPolicyDetailsByEmail(this.storageServiceObservablesService.getUserFromStorage())
    .subscribe( (policyInfo) => {
      this.policyInfo = policyInfo;
      // pls do not remove
      // this.firstTimeCheck(this.policyInfo);
      // this.allEPayMethod(this.policyInfo);
      this.loading = false;
    });

     
  }

}
