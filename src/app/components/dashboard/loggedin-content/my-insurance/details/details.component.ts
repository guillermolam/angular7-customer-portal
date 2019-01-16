import { DomSanitizer, SafeUrl }            from '@angular/platform-browser';
import { Component, OnInit }                from '@angular/core';
import { FormGroup, FormControl, Validators }           
                                            from '@angular/forms';
import { ActivatedRoute, Params }           from '@angular/router';
import { filter }                           from 'rxjs/operators';
import { AlertService }                     from 'mapfre-design-library';
import { AuthenticationService }            from '../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }                from '../../../../../_services/my-insurance/data-services/policy-data.service';
import { User }                             from '../../../../../_models/user';
import { UserService }                      from '../../../../../_services/user.service';
import { WalletCardService }                from '../../../../../_services/_iam/wallet-card.service';
import * as isEqual from 'lodash.isequal';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  alertLoad:                              boolean = false;
  alerton:                                any;
  input:                                  object;
  loading:                                boolean = false;
  legalCheckbox:                          boolean = false;
  message:                                string;
  messageType:                            string;
  policyId:                               number;
  user:                                   User;
  showMessage:                            boolean = false;
  updateMileage:                          FormGroup;
  vehicles:                               object;
  policyDetails:                          any;
  sameMailingAddress:                     boolean;

  constructor(
    private activatedRoute:             ActivatedRoute,
    private alertService:               AlertService,
    private authService:                AuthenticationService,
    private userService:                UserService,
    private sanitizer:                  DomSanitizer,
    private policyDataService:          PolicyDataService,
    private walletCardService:          WalletCardService,
  ) {
   }

  createUpdateMilageFormControls(data): void {
    let milageControl =                 [];
    for ( let i = 0; i <= data.vehicleDetails.length; i++ ) {
      if ( i != data.vehicleDetails.length ) {
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

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  onSubmit(i, e): void {
    const policyInfo =                  this.policyDetails[0],
          policyId =                    policyInfo.policynumber.policynumber,
          form =                        this.updateMileage;
    if (this.legalCheckbox) {
      this.updateMileageById( policyInfo.email.address, policyId, form );
    }
  }

  showMe(e): void {
    this.showMessage = e;
  }

  isAddressEqual(policyDetail) {
    return isEqual(policyDetail.mailingAddress, policyDetail.residentialAddress);
  }

  updateMileageById( email, policyId, form ) {
    console.log('this.alertLoad',this.alertLoad)
    this.alertLoad = true;
    console.log('this.alertLoad',this.alertLoad)
    let successArray = [],
        VName =        [];
    this.policyDetails[0].vehicleDetails.forEach((vehicleDetail, i) => {
      const formController =            form.controls.groups;
      let vehicleId =                   vehicleDetail.vehicleIdentificationNumber.Id,
          odometerReading =             vehicleDetail.odometerReading;

      if ( formController.controls[`updateMileageInput_${i}`].dirty && formController.controls[`updateMileageInput_${i}`].value != odometerReading ) {
        
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
    });
    setTimeout(() => {
      if (successArray.every((val, i, arr) => val == true)) {
        this.message =              `We\'ve updated you odemeters.`;
        this.messageType =          'success';
      }
      else if (successArray.every((val, i, arr) => val == false)) {
        this.message =              'There was a problem';
        this.messageType =          'error';
      }
      else {
        this.message =              `We could only update some of the odemeters. ${VName.join(', ')} had an issue`;
        this.messageType =          'default';
      }
      this.showMessage =          true;
      this.alertLoad =            false;
    }, 500);
  }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                   params['policyid'];
    });

    this.policyDataService.$policyDetails
    .subscribe((policyResponse) => {
      this.policyDetails =          policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
      console.log(this.policyDetails[0]);
      this.createUpdateMilageFormControls(this.policyDetails[0]);
    });

    this.userService.$user
    .subscribe( (user) => {
      this.user = user;
    });

    this.loading = false;
  }
}
