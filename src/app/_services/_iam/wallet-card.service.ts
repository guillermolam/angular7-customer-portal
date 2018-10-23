import { HttpClient }               from '@angular/common/http';
import { Injectable }               from '@angular/core';
import { Observable,  }             from 'rxjs';
import { environment }              from '../../../environments/environment';

@Injectable()
export class WalletCardService {

  constructor(
    private http:             HttpClient,
  ) {}

  generatePkPass(email): Observable<any> {
    const options = {
        responseType:               'arraybuffer' as 'json'
    };
    const url: string =           `${environment.account}/accounts/wallet/${email}`;
    return this.http.get(url, options);
  }

}
