import { PolicyDetailsService } from './../../../../../_services/my-insurance/policy-details.service';
import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { PolicyDataService }              from '../../../../../_services/data-services/policy-data.service';
import { ValidateAddressService }         from '../../../../../_services/change-address/validate-address.service';
import { filter, map }                    from 'rxjs/operators';

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
    private validateAddressService:     ValidateAddressService,
    private policyDetailsService:       PolicyDetailsService
  ) {}

  ngOnInit() {
    //this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
      this.policyDataService.$policyDetails
      .pipe(
        map( (policyResponse) => {
          return policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
        })
      )
      .subscribe((policyResponse) => {
        this.policyDetails = policyResponse;
        this.loading = false;
      });
    });
  }
}
