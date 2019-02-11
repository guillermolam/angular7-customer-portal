import { DocumentsDataService } from './../data-services/documents-data.service';
import { DashboardDataService } from './../data-services/dashboard-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BillingDetailsService } from './billing-details.service';
import { PolicyDataService } from '../data-services/policy-data.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class PolicyDetailsService {

  // private backendUrl:               string = environment.backend_server_pp;

  constructor(
    private http:                   HttpClient,
    private policyDataService:      PolicyDataService,
    private billingDetailsService:  BillingDetailsService,
    private documentsDataService:  DocumentsDataService
  ) { }

  getPolicyDetailsByEmail(email: string){
    let policyBillingDataAll:     any[] = [];
    // const url = `${this.backendUrl}/personal-policies/${email}`;
    const url = `${environment.backend_server_url_policy}/${email}`;
    return this.http.get(url).pipe(map((policyResponse: any[]) => {
      policyResponse.forEach((policy) => {
          this.billingDetailsService.getCurrentBillByPolicy(policy.policynumber.policynumber)
        .subscribe((billingResponse) => {
          policyBillingDataAll.push(...[Object.assign(
            policy,
            { billingDetails:       {...billingResponse}})]);
        });
      });
      console.log('policyBillingDataAll',policyBillingDataAll);
      this.policyDataService.updatePolicyDetails(policyBillingDataAll);
    })
  );
}


// getDocumentsDetailsByEmail(email: string, policyNumber: string){
//   let documentsData: any;
//   // const url = `${this.backendUrl}/personal-policies/${policyNumber}/documents`;
//   const url = `${environment.backend_server_url_policy}/${email}`;
//   return this.http.get(url).pipe(map((policyResponse: any[]) => {
//     policyResponse.forEach((policy) => {
//       if(policy.policynumber.policynumber === policyNumber){
//         this.getDocumentsByPolicy(policy.policynumber.policynumber)
//       .subscribe((documentsResponse) => {
//         documentsData.push(...documentsResponse);
//       });
//       this.documentsDataService.updateDocumentsDetails(documentsData);     
//     }
//     });
//   })
// );
// }

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
