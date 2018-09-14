import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { User }               from '../_models/user';

@Injectable()
export class UserService {
  user:                      User;
  private messageSource=     new BehaviorSubject<User>(this.user);
  $user=                     this.messageSource.asObservable();

  constructor() {}

  updateUser(user: User) {
    this.messageSource.next(user);
  }
}
