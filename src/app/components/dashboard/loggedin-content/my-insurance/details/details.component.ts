import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { PolicyDataService }              from '../../../../../_services/my-insurance/data-services/policy-data.service';

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
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId =                 params['policyid'];
    });

    this.policyDataService.$policyDetails
    .subscribe((policyResponse) => {
      this.policyDetails =            policyResponse.filter((response) => response.policynumber.policynumber === this.policyId);
      this.loading =                  false;
    });

  }
}
