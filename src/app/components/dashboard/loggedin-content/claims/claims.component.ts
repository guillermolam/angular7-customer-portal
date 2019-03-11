import { Component, OnInit }                  from '@angular/core';
import { Router, ActivatedRoute }             from '@angular/router';
import { ClaimsDataService }                  from './../../../../_services/_claims/claims-data.service';
import { ClaimsService }                      from './../../../../_services/_claims/claims.service';
import { StorageServiceObservablesService }   from '../../../../_services/storage-service-observables/storage-service-observables.service';
import { TestingDataService } from '../../../../_helpers/testing-data.service';

@Component({
  selector: 'app-claims-wrapper',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsWrapperComponent implements OnInit {
  claims:                                     any;
  classForPage:                               string;
  loading:                                    boolean;

  constructor(
    private activateRouter:                   ActivatedRoute,
    private router:                           Router,
    private claimsService:                    ClaimsService,
    private storageService:                   StorageServiceObservablesService,
    private claimsDataService:                ClaimsDataService,
    private testing:                          TestingDataService
  ) { }

  checkRoute(): void {
    let page;
    if (this.router.url == '/claims/active' || this.router.url == '/claims/closed') {
      page = 'claims';
    }
    else {
      page = 'claim-detail';
    }
    this.classForPage = page;
  }

  ngOnInit() {
    this.loading = true;
    this.checkRoute();
    this.claimsService
      .getClaimsDetails(this.storageService.getUserFromStorage())
      .subscribe((response) => {
        this.claimsDataService.updateClaims(response);
        this.loading = false;
      },
      (err) => {
        this.claimsDataService.updateClaims(false);
        this.loading = false;
      }
    );
    // this.claimsDataService.updateClaims(this.testing.testFullClaimsData());
    
  }

}
