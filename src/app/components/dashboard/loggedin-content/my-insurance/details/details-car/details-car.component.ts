import { Component, OnInit, Input }     from '@angular/core';
import { DomSanitizer, SafeUrl }        from '@angular/platform-browser';
import { FormGroup, FormControl, Validators }
                                        from '@angular/forms';
import { ActivatedRoute, Params }       from '@angular/router';
import { GetGooglePlaceService }        from 'mapfre-design-library';
import { MileageService }               from './../../../../../../_services/my-insurance/mileage.service';
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
    private mileageService:             MileageService,
    private sanitizer:                  DomSanitizer,
    private storageService:             StorageServiceObservablesService,
    private policyDataService:          PolicyDataService,
    private policyDetailsService:       PolicyDetailsService,
    private walletCardService:          WalletCardService,
    private googlePlaceService:         GetGooglePlaceService
  ) {
   }

   createUpdateMilageFormControls(data): void {
    const milageControl =                 [];
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
    const
      successArray =                    [],
      VName =                           [];

    // make sure that all of the arraies clear out. The is no reason to add values on a new
    // instantiante of the method, aka when someone reclicks the confirm button.

    this.errorMessage.length =            0;
    successArray.length =                 0;
    this.errorClass.length =              0;

    this.policy.vehicle.forEach((vehicleDetail, i) => {
      const
        formController =                  form.controls.groups,
        vehicleId =                       vehicleDetail.vehicleIdentificationNumber.Id,
        odometerReading =                 vehicleDetail.odometerReading;

      this.mileageService
        .updateMileage( email, policyId, vehicleId, formController.controls[`updateMileageInput_${i}`], odometerReading )
        .subscribe(
          (success) => {
            console.log(success)
            this.errorMessage.push( `element_${i}` );
            successArray.push( true );
            this.errorClass.push( false );
          },
          (error) => {
            console.log('error subscription ', error)
            if (error === 'Same Value') {
              this.errorMessage.push( `Please update your mileage element_${i}` );
              this.errorClass.push( true );
            }
            else if (error === `no ${error}`) {
              console.log(`no ${error}`);
              this.errorMessage.push( `There was a problem with updating your mileage  element_${i}` );
              successArray.push(false);
              this.errorClass.push(true);
            }
            else if (!error) {
              console.log(`no ${error}`);
              this.errorMessage.push( `This vehicle was not updated.  element_${i}` );
              successArray.push(false);
              this.errorClass.push(true);
            }
          }
        )
        .add( () => {
          this.alertLoad =              false;
          // this.reSyncWithPolicyData()
        });
    });

    console.log('mileage errorMessage', this.errorMessage, 'errorClass' ,this.errorClass, 'successArray', successArray);

    // Due to the subscription we want everything to have a chance to run.

    /*setTimeout(() => {
      if ( successArray.every((val, i, arr) => val === true) && successArray.length != 0 ) {
        this.message =                `We\'ve updated you odemeters.`;
        this.messageType =            'success';
        this.showMessage =            true;
       
      }

      setTimeout(() => {
        this.showMessage =            false;
        this.alertLoad =              false;
      }, 1000);
    }, 500); */
  }

  ngOnInit() {
    this.createUpdateMilageFormControls( this.policy );
    this.getApartmentAndState( this.policy );
    this.isAddressEqual( this.policy );
    this.policyId =                       this.policyIdInput;
  }

}
