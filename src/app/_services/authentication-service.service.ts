import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const headers = {username: email, password};
    return this.http.post<any>("https://amazon.mapfreusa.com/identity/EDSMWebService/services/user/login/B2C?attribs='y'", {}, {headers})
      .map((anEmail) => {
        // login successful if there"s a jwt token in the response
        if (anEmail && anEmail.token) {
          // store email details and jwt token in local storage to keep email logged in between page refreshes
          localStorage.setItem("currentemail", JSON.stringify(anEmail));
        }

        return anEmail;
      });
  }

  logout() {
    // remove email from local storage to log email out
    localStorage.removeItem("currentemail");
  }
}
