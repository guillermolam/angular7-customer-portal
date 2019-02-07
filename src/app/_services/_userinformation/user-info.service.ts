import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { of, throwError }     from 'rxjs';
import { Observable }         from 'rxjs';
import { catchError, map }    from 'rxjs/operators';
import { environment }        from '../../../environments/environment'; // change it to environment later
import { ServiceHelpersService } from '../../_helpers/service-helpers.service';
import { PolicyDetailsService } from '../my-insurance/policy-details.service';
import { User }               from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  /** 
   * May need to remove this service as it might not be in use.
   * Thus I am not updating this service
   */

  billingURL: string = 'https://mdv-doctest:8086'; ///will be removed
  httpOptions;

  constructor(
    private http: HttpClient,
    private serviceHelpers: ServiceHelpersService,
    private policyDetailsService: PolicyDetailsService
  ) {
    this.httpOptions = serviceHelpers.options; 
  }

  getBankAccountInfo(user): Observable<object> {
    const url = `${environment.backend_server_url}`;
    return this.http.get(url);
  }

  getCurrentBillByPolicy(policyNumber): Observable<object> {
    const url = `${environment.backend_server_url_billing}/${policyNumber}/currentbill`; // change
    return this.http.get(url);
  }

  getUserDocuments(policyNumber, user, accessToken): Observable<object> {
    const url = `${environment.backend_server_url_policy}/${policyNumber}/documents`;
    return this.http.get(url);
  }

  sendBankAccountInfo(bankInfo): Observable<any> {
    const url = `${environment.backend_server_url}`;
    return this.http.put(url, bankInfo, this.httpOptions);
  }

  policyByEmail(email) {
    const url = `${environment.backend_server_url_policy}/${email}`;
    return this.http.get(url);
  }
}
