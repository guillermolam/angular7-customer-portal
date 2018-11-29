import { HttpClient }         from '@angular/common/http';
import { Injectable }         from '@angular/core';
import { of, throwError }     from 'rxjs';
import { Observable }         from 'rxjs/Observable';
import { catchError, map }    from 'rxjs/operators';
import { environment }        from '../../../environments/environment.dev';//change it to environment later
import { User }               from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient
  ) { }

  getUserDocuments(policyNumber, user, accessToken): Observable<object> {
    const url = `${environment.backend_server_url}/personal-policies/${policyNumber}/documents`;
    return this.http.get(url);
  }

  policyByEmail(email): Observable<object> {
    const url = `${environment.backend_server_url}/personal-policies/${email}`;
    return this.http.get(url);
  }
}
