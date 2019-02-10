import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { PolicyDataService }              from '../../../../../_services/data-services/policy-data.service';
import { ValidateAddressService }         from '../../../../../_services/change-address/validate-address.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {

  loading:                              boolean = false;
  policyId:                             number;
  policyDetails:                        any;
  policy:                               any;
  constructor(
    private activatedRoute:             ActivatedRoute,
    private policyDataService:          PolicyDataService,
    private validateAddressService:     ValidateAddressService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    });

    this.policyDataService.$policyDetails.subscribe((policyDetails) => {
      this.policyDetails = policyDetails;
      // if(this.policyDetails[0]){
      //   this.policyDetails = this.policyDetails.filter((response) => response.policynumber.policynumber === this.policyId);
      // }
      this.loading =                  false;
      // this.validateAddressService.setAddress(this.policyDetails[0].residentialAddress);
    })
  }
}
