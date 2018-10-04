import { TestBed, async, inject } from '@angular/core/testing';

import { VerifyUserGuard } from './verify-user.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterState } from '@angular/router';

describe('AuthGuard', () => {

  let verifyUserGuard:    VerifyUserGuard;
  let route:              ActivatedRouteSnapshot;
  let state:              RouterStateSnapshot;
  let router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        verifyUserGuard,
        {provide: Router, useValue: router}
      ]
    });

    verifyUserGuard = TestBed.get(VerifyUserGuard);
  });

  afterEach(()=>{
    
  })



});