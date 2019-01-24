import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeProfileEmailService {

  constructor(
    private http:             HttpClient,
  ) { }

  checkIfEmailExists(oldEmail, newEmail){
  //  const url = `https://mdv-doctest:8087/identity/users/change-email?email=${oldEmail}`
   const url = `${environment.backend_server_url}/identity-api/users/change-email?email=${oldEmail}`;
    const body = {
        email: newEmail,
        password:""
      }
    return this.http.put(url, body);

  }


}
