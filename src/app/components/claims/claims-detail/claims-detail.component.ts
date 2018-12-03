import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeUrl }  from '@angular/platform-browser';
import { TestingDataService }     from '../../../_helpers/testing-data.service';

@Component({
  selector: 'app-claims-detail',
  templateUrl: './claims-detail.component.html',
  styleUrls: ['./claims-detail.component.scss']
})
export class ClaimsDetailComponent implements OnInit {
  claims;
  claimid:                string;
  constructor(
    private testingData:  TestingDataService,
    private activeRoute:  ActivatedRoute,
    private sanitizer:    DomSanitizer,
  ) { }

  getAddress(a): SafeUrl {
    let address,
        safeUrl:          SafeUrl;

    address =             `${a.replace(/\s/g, '%20')}`;

    const google =        `https://maps.google.com/maps?q=`,
          googleQuery =   `&t=&z=13&ie=UTF8&iwloc=&output=embed`,
          url =           `${google}${address}${googleQuery}`;

    safeUrl =             this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.claimid =        params['claimid'];
    });
    this.claims = this.testingData.testDataClaims();
  }

}
