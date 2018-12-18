import { HttpClient }               from '@angular/common/http';
import { Injectable }               from '@angular/core';
import { Observable,  }             from 'rxjs';
import { environment }              from '../../../environments/environment';

@Injectable()
export class WalletCardService {

  constructor(
    private http:             HttpClient,
  ) {}

  generatePkPass(policyNumber): Observable<any> {
    const options = {
        responseType:               'arraybuffer' as 'json'
    };
    // const url: string =           `https://mdv-doctest:8083/customers/accounts/wallet/${policyNumber}`;
    const url: string =           `${environment.backend_server_url}/customers/accounts/wallet/${policyNumber}`;
    return this.http.get(url, options);
  }

}
