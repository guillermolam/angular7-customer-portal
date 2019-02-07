import { StorageServiceObservablesService } from './../storage-service-observables/storage-service-observables.service';
import { HttpClient } from '@angular/common/http';
import { UserService }          from './../user.service';
import { Injectable }           from '@angular/core';
import { of, throwError }       from 'rxjs';
import { catchError, map }      from 'rxjs/operators';
import { environment }          from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {
  // backend:                    string = environment.backend_server_id;

  constructor(
    private http:             HttpClient,
    private userService:      UserService,
    private storageService:   StorageServiceObservablesService
  ) { }

  
  authenticateCurrentPassword(password){
 
      // const url = `https://mdv-doctest:8087/identity/users/authenticate`;
      const url = `${environment.backend_server_url_identity}/authenticate`;
      const body = {
      email: this.storageService.getUserFromStorage(),
      // email: user.email.address,
      password: password
      }    
      return this.http.post(url,body);
  }


  changeUserPassword(newPassword){

    return this.userService.$user.pipe(map((user)=>{
      // const url = `https://mdv-doctest:8087/identity/users/password/${user.email.address}?newPassword=${newPassword}`;
      const url = `${environment.backend_server_url_identity}/password/${user.email.address}?newPassword=${newPassword}`;
      return this.http.post(url,{});
    })
    );    

  }

}
