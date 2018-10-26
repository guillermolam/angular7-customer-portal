import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { ModalOptions }           from 'mapfre-design-library';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';
import { AuthenticationService }  from '../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {
  user:                           User;
  headerAccountModalOptions:      ModalOptions;
  hideModalOnRoute:               boolean = false;

  constructor(
    private authService:          AuthenticationService,
    private router:               Router,
    private userService:          UserService
  ) {
    this.headerAccountModalOptions = new ModalOptions({
      additionalClasses:          'account',
      additionalButtonClasses:    'header-flat account',
      animatePosition:            'top',
      buttonCopy:                 'Account',
      modalId:                    'accountModal',
      iconClasses:                'far fa-user-circle',
      iconFamily:                 'font-awesome',
      modalTranslateCopy:         'Account',
      typeOfModal:                'header',
      screenReader:               true,
      showIcons:                  true,
    });
  }

  hideModalAction(event, activePath): void {
    const currentUrl = this.router.url;
    if (event && activePath == currentUrl) {
      this.hideModalOnRoute = !this.hideModalOnRoute;
    }
  }

  resetHideModal(event): void {
    this.hideModalOnRoute = !this.hideModalOnRoute;
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          this.user = {
            firstName: 'Testone',
            policyDetails: [{
              InsName1: 'TestTwo'
            }]
          };
        }
      }
    );
  }
}
