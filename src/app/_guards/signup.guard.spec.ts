import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, fakeAsync, tick }     from '@angular/core/testing';

import { SignUpGuard }        from './signup.guard';
import { UserService }        from '../_services/user.service';
import { Router }             from '@angular/router';

describe('SignUpGuard', () => {

  let
    signUpGuard:            SignUpGuard,
    userService:            UserService;
  const router = {
      navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(()=> {
    TestBed.configureTestingModule({
      providers: [
        SignUpGuard,
        UserService,
        {provide: Router, useValue: router}
      ]
    });

    signUpGuard = TestBed.get(SignUpGuard);
    userService = TestBed.get(UserService);

  }));

  it('should be able to route when user has an observable', fakeAsync(()=>{
    userService.updateUser({email: 'test@xyz.com'});
    signUpGuard.canActivate().subscribe((res) => {
      expect(res).toBeTruthy();
    });
  }));

  it('should not route when user there is no user observable', fakeAsync(()=>{
    userService.updateUser(null);
    signUpGuard.canActivate().subscribe((res)=>{
      expect(res).toBeFalsy();
    });
  }));

});