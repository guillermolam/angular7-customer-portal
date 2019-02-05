import { HttpClient }           from '@angular/common/http';
import { Injectable }           from '@angular/core';
import { of, throwError,
  BehaviorSubject }             from 'rxjs';
import { Observable }           from 'rxjs/Observable';
import { catchError, map }      from 'rxjs/operators';
import { environment }          from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';
import { User }                 from '../../_models/user';
import { UserService }          from './../user.service';

@Injectable({
  providedIn: 'root'
})
export class PaperlessService {
  firstTime:                    boolean;
  billing:                      string = `${environment.backend_server_url}/billing-api`;
  personalPolicy:               string = `${environment.backend_server_url}/personal-policy-api`;
  private messageSource =       new BehaviorSubject<boolean>(this.firstTime);
  $firstTime =                  this.messageSource.asObservable();

  constructor(
    private http:               HttpClient,
    private serviceHelpers:     ServiceHelpersService,
    private userService:        UserService,
  ) {}

  /** --- INFO ---
   * Due to some confusing language around paperless, here is a cheat sheet.
   * EFT = epay
   * EBill = EBill
   * EDF = EPolicy
   * - end point info for EFT, EBill, EDF -
   * EFT = https://bitbucket.org/mapfre-usa-b2c/billing-api/src/5f4bd12977d7c2461a78d634d7ee48d69dfc5e8a/src/api-test/enrollUnEnrollUpdateEFT?at=master
   * EBILL = https://bitbucket.org/mapfre-usa-b2c/personal-policy/src/master/src/api-test/com/mapfre/policy/personal/infrastructure/rest/enroll-unenrollEBill
   * EDF = https://bitbucket.org/mapfre-usa-b2c/personal-policy/src/master/src/api-test/com/mapfre/policy/personal/infrastructure/rest/enroll-unenrollPaperless
   */

  // --- unenroll methods

  cancelPaperlessEPolicy( policyid, email ): Observable<any> {
    const url =               `${this.backendPersonalPolicy}/personal-policies/${email}/${policyid}/paperless-unenrollment`;
    return this.http.post(url, {}, this.serviceHelpers.options );
  }

  cancelPaperlessEPay( policyid, email ): Observable<any> {
    const url =               `${this.backendBilling}/billing/${email}/${policyid}/unenroll-eft`;
    return this.http.put(url, {}, this.serviceHelpers.options );
  }

  cancelPaperlessEBill( policyid, email ): Observable<any> {
    const url =               `${this.backendPersonalPolicy}/personal-policies/${email}/${policyid}/ebill-unenrollment`;
    return this.http.post(url, {}, this.serviceHelpers.options );
  }

  // --- enroll methods

  enrollPaperlessEPolicy( policyid, email ): Observable<any> {
    const url =               `${this.backendPersonalPolicy}/personal-policies/${email}/${policyid}/paperless-enrollment`;
    return this.http.post(url, {}, this.serviceHelpers.options );
  }

  enrollPaperlessEPay( policyid, formData, email ): Observable<any> {
    const url =               `${this.backendBilling}/billing/${email}/${policyid}/enroll-eft`;
    return this.http.put(url, formData, this.serviceHelpers.options );
  }

  enrollPaperlessEBill( policyid, email ): Observable<any> {
    const url =               `${this.backendPersonalPolicy}/personal-policies/${email}/${policyid}/ebill-enrollment`;
    return this.http.post(url, {}, this.serviceHelpers.options );
  }

  // --- other paperless methods
  updatePaperlessEPay( policyid, formData, email ): Observable<any>{
    const url =               `${this.backendBilling}/billing/${email}/${policyid}/update-eft`;
    return this.http.put(url, formData, this.serviceHelpers.options );
  }

  checkIfEnrolledInEPay(userData): boolean {
    let all = false;

    // This is to check if any of the paperless features are enrolled or not.
    // That way we can easily start the onboarding or not.
   /* for (const flags of userData) {
      const flag = flags['policyFlags'];
      if ( flag.isEft == false ) {
        all = false;
        break;
      }
      else {
        all = true;
      }
    }*/
    return all;
  }

  updatePaperlessFirstTime(firsttime: boolean) {
    this.messageSource.next(firsttime);
  }
}
