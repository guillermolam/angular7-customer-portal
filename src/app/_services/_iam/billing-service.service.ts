import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { of, throwError }     from 'rxjs';
import { Observable }         from 'rxjs/Observable';
import { catchError, map }    from 'rxjs/operators';
import { environment }        from '../../../environments/environment';

import { TestingService }     from './../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(
    private testingResponses: TestingService
  ) { }

  payBillByCheck(bill) { //: Observable<any> {
    /*const
      url =                 `${environment.backend_server_url}/customers/accounts/${user.email}`,
    ;
    return this.http.put(url, userSendObject, this.options)
      .pipe(
        map((response) => response ),
        catchError((err) => of(err))
      );
    */
    //console.log(bill);
    return this.testingResponses.testingResponses(bill);
  }
}
