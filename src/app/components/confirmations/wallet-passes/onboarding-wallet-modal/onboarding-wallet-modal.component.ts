import { Component, OnInit, Input }         from '@angular/core';
import { ModalOptions }                     from '../../../../_models/modal-options';
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
      
    ) { 
      this.walletDownloadModalOptions = new ModalOptions({
        animatePosition:                    'bottom', 
        modalId:                            'helpModal',
        modalTranslateCopy:                 'MODAL_WHERE_CAN_I_TITLE',
        typeOfModal:                        'wallet',
        onLoad:                             true
      });
    }

  goToWalletPassModal(event): void {
    if(event) this.onClickEventWalletPass = !this.onClickEventWalletPass;
  }

  hideModalAction(event): void {
    if(event) this.hideModal = !this.hideModal;
  }

  ngOnInit() {
   // console.log('userData',this.userData);
  }

}
