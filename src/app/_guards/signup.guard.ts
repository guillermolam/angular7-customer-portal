import { Injectable }           from '@angular/core';
import { CanActivate, Router }  from '@angular/router';
import { UserService }          from '../_services/user.service';

@Injectable()
export class SignUpGuard implements CanActivate {

  constructor(
    private router:         Router,
    private userService:    UserService) { }

  public canActivate() {
    //If the user goes to the page with out an email paramater or an observable
    //then redirect the user to the login screen
    return this.userService.$user.map(
      userData => {
        console.log("userData",userData)
        if( userData == null ){
          this.router.navigate(["/signup"]);
          return false;
        }
        else {
          return true;
        }
      }
    );
  }
}