import { TestBed, async } from '@angular/core/testing';
import { AuthGuard }      from './auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
  Router }                from '@angular/router';

describe('AuthGuard', () => {

  let authGuard:          AuthGuard;
  let route:              ActivatedRouteSnapshot;
  let state:              RouterStateSnapshot;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {provide: Router, useValue: router}
      ]
    });

    authGuard = TestBed.get(AuthGuard);
    // state = TestBed.get(RouterStateSnapshot);
    // state.url = 'unknown';
  });

  afterEach( () => {
    localStorage.removeItem('currentUser');
  });

  it('should be able to route when user is logged in', async( () => {
      localStorage.setItem('currentUser', 'user');
      expect(authGuard.canActivate(route, state)).toBeTruthy();
  }));

  it('should not route when user is not logged in', async( () => {
      // let routeState: RouterStateSnapshot = router.routerState;
      // routeState.url =  'navigate';
      // expect(authGuard.canActivate(route,state)).toBeFalsy();
  }));

});
