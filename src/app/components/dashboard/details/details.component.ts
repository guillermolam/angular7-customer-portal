import { DomSanitizer, SafeUrl }    from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';
import { ActivatedRoute, Params }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';

import { AuthenticationService }    from '../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../_models/user';
import { UserService }              from './../../../_services/user.service';
import { TestingDataService }       from './../../../_helpers/testing-data.service';
import { WalletCardService }        from './../../../_services/_iam/wallet-card.service';
import { UserInfoService }          from '../../../_services/_userinformation/user-info.service';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  alerton;
  input:                    object;
  loading:                  boolean = false;
  legalCheckbox:            boolean = false;
  policyId:                 number;
  user:                     User;
  showMessage:              boolean = false;
  updateMileage =           new FormGroup({
    updateMileageInput: new FormControl('')
  });
  vehicles:                 object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertService:   AlertService,
    private authService:    AuthenticationService,
    private userService:    UserService,
    private sanitizer:      DomSanitizer,
    private walletCardService: WalletCardService,
    private userInformation: UserInfoService,
    private testingData:    TestingDataService
  ) {
   }

  downloadWalletCard(email, policyid) {
    this.walletCardService
      .generatePkPass(email)
      .subscribe(
        (success) => {
          console.log("Successful download of wallet card");
        },
        (err) => {
          console.log("Err download of wallet card", err);
        }
      )
    ;
  }

  getAddress(a: string[]): SafeUrl {
    let address,
        safeUrl:          SafeUrl;

    address =             `${a[0].replace(/\s/g, '%20')}%20${a[1]}%20${a[2]}%20${a[3]}`;

    const google =        `https://maps.google.com/maps?q=`,
          googleQuery =   `&t=&z=13&ie=UTF8&iwloc=&output=embed`,
          url =           `${google}${address}${googleQuery}`;

    safeUrl =             this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  onSubmit(i, e): void {
    if (this.legalCheckbox) {
      console.log('click the update form', this.updateMileage.value);

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

  ngOnInit() {
    
    // When logging in go a verify user
    // We will need this once the new endpoints are set.

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
    });

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          this.loading = true;
          if (localStorage.getItem('access_token')) {
            // If a user comes straight to the page turn on loading
            this.loading = true;
            // That way we can gather the information
            this.userInformation
              .policyByEmail(this.user.email)
              .subscribe(
                (info: any) => {
                  console.log(info);
                  this.user = {
                    firstName: info[0].insurer['firstName'],
                    middleName: info[0].insurer['middleName'],
                    lastName: info[0].insurer['lastName'],
                    policyDetails: info
                  };
                  this.userService.updateUser(this.user);
                  this.loading = false;
                },
                (err) => {
                  this.loading = false;
                  console.log('login success but verifyuser err', err);
                }
              )
            ;
          }
          else {
            this.loading = false;
            this.user = this.testingData.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );
  }
}
