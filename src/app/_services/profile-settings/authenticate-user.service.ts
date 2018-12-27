import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor(

  ) { }

  
  authenticateCurrentPassword(password){
    const url = `${environment.backend_server_url}/identity/users/authenticate`;
    const body = {
      email: '',
      password: ''
      }

  }


}
