import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize'; 

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const url = environment.api_gateway_url + "/auth/oauth/v2/token";
    const body = {}; 
    return this.http
      .post(url, body,
      {
        params : {
          grant_type: 'password',
          username: 'testoauth',
          password: 'Abcd!234',
          client_id:'9e8881c6-9fd2-4113-8602-6affc18a6fdd',
          client_secret: '01c5ebc0-8242-4025-b93d-0ad5e168b845',
          scope: 'oob'
        },
        headers : {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .map( (access_token) => {
        console.log(access_token);
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
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem("currentUser");
  }
}
