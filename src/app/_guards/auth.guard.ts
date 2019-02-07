import { Injectable }             from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,
  Router, RouterStateSnapshot }   from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    else {
      console.log("Bloody hell")
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
