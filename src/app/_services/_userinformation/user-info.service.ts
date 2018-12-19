import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { of, throwError }     from 'rxjs';
import { Observable }         from 'rxjs';
import { catchError, map }    from 'rxjs/operators';
import { environment }        from '../../../environments/environment';//change it to environment later
import { ServiceHelpersService } from '../../_helpers/service-helpers.service';
import { PolicyDetailsService } from '../my-insurance/policy-details.service';
import { User }               from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

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
    const url = `${environment.backend_server_url}/billing/${policyNumber}/currentbill`; ///change
    return this.http.get(url);
  }

  getUserDocuments(policyNumber, user, accessToken): Observable<object> {
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    return this.http.get(url);
  }

  sendBankAccountInfo(bankInfo): Observable<any> {
    const url = `${environment.backend_server_url}`;
    return this.http.put(url, bankInfo, this.httpOptions);
  }

  policyByEmail(email: string = 'testmfre@gmail.com') {
    const url = `${environment.backend_server_url}/personal-policies/${email}`;
    return this.http.get(url);
    // this.http.get(url).subscribe((response)=>{
    //   this.policyDetailsService.updatePolicyDetails(response);
    // });
  }
}
