import { Component, OnInit, Input }         from '@angular/core';
import { CookieService }                    from 'ngx-cookie-service';
import { ModalOptions }                     from 'mapfre-design-library';
import { User }                             from '../../../../_models/user';

@Component({
  selector: 'app-onboarding-wallet-modal',
  templateUrl: './onboarding-wallet-modal.component.html',
  styleUrls: ['./onboarding-wallet-modal.component.scss']
})
export class OnboardingWalletModalComponent implements OnInit {
    @Input() userData:                      User;
             hideModal:                     boolean = false;
             onClickEventWalletPass:        boolean = false;
             walletDownloadModalOptions:    ModalOptions;

  constructor(
    private _cookieService:                 CookieService,
  ) { 
    this.walletDownloadModalOptions = new ModalOptions({
      additionalButtonClasses:              'ghost primary xsmall full',
      animatePosition:                      'bottom',
      buttonCopy:                           'DOWNLOAD',
      modalId:                              'helpModal',
      modalTranslateCopy:                   'MODAL_WHERE_CAN_I_TITLE',
      typeOfModal:                          'wallet',
      onLoad:                               false
    });
  }

  goToWalletPassModal(event): void {
    if (event) {
      this.onClickEventWalletPass = !this.onClickEventWalletPass;
    }
  }

  hideModalAction(event): void {
    if (event) {
      this.hideModal = !this.hideModal;
    }
    setTimeout(() => {
      this.hideModal = false;
    }, 500);
  }

  ngOnInit() {
  }

}
