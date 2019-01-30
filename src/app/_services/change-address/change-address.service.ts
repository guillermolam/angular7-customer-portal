import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { environment }            from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeAddressService {
  backend: string =                'https://mdv-doctest:8084';

  constructor( 
    private http:             HttpClient,
  ) { }

   updateMailingAddress(policyNumber, reqBody) {
    const url =             `${this.backend}/personal-policies/${policyNumber}/mailing-address`;
    // const url =          `${environment.backend_server_url}/personal-policies/${policyNumber}/mailing-address`
    return this.http.post(url,reqBody);
   }

   updateResidentialAddress(policyNumber, reqBody) {
    const url =             `${this.backend}/personal-policies/${policyNumber}/residential-address`;
    // const url =          `${environment.backend_server_url}/personal-policies/${policyNumber}/residential-address`
    return this.http.post(url, reqBody);
   }


}
