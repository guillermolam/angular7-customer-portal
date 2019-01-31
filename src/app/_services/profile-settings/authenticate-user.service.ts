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
  backend:                    string = environment.backend_server_id;

  constructor(
    private http:             HttpClient,
    private userService:      UserService,
    private storageService:   StorageServiceObservablesService
  ) { }

  /* will nedd to check if this is being used */

  authenticateCurrentPassword(psw) {
      const
        url =                 `${this.backend}/identity/users/authenticate`,
        body = {
            email:            this.storageService.getUserFromStorage(),
            password:         psw
        };
      return this.http.post(url, body);
  }

  changeUserPassword(newPassword) {
    return this.userService.$user.pipe( map( (user) => {
      const url =             `${this.backend}/identity/users/password/${user.email.address}?newPassword=${newPassword}`;
      return this.http.post(url, {});
    }));
  }
}
