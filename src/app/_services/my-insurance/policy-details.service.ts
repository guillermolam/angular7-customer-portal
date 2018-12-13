import { BillingDataService } from './data-services/billing-data.service';
import { map } from 'rxjs/operators';
import { BillingDetailsService } from './billing-details.service';
import { PolicyDataService } from './data-services/policy-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class PolicyDetailsService {

  private policyBillingDataAll: any[] = [];
  private backendUrl : string = 'https://mdv-doctest:8084';

  constructor(
    private http: HttpClient,
    private policyDataService: PolicyDataService,
    private billingDetailsService: BillingDetailsService,
    private billingDataService: BillingDataService
  ) { }

  getPolicyDetailsByEmail(email: string){
    // const url = `${this.backendUrl}/personal-policies/${email}`;
    const url = `${environment.backend_server_url}/personal-policies/${email}`;
    return this.http.get(url).pipe(map((policyResponse: any[]) => {
      // this.policyDataService.updatePolicyDetails(policyResponse);
      policyResponse.forEach((policy) => {
        this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber).subscribe((billingResponse: any[]) => {
          this.policyBillingDataAll.push(...[Object.assign(policy, {billingDetails: {...billingResponse}})]);
        });
      });
      this.billingDataService.updateBillingDetails(this.policyBillingDataAll);
      // return this.billingDataAll;
    }));
  }

  getDocumentsByPolicy(policyNumber: string){
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/documents`;
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    this.http.get(url).subscribe((response) => {
      this.policyDataService.updatePolicyDetails(response);
    });
  }

  getDocumentById(documentId: string){
    // const url = `${this.backendUrl}/personal-policies/document/${documentId}`;
    const url = `${environment.backend_server_url}/personal-policies/document/{documentId}`;
    this.http.get(url).subscribe((response) => {
      this.policyDataService.updatePolicyDetails(response);
    });
  }

}
