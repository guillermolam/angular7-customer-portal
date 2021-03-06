import { Component, OnInit, Input }     from '@angular/core';
import { DomSanitizer, SafeUrl }        from '@angular/platform-browser';
import { FormGroup }                    from '@angular/forms';
import { GetGooglePlaceService }        from 'mapfre-design-library';
import * as isEqual                     from 'lodash.isequal';
import { ValidateAddressService } from '../../../../../../_services/change-address/validate-address.service';

@Component({
  selector: 'app-details-home',
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.scss']
})
export class DetailsHomeComponent implements OnInit {
  @Input()  policy:                     any;
  @Input()  policyIdInput:              number;
            address:                    string = 'address';
            agentStreet:                string;
            alertLoad:                  boolean = false;
            alerton:                    any;
            apt:                        string = 'apt';
            aptDiv:                     boolean;
            input:                      object;
            isItTheSameAddress:         boolean;
            message:                    string;
            messageType:                string;
            policyId:                   number;
            policyDetails:              any;
            sameMailingAddress:         boolean;
            showMessage:                boolean = false;
            state:                      string;
            updateMileage:              FormGroup;
            vehicles:                   object;

  constructor(
    private sanitizer:                  DomSanitizer,
    private googlePlaceService:         GetGooglePlaceService,
    private validateAddressService:     ValidateAddressService

  ) {
   }

   getMailingOrResidentialAddress(updateAddress){
    const address = {
      streetName:   updateAddress.streetName,
      city:         updateAddress.city,
      state:        updateAddress.stateCode,
      zipCode: {
        code:       updateAddress.zipCode.code
      }
    }
    this.validateAddressService.setAddress(address);
    this.googlePlaceService.updateAddress(address);
  }

  getAddress(a: string[]): SafeUrl {
    let address,
        safeUrl:                        SafeUrl;
    address =                           `${a[0].replace(/\s/g, '%20')}%20${a[1]}%20${a[2]}%20${a[3]}`;

    const google =                      `https://maps.google.com/maps?q=`,
          googleQuery =                 `&t=&z=13&ie=UTF8&iwloc=&output=embed`,
          url =                         `${google}${address}${googleQuery}`;

    safeUrl =                           this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }

  getApartmentAndState(data): void {
    if(data.property != undefined) {
      const streetAddress =               data.property[0].address.streetName;
      let   addressArray =                [];

      if (addressArray.some((x) => x == '|')) {
        addressArray =                    streetAddress.split('|');
        this.address =                    addressArray[0];
        this.apt =                        addressArray[1];
        this.aptDiv =                     true;
      }
      else {
        this.address =                    streetAddress;
        this.aptDiv =                     false;
      }
      /* else {
        addressArray =                    streetAddress.split(' ');
        this.address =                    `${addressArray[0]} ${addressArray[1]} ${addressArray[2]}`;
        if (addressArray[3] == 'apt' ) {
          this.apt =                      addressArray[4];
        }
        else {
          this.apt =                      addressArray[3];
        }
      }*/
    }
  }

  isAddressEqual(policyDetail) {
    let address;

    if (isEqual(policyDetail.mailingAddress, policyDetail.residentialAddress)) {
      address =                           true;
    }
    else {
      address =                           false;
    }
    this.isItTheSameAddress =             address;
  }

  showMe(e): void {
    this.showMessage =                    e;
  }

  ngOnInit() {
    this.getApartmentAndState(this.policy);
    this.isAddressEqual(this.policy);
    // This will need to be refactored.
    this.policyId =                       this.policyIdInput;
  }

}
