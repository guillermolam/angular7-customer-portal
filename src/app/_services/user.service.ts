import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { User }               from '../_models/user';

@Injectable()
export class UserService {
  user:                      User;
  private messageSource =    new BehaviorSubject<User>(this.user);
  $user =                    this.messageSource.asObservable();

  constructor() {}

  getUserInfoInStorage(): object {
    return JSON.parse(localStorage.getItem( 'createuserinfo' )) ;
  }

  placeUserInfoInStorage(user: User) {
    localStorage.setItem('createuserinfo', JSON.stringify(user) );
  }

  updateUser(user: User) {
    this.messageSource.next(user);
  }
}
