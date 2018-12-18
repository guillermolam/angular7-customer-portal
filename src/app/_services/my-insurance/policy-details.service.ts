import { BillingDataService } from './data-services/billing-data.service';
import { map } from 'rxjs/operators';
import { BillingDetailsService } from './billing-details.service';
import { PolicyDataService } from './data-services/policy-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, forkJoin, of } from 'rxjs';

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
        forkJoin(
          this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber),
          this.getDocumentsByPolicy(policy.policynumber.policynumber),
          this.getVehicleByPolicy(policy.policynumber.policynumber)
      ).subscribe(([billingResponse,documentsResponse, vehicleResponse])=>{
       this.policyBillingDataAll.push(...[Object.assign(
         policy, 
        {billingDetails: {...billingResponse}}, 
        {documentsDetails: documentsResponse},
        {vehicleDetails: vehicleResponse}
        )]);
      });
      //   this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber).subscribe((billingResponse: any[]) => {
      //     this.getDocumentsByPolicy(policy.policynumber.policynumber).subscribe((documentsResponse: any[]) => {
      //       this.policyBillingDataAll.push(...[Object.assign(policy, {billingDetails: {...billingResponse}}, {documentsDetails: documentsResponse})]);
      //     });
      //     // this.policyBillingDataAll.push(...[Object.assign(policy, {billingDetails: {...billingResponse}})]);
      //   });
      // });
      // return this.billingDataAll;
    })
    
    this.billingDataService.updateBillingDetails(this.policyBillingDataAll);
  })
  );
  }


  getDocumentsByPolicy(policyNumber: string){
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/documents`;
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    return this.http.get(url);
    // .subscribe((response) => {
    //   this.policyDataService.updatePolicyDetails(response);
    // });
  }

  getDocumentById(documentId: string){
    const options = {
      responseType:  'arraybuffer' as 'json'
    };
    // const url = `${this.backendUrl}/personal-policies/document/${documentId}`;
    const url = `${environment.backend_server_url}/personal-policies/document/${documentId}`;
    return this.http.get(url, options);
  }

  getVehicleByPolicy(policyNumber){
  
    // const url = `${this.backendUrl}/personal-policies/${policyNumber}/vehicles`;
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/vehicles`;
    return this.http.get(url);
  }


  updateMileageById(vehicleId){
    // const url = `${this.backendUrl}/personal-policies/${email}/${policyNumber}/${vehicleId}?odometerReading=${odometerReading}`;
    const url = `${environment.backend_server_url}/personal-policies/${email}/${policyNumber}/${vehicleId}?odometerReading=${odometerReading}`;
    return this.http.post(url);

  }

}
