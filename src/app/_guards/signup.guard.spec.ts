
import { SignupComponent } from './../routes/signup/signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, fakeAsync, tick }     from '@angular/core/testing';

import { SignUpGuard }        from './signup.guard';
import { UserService }        from '../_services/user.service';
import { Router } from '@angular/router';
import { Location }                     from '@angular/common';

describe('SignUpGuard', () => {

  let signUpGuard:            SignUpGuard,
      userService:            UserService;
  let router = {
    navigate: jasmine.createSpy('navigate')

    // .and.returnValue('/signup')
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

  // afterEach(()=>{
  //  userService.updateUser(null);
  // });

  it('should be able to route when user has an observable', fakeAsync(()=>{
    
    userService.updateUser({email: "test@xyz.com"});
    signUpGuard.canActivate().subscribe((res)=>{
      expect(res).toBeTruthy();
    });
    // expect(router.navigate).toBe('/signup');

  }));

  it('should not route when user there is no user observable', fakeAsync(()=>{
    
    userService.updateUser(null);
    signUpGuard.canActivate().subscribe((res)=>{
      expect(res).toBeFalsy();
    });
  }));

});