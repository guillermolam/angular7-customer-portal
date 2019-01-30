import { TestBed, async, inject } from '@angular/core/testing';

import { ChangeProfileSettingsPasswordGuard } from './change-profile-settings-password.guard';

describe('ChangeProfileSettingsPasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeProfileSettingsPasswordGuard]
    });
  });

  it('should ...', inject([ChangeProfileSettingsPasswordGuard], (guard: ChangeProfileSettingsPasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});
