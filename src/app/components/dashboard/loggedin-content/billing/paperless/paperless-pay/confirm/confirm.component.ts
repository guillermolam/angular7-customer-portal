import { Component, OnInit }          from '@angular/core';
import { Router }                     from '@angular/router';
import { AlertService }               from 'mapfre-design-library';
import { BillingDataService }         from './../../../../../../../_services/my-insurance/data-services/billing-data.service';
import { Billing }                    from './../../../../../../../_models/billing';
import { UserService }                from '../../../../../../../_services/user.service';
import { AuthenticationService }      from '../../../../../../../_services/_iam/authentication-service.service';
import { StorageServiceObservablesService }   from '../../../../../../../_services/storage-service-observables/storage-service-observables.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class PaperlessPayConfirmComponent implements OnInit {
  billingInfo:                        Billing;
  constructor(
    private alertService:             AlertService,
    private authenticationService:    AuthenticationService,
    private billingDataService:       BillingDataService,
    private router:                   Router,
    private storageService:           StorageServiceObservablesService,
    private userService:              UserService,
  ) { }

  reSyncBilling(): void {
    this.authenticationService
      .getUserDetailsByEmail(this.storageService.getUserFromStorage())
      .subscribe(([userResponse, accountResponse]) => {
        this.userService.clearUser();
        this.userService.updateUser(
        [{
          userDetails:              {...userResponse},
          bankAccountDetails:       {...accountResponse}}]
        );
        this.alertService.success('Congrats! You\'ve enrolled! ', true);
        this.router.navigate(['/billing/paperless/e-pay']);
      },
      (err) => {
        this.alertService.error(`Sorry, there was an issue and we could not enroll you. ${err} `, true);
        this.router.navigate(['/billing/paperless/e-pay']);
      })
    ;
  }

  ngOnInit() {
    this.billingDataService.$billingDetails.subscribe( (success) => {
      this.billingInfo =            success;
    });
  }

}
