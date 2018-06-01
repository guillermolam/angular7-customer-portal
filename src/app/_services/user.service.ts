import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
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
