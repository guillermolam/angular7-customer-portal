import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { of, throwError, forkJoin }
                                  from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { catchError, map, mergeMap }        from 'rxjs/operators';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';
import { error }                  from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MileageService {

  backendPerPol:                  string = environment.backend_server_url;

  constructor(
    private http:                 HttpClient,
    private serviceHelpers:       ServiceHelpersService
  ) { }

  checkMilageValues( inputValue, arrayValue ): string {
    let stringValue;
    if ( inputValue.value !== '' && inputValue.dirty === true ) {
      if ( inputValue.value > arrayValue ) {
        stringValue = 'ok';
      }
      else if ( inputValue.value !== arrayValue ) {
        stringValue = 'input was less than';
      }
      else {
       stringValue = 'values are the same';
      }
    }
    else {
      stringValue = 'input not changed';
    }
    console.log(stringValue, inputValue, arrayValue )

    return stringValue;
  }

  updateMileage( emailAddress, policyId, vechicalId, inputValue, arrayValue ): Observable<any> {
    const url = `${environment.backend_server_url_policy}/${emailAddress}/${policyId}/${vechicalId}?odometerReading=${inputValue}`;

    if ( this.checkMilageValues( inputValue, arrayValue ) === 'values are the same') {
      return throwError('Same Value');
    }
    else if ( this.checkMilageValues( inputValue, arrayValue ) === 'input was less than') {
      return throwError('Less Than Original');
    }
    else if ( this.checkMilageValues( inputValue, arrayValue ) == 'ok' ) {
      return this.http.post(url, {} , this.serviceHelpers.options)
      .pipe(
        map( (res) => res['payload']),
        catchError( (err) => {
         return throwError('ok');
        })
      );
    }
    else {
      return throwError('Input has not changed');
    }
  }

}
