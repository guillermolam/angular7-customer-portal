import { Component, OnInit }      from '@angular/core';
import { PolicyDataService }      from './../../../_services/data-services/policy-data.service';
import { User }                   from '../../../_models/user';
import { UserService }            from '../../../_services/user.service';
import { PolicyDetailsService }   from '../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from './../../../_services/storage-service-observables/storage-service-observables.service';
import * as _ from 'underscore';

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
      const outPutOne = _.uniq(policyResponse, (item, key, agent) => {
        return item.agent.agentName;
      });
      this.policies = outPutOne;
      this.loading = false;
    });

    this.policyDataService.$policyDetails.subscribe((policies) => {
      const outPutOne = _.uniq(policies, (item, key, agent) => {
        return item.agent.agentName;
      });

      //this.policies = _.sortBy(outPutOne, 'policyStatus');
    });
  }
}
