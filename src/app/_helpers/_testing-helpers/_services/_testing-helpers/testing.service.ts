import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  public testingResponses(testData): Observable<object> {
    // testData.policyNumber == 800000
    if (testData.email == 'glam@mapfreusa.com' || testData.enrollInEft_accountName == 'Error') {
      return this.http.post<object>('https://httpstat.us/404', testData, {
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200'
        }
      });
    }
    else {
      return this.http.post<object>('https://httpstat.us/202', testData, {
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200'
        }
      });
    }
  }

  public testingJsonObject(testingData): Observable< object> {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.post<object>(url, testingData , {
      params : testingData,
      headers : {
        'Content-Type': 'application/json'
      }
    });
  }
}
