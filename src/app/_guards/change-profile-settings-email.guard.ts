import { Injectable }                   from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }
                                        from '@angular/router';
import { map }                          from 'rxjs/operators';
import { ChangeProfileEmailService }    from '../_services/profile-settings/change-profile-email.service';

@Injectable()
export class ChangeProfileSettingsEmailGuard implements CanActivate {

  constructor(
    private changeProfileEmailService:  ChangeProfileEmailService,
    private router:                     Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.changeProfileEmailService.$process
      .pipe( map( (process ) => {
        if ( process === true ) {
           return true;
        }
        else {
          this.router.navigate(['/profile', 'verify-password']);
          return false;
        }
      }))
    ;
  }
}
