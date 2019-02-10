import { Component, OnInit }          from '@angular/core';
import { PolicyDetailsService } from '../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from '../../../../_services/storage-service-observables/storage-service-observables.service';


@Component({
  selector: 'app-my-insurance',
  templateUrl: './my-insurance.component.html',
  styleUrls: ['./my-insurance.component.scss']
})
export class MyInsuranceComponent implements OnInit {

  loading:  boolean;

  constructor(
    private policyDetailsService:    PolicyDetailsService,
    private storageService:        StorageServiceObservablesService,
  ) {
  }

  ngOnInit() {
    this.loading = true;

    this.policyDetailsService
      .getPolicyDetailsByEmail(this.storageService.getUserFromStorage())
      .subscribe(()=>{
        this.loading = false;
      },
      (err)=>{

      })
  }
}
