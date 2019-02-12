import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateUserMongoService {

  constructor(
    private http:HttpClient
  ) { }


  createMongoUser(email, password){

    const body = {
      email: email,
      password: password
    }

    const url = `${environment.backend_server_url_identity_2}/login`;  
    return this.http.post(url, body);

  }

}
