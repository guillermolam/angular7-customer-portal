import { ChangeAddressService } from './../../../_services/forms/change-address/change-address.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-address-change',
  templateUrl: './address-change.component.html',
  styleUrls: ['./address-change.component.scss'],
  providers:    [ ChangeAddressService ]
})
export class AddressChangeComponent implements OnInit {

  inputs: any[];

  constructor(service: ChangeAddressService) {
    this.inputs = service.getInputs();
   }

  ngOnInit() {
  }

}
