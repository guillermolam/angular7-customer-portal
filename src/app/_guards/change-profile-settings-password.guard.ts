import { Injectable }                   from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }
                                        from '@angular/router';
import { Observable }                   from 'rxjs';
import { map }                          from 'rxjs/operators';
import { ProfileSettingsRoutingService } from'../_services/profile-settings/profile-settings-routing.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeProfileSettingsPasswordGuard implements CanActivate {

  constructor(
    private profileSettingsRoutingService:  ProfileSettingsRoutingService,
    private router:                     Router
  ) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
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
