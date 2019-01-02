import { Component, OnInit, AfterViewInit }                  from '@angular/core';
import { Router, NavigationEnd }              from '@angular/router';
import { BillingDataService }                 from './../../_services/my-insurance/data-services/billing-data.service';
import { BillingDetailsService }              from './../../_services/my-insurance/billing-details.service';
import { PolicyDataService }                  from '../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }               from './../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }   from './../../_services/storage-service-observables/storage-service-observables.service';
import { UserService }                        from './../../_services/user.service';
import { AuthenticationService } from './../../_services/_iam/authentication-service.service';
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

  constructor(
    private policyDataService:                PolicyDataService,
    private policyDetailsService:             PolicyDetailsService,
    private router:                           Router,
    private storageService:                   StorageServiceObservablesService,
    private userService:                      UserService,
    private authenticationService:            AuthenticationService,
    private testingData:                      TestingDataService) {

    }

  ngOnInit() {
    this.loading = true;
    if (this.router.url === '/my-insurance') {
      this.reportClaim = true;
      this.showAlert   = true;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log(event.url);
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

    // this.policyDataService.$policyDetails.subscribe(
    //   (success) => {
    //     this.loading = false;
    //   },
    //   (err) => {
    //     this.policyDetailsService.getPolicyDetailsByEmail(this.storageService.getUserFromStorage()).subscribe();
    //     this.loading = false;
    //   },
    // );
   this.policyDetailsService
     .getPolicyDetailsByEmail(
       this.storageService.getUserFromStorage()
     ).subscribe( () => { 
      this.loading = false;
     }
     );

    this.authenticationService.getUserDetailsByEmail(this.storageService.getUserFromStorage())
    .subscribe(([userResponse,accountResponse])=>{
      this.userService.updateUser(
       [{
         userDetails: {...userResponse},
         bankAccountDetails:  {...accountResponse}}]
      );
     });
    
    // .subscribe((userResponse)=>{
    //   console.log(userResponse);
    //   this.userService.updateUser(userResponse);
    // });
   
   // this.userService.updateUser( this.testingData.testDatafunction() );

   // this.userService.$user.subscribe(
   //  (user) => { 
   //    console.log(user)
   //    this.loading = false; }
   //);

  }

  
  // ngAfterViewInit(){
  //   this.loading = false;
  // }

}
