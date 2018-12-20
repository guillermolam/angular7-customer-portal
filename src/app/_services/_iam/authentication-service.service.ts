
import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { of, throwError }         from 'rxjs';
import { Observable }             from 'rxjs/Observable';
import { catchError, map }        from 'rxjs/operators';
import { environment }            from '../../../environments/environment';
import { ServiceHelpersService }  from '../../_helpers/service-helpers.service';
import { User }                   from '../../_models/user';


@Injectable()
export class AuthenticationService {
  public token:               string;

  constructor(
    private http:             HttpClient,
    private serviceHelpers:   ServiceHelpersService
  ) {
    // set token if saved in local storage
    const currentUser =       JSON.parse(localStorage.getItem('currentUser'));
    this.token =              currentUser && currentUser.token;
  }

  confirmPolicyAndAccount(userObject): Observable<any> {
    const
      user =                userObject.$user.source.value,
      url =                 `${environment.backend_server_url}/customers/accounts/${user.email}`,
      userSendObject =      this.serviceHelpers.creatUserObject(user, 'createaccount')
    ;
    return this.http.put(url, userSendObject, this.serviceHelpers.options)
      .pipe(
        map((response) => response ),
        catchError((err) => of(err))
      );
  }

  createPassword(userObject): Observable<any> {
    const
      user =                userObject.$user.source.value,
      url =                 `${environment.backend_server_url}/customers/accounts/${user.email}`,
      userSendObject =      this.serviceHelpers.creatUserObject(user, 'createaccount')
    ;
    return this.http.put(url, userSendObject, this.serviceHelpers.options);
  }

  forgotPasswordSendEmailId(userEmail: string): Observable<any> {
    const url = `${environment.backend_server_url}/identity/users/account-recovery`;
    return this.http.post(url, {} , {
      params : { email: userEmail },
      headers : {
        'Content-Type': 'application/json'
      }
    });
  }

  login(username: string, password: string) {
    const urlpartone =      `${environment.backend_auth_server_url}/`,
          urlparttwo =      `grant_type=password&username=${username}&password=${password}`,
          url = urlpartone + urlparttwo;

    return this.http.post(url, {}, {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded'
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
    this.token =        null;
    localStorage.removeItem('currentUser');
  }

  tokenVerification(token: string, email: string): Observable<object> {
    const url =           `${environment.backend_server_url}/identity/users/token-validation/${email}?token=${token}`;
    return this.http.post(url, {}, this.serviceHelpers.options);
  }

  updateMileage(user: User, mileage: number) {
    const url =  `https://httpstat.us/404`;
    return this.http.get(url, {});
  }

  updatePassword(user: User, userToken: string) {
    console.log('update-password-authservice' + user +'---->'+ user.password);
    const url =           `${environment.backend_server_url}/identity/users/password/${user.email}`;
    return this.http.put(url, {} , {
      params : {
        newPassword:    user.password
      },
      headers : {
        'Content-Type': 'application/json'
      }
    });
  }

  verifyAccountTokenVerification(token: string, email: string): Observable<object> {
    const url =           `${environment.backend_server_url}/customers/accounts/?token=${token}&email=${email}`;
    return this.http.put(url, {}, this.serviceHelpers.options);
  }

  verifyPolicy(userObject): Observable<object> {
    const
      user =            userObject.$user.source.value,
      policyNumber =    user.policyDetails[0].policynumber.policynumber,
      url =             `${environment.backend_server_url}/personal-policies/${policyNumber}/insureds/namevalidation`,
      userSendObject =  this.serviceHelpers.creatUserObject(user, 'personalpolicy')
    ;
    return this.http.put(url, userSendObject);
  }

  verifyUser(userObject): Observable<object> {
    const user =         userObject.$user.source.value,
        userSendObject = this.serviceHelpers.creatUserObject(user, 'verifyuser'),
        url =          `${environment.backend_server_url}/customers/accounts/${user.email}`;

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
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/links`;

    return this.http.get(url).pipe(
      map(()=> true),
      catchError(()=> throwError(false)
      ));
  }

}
