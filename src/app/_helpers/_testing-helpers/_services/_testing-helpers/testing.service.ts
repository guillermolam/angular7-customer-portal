import { Injectable }           from '@angular/core';
import { HttpClient }           from "@angular/common/http";
import { UrlHandlingStrategy }  from '@angular/router';
import { Observable }           from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  public testingResponses(testData): Observable<Object> {
    //testData.policyNumber == 800000
    if(testData.email == 'glam@mapfreusa.com') {
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