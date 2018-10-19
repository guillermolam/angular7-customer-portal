import { Injectable }         from '@angular/core';
import { ActivatedRouteSnapshot,
        CanActivate, Router,
        RouterStateSnapshot } from '@angular/router';
import { map }                from 'rxjs/operators';
import { UserService }        from '../_services/user.service';

@Injectable()
export class VerifyUserGuard implements CanActivate {

  constructor(
    private router:         Router,
    private userService:    UserService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // If the user goes to the page with out an email paramater or an observable
    // then redirect the user to the login screen

    return this.userService.$user
      .pipe(
        map(
          (userData) => {
            if( userData == null && route.queryParams.email === undefined ){
              this.router.navigate(['/login']);
              return false;
            }
            else {
              return true;
            }
          }
        )
      )
    ;
  }
}
