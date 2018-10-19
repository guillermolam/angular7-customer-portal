
import { ActivatedRouteSnapshot, ActivatedRoute,
  RouterStateSnapshot, Router }                     from '@angular/router';
import { Observable , of }                               from 'rxjs';
import { TestBed, async, fakeAsync, tick }          from '@angular/core/testing';
import { VerifyUserGuard }                          from './verify-user.guard';
import { UserService }                              from './../_services/user.service';

describe('AuthGuard', () => {

  let verifyUserGuard:    VerifyUserGuard;
  let route:              ActivatedRouteSnapshot;
  let state:              RouterStateSnapshot;
  let router = {
    navigate: jasmine
    .createSpy('navigate', (login) => {
      if (login == '/login') {
        return true;
      }
      else {
        return false;
      }
    })
  };
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        VerifyUserGuard,
        UserService,
        { provide: Router, useValue: router },
        { provide: ActivatedRoute,
          useValue: {
            queryParams: of( {email: 'test@xyz.com'} )
          }
        }
      ]
    });
    verifyUserGuard = TestBed.get(VerifyUserGuard);
    userService = TestBed.get(UserService);
    route = TestBed.get(ActivatedRoute);
  }));

  it('should be able to route when user has an observable', fakeAsync( ()=> {
    userService.updateUser({email: 'test@xyz.com'});
    verifyUserGuard.canActivate(route, state)
      .subscribe( (res) => {
        expect(res).toBeTruthy();
      }
    );
  }));

  it('should not route when user has no observable', fakeAsync( () => {
    userService.updateUser(null);
    verifyUserGuard.canActivate(route, state).subscribe( (res) => {
      expect(res).toBeFalsy();
    });
    tick();
  }));
});
