import { Component, OnInit }      from '@angular/core';
import { PolicyDetailsService }   from '../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from '../../../../_services/storage-service-observables/storage-service-observables.service';
import { TestingDataService }     from '../../../../_helpers/testing-data.service';
import { UserService }            from '../../../../_services/user.service';
import { PolicyDataService }      from '../../../../_services/data-services/policy-data.service';


@Component({
  selector: 'app-my-insurance',
  templateUrl: './my-insurance.component.html',
  styleUrls: ['./my-insurance.component.scss']
})
export class MyInsuranceComponent implements OnInit {

  loading: boolean;

  constructor(
    private policyDataService:    PolicyDataService,
    private policyDetailsService: PolicyDetailsService,
    private storageService:       StorageServiceObservablesService,
    private testingData:          TestingDataService,
    private userService:          UserService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.policyDetailsService
      .getPolicyDetailsByEmail(this.storageService.getUserFromStorage())
      .subscribe(() => {
        this.loading = false;
      },
      (err) => {}
    );
    this.loading = false;
    
    this.policyDataService.updatePolicyDetails(this.testingData.testFullPolicyObject());
    console.log('policyBillingDataAll',this.testingData.testFullPolicyObject());
  }
}
