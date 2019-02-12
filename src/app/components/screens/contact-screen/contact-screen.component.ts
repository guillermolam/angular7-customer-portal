import { Component, OnInit }      from '@angular/core';
import { PolicyDataService }      from './../../../_services/my-insurance/data-services/policy-data.service';
import { User }                   from '../../../_models/user';
import { UserService }            from '../../../_services/user.service';
import { PolicyDetailsService }   from '../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from './../../../_services/storage-service-observables/storage-service-observables.service';


@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent implements OnInit {
  policies:                       any;
  loading:                        boolean;

  constructor(
    private policyDataService:    PolicyDataService,
    private policyDetailsService: PolicyDetailsService,
    private storageService:       StorageServiceObservablesService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.policyDetailsService.getPoliciesByEmail(this.storageService.getUserFromStorage()).
    subscribe((policyResponse)=>{
      this.policies  = policyResponse;
      this.loading = false;
    });
  }
}
