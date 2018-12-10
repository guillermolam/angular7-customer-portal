import { HttpClient, HttpHeaders }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { of, throwError }     from 'rxjs';
import { Observable }         from 'rxjs';
import { catchError, map }    from 'rxjs/operators';
import { environment }        from '../../../environments/environment';//change it to environment later
import { User }               from '../../_models/user';
import { PolicyDetailsService } from '../my-insurance/policy-details.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  billingURL: string = 'https://mdv-doctest:8086'; ///will be removed

  httpOptions: any = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Content-Type': 'application/json;charset=utf-8'
    })
  }

  constructor(
    private http: HttpClient,
    private policyDetailsService: PolicyDetailsService
  ) { }

  getUserDocuments(policyNumber, user, accessToken): Observable<object> {
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    return this.http.get(url);
  }

  policyByEmail(email) {
    const url = `${environment.backend_server_url}/personal-policies/testmfre@gmail.com`;
    return this.http.get(url);
    // this.http.get(url).subscribe((response)=>{
    //   this.policyDetailsService.updatePolicyDetails(response);
    // });
  }

  getCurrentBillByPolicy(policyNumber): Observable<object> {
    const url = `${environment.backend_server_url}/billing/${policyNumber}/currentbill`; ///change
    return this.http.get(url);
  }

}
