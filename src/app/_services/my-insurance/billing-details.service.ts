import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { Observable }         from 'rxjs';
import { environment }        from '../../../environments/environment';
import { BillingDataService } from './data-services/billing-data.service';


@Injectable({
  providedIn: 'root'
})
export class BillingDetailsService {

  billingURL:                   string = environment.backend_server_bl;

  constructor(
    private http:               HttpClient,
    private billingDataService: BillingDataService
  ) {}

  getCurrentBillByPolicy(policyNumber: string): Observable<any> {
    const url =                 `${this.billingURL}/billing/${policyNumber}/currentbill`;
    return this.http.get(url);
  }

  getScheduledBillsByPolicy(policyNumber: string): Observable<any> {
    const url =                 `${this.billingURL}/billing/scheduled-bills?policyNumber=${policyNumber}`;
    return this.http.get(url);
  }

  getHistoryBillsByPolicy(policyNumber: string): Observable<any> {
    const url =                 `${this.billingURL}/billing/history-bills?policyNumber=${policyNumber}`;
    return this.http.get(url);
  }

  getPendingChecksByPolicy(policyNumber: string): Observable<any> {
    const url =                 `${this.billingURL}/billing/${policyNumber}/unprocessedpayment`;
    return this.http.get(url);
  }

  makeECheckPayment(billingData, email, policyNumber): Observable<any> {
    const url =                 `${this.billingURL}/billing/${email}/${policyNumber}`;
    return this.http.post(url, billingData);
  }

}
