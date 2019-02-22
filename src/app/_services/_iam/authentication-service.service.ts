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
      user =                userObject.$user.source.value,
      // url =                 `https://mdv-doctest:8083/customers/accounts/${user.email}`,
      url =                 `${environment.backend_server_url_account}/${user.userDetails.email.address}`,
      userSendObject =      this.serviceHelpers.creatUserObject(user, 'createaccount')

    return this.http.put(url, userSendObject, this.serviceHelpers.options)
      .pipe(
        map((response) => response ),
        catchError((err) => of(err))
      );
  }

  createPassword(userObject): Observable<any> {
    const
      user =                userObject.$user.source.value,
      url =                 `${environment.backend_server_url_account}/create`,
      userSendObject =      this.serviceHelpers.creatUserObject(user, 'createaccount')
    ;
    return this.http.put(url, userSendObject, this.serviceHelpers.options);
  }

  forgotPasswordSendEmailId(userEmail: string): Observable<any> {
    const url = `${environment.backend_server_url_identity}/account-recovery`;

    return this.http.post(url, {} , {
      params : {                  email: userEmail },
      headers : {
        'Content-Type':           'application/json'
      }
    });
  }

  getUserDetailsByEmail(email) {
    // const url =  `https://mdv-doctest:8087/identity/users/${email}`;
    const url =  `${environment.backend_server_url_identity}/${email}`;

    return forkJoin(
      this.http.get(url),
      this.bankAccountService.getBankAccountByEmail(email)
    );
  }

  login(username: string, password: string) {
    const url =     `${environment.backend_server_url_auth}`;
    const btoaPass =  window.btoa(password);
    return this.http.get(url,{
      params: {
        username: username,
        password: btoaPass,
        grant_type: `password`
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .pipe(
        map((access_token) => {
            return JSON.stringify({ username, access_token });
        }),
        catchError( (error) => throwError('Invalid email/password combination'))
      )
  }

  logout(): void {
    this.token =          null;
    localStorage.removeItem('currentUser');
  }

  tokenVerification(token: string, email: string): Observable<object> {
    const url =           `${environment.backend_server_url_identity}/token-validation/${email}?token=${token}`;
    return this.http.post(url, {}, this.serviceHelpers.options);
  }

  updatePassword(user) {
    const url =           `${environment.backend_server_url_identity}/password/${user.email}`;
    const btoaPass =  window.btoa(user.password);
    return this.http.put(url, {} , {
      params : {
        newPassword:            btoaPass
      },
      headers : {
        'Content-Type':         'application/json'
      }
    });
  }

  verifyAccountTokenVerification(token: string, email: string): Observable<object> {
    // const url =           `https://mdv-doctest:8083/customers/accounts/?token=${token}&email=${email}`;
    const url =           `${environment.backend_server_url_account}/?token=${token}&email=${email}`;
    return this.http.put(url, {}, this.serviceHelpers.options);
  }

  verifyPolicy(userObject): Observable<object> {
    const
      policyNumber =    userObject[0].policyDetail.policynumber.policynumber,
      url =             `${environment.backend_server_url_policy}/${policyNumber}/insureds/namevalidation`,
      userSendObject =  this.serviceHelpers.creatUserObject(userObject[0], 'personalpolicy')
    ;
    return this.http.put(url, userSendObject);
  }

  verifyUser(userObject): Observable<object> {
    const user =          userObject.$user.source.value,
        userSendObject =  this.serviceHelpers.creatUserObject(user, 'verifyuser'),
        url =             `${environment.backend_server_url_account}/${user.userDetails.email.address}`;

    return this.http
      .post(url, userSendObject, this.serviceHelpers.options)
      .pipe(
        map((info: any) => info),
        catchError( (error) => throwError(error))
      )
    ;
  }

  verifyPolicyLink(userObject): Observable<boolean>{ 
    const user =            userObject.$user.source.value;
    const policyNumber =    user.policyDetails[0].policynumber.policynumber;
    const url =             `${environment.backend_server_url_policy}/${policyNumber}/links`;


    return this.http.get(url).pipe(
      map(() => true),
      catchError(() => throwError(false)
      ));
  }

}
