import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { environment } from "../../../environments/environment"; 

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
      .post(this.backend_server_url+"/api/login1", JSON.stringify({ username, password }),{
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

  //Password Reset Functionality
  passwordReset(email: string): Observable<boolean> {
    console.log("Password Reset Service POST");
    return this.http
      .post(this.backend_server_url+"/api/users/password", JSON.stringify({ email }),{
        headers: {
          "Content-Type": "application/json"
        }
        })
      .map((res: Response) => {
        if (res) {
        if (res.status === 200) {
          console.log("Password Reset Succesfully");
            return true
        }
        else {
          console.log("Password Reset Failed.Headers - " + res.headers);
            return false
        }
      }
    });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem("currentUser");
  }
}
