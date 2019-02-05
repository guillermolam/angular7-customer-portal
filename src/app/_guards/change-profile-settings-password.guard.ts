import { Injectable }                   from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }
                                        from '@angular/router';
import { map }                          from 'rxjs/operators';
import { ProfileSettingsRoutingService } from'../_services/profile-settings/profile-settings-routing.service';

@Injectable()
export class ChangeProfileSettingsPasswordGuard implements CanActivate {
  constructor(
    private profileSettingsRoutingService:  ProfileSettingsRoutingService,
    private router:                     Router
  ) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.profileSettingsRoutingService.$passwordprocess
      .pipe( map( (currentstate) => {
        if ( currentstate === true ) {
          return true;
        }
        else {
          this.router.navigate(['/profile', 'enter-password']);
          return false;
        }
      }))
    ;
  }
}
