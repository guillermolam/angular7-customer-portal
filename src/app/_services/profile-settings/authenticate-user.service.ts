import { HttpClient } from '@angular/common/http';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor(
    private userService: UserService,
    private http:             HttpClient,
  ) { }

  
  authenticateCurrentPassword(password){

    return this.userService.$user.pipe(map((user)=>{
      const url = `https://mdv-doctest:8082/identity/users/authenticate`;
      // const url = `${environment.backend_server_url}/identity/users/authenticate`;
      const body = {
      email: user.email.address,
      password: password
      }    
      return this.http.post(url,body);
    })
    );    
  }


}
