import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { User }               from '../_models/user';

@Injectable()
export class UserService {
  user:                      any;
  private messageSource =    new BehaviorSubject<any>(this.user);
  $user =                    this.messageSource.asObservable();

  constructor() {}

  getUserInfoInStorage(): object {
    return JSON.parse(localStorage.getItem( 'createuserinfo' )) ;
  }

  placeUserInfoInStorage(user: any) {
    localStorage.setItem('createuserinfo', JSON.stringify(user) );
  }

  updateUser(user: any) {
    this.messageSource.next(user);
  }

  clearUser() {
    this.messageSource.next('');
  }
}
