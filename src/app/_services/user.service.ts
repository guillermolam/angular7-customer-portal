import { Injectable } from "@angular/core";
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { User } from "../_models/user";

@Injectable()
export class UserService {
  private messageSource = new BehaviorSubject<User>(new User());
  $user = this.messageSource.asObservable();

  constructor() {}

  updateUser(user: User) {
    this.messageSource.next(user);
  }
}
