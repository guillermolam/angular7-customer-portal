import { filter } from 'rxjs/operators';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { DomSanitizer, SafeUrl }    from '@angular/platform-browser';
import { ClaimsDataService }        from '../../../../../_services/_claims/claims-data.service';
import { UserService }              from '../../../../../_services/user.service';

@Component({
  selector: 'app-claims-detail',
  templateUrl: './claims-detail.component.html',
  styleUrls: ['./claims-detail.component.scss']
})
export class ClaimsDetailComponent implements OnInit {
  claims;
  claimid:                          string;
  loading:                          boolean;

  constructor(
    private claimsDataService:      ClaimsDataService,
    private userService:            UserService,
    private activeRoute:            ActivatedRoute,
    private sanitizer:              DomSanitizer,
  ) { }

  getAddress(a): SafeUrl {
    let address,
        safeUrl:                    SafeUrl;

    address =                       `${a.replace(/\s/g, '%20')}`;

    const google =                  `https://maps.google.com/maps?q=`,
          googleQuery =             `&t=&z=13&ie=UTF8&iwloc=&output=embed`,
          url =                     `${google}${address}${googleQuery}`;

    safeUrl =                       this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }

  ngOnInit() {
    this.loading =                  true;
    this.activeRoute.params.subscribe((params: Params) => {
      this.claimid =                params['claimid'];
      this.claimsDataService.$claimsDetails
      .subscribe( (claimsList) => {
        this.claims =               claimsList.filter((response) => response.LOSS_NUMBER === this.claimid);
        this.loading =              false;
      });
      },
      (err) => {
        console.log('couldn\`t get user info');
    });
  }
}
