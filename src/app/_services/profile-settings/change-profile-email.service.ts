import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { BehaviorSubject }        from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeProfileEmailService { 
  backendAccounts:                string = 'https://mdv-doctest:8083';
  backendIdentity:                string = 'https://mdv-doctest:8087';   // environment.backend_server_url
  email:                          any;
  process:                        boolean;
  private messageSource =         new BehaviorSubject<any>(this.email);
  private processSource =         new BehaviorSubject<any>(this.process);
  $email =                        this.messageSource.asObservable();
  $process =                      this.processSource.asObservable();

  constructor(
    private http:                 HttpClient,
    private serviceHelpers:       ServiceHelpersService
  ) { }

  // Endpoints
  changeAccountEmail(oldEmail, newEmail): Observable<any> {
    const url =                   `${this.backendAccounts}/customers/accounts/change-email?email=${oldEmail}`;
    const body = {
        email:                    newEmail,
        password:                 ''
    };
    return this.http.put(url, body, this.serviceHelpers.options);
  }

  checkEmailExists(oldEmail, newEmail): Observable<any> {
    const url =                   `${this.backendIdentity}/identity/users/change-email?email=${oldEmail}`;
    const body = {
      email:                      newEmail,
      password:                   ''
    };
    return this.http.put(url, body, this.serviceHelpers.options);
  }

  // Observables
  saveEmail(email) {
    this.messageSource.next(email);
  }

  saveProcess(b) {
    this.processSource.next(b);
  }

  clearEmail() {
    this.messageSource.next('');
  }

  clearProcess() {
    this.processSource.next(false);
  }


}
