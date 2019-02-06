import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BillingDetailsService } from './billing-details.service';
import { PolicyDataService } from './data-services/policy-data.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class PolicyDetailsService {

  private policyBillingDataAll:     any[] = [];
  // private backendUrl:               string = environment.backend_server_pp;

  constructor(
    private http:                   HttpClient,
    private policyDataService:      PolicyDataService,
    private billingDetailsService:  BillingDetailsService
  ) { }

  getPolicyDetailsByEmail(email: string = 'testmfr@gmail.com'){
    // const url = `${this.backendUrl}/personal-policies/${email}`;
    const url = `${environment.backend_server_url}/personal-policy-api/${email}`;
    return this.http.get(url).pipe(map((policyResponse: any[]) => {
      policyResponse.forEach((policy) => {
        forkJoin(
          this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber),
          this.getDocumentsByPolicy(policy.policynumber.policynumber),
          this.billingDetailsService.getHistoryBillsByPolicy(policy.policynumber.policynumber),
          this.billingDetailsService.getScheduledBillsByPolicy(policy.policynumber.policynumber),
          this.billingDetailsService.getPendingChecksByPolicy(policy.policynumber.policynumber)
        )
        .subscribe(([billingResponse,documentsResponse, historyResponse, scheduledBills, pendingCheckPayments]) => {
          this.policyBillingDataAll.push(...[Object.assign(
            policy,
            { billingDetails:       {...billingResponse}},
            { documentsDetails:     documentsResponse},
            { billingHistory:       historyResponse},
            { scheduledBills:       scheduledBills },
            { pendingCheckPayments: pendingCheckPayments }
            )]);
        });
      });
      this.policyDataService.updatePolicyDetails(this.policyBillingDataAll);
    })
  );
}

  getDocumentsByPolicy(policyNumber: string): Observable<any>{
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/documents`;
    const url = `${environment.backend_server_url}/personal-policy-api/${policyNumber}/documents`;
    return this.http.get(url);
  }

  getDocumentById(documentId: string): Observable<any> {
    const options = {
      responseType:  'arraybuffer' as 'json'
    };

    // const url = `${this.backendUrl}/personal-policies/document/${documentId}`;
    const url = `${environment.backend_server_url}/personal-policy-api/document/${documentId}`;
    return this.http.get(url, options);
  }

  getVehicleByPolicy(policyNumber){
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/vehicles`;
    const url = `${environment.backend_server_url}/personal-policy-api/${policyNumber}/vehicles`;
    return this.http.get(url);
  }

  updateMileageById(email,policyNumber,vehicleId, odometerReading){
    // const url = `${this.backendUrl}/personal-policies/${email}/${policyNumber}/${vehicleId}?odometerReading=${odometerReading}`;
    const url = `${environment.backend_server_url}/personal-policy-api/${email}/${policyNumber}/${vehicleId}?odometerReading=${odometerReading}`;
    return this.http.post(url, {});
  }

  getPolicyDetailsByNumber(policyNumber){
    // const url = `${this.backendUrl}/personal-policies/?policynumber=${policyNumber}`;
    const url = `${environment.backend_server_url}/personal-policy-api/?policynumber=${policyNumber}`;    
    return this.http.get(url);
  }

  addPolicyToEmail(email,policyNumber){
    // const url = `${this.backendUrl}/personal-policies/${email}/${policyNumber}/add-policy`;
    const url = `${environment.backend_server_url}/personal-policy-api/${email}/${policyNumber}/add-policy`;    
    return this.http.post(url,{});
  }
  


}
