import { HttpClient } from '@angular/common/http';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { of, throwError }         from 'rxjs';
import { catchError, map }        from 'rxjs/operators';

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
      email: "testasasf@12312312.com",
      // email: user.email.address,
      password: password
      }    
      return this.http.post(url,body);
     })
  );    
  }


  changeUserPassword(newPassword){

    return this.userService.$user.pipe(map((user)=>{
      const url = `https://mdv-doctest:8082/identity/users/password/${user.email.address}?newPassword=${newPassword}`;
      // const url = `${environment.backend_server_url}/identity/users/password/${user.email.address}?newPassword=${newPassword}`;
      return this.http.post(url,{});
    })
    );    
  }


}
