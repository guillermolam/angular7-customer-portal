import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlHandlingStrategy } from '../../../../../../node_modules/@angular/router';
import { Observable } from '../../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  public testingResponses(testData): Observable<Object> {
    console.log(testData);
    if(testData.signUpEmail == 'glam@mapfreusa.com') {
      return this.http.post<Object>('https://httpstat.us/404', testData, {
        headers : {
          "Content-Type": "application/json"
        }
      })
    }
    else {
      return this.http.post<Object>('https://httpstat.us/202', testData, {
        headers : {
          "Content-Type": "application/json"
        }
      })
    }
  }

  public testingJsonObject(testingData): Observable<Object> {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.post<Object>(url, testingData , {
      params : testingData,
      headers : {
        "Content-Type": "application/json"
      }
    });
  }
}

//if the paramater in the url has _testing=true then inject this into the components
//within the components 