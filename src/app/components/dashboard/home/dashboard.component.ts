import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { ModalOptions }           from 'mapfre-design-library';
import { UserInfoService }        from './../../../_services/_userinformation/user-info.service';
import { User }                   from '../../../_models/user';
import { UserService }            from '../../../_services/user.service';
import { AuthenticationService }  from '../../../_services/_iam/authentication-service.service';
import { TestingDataService }     from './../../../_helpers/testing-data.service';
import { StorageServiceObservablesService } from '../../../_services/storage-service-observables/storage-service-observables.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  hideOrShow:                     boolean = false;
  payNowModal:                    ModalOptions;
  user:                           User;

  constructor(
    private authenticationService: AuthenticationService,
    private router:               Router,
    private userService:          UserService,
    private testingData:          TestingDataService,
    private userInfoService:      UserInfoService,
    private storageService:       StorageServiceObservablesService
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
    // When logging in go a verify user
    // We will need this once the new endpoints are set.
    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          if (localStorage.getItem('access_token')) {
            this.authenticationService
            .verifyUser(this.user)
            .subscribe(
              (info: any) => {
                console.log(info);
                this.user = {
                  firstName: info[0].insurer['firstName'],
                  middleName: info[0].insurer['middleName'],
                  lastName: info[0].insurer['lastName'],
                  policyDetails: info
                };
                this.userService.updateUser(this.user);
              },
              (err) => {
                console.log('login success but verifyuser err', err);
              }
            );
          }
          else {
            this.user = this.testingData.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );


    this.userInfoService
      .policyByEmail(this.storageService.getUserFromStorage())
      .subscribe((response) => {
        console.log(response);
      }
    );

    this.userInfoService
      .getCurrentBillByPolicy('BBWQKQ')
      .subscribe((response) => {
        console.log(response);
      }
    );
  }
}
