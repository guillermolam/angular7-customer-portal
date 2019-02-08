import { Component, OnInit }      from '@angular/core';
import { ModalOptions }           from 'mapfre-design-library';
import { PolicyDataService }      from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { UserService }            from '../../../../../_services/user.service';

@Component({
  selector: 'app-my-insurance-main',
  templateUrl: './my-insurance-main.component.html',
  styleUrls: ['./my-insurance-main.component.scss']
})
export class MyInsuranceMainComponent implements OnInit {
  hideOrShow:                     boolean = false;
  payNowModal:                    ModalOptions;
  policyResponse:                 any;
  user:                           any;

  constructor(
    private userService:          UserService,
    private policyDataService:    PolicyDataService,
  ) {
    this.payNowModal =  new ModalOptions({
      additionalButtonClasses:    'ghost primary small pay-now-modal-button',
      additionalClasses:          'pay-now-modal  modal-medium modal-dialog center-on-page',
      buttonCopy:                 'PAY_NOW',
      modalId:                    'payNow',
      modalTranslateCopy:         'MODAL_MAKE_A_PAYMENT',
      size:                       'modal-medium',
      typeOfModal:                'default'
    });
  }

  showMore(e): void {
    this.hideOrShow =             !this.hideOrShow;
  }

  ngOnInit() {
    this.policyDataService.$policyDetails
    .subscribe((policyResponse) => {
      console.log('before sort',policyResponse)
      this.policyResponse =       policyResponse.sort((policy) => {
        const type =              policy.policyType.toUpperCase();
        if ( type == 'INACTIVE' ) {
          return 1;
        }
        else if ( type == 'CANCEL' ) {
          return 0;
        }
        else {
          return -1;
        }
      });
      console.log('after sort', this.policyResponse )
    });

    this.userService.$user
    .subscribe((user) => {
      this.user =                 user;
    });
  }
}
