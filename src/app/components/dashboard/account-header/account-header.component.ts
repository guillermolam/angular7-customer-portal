import { AuthenticationService } from './../../../_services/_iam/authentication-service.service';
import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { ModalOptions }           from 'mapfre-design-library';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {
  headerAccountModalOptions:      ModalOptions;
  hideModalOnRoute:               boolean = false;

  constructor(
    private router:               Router,
    private authService:          AuthenticationService
  ) {
    this.headerAccountModalOptions = new ModalOptions({
      additionalClasses:          'account modal-small',
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
    // if (event && activePath == currentUrl) { ---what was this for?
      this.hideModalOnRoute = !this.hideModalOnRoute;
    // }
  }

  logout() {
    this.authService.logout();
  }

  resetHideModal(event): void {
    this.hideModalOnRoute = !this.hideModalOnRoute;
  }

  ngOnInit() {
  }

}
