import { HttpClient }         from "@angular/common/http";
import { Injectable }         from "@angular/core";
import { Observable }         from "rxjs";
import { environment }        from "../../../environments/environment";
import { TestingService }     from "../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service";
import { User }               from "../../_models/user";
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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
  private options:            Object = { headers : {"Content-Type": "application/json"}};

  constructor(
    private http:             HttpClient,
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  createPassword(userObject): Observable<User> {
    const user = userObject.$user.source.value,
          url = `${environment.identity}/accounts?${user.signUpEmail}?token=${userObject.token}`;
    
    console.log("createPassword", url, user);

    return this.http.post<User>(url, user, this.options).pipe(
      tap((user: User) => console.log(`added ${user}`) ),
      catchError( err => of(err) )
    );
  }

  forgotPasswordSendEmailId(email: string) {
    const url = `${environment.identity}/identity/users/account-recovery`;
    return this.http.post(url, {} , {
      params : { email: email },
      headers : {
        "Content-Type": "application/json"
      }
    });
  }

  login(username: string, password: string): Observable<Object> {
    const url = environment.api_gateway_url + "/auth/oauth/v2/token";
    return this.http
      .post(url, {}, {
        params : {
          grant_type: 'password',
          username: username,
          password: password,
          client_id:'9e8881c6-9fd2-4113-8602-6affc18a6fdd',
          client_secret: '01c5ebc0-8242-4025-b93d-0ad5e168b845',
          scope: 'oob'
        },
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
  	const url = `${environment.identity}/identity/users/${email}?token=${token}`;	
  	return this.http.post(url,{}, this.options);
  }

  updatePassword(user: User, token: string, testing: boolean = false ) {
    const url = `${environment.identity}/identity/users/password/${user.email}`;
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

  verifyPolicy(userObject) {
    console.log("verifyPolicy userObject",userObject);
    const user = userObject.$user.source._value;
    console.log("verifyPolicy user",user)
    const url = `${environment.personalpolicy}/policy/${user.policyNumber}`;
    if(user.policyNumber == undefined) {
      return user;
    }
    else {
      return this.http.get(url, this.options);
    }
    
  }

  verifyUser(userObject) {
    console.log("verifyUser userObject",userObject);
    const user = userObject.$user.source._value;
    console.log("verifyUser user",user);
    const url = `${environment.account}/accounts/${user.email}`;
    
    return this.http.post(url, user,{ 
      headers : {
      "Content-Type": "application/json"
    }})
      /*.pipe(
        tap((user: User) => console.log(`verify ${user}`) ),
        catchError( err => of(err) )
      )*/
  }

}

