import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { of, throwError,
  forkJoin }                      from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { catchError, map }        from 'rxjs/operators';
import { BankAccountService }     from './../profile-settings/bank-account.service';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';
import { User }                   from '../../_models/user';


@Injectable()
export class AuthenticationService {

  // Anything that was originally using the backendAPI env is not being changed.

  backendApi:                     string = environment.backend_server_url;
  backendAuth:                    string = environment.backend_auth_server_url;
  backendCustomers:               string = environment.backend_server_cu;
  backendId:                      string = environment.backend_server_id;
  backendPerPol:                  string = environment.backend_server_pp;

  public token:                   string;

  constructor(
    private http:                 HttpClient,
    private serviceHelpers:       ServiceHelpersService,
    private bankAccountService:   BankAccountService
  ) {
    // set token if saved in local storage
    const currentUser =           JSON.parse(localStorage.getItem('currentUser'));
    this.token =                  currentUser && currentUser.token;
  }

  confirmPolicyAndAccount(userObject): Observable<any> {
    const
      user =                      userObject.$user.source.value,
      url =                       `${this.backendCustomers}/customers/accounts/${user.email}`,
      userSendObject =            this.serviceHelpers.creatUserObject(user, 'createaccount')
    ;
    return this.http.put(url, userSendObject, this.serviceHelpers.options)
      .pipe(
        map((response) => response ),
        catchError((err) => of(err))
      );
  }

  createPassword(userObject): Observable<any> {
    const
      user =                      userObject.$user.source.value,
      url =                       `${this.backendApi}/customers/accounts/${user.email}`,
      userSendObject =            this.serviceHelpers.creatUserObject(user, 'createaccount')
    ;
    return this.http.put(url, userSendObject, this.serviceHelpers.options);
  }

  forgotPasswordSendEmailId(userEmail: string): Observable<any> {
    const url =                   `${this.backendApi}/identity/users/account-recovery`;
    return this.http.post(url, {} , {
      params : {                  email: userEmail },
      headers : {
        'Content-Type':           'application/json'
      }
    });
  }

  getUserDetailsByEmail(email) {
    const url =                   `${this.backendId}/identity/users/${email}`;
    return forkJoin(
      this.http.get(url),
      this.bankAccountService.getBankAccountByEmail(email)
    );
  }

  login(username: string, password: string) {
    const urlpartone =            `${this.backendAuth}/`,
          urlparttwo =            `grant_type=password&username=${username}&password=${password}`,
          url =                   urlpartone + urlparttwo;

    return this.http.post(url, {}, {
        headers : {
          'Content-Type':         'application/x-www-form-urlencoded'
        }
      })
      .pipe(
        map((access_token) => {
          if (access_token) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ username, access_token })
            );
            console.log('access_token', access_token);
            return true;
          }
          else {
            return false;
          }
        }),
        catchError( (error) => throwError('Invalid email/password combination'))
      );
  }

  logout(): void {
    this.token =          null;
    localStorage.removeItem('currentUser');
  }

  tokenVerification(token: string, email: string): Observable<object> {
    const url =                 `${this.backendApi}/identity/users/token-validation/${email}?token=${token}`;
    return this.http.post(url, {}, this.serviceHelpers.options);
  }

  updatePassword(user: User) {
    const url =                 `${this.backendId}/identity/users/password/${user.email}`;
    return this.http.put(url, {} , {
      params : {
        newPassword:            user.password
      },
      headers : {
        'Content-Type':         'application/json'
      }
    });
  }

  verifyAccountTokenVerification(token: string, email: string): Observable<object> {
    const url =                `${this.backendCustomers}/customers/accounts/?token=${token}&email=${email}`;
    return this.http.put(url, {}, this.serviceHelpers.options);
  }

  verifyPolicy(userObject): Observable<object> {
    const
      user =                    userObject.$user.source.value,
      policyNumber =            user.policyDetails[0].policynumber.policynumber,
      url =                     `${this.backendPerPol}/personal-policies/${policyNumber}/insureds/namevalidation`,
      userSendObject =          this.serviceHelpers.creatUserObject(user, 'personalpolicy')
    ;
    return this.http.put(url, userSendObject);
  }

  verifyUser(userObject): Observable<object> {
    const
      user =                    userObject.$user.source.value,
      userSendObject =          this.serviceHelpers.creatUserObject(user, 'verifyuser'),
      url =                     `${this.backendCustomers}/customers/accounts/${user.userDetails.email.address}`
    ;

    return this.http
      .post(url, userSendObject, this.serviceHelpers.options)
      .pipe(
        map((info: any) => info),
        catchError( (error) => throwError(error))
      )
    ;
  }

  verifyPolicyLink(userObject): Observable<boolean> {
    const
      user =                  userObject.$user.source.value,
      policyNumber =          user.policyDetails[0].policynumber.policynumber,
      url =                   `${this.backendApi}/personal-policies/${policyNumber}/links`;

    return this.http.get(url).pipe(
      map(() => true),
      catchError(() => throwError(false)
      ));
  }

}
