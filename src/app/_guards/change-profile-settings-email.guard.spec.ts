import { TestBed, async, fakeAsync }        from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router }
                                            from '@angular/router';
import { ChangeProfileSettingsEmailGuard }  from './change-profile-settings-email.guard';
import { ChangeProfileEmailService }        from '../_services/profile-settings/change-profile-email.service';

describe('ChangeProfileSettingsEmailGuard', () => {
  let
    changeProfileEmailService:              ChangeProfileEmailService,
    changeProfileSettingsEmailGuard:        ChangeProfileSettingsEmailGuard,
    route:                                  ActivatedRouteSnapshot,
    state:                                  RouterStateSnapshot;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ChangeProfileEmailService,
        ChangeProfileSettingsEmailGuard,
        {provide: Router, useValue: router}
      ]
    });
    changeProfileSettingsEmailGuard =       TestBed.get(ChangeProfileSettingsEmailGuard);
    changeProfileEmailService =             TestBed.get(ChangeProfileEmailService);
  });

  afterEach( () => {
    changeProfileEmailService.clearEmail();
  });

  xit('should be able to route when user has an observable', fakeAsync( () => {
    changeProfileEmailService.saveProcess(true);
    changeProfileSettingsEmailGuard
    .canActivate(route, state)
    .subscribe((res) => {
      expect(res).toBeTruthy();
    });
  }));

  xit('should not route when user there is no observable', fakeAsync(() => {
    changeProfileSettingsEmailGuard
    .canActivate(route, state)
    .subscribe((res) => {
      expect(res).toBeFalsy();
    });
  }));

});
