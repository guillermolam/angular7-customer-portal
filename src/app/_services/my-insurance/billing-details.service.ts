import { BillingDataService } from './data-services/billing-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingDetailsService {

  billingURL: string = 'https://mdv-doctest:8086'; ///will be removed

  constructor(
     private http: HttpClient,
    private billingDataService: BillingDataService
  ) {}

  getCurrentBillByPolicy(policyNumber: string){
    const url = `${this.billingURL}/billing/${policyNumber}/currentbill`;
    // const url = `${environment.backend_server_url}/billing/${policyNumber}/currentbill`;
    this.http.get(url).subscribe((response) => {
      this.billingDataService.updateBillingDetails(response);
    });
  }
}
