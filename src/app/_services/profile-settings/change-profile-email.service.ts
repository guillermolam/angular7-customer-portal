import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeProfileEmailService {

  constructor(
    private http:             HttpClient,
  ) { }

  checkIfEmailExists(email){
   const url = `https://mdv-doctest:8082/identity/users/change-email?email=${email}`
   // const url = `${environment.backend_server_url}/identity/users/authenticate`;

    return this.http.get(url);

  }


}
