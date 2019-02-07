import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { environment }            from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeAddressService {
  // backendPP: string =              environment.backend_server_pp;

  constructor(
    private http:                  HttpClient,
  ) { }

   updateMailingAddress(policyNumber, reqBody){
    // const url =  `https://mdv-doctest:8084/personal-policies/${policyNumber}/mailing-address`;
    const url =  `${environment.backend_server_url_policy}/${policyNumber}/mailing-address`
    return this.http.post(url,reqBody)
   }

   updateResidentialAddress(policyNumber, reqBody){
    // const url =  `https://mdv-doctest:8084/personal-policies/${policyNumber}/residential-address`;
    const url =  `${environment.backend_server_url_policy}/${policyNumber}/residential-address`
    return this.http.post(url,reqBody)
   }


}
