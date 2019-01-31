import { TestBed, async, fakeAsync }        from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router }
                                             from '@angular/router';
import { ChangeProfileSettingsPasswordGuard } from './change-profile-settings-password.guard';
import { ProfileSettingsRoutingService }    from'../_services/profile-settings/profile-settings-routing.service';


describe('ChangeProfileSettingsPasswordGuard', () => {
  let
    profileSettingsRoutingService:            ProfileSettingsRoutingService,
    changeProfileSettingsPasswordGuard:       ChangeProfileSettingsPasswordGuard,
    route:                                    ActivatedRouteSnapshot,
    state:                                    RouterStateSnapshot;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileSettingsRoutingService,
        ChangeProfileSettingsPasswordGuard,
        {provide: Router, useValue: router}
      ]
    });
    changeProfileSettingsPasswordGuard =     TestBed.get(ChangeProfileSettingsPasswordGuard);
    profileSettingsRoutingService =          TestBed.get(ProfileSettingsRoutingService);
  });

  afterEach ( ()=> {
    profileSettingsRoutingService.clearPasswordProcess();
  });

  xit('should be able to route when user has an observable', fakeAsync( () => {
    profileSettingsRoutingService.setPasswordProcess(true);
    changeProfileSettingsPasswordGuard
    .canActivate(route, state)
    .subscribe((res) => {
      expect(res).toBeTruthy();
    });
  }));

  xit('should not route when user there is no observable', fakeAsync(() => {
    changeProfileSettingsPasswordGuard
    .canActivate(route, state)
    .subscribe((res) => {
      expect(res).toBeFalsy();
    });
  }));

});
