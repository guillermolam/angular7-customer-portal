import { DomSanitizer, SafeUrl }          from '@angular/platform-browser';
import { Component, OnInit }              from '@angular/core';
import { FormGroup, FormControl, Validators }
                                          from '@angular/forms';
import { ActivatedRoute, Params }         from '@angular/router';
import { filter }                         from 'rxjs/operators';
import { GetGooglePlaceService }          from 'mapfre-design-library';
import { AuthenticationService }          from '../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }              from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }           from '../../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }
                                          from '../../../../../_services/storage-service-observables/storage-service-observables.service';
import { User }                           from '../../../../../_models/user';
import { UserService }                    from '../../../../../_services/user.service';
import { WalletCardService }              from '../../../../../_services/_iam/wallet-card.service';
import * as isEqual                       from 'lodash.isequal';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  address:                              string = 'address';
  agentStreet:                          string;
  alertLoad:                            boolean = false;
  alerton:                              any;
  apt:                                  string = 'apt';
  input:                                object;
  isItTheSameAddress:                   boolean;
  loading:                              boolean = false;
  legalCheckbox:                        boolean = false;
  message:                              string;
  messageType:                          string;
  policyId:                             number;
  policyDetails:                        any;
  sameMailingAddress:                   boolean;
  showMessage:                          boolean = false;
  state:                                string;
  updateMileage:                        FormGroup;
  vehicles:                             object;
  user:                                 any;

  constructor(
    private activatedRoute:             ActivatedRoute,
    private authService:                AuthenticationService,
    private sanitizer:                  DomSanitizer,
    private storageService:             StorageServiceObservablesService,
    private policyDataService:          PolicyDataService,
    private policyDetailsService:       PolicyDetailsService,
    private userService:                UserService,
    private walletCardService:          WalletCardService,
    private googlePlaceService:         GetGooglePlaceService
  ) {
   }

  createUpdateMilageFormControls(data): void {
    let milageControl =                 [];
    for ( let i = 0; i <= data.vehicle.length; i++ ) {
      if ( i != data.vehicle.length ) {
        milageControl.push(
          {
            name:                       `updateMileageInput_${i}`,
            control:                    new FormControl(null, [Validators.pattern('^[0-9]*$')] ),
          }
        );
      }
    }

    const formGroup: FormGroup =        new FormGroup({}),
          legalGroup: FormGroup =       new FormGroup({});
    legalGroup.addControl('legalCheckMark', new FormControl(null, []));

    milageControl.forEach((f) =>        formGroup.addControl(f.name, f.control));
    this.updateMileage =                new FormGroup({ 
      groups:                           formGroup,
      legal:                            legalGroup
    });
  }

  downloadWalletCard(email, policyid) {
    this.walletCardService
      .generatePkPass(email)
      .subscribe(
        (success) => {
          console.log('Successful download of wallet card');
        },
        (err) => {
          console.log('Err download of wallet card', err);
        }
      )
    ;
  }

  getMailingOrResidentialAddress(updateAddress){
    const address = {
      streetName: updateAddress.streetName,
      city: updateAddress.city,
      state: updateAddress.stateCode,
      zipCode: {
        code: updateAddress.zipCode.code
      }
    }
    console.log(address);
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
      }
      else {
        addressArray =                    streetAddress.split(' ');
        this.address =                    `${addressArray[0]} ${addressArray[1]} ${addressArray[2]}`;
        if (addressArray[3] == 'apt' ) {
          this.apt =                      addressArray[4];
        }
        else {
          this.apt =                      addressArray[3];
        }
      }
    }
  }

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  isAddressEqual(policyDetail) {
    let address;

    if (isEqual(policyDetail.mailingAddress, policyDetail.residentialAddress)) {
      address = true;
    }
    else {
      address = false;
    }
    this.isItTheSameAddress = address;
  }

  

  showMe(e): void {
    this.showMessage = e;
  }

  reSyncWithPolicyData(): void {
    this.policyDetailsService
    .getPolicyDetailsByEmail( this.storageService.getUserFromStorage())
    .subscribe(
      (success) => console.log('Loading Complete'),
    );
  }

 

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    });

    this.policyDataService.$policyDetails
    .subscribe((policyResponse) => {
      this.policyDetails =            policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
      this.loading =                  false;
    });

  }
}
