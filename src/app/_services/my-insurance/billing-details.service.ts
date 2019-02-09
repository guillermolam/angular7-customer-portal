import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { Observable, forkJoin }         from 'rxjs';
import { environment }        from '../../../environments/environment';
import { BillingDataService } from '../data-services/billing-data.service';


@Injectable({
  providedIn: 'root'
})
export class BillingDetailsService {

  // billingURL:                   string = environment.backend_server_bl;

  constructor(
    private http:               HttpClient,
    private billingDataService: BillingDataService
  ) {}


  getAllDetailsByPolicy(policyNumber: string){
    forkJoin(
      this.getCurrentBillByPolicy(policyNumber),
      this.getScheduledBillsByPolicy(policyNumber),
      this.getHistoryBillsByPolicy(policyNumber),
      this.getPendingChecksByPolicy(policyNumber),
    ).subscribe(([billingResponse, scheduledBills, historyResponse, pendingCheckPayments]) => {
       let result = [    
           { billingDetails:       {...billingResponse}},
           { billingHistory:       historyResponse},
           { scheduledBills:       scheduledBills },
           { pendingCheckPayments: pendingCheckPayments }
       ]
       this.billingDataService.updateBillingDetails({...result});
    });
  }


  getCurrentBillByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/${policyNumber}/currentbill`;
    const url = `${environment.backend_server_url_billing}/${policyNumber}/currentbill`;
    return this.http.get(url);
  }


  getScheduledBillsByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/scheduled-bills?policyNumber=${policyNumber}`;
    const url = `${environment.backend_server_url_billing}/scheduled-bills?policyNumber=${policyNumber}`;
    return this.http.get(url);
  }

  getHistoryBillsByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/history-bills?policyNumber=${policyNumber}`;
    const url = `${environment.backend_server_url_billing}/history-bills?policyNumber=${policyNumber}`;
    return this.http.get(url);
  }


  getPendingChecksByPolicy(policyNumber: string){
    // const url = `${this.billingURL}/billing/${policyNumber}/unprocessedpayment`;
    const url = `${environment.backend_server_url_billing}/${policyNumber}/unprocessedpayment`;
    return this.http.get(url);
  }

  makeECheckPayment(billingData, email, policyNumber){
    // const url = `${this.billingURL}/billing/${email}/${policyNumber}`;
    const url = `${environment.backend_server_url_billing}/${email}/${policyNumber}`;
    return this.http.post(url,billingData);
  }

}
