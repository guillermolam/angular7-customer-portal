import { TestBed } from '@angular/core/testing';

import { ProfileConfirmModalService } from './profile-confirm-modal.service';

describe('ProfileConfirmModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ProfileConfirmModalService = TestBed.get(ProfileConfirmModalService);
    expect(service).toBeTruthy();
  });
});
