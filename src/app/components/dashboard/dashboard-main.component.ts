import { Component, OnInit }                  from '@angular/core';
import { Router, NavigationEnd }              from '@angular/router';
import { PolicyDataService }                  from '../../_services/my-insurance/data-services/policy-data.service';
import { BillingDataService }                 from './../../_services/my-insurance/data-services/billing-data.service';
import { PolicyDetailsService }               from './../../_services/my-insurance/policy-details.service';
import { BillingDetailsService }              from './../../_services/my-insurance/billing-details.service';
import { UserService }                        from './../../_services/user.service';
import { StorageServiceObservablesService }   from './../../_services/storage-service-observables/storage-service-observables.service';
import { TestingDataService }                 from '../../_helpers/testing-data.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  loading:                                    boolean = false;
  reportClaim:                                boolean;

  constructor(
    private router:                           Router,
    private policyDetailsService:             PolicyDetailsService,
    private userService:                      UserService,
    private storageService:                   StorageServiceObservablesService,
    private testingData:                      TestingDataService ){}

  ngOnInit() {
    this.loading = true;
    if (this.router.url === '/my-insurance') {
      this.reportClaim = true;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        // console.log(event.url);
        if ( event.url === '/my-insurance' ) {
          this.reportClaim =                true;
        }
        else {
          this.reportClaim =                false;
        }
      }
    });

    this.policyDetailsService
      .getPolicyDetailsByEmail(this.storageService.getUserFromStorage())
      .subscribe(
        () => { this.loading = false; }
      );

   // this.policyDetailsService
   //   .getPolicyDetailsByEmail(
   //     this.storageService.getUserFromStorage()
   //   ).subscribe( () => { },
   //   );
   //this.userService.updateUser( this.testingData.testDatafunction() );

   //this.userService.$user.subscribe(
   //  (user) => { 
   //    console.log(user)
   //    this.loading = false; }
   //);
  }
}
