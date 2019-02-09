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

    this.policyDataService.$policyDetails.pipe(
      map((policyResponse: any) => policyResponse.filter((response) => response.policynumber.policynumber === this.policyId))
    ).subscribe((policyDetails) => {
      console.log('details',policyDetails)
      // this.policyDetails =            policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
      if(policyDetails){
        this.policyDetails = policyDetails;
      }
      this.loading =                  false;
      // this.validateAddressService.setAddress(this.policyDetails[0].residentialAddress);
    })

  }
}
