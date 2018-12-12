import { Component, OnInit, Input }         from '@angular/core';
import { ModalOptions }                     from 'mapfre-design-library';
import { ContactBillingRepService }         from './../../../../../_services/forms/contact-billing-rep/contact-billing-rep.service';


@Component({
  selector: 'app-billing-sidebar',
  templateUrl: './billing-sidebar.component.html',
  styleUrls: ['./billing-sidebar.component.scss']
})
export class BillingSidebarComponent implements OnInit {
  @Input() policy;
           billingRepModal:               ModalOptions;
           inputs:                        any[];
           hideModal;

  constructor(
    service:                              ContactBillingRepService
  ) { 
    this.inputs = service.getInputs();
    this.billingRepModal = new ModalOptions({
      additionalButtonClasses:            'link primary xsmall full',
      additionalClasses:                  'modal-dialog center-on-page modal-medium',
      animatePosition:                    'top',
      buttonCopy:                         'CONTACT_YOUR_BILLING_REP',
      modalId:                            'billingRepContact',
      modalTranslateCopy:                 'MODAL_BILLING_REP_HELP_TITLE',
      onLoad:                             false
    });
  }

  ngOnInit() {
  }

}
