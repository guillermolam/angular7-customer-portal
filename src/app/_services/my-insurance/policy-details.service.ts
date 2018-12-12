import { BillingDataService } from './data-services/billing-data.service';
import { map } from 'rxjs/operators';
import { BillingDetailsService } from './billing-details.service';
import { PolicyDataService } from './data-services/policy-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class PolicyDetailsService {

  private billingDataAll: any[] = [];

  constructor(
    private http: HttpClient,
    private policyDataService: PolicyDataService,
    private billingDetailsService: BillingDetailsService,
    private billingDataService: BillingDataService
  ) { }

  getPolicyDetailsByEmail(email: string){
    const url = `${environment.backend_server_url}/personal-policies/${email}`;
    return this.http.get(url).pipe(map((policyResponse: any[]) => {
      this.policyDataService.updatePolicyDetails(policyResponse);
      policyResponse.forEach((policy) => {
        this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber).subscribe((billingResponse: any[]) => {
          this.billingDataAll.push(...billingResponse);
        });
      });
      this.billingDataService.updateBillingDetails(this.billingDataAll);
      // return this.billingDataAll;
    }));
  }

  getDocumentsByPolicy(policyNumber: string){
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    this.http.get(url).subscribe((response) => {
      this.policyDataService.updatePolicyDetails(response);
    });
  }

}
