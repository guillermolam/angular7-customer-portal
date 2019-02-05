import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { of, throwError, forkJoin }
                                  from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { catchError, map, mergeMap }        from 'rxjs/operators';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MileageService {

  backendPerPol:                  string = environment.backend_server_pp;

  constructor(
    private http:                 HttpClient,
    private serviceHelpers:       ServiceHelpersService
  ) { }

  checkForSameValue( inputValue, arrayValue ) {
    // return () ?
  }

  checkMilageValues( inputValue, arrayValue ): boolean {
    if ( (inputValue.value !== '' || inputValue.value !== arrayValue) && inputValue.dirty ) {
      return true;
    }
    else {
      return false;
    }
  }

  updateMileage(emailAddress, policyId, vechicalId, inputValue, arrayValue ): Observable<any> {
    const url =                 `${this.backendPerPol}/personal-policies/${emailAddress}/${policyId}/${vechicalId}?odometerReading=${inputValue}`;
    if ( this.checkMilageValues( inputValue, arrayValue ) ) {
      return this.http.post(url, {} , this.serviceHelpers.options)
      .pipe(
       /* mergeMap(
          err => inputValue === arrayValue 
          ? throwError('Same Value')
          : throwError(`no ${err}`)
        ) */
        map( (res) => res['payload']),
        catchError( (err) => {
          console.log(err)
          if (inputValue.value === arrayValue) {
            return throwError('Same Value');
          }
          else if (err) {
            return throwError(`no ${err}`);
          }
        })
      );
    }
    else {
      return throwError( this.checkMilageValues( inputValue, arrayValue ) );
    }

  }

}
