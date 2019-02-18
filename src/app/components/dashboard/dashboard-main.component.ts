import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd }    from '@angular/router';
import { AuthenticationService }    from './../../_services/_iam/authentication-service.service';
import { BillingDetailsService }    from './../../_services/my-insurance/billing-details.service';
import { ClaimsDataService }        from './../../_services/_claims/claims-data.service';
import { ClaimsService }            from './../../_services/_claims/claims.service';
import { PolicyDetailsService }     from './../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from './../../_services/storage-service-observables/storage-service-observables.service';
import { UserService }              from './../../_services/user.service';
import { PolicyDataService }        from './../../_services/data-services/policy-data.service';
import { TestingDataService }       from './../../_helpers/testing-data.service';


@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  loading:                        boolean = false;
  reportClaim:                    boolean;
  showAlert:                      boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private claimsService:        ClaimsService,
    private claimsDataService:    ClaimsDataService,
    private policyDetailsService: PolicyDetailsService,
    private router:               Router,
    private storageService:       StorageServiceObservablesService,
    private userService:          UserService,
    private policyDataService:    PolicyDataService,
    private testingData:          TestingDataService
    ) {

  }

  ngOnInit() {
    if (this.router.url === '/my-insurance') {
      this.reportClaim = true;
      this.showAlert = true;
    }
    else {
      this.reportClaim = false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/my-insurance') {
          this.reportClaim = true;
          this.showAlert = true;
        } else if (event.url === '/profile') {
          this.reportClaim = false;
          this.showAlert = true;
        }
        else {
          this.reportClaim = false;
          this.showAlert = false;
        }
      }
    });
  }

}
