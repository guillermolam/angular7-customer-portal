import { DomSanitizer, SafeUrl }    from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';
import { ActivatedRoute, Params }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';

import { AuthenticationService }    from '../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../_models/user';
import { UserService }              from './../../../_services/user.service';
import { TestingDataService }       from './../../../_helpers/testing-data.service';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  alerton;
  input:                    object;
  legalCheckbox:            boolean = false;
  policyId:                 number;
  user:                     User;
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

    private testingData:    TestingDataService
  ) {
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

  onSubmit(i): void {
    if (this.legalCheckbox) {
      console.log('click the update form', this.updateMileage.value);
      this.alerton = true;
      this.alertService.success(`You've updated your ODOMETER`);
      setTimeout(() => {
        this.alerton = false;
        this.alertService.clear();
      }, 2000); //5000
    }
  }

  setAlert(i, bool): boolean {
    return bool;
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
          if (localStorage.getItem('access_token')) {
            this.authService
            .verifyUser(this.user)
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
              },
              (err) => {
                console.log('login success but verifyuser err', err);
              }
            );
          }
          else {
            this.user = this.testingData.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );
  }
}
