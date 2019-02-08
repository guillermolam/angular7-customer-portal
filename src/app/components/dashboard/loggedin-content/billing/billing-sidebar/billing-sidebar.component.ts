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

  constructor() {}

  ngOnInit() {

  }

}
