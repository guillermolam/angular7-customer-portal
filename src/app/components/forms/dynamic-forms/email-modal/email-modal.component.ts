import { Component, OnInit, Input }         from '@angular/core';
import { ModalOptions }                     from 'mapfre-design-library';
import { ContactBillingRepService }         from '../../../../_services/forms/contact-billing-rep/contact-billing-rep.service';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.scss']
})
export class EmailModalComponent implements OnInit {

  @Input() policy;
           billingRepModal:               ModalOptions;
           inputs:                        any[];
           hideModal:                     boolean;

  constructor(
    service:                              ContactBillingRepService
  ) {
    this.inputs = service.getInputs();
    this.billingRepModal = new ModalOptions({
      additionalButtonClasses:            'link-button blue-link heavy-link xsmall full no-margin',
      additionalClasses:                  'modal-dialog center-on-page modal-medium',
      animatePosition:                    'top',
      buttonCopy:                         'CONTACT_YOUR_BILLING_REP',
      modalId:                            'billingRepContact',
      modalTranslateCopy:                 'MODAL_BILLING_REP_HELP_TITLE',
      onLoad:                             false
    });
  }

  hideModalOnCanel(event): void {
    this.hideModal = !this.hideModal;
    setTimeout(() => {
      this.hideModal = !this.hideModal;
    },
      500
    );
  }

  ngOnInit() {
  }

}

