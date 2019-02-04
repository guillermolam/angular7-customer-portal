import { Component, OnInit, Input }     from '@angular/core';
import { DomSanitizer, SafeUrl }        from '@angular/platform-browser';
import { FormGroup, FormControl, Validators }
                                        from '@angular/forms';
import { ActivatedRoute, Params }       from '@angular/router';
import { GetGooglePlaceService }        from 'mapfre-design-library';
import { AuthenticationService }        from '../../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }            from '../../../../../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }         from '../../../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }
                                        from '../../../../../../_services/storage-service-observables/storage-service-observables.service';
import { WalletCardService }            from '../../../../../../_services/_iam/wallet-card.service';
import * as isEqual                     from 'lodash.isequal';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.scss']
})
export class DetailsCarComponent implements OnInit {
  @Input()  policy:                     any;
  @Input()  policyIdInput:              number;
            address:                    string = 'address';
            agentStreet:                string;
            alertLoad:                  boolean = false;
            alerton:                    any;
            apt:                        string = 'apt';
            errorClass:                 any = [];
            errorMessage:               any = [];
            input:                      object;
            isItTheSameAddress:         boolean;
            loading:                    boolean = false;
            legalCheckbox:              boolean = false;
            message:                    string;
            messageType:                string;
            policyId:                   number;
            policyDetails:              any;
            sameMailingAddress:         boolean;
            showMessage:                boolean = false;
            state:                      string;
            updateMileage:              FormGroup;
            vehicles:                   object;
            user:                       any;

  constructor(
    private activatedRoute:             ActivatedRoute,
    private authService:                AuthenticationService,
    private sanitizer:                  DomSanitizer,
    private storageService:             StorageServiceObservablesService,
    private policyDataService:          PolicyDataService,
    private policyDetailsService:       PolicyDetailsService,
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

  getMailingOrResidentialAddress(updateAddress){
    console.log(updateAddress);
    this.googlePlaceService.updateAddress(updateAddress);
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

  onSubmit(i, e): void {
    const policyInfo =                  this.policy,
          policyId =                    this.policyId,
          form =                        this.updateMileage;
    if (this.legalCheckbox) {
      this.updateMileageById( policyInfo.email.address, policyId, form );
    }
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

  updateMileageById( email, policyId, form ) {
    this.alertLoad =                    true;
    let successArray =                  [],
        VName =                         [];
    this.policy.vehicle.forEach((vehicleDetail, i) => {
      const formController =            form.controls.groups;
      let vehicleId =                   vehicleDetail.vehicleIdentificationNumber.Id,
          odometerReading =             vehicleDetail.odometerReading;

      if( formController.controls[`updateMileageInput_${i}`] === '' || formController.controls[`updateMileageInput_${i}`].value == odometerReading ) {
        this.errorMessage[i] = 'This vehicle was not updated.';
      }
      else if ( formController.controls[`updateMileageInput_${i}`].dirty ) {
        this.authService
        .updateMileage(email, policyId, vehicleId, formController.controls[`updateMileageInput_${i}`].value )
        .subscribe(
          (success) => {
            successArray.push(true);
          },
          (error) => {
            VName.push(vehicleDetail.vehicle);
            successArray.push(false);
          }
        );
      }
      else {
        this.errorMessage[i] = 'Please add your current mileage.';
        this.errorClass = true;
        return;
      }
    });

    setTimeout(() => {
      if (successArray.every((val, i, arr) => val == true)) {
        this.message =                `We\'ve updated you odemeters.`;
        this.messageType =            'success';
      }
      else if (successArray.every((val, i, arr) => val == false)) {
        this.message =                'There was a problem';
        this.messageType =            'error';
      }
      else {
        this.message =                `We could only update some of the odemeters. ${VName.join(', ')} had an issue`;
        this.messageType =            'default';
      }
      this.showMessage =              true;
      this.alertLoad =                false;
      setTimeout(() => {
        this.showMessage =            false;
        this.reSyncWithPolicyData();
      }, 2000);
    }, 500);
  }

  ngOnInit() {
    this.createUpdateMilageFormControls( this.policy );
    this.getApartmentAndState( this.policy );
    this.isAddressEqual( this.policy );
    this.policyId =                       this.policyIdInput;
    console.log(this.policyId)
  }

}
