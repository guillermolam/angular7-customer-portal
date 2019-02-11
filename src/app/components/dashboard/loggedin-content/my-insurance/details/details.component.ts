import { PolicyDetailsService } from './../../../../../_services/my-insurance/policy-details.service';
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
    private validateAddressService:     ValidateAddressService,
    private policyDetailsService:       PolicyDetailsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    //   this.policyDetailsService.getPolicyDetailsByNumber(this.policyId).subscribe((policyResponse)=>{
    //   this.policy  = policyResponse;
    //   this.loading = false;
    //   },
    //   (err)=>{

    //   }
    // );
    });

    this.policyDataService.$policyDetails.subscribe((policyResponse)=>{
      this.policyDetails  = policyResponse;
      this.loading = false;
    })

    // this.policyDataService.$policyDetails.subscribe((policyDetails) => {
    //   this.policyDetails = policyDetails;
    //   // if(this.policyDetails[0]){
    //   //   this.policyDetails = this.policyDetails.filter((response) => response.policynumber.policynumber === this.policyId);
    //   // }
    //   this.loading =                  false;
    //   // this.validateAddressService.setAddress(this.policyDetails[0].residentialAddress);
    // })
  }
}
