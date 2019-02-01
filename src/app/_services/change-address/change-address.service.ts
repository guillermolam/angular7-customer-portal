import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { environment }            from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeAddressService {
  backendPP: string =              environment.backend_server_pp;

  constructor(
    private http:                  HttpClient,
  ) { }

   updateMailingAddress(policyNumber, reqBody): Observable<any> {
    const url =                   `${this.backendPP}/personal-policies/${policyNumber}/mailing-address`;
    return this.http.post(url, reqBody);
   }

   updateResidentialAddress(policyNumber, reqBody): Observable<any> {
    const url =                   `${this.backendPP}/personal-policies/${policyNumber}/residential-address`;
    return this.http.post(url, reqBody);
   }


}
