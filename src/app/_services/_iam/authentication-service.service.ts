import { HttpClient }         from "@angular/common/http";
import { Injectable }         from "@angular/core";
import { Observable }         from "rxjs";
import { environment }        from "../../../environments/environment";
import { TestingService }     from "../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service";
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
  public token:     string;

  constructor(
    private http: HttpClient,
    private testingService: TestingService
  ) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  createPassword(user: User, token: string, testing: boolean = false ) {
    const url = `${environment.identity}/identity/users/password/${user.email}`;
    if(testing) {
      return this.testingService.testingResponses(user.password);
    }
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

  verifyUser(user, testing: boolean = false) {
    const url = `${environment.identity}/accounts/email`;
    if(testing){
      console.log("userData",user);
      return this.testingService.testingResponses(user);
    }
    else {
      return this.http.post(url, {}, {
        params : { user: user },
        headers : {
          "Content-Type": "application/json"
        }
      });
    }
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

  login(username: string, password: string): Observable<any> {
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

  registerAccount(user: User) {
    const url = `${environment.identity}/api/users`;
    return this.http.post(url, user,{
      headers: { "Content-Type": "application/json"}
      }
    );
  }

  tokenVerification(token: string,email: string): Observable<any> {
  	const url = `${environment.identity}/identity/users/${email}?token=${token}`;	
  	return this.http.post(url,{},{
       headers : {
        "Content-Type": "application/json"
      }
    })
  }

}

