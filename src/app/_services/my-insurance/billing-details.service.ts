import { map } from 'rxjs/operators';
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
    // const url = `${this.billingURL}/billing/${policyNumber}/currentbill`;
    const url = `${environment.backend_server_url}/billing-api/${policyNumber}/currentbill`;
    return this.http.get(url);
  }


  getScheduledBillsByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/scheduled-bills?policyNumber=${policyNumber}`;
    const url = `${environment.backend_server_url}/billing-api/scheduled-bills?policyNumber=${policyNumber}`;
    return this.http.get(url);
  }

  getHistoryBillsByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/history-bills?policyNumber=${policyNumber}`;
    const url = `${environment.backend_server_url}/billing-api/scheduled-bills?policyNumber=${policyNumber}`;
    return this.http.get(url);
  }


  getPendingChecksByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/${policyNumber}/unprocessedpayment`;
    const url = `${environment.backend_server_url}/billing-api/${policyNumber}/unprocessedpayment`;
    return this.http.get(url);
  }

  makeECheckPayment(billingData, email, policyNumber){
    // const url = `${this.billingURL}/billing/${email}/${policyNumber}`;
    const url = `${environment.backend_server_url}/billing-api/${email}/${policyNumber}`;
    return this.http.post(url,billingData);

  }

}
