import { ProfileConfirmModalService } from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { ModalOptions } from 'mapfre-design-library';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-confirm-modal',
  templateUrl: './profile-confirm-modal.component.html',
  styleUrls: ['./profile-confirm-modal.component.scss']
})
export class ProfileConfirmModalComponent implements OnInit {

  @Input()  toDo:                           string;
            profileAccountModalOptions:      ModalOptions;
            hideModalOnRoute:               boolean = false;
   

  constructor(
    private router: Router,
    private profileConfirmModalService: ProfileConfirmModalService
  ) { 

    this.profileAccountModalOptions = new ModalOptions({
      additionalClasses:              'modal-small modal-dialog center-on-page confirm-modal',
      // additionalButtonClasses:    'header-flat account',
      animatePosition:            'top',
      onLoad: true,
    // buttonCopy:                 'Account',
      modalId:                    'accountModal',
      iconClasses:                'far fa-user-circle',
      iconFamily:                 'font-awesome',
      modalTranslateCopy:         'Please Confirm',
      typeOfModal:                'accountConfirm',
      screenReader:               true,
      showIcons:                  true,
    });

  }


  resetHideModal(event): void {
    
    this.profileConfirmModalService.onRestoreDefault();
    this.hideModalOnRoute = !this.hideModalOnRoute;
  }

  onRemoveCheckingAccount(removeAccount: string){
    this.hideModalOnRoute = this.profileConfirmModalService.onRemoveCheckingAccount(removeAccount);
  }

  onClickBack(onclick: string){
    this.hideModalOnRoute = this.profileConfirmModalService.onClickBack(onclick);
  }


  ngOnInit() {
  }

}
