import { HttpClient }         from "@angular/common/http";
import { Injectable }         from "@angular/core";
import { Observable }         from "rxjs";
import { environment }        from "../../../environments/environment";
import { User }               from "../../_models/user";
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthenticationService {
  public token:               string;

  private userObservable:     Observable<any>;
  private options:            Object = { headers : 
    {"Content-Type": "application/json" }
  };

  constructor(
    private http:             HttpClient,
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  createPassword(userObject): Observable<any> {
    const user = userObject.$user.source.value;
    let 
      url = `${environment.account}/accounts/${user.email}`,
      userSendObject = {
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
        policynumbers: user.policynumbers
      }
    ;
    return this.http.put<any>(url, userSendObject, this.options)
  }

  findPolicy(userObject): Observable<any> {
    const user = userObject.$user.source._value;
    let 
      url: string = `${environment.account}/accounts/policies/${user.email}`,
      userSendObject: Object = {
        firstName:      user.firstName,
        middleName:     user.middleName,
        lastName:       user.lastName,
        email:          user.email
      }
    ;
    return this.http.post<any>(url, userSendObject, this.options);
  }

  forgotPasswordSendEmailId(email: string): Observable<any> {
    const url = `${environment.identity}/identity/users/account-recovery`;
    return this.http.post<any>(url, {} , {
      params : { email: email },
      headers : {
        "Content-Type": "application/json"
      }
    });
  }

  login(username: string, password: string) {
    const client_id ='7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d';
    let urlpartone = `${environment.api_gateway_url}/auth/oauth/v2/token`,
        urlparttwo = `grant_type=password&username=${username}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&scope=oob`;
    let url = urlpartone + '?' + urlparttwo;
    
    return this.http.post<any>(url, {}, {
        headers : {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .map( (access_token) => {
        // login successful if there's a jwt token in the response
        if (access_token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ username, access_token })
          );
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
     .catch((error:any) => Observable.throw('Invalid email/password combination'));
     /*oringal params
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
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      */
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem("currentUser");
  }

  //this method might be removed
  registerAccount(user: User) {
    const url = `${environment.identity}/api/users`;
    return this.http.post(url, user, this.options);
  }

  tokenVerification(token: string, email: string): Observable<Object> {
  	let url = `${environment.identity}/identity/users/${email}?token=${token}`;	
  	return this.http.post(url,{}, this.options);
  }

  updatePassword(user: User, token: string, testing: boolean = false ) {
    let url =         `${environment.identity}/identity/users/password/${user.email}`;
    return this.http.put(url, {} , {
      params : { 
        newPassword: user.password,
        token: token 
      },
      headers : {
        "Content-Type": "application/json"
      }
    });
  }

  verifyPolicy(userObject): Observable<any> {
    const user =        userObject.$user.source._value;
    let 
      url: string =     `${environment.personalpolicy}/policy/${user.policyNumber}`,
      userSendObject: Object = {
        firstName:      user.firstName,
        middleName:     user.middleName,
        lastName:       user.lastName
      }
    ;
    return this.http.put(url, userSendObject, this.options);
  }

  verifyUser(userObject): Observable<any> {
    const user =        userObject.$user.source._value;
    let 
      url: string =     `${environment.account}/accounts/${user.email}`,
      userSendObject: Object = {
        firstName:      user.firstName,
        middleName:     user.middleName,
        lastName:       user.lastName,
        email:          user.email
      }
    ;
    return this.http.post<any>(url, userSendObject, this.options);
  }
}
