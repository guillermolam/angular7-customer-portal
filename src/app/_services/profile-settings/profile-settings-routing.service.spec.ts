import { TestBed } from '@angular/core/testing';

import { ProfileSettingsRoutingService } from './profile-settings-routing.service';

describe('ProfileSettingsRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ProfileSettingsRoutingService = TestBed.get(ProfileSettingsRoutingService);
    expect(service).toBeTruthy();
  });
});
