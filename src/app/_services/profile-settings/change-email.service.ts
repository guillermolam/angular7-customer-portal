import { HttpClient }   from '@angular/common/http';
import { Injectable }   from '@angular/core';
import { environment }  from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeEmailService {

  backend:              string = environment.backend_server_cu;

  constructor(
    private http:       HttpClient
  ) { }

  updateAccountEmail(email, token, reqBody) {
    const url =         `${this.backend}/customers/accounts/change-email?email=${email}`;
    return this.http.put(url, reqBody);
  }


}
