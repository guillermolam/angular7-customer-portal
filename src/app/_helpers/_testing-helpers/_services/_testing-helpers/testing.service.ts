import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlHandlingStrategy } from '../../../../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  public testingResponses(s: string): any {
    if(s == 'aA1!sss') {
      return this.http.post('https://httpstat.us/404', {}, {
        params : { password: s },
        headers : {
          "Content-Type": "application/json"
        }
      })
    }
    else {
      return this.http.post('https://httpstat.us/202', {}, {
        params : { password: s },
        headers : {
          "Content-Type": "application/json"
        }
      })
    }
  }

  public testingJsonObject(type: string, amount: number): any {
    let url = `https://jsonplaceholder.typicode.com/${type}/${amount}`;
    return this.http.post(url, {} , {
      params : {},
      headers : {
        "Content-Type": "application/json"
      }
    });
  }
}

//if the paramater in the url has _testing=true then inject this into the components
//within the components 