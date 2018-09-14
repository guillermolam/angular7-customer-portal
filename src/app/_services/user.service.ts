import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { User }               from '../_models/user';

@Injectable()
export class UserService {
  user :                      User;
  private messageSource =     new BehaviorSubject<User>(this.user);
  $user =                     this.messageSource.asObservable();

  constructor() {}

  /*createUserObject(object): void {
    this.user = {
      addPolicyAttempts:                this.userData.addPolicyAttempts +1,
      firstName:                        object.editFirst_name,
      middleName:                       object.editMI_name,
      lastName:                         object.editLast_name,
      email:                            object.editEmail,
      policyDetails:                    [{
        policynumber:                   { policynumber: object.editPolicyNumber }
      }]
    };
    this.updateUser(this.user);
  }*/

  updateUser(user: User) {
    this.messageSource.next(user);
  }
}
