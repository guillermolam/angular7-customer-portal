import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { of, throwError }     from 'rxjs';
import { Observable }         from 'rxjs/Observable';
import { catchError, map }    from 'rxjs/operators';
import { environment }        from '../../../environments/environment';
import { User }               from '../../_models/user';

@Injectable()
export class AuthenticationService {
  public token:               string;
  private options:            object = { headers :
    {'Content-Type': 'application/json' }
  };

  constructor(
    private http:             HttpClient,
  ) {
    // set token if saved in local storage
    const currentUser =       JSON.parse(localStorage.getItem('currentUser'));
    this.token =              currentUser && currentUser.token;
  }

  creatUserObject(items, db): object {
    let obj;
    if ( db == 'account' ) {
      obj =  {
        customer: {
          firstName:        items.firstName,
          middleName:       items.middleName,
          lastName:         items.lastName,
          email:            items.email
        },
        policynumbers: [{
            policynumber:   items.policyDetails[0].policynumber.policynumber
        }],
        credentials: {
          email:            items.email,
          password:         items.password
        }
      };
    }
    else if (db == 'personalpolicy') {
      obj = {
        firstName:          items.firstName,
        middleName:         items.middleName,
        lastName:           items.lastName
      };
    }
    return obj;
  }

  confirmPolicyAndAccount(userObject): Observable<any> {
    const
      user =                userObject.$user.source.value,
      url =                 `${environment.account}/accounts/${user.email}`,
      userSendObject =      this.creatUserObject(user, 'account')
    ;
    return this.http.put(url, userSendObject, this.options)
      .pipe(
        map((response) => response ),
        catchError((err) => of(err))
      );
  }

  createPassword(userObject): Observable<any> {
    const
      user =                userObject.$user.source.value,
      url =                 `${environment.account}/accounts/${user.email}`,
      userSendObject =      this.creatUserObject(user, 'account')
    ;
    return this.http.put(url, userSendObject, this.options);
  }

  forgotPasswordSendEmailId(userEmail: string): Observable<any> {
    const url = `${environment.identity}/identity/users/account-recovery`;
    return this.http.post(url, {} , {
      params : { email: userEmail },
      headers : {
        'Content-Type': 'application/json'
      }
    });
  }

  login(username: string, password: string) {
    const client_id =     '7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d',
          urlpartone =      `${environment.api_gateway_url}/auth/oauth/v2/token`,
          urlparttwo =      `grant_type=password&username=${username}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&scope=oob`,
          url = urlpartone + '?' + urlparttwo;

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
            return true;
          }
          else {
            return false;
          }
        }),
        catchError( (error) => throwError('Invalid email/password combination'))
      );
  }
   /*oringal params -- do not get rid of for the moment
     .post<any>(url, {}, {
        params : {
          grant_type: 'password',
          username: username,
          password: password,
          client_id:'7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret: 'aeb8f080-98b7-488d-bd10-8d26fedeef2d',
          scope: 'oob'
        },
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      */

  logout(): void {
    this.token =        null;
    localStorage.removeItem('currentUser');
  }

  tokenVerification(token: string, email: string): Observable<object> {
    const url =           `${environment.identity}/identity/users/${email}?token=${token}`;	
    return this.http.post(url, {}, this.options);
  }

  updatePassword(user: User, userToken: string) {
    const url =           `${environment.identity}/identity/users/password/${user.email}`;
    return this.http.put(url, {} , {
      params : {
        newPassword:    user.password,
        token:          userToken
      },
      headers : {
        'Content-Type': 'application/json'
      }
    });
  }

  verifyAccountTokenVerification(token: string, email: string): Observable<object> {
    const url =           `${environment.account}/accounts?token=${token}&email=${email}`;
    return this.http.put(url, {}, this.options);
  }

  verifyPolicy(userObject): Observable<any> {
    const
      user =            userObject.$user.source.value,
      policyNumber =    user.policyDetails[0].policynumber.policynumber,
      url =             `${environment.personalpolicy}/policies/${policyNumber}`,
      userSendObject =  this.creatUserObject(user, 'policies')
    ;
    return this.http.put(url, userSendObject, this.options);
  }

  verifyUser(userObject): Observable<any> {
    const
      user =            userObject.$user.source.value,
      url =             `${environment.account}/accounts/${user.email}`,
      userSendObject =  this.creatUserObject(user, 'account')
    ;
    return this.http.post(url, userSendObject, this.options);
  }

}
