import { Component, OnInit, AfterViewInit }   from '@angular/core';
import { Router, NavigationEnd }              from '@angular/router';
import { AuthenticationService }              from './../../_services/_iam/authentication-service.service';
import { BillingDetailsService }              from './../../_services/my-insurance/billing-details.service';
import { ClaimsDataService }                  from './../../_services/_claims/claims-data.service';
import { ClaimsService }                      from './../../_services/_claims/claims.service';
import { PolicyDataService }                  from '../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }               from './../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }   from './../../_services/storage-service-observables/storage-service-observables.service';
import { UserService }                        from './../../_services/user.service';
import { TestingDataService }                 from '../../_helpers/testing-data.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  loading:                                    boolean = false;
  reportClaim:                                boolean;
  showAlert:                                  boolean;
  testAlert:                                  any;

  constructor(
    private authenticationService:            AuthenticationService,
    private claimsService:                    ClaimsService,
    private claimsDataService:                ClaimsDataService,
    private policyDataService:                PolicyDataService,
    private policyDetailsService:             PolicyDetailsService,
    private router:                           Router,
    private storageService:                   StorageServiceObservablesService,
    private userService:                      UserService,

    private testingData:                      TestingDataService) {

    }

  ngOnInit() {
    this.loading = true;

    if (this.router.url === '/my-insurance') {
      this.reportClaim = true;
      this.showAlert   = true;
    }
    else {
      this.reportClaim = false;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if ( event.url === '/my-insurance' ) {
          this.reportClaim =                true;
          this.showAlert =                  true;
        } else if ( event.url === '/profile' ) {
          this.reportClaim =                false;
          this.showAlert =                  true;
        }
        else {
          this.reportClaim =                false;
          this.showAlert =                  false;
        }
      }
    });

    this.policyDetailsService
      .getPolicyDetailsByEmail( this.storageService.getUserFromStorage())
      .subscribe(
        (success) => {}
      ).add(() => {
        this.authenticationService
          .getUserDetailsByEmail(this.storageService.getUserFromStorage())
          .subscribe(([userResponse, accountResponse]) => {
            const response = {
              userDetails: {...userResponse},
              bankAccountDetails:  {...accountResponse}
            };

            // Claim List
            this.claimsService
            .getClaimsList(this.storageService.getUserFromStorage())
            .subscribe( (claimsList) => {
              this.claimsDataService.updateClaims('list', claimsList);
            });

            // Claim Details
            this.claimsService
            .getClaimsDetails(this.storageService.getUserFromStorage())
            .subscribe( (claimsList) => {
              this.claimsDataService.updateClaims('details', claimsList);
            });

            this.userService.updateUser(response);
          },
          (err) => {
            // If one of them errors out then all of them will. This is for local and testing purposes only.
            let ui = {
              userDetails: this.testingData.testUserInfo(),
              bankAccountDetails: this.testingData.testBankingInfo()
            };
            this.policyDataService.updatePolicyDetails( this.testingData.testDatafunction() );
            this.userService.updateUser( ui );
            this.claimsDataService.updateClaims('list', this.testingData.testDataClaims('list'));
            this.claimsDataService.updateClaims('details', this.testingData.testDataClaims('details'));
            this.userService.$user.subscribe((t) => { this.testAlert = t.testData; });
          })
          .add(() => {
            this.loading = false;
          });
      });
  }

}
