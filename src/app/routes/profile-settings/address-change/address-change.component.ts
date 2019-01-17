
import { Component, OnInit }          from '@angular/core';
import { ActivatedRoute, Router,
  Params }                            from '@angular/router';
import { ChangeAddressService }       from '../../../_services/forms/change-address/change-address.service';

@Component({
  selector: 'app-address-change',
  templateUrl: './address-change.component.html',
  styleUrls: ['./address-change.component.scss'],
  providers:    [ ChangeAddressService ]
})
export class AddressChangeComponent implements OnInit {

  inputs: any[];
    addressType:                    string;
    loading:                        boolean = false;
    typeOfAddress:                  string;
    policyId:                       string;
    constructor(
      service: ChangeAddressService,
      private activatedRoute:           ActivatedRoute,
      private router:                   Router,
    ) {
      this.inputs = service.getInputs();
    }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.addressType = params['address-type'];
      this.policyId         = params['policyid'];
    });

    if( this.addressType == 'mailing' ) {
      this.typeOfAddress = 'CHANGE_ADDRESS_MAILING';
    }
    else if( this.addressType == 'residential' ) {
      this.typeOfAddress = 'CHANGE_ADDRESS_RESIDENTIAL';
    }
  }

}
