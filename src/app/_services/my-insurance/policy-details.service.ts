import { DashboardDataService } from './../data-services/dashboard-data.service';
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
    private dashboardDataService: DashboardDataService,
    private billingDetailsService:  BillingDetailsService
  ) { }

  getPolicyDetailsByEmail(email: string){
    // const url = `${this.backendUrl}/personal-policies/${email}`;
    const url = `${environment.backend_server_url_policy}/${email}`;
    return this.http.get(url).pipe(map((policyResponse: any[]) => {
      policyResponse.forEach((policy) => {
          this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber)
        .subscribe((billingResponse) => {
          this.policyBillingDataAll.push(...[Object.assign(
            policy,
            { billingDetails:       {...billingResponse}})]);
        });
      });
      this.dashboardDataService.updateDashboardDetails(this.policyBillingDataAll);
    })
  );
}

  getDocumentsByPolicy(policyNumber: string): Observable<any>{
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/documents`;
    const url = `${environment.backend_server_url_policy}/${policyNumber}/documents`;
    return this.http.get(url);
  }

  getDocumentById(documentId: string): Observable<any> {
    const options = {
      responseType:  'arraybuffer' as 'json'
    };

    // const url = `${this.backendUrl}/personal-policies/document/${documentId}`;
    const url = `${environment.backend_server_url_policy}/document/${documentId}`;
    return this.http.get(url, options);
  }

  getVehicleByPolicy(policyNumber){
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/vehicles`;
    const url = `${environment.backend_server_url_policy}/${policyNumber}/vehicles`;
    return this.http.get(url);
  }

  updateMileageById(email,policyNumber,vehicleId, odometerReading){
    // const url = `${this.backendUrl}/personal-policies/${email}/${policyNumber}/${vehicleId}?odometerReading=${odometerReading}`;
    const url = `${environment.backend_server_url_policy}/${email}/${policyNumber}/${vehicleId}?odometerReading=${odometerReading}`;
    return this.http.post(url, {});
  }

  getPolicyDetailsByNumber(policyNumber){
    // const url = `${this.backendUrl}/personal-policies/?policynumber=${policyNumber}`;
    const url = `${environment.backend_server_url_policy}/?policynumber=${policyNumber}`;    
    return this.http.get(url);
  }

  addPolicyToEmail(email,policyNumber){
    // const url = `${this.backendUrl}/personal-policies/${email}/${policyNumber}/add-policy`;
    const url = `${environment.backend_server_url_policy}/${email}/${policyNumber}/add-policy`;    
    return this.http.post(url,{});
  }
  


}
