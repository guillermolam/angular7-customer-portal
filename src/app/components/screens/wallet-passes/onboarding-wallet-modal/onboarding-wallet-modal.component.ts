import { Component, OnInit, Input }         from '@angular/core';
import { CookieService }                    from 'ngx-cookie-service';
import { ModalOptions }                     from 'mapfre-design-library/lib/_models/modal-options';
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

  firstTimeLogInCheck(): void {
    this.getCookie();
  }

  getCookie(): void {
    if ( this._cookieService.get('walletcard') == 'skipped' ||  this._cookieService.get('walletcard') == 'downloaded') {
      this.walletDownloadModalOptions.onLoad = false;
    }
  }

  goToWalletPassModal(event): void {
    if(event) this.onClickEventWalletPass = !this.onClickEventWalletPass;
  }

  hideModalAction(event): void {
    if(event) this.hideModal = !this.hideModal;
  }

  ngOnInit() {
   // console.log('userData',this.userData);
   this.firstTimeLogInCheck();
  }

}
