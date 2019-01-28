import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeEmailService {

  constructor(
    private http: HttpClient
  ) { }

  updateAccountEmail(email, token, reqBody){
    const url = `https://mdv-doctest:8083/customers/accounts/change-email?email=${email}`;
    // const url = `${environment.backend_server_url}/customers/accounts/change-email?email=${email}&token=${token}`;
    return this.http.put(url,reqBody);
  }


}
