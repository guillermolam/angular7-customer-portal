import { PolicyDataService } from './data-services/policy-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class PolicyDetailsService {

  constructor(
    private http: HttpClient,
    private policyDataService: PolicyDataService
  ) { }

  getPolicyDetailsByEmail(email: string){
    const url = `${environment.backend_server_url}/personal-policies/${email}`;
    this.http.get(url).subscribe((response) => {
      this.policyDataService.updatePolicyDetails(response);
    });
  }

  getDocumentsByPolicy(policyNumber: string){
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    this.http.get(url).subscribe((response) => {
      this.policyDataService.updatePolicyDetails(response);
    });
  }

}
