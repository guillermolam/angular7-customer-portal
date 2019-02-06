
import { Component, OnInit }          from '@angular/core';
import { ActivatedRoute, Router,
  Params }                            from '@angular/router';
import { ChangeAddressService }       from '../../../_services/forms/change-address/change-address.service';
import { GetGooglePlaceService }      from 'mapfre-design-library';

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
      private service: ChangeAddressService,
      private activatedRoute:           ActivatedRoute,
      private router:                   Router,
      private getGooglePlaceService:    GetGooglePlaceService
    ) {
    }


    getAddress(){
      
    }

  ngOnInit() {

    let streetAddress: any = [];
    this.getGooglePlaceService.$address.subscribe((address)=>{
    streetAddress = address.streetName.split('|');
    this.inputs = this.service.getInputs('',`${streetAddress[0]}, ${address.city}, ${address.state}, USA`,streetAddress[1] || '');
    });
    
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
