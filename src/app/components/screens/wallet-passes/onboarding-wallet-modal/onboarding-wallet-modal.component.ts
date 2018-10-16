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
      animatePosition:                      'bottom', 
      modalId:                              'helpModal',
      modalTranslateCopy:                   'MODAL_WHERE_CAN_I_TITLE',
      typeOfModal:                          'wallet',
      onLoad:                               true
    });
  }

  createCookie(time, type): void {
    this._cookieService.set('walletcard', type, time);
  }

  firstTimeLogInCheck(): void {
    this.getCookie();
    if(this.userData == undefined){
      this.walletDownloadModalOptions.onLoad = false;
    }
  }

  getCookie(): void {
    if ( this._cookieService.get('walletcard') == 'skipped' ||  this._cookieService.get('walletcard') == 'downloaded') {
      this.walletDownloadModalOptions.onLoad = false;
    }
    else {
      this.walletDownloadModalOptions.onLoad = true;
    }
  }

  goToWalletPassModal(event): void {
    if(event) this.onClickEventWalletPass = !this.onClickEventWalletPass;
  }

  hideModalAction(event): void {
    if(event) this.hideModal = !this.hideModal;
  }

  skipOnClick(): void {
    this.createCookie( 24, 'skipped' );
    this.hideModal = true;
  }

  ngOnInit() {
    this.firstTimeLogInCheck();
  }

}
