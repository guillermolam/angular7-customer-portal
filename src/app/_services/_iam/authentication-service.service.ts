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
  public backend_server_url = environment.backend_server_url;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }


  login(username: string, password: string): Observable<boolean> {
    console.log("Authentication Service POST to Login service");
    return this.http
      .post(this.backend_server_url+"/api/login", JSON.stringify({ username, password }),{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .map((response: Response) => response.json())
      .map( (token) => {
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ username, token })
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
