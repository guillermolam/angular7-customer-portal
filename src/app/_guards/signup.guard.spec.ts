import { TestBed, async }     from '@angular/core/testing';
import { Router }             from '@angular/router';

import { SignUpGuard }        from './signup.guard';
import { UserService }        from '../_services/user.service';

describe('SignUpGuard', () => {

  let signUpGuard:            SignUpGuard,
      userService:            UserService;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        SignUpGuard,
      ]
    });
    signUpGuard = TestBed.get(SignUpGuard);
  });

  afterEach(()=>{
   userService.updateUser(null)
  });

  it('should be able to route when user has an observable', async(()=>{
    //create the observable
    userService.updateUser({email: "test@test.com"});
    //map|subscribe to the service

    //expect it to be true
      expect(signUpGuard.canActivate()).toBeTruthy();
  }));

  it('should not route when user there is no user observable', async(()=>{
    expect(signUpGuard.canActivate()).toBeFalsy(); 
  }));

});