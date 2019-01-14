import { Component, OnInit }          from '@angular/core';
import { ActivatedRoute, Router,
  Params }                            from '@angular/router';
import { AlertService }               from 'mapfre-design-library';
import { BillingObservableService }   from '../../../../../../../_services/billing.service';
import { Billing }                    from './../../../../../../../_models/billing';
import { UserService }                from '../../../../../../../_services/user.service';
import { AuthenticationService }      from '../../../../../../../_services/_iam/authentication-service.service';
import { StorageServiceObservablesService }   from '../../../../../../../_services/storage-service-observables/storage-service-observables.service';
import { TestingDataService }         from '../../../../../../../_helpers/testing-data.service';

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
    private billingObservableService: BillingObservableService,
    private router:                   Router,
    private storageService:           StorageServiceObservablesService,
    private userService:              UserService,
   
    private testingData:              TestingDataService
  ) { }

  reSyncBilling(): void {
    this.authenticationService
      .getUserDetailsByEmail(this.storageService.getUserFromStorage())
      .subscribe(([userResponse, accountResponse]) => {
        this.userService.updateUser(
        [{
          userDetails:              {...userResponse},
          bankAccountDetails:       {...accountResponse}}]
        );
        this.alertService.success('Congrats! You\'ve enrolled! ', true);
        this.router.navigate(['/billing/paperless/e-pay']);
      },
      (err) => {
        this.alertService.error(`We are sorry. You did not enroll ${err} `, true);
        this.router.navigate(['/billing/paperless/e-pay']);
      })
    ;
  }

  ngOnInit() {
    this.billingObservableService.$billing.subscribe( (success) => {
      this.billingInfo =              success;
    });
  }

}
