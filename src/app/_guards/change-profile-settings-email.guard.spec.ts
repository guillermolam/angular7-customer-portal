import { TestBed, async, inject } from '@angular/core/testing';

import { ChangeProfileSettingsEmailGuard } from './change-profile-settings-email.guard';

describe('ChangeProfileSettingsEmailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeProfileSettingsEmailGuard]
    });
  });

  it('should ...', inject([ChangeProfileSettingsEmailGuard], (guard: ChangeProfileSettingsEmailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
