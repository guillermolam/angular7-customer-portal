import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { of, throwError }         from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { catchError, map }        from 'rxjs/operators';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';
import { User }                   from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  user:                           User;

  constructor(
    private http:                 HttpClient,
    private serviceHelpers:       ServiceHelpersService
  ) { }

  payBillByCheck(bill, user): Observable<any>{
    const
      url =                 `${environment.backend_server_url_account}/${user.email}`,
      userSendObject =      this.serviceHelpers.creatUserObject(bill, 'payByCheck');
    ;
    return this.http.put(url, userSendObject, this.serviceHelpers.options)
      .pipe(
        map((response) => response ),
        catchError((err) => of(err))
      );
  }
}
