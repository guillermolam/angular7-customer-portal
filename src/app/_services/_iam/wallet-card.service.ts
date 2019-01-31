import { HttpClient }               from '@angular/common/http';
import { Injectable }               from '@angular/core';
import { Observable,  }             from 'rxjs';
import { environment }              from '../../../environments/environment';

@Injectable()
export class WalletCardService {
  backend:                          string = environment.backend_server_cu;
  constructor(
    private http:                   HttpClient,
  ) {}

  generatePkPass(policyNumber): Observable<any> {
    const options = {
        responseType:               'arraybuffer' as 'json'
    };
    const url: string =             `${this.backend}/customers/accounts/wallet/${policyNumber}`;
    return this.http.get(url, options);
  }

}
