import { DomSanitizer, SafeUrl }            from '@angular/platform-browser';
import { Component, OnInit }                from '@angular/core';
import { FormGroup, FormControl }           from '@angular/forms';
import { ActivatedRoute, Params }           from '@angular/router';
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
  alerton:                                any;
  input:                                  object;
  loading:                                boolean = false;
  legalCheckbox:                          boolean = false;
  policyId:                               number;
  user:                                   User;
  showMessage:                            boolean = false;
  updateMileage:                          FormGroup = new FormGroup({
    updateMileageInput:                   new FormControl('')
  });
  vehicles:                               object;
  policyDetails:                          any;
  sameMailingAddress:                     boolean;


  constructor(
    private activatedRoute:             ActivatedRoute,
    private authService:                AuthenticationService,
    private userService:                UserService,
    private sanitizer:                  DomSanitizer,
    private policyDataService:          PolicyDataService,
    private walletCardService:          WalletCardService,
  ) {
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
    if (this.legalCheckbox) {
      this.authService
        .updateMileage(this.user, i)
        .subscribe(
          (success) => {
            this.showMessage = true;
            setTimeout(() => {
              this.showMessage = true;
            }, 2000); //5000
          },
          (err) => {
            this.showMessage = true;
            setTimeout(() => {
              this.showMessage = false;
            }, 2000); //5000
          }
        )
      ;
    }
  }

  showMe(e): void {
    this.showMessage = e;
  }

  isAddressEqual(policyDetail) {
    return isEqual(policyDetail.mailingAddress, policyDetail.residentialAddress);
  }

  updateMileageById(email, policyId, vehicleId, odometerReading) {

  }

  ngOnInit() {
    this.userService.$user
    .subscribe( (user) => {
      this.user = user;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      this.policyDataService.$policyDetails
      .subscribe((policyResponse) => {
        if (policyResponse !== undefined){
          this.policyDetails = policyResponse;
        }
      });
    });
  }
}
