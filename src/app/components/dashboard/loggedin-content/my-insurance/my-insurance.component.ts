import { Component, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';
import { ModalOptions }               from 'mapfre-design-library';
import { UserInfoService }            from '../../../../_services/_userinformation/user-info.service';
import { User }                       from '../../../../_models/user';
import { UserService }                from '../../../../_services/user.service';
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { TestingDataService }         from '../../../../_helpers/testing-data.service';
import { StorageServiceObservablesService } from '../../../../_services/storage-service-observables/storage-service-observables.service';
// import { PolicyDetailsService } from '../../../../_services/my-insurance/policy-details.service';

@Component({
  selector: 'app-my-insurance',
  templateUrl: './my-insurance.component.html',
  styleUrls: ['./my-insurance.component.scss']
})
export class MyInsuranceComponent implements OnInit {
  hideOrShow:                         boolean = false;
  payNowModal:                        ModalOptions;
  user:                               User;
  policyResponse:                     any;
  billingResponse:                    any;

  constructor(
    private authenticationService: AuthenticationService,
    private router:                   Router,
    private userService:              UserService,
    // private userInfoService:       UserInfoService,
    private storageService:           StorageServiceObservablesService,
    // private policyDetailsService:  PolicyDetailsService
  ) {
    this.payNowModal =  new ModalOptions({
      additionalButtonClasses:        'ghost primary small pay-now-modal-button',
      additionalClasses:              'pay-now-modal  modal-medium modal-dialog center-on-page',
      buttonCopy:                     'PAY_NOW',
      modalId:                        'payNow',
      modalTranslateCopy:             'MODAL_MAKE_A_PAYMENT',
      size:                           'modal-medium',
      typeOfModal:                    'default'
    });
  }

  showMore(e): void {
    this.hideOrShow = !this.hideOrShow;
  }

  ngOnInit() {
   
  }
}
