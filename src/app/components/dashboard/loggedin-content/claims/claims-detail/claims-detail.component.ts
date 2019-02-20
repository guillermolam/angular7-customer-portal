import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ClaimsDataService } from '../../../../../_services/_claims/claims-data.service';
import { UserService } from '../../../../../_services/user.service';
import { TestingDataService } from '../../../../../_helpers/testing-data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-claims-detail',
  templateUrl: './claims-detail.component.html',
  styleUrls: ['./claims-detail.component.scss']
})
export class ClaimsDetailComponent implements OnInit {
  claims;
  claimid: string;
  loading: boolean;
  totalAmountToDate;

  constructor(
    private claimsDataService: ClaimsDataService,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private testing: TestingDataService
  ) { }

  getAddress(a): SafeUrl {
    let address,
      safeUrl: SafeUrl;
    address = `${a.streetName}%20${a.city}%20${a.state}%20${a.zipCode.digits}`;

    const google = `https://maps.google.com/maps?q=`,
      googleQuery = `&t=&z=13&ie=UTF8&iwloc=&output=embed`,
      url = `${google}${address}${googleQuery}`;

    safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }

  ngOnInit() {
    let paymentToDate = [],
      paymentToDateSum = 0;

    // this.loading =                  true;
    this.activeRoute.params.subscribe((params: Params) => {
      this.claimid = params['claimid'].split('-');
      this.claimsDataService.$claimsLossDetails
      /*.pipe(
        map( (claimsList) => {
          return claimsList.filter((response) => response.policyNumber.policynumber === this.claimid[0] );
        })
      )*/
      .subscribe( (claimsList) => {
        this.claims =               claimsList;
        this.loading =              false;
      });
      // claimid[0] is the claimid while claimid[1] is the specific claim exposure id
      this.claims.forEach((claim) => {
        claim.exposures.forEach((exposure) => {
          if (exposure.exposureNumber.exposureNumber == this.claimid[1]) {
            exposure.payments.forEach((payment) => {
              paymentToDate.push(parseFloat(payment.checkAmount));
            });
          }
        });
      });

      for (let i = 0; i < paymentToDate.length; i++) {
        paymentToDateSum += paymentToDate[i];
      }
      this.totalAmountToDate = paymentToDateSum;
    },
    (err) => {
    });
      this.claims = this.testing.testFullClaimsData();
      this.loading = false;
  }
}
