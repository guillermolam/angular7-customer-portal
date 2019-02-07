
import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { of, throwError, forkJoin }
                                  from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { catchError, map }        from 'rxjs/operators';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  // backend:                        string = environment.backend_server_mk;

  constructor(
    private http:                 HttpClient,
    private serviceHelpers:       ServiceHelpersService,
  ) { }

  getClaimsList(email): Observable<any> {
    let url =                     `${environment.backend_server_url_claims}/?email=${email}`;
    return this.http.get(url, this.serviceHelpers.options);
  }

  getClaimsDetails(email): Observable<any> {
    let url =                     `${environment.backend_server_url_claims}/loss?email=${email}`;
    return this.http.get(url, this.serviceHelpers.options);
  }
}
