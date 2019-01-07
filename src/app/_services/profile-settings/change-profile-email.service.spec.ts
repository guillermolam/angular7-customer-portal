import { TestBed } from '@angular/core/testing';

import { ChangeProfileEmailService } from './change-profile-email.service';

describe('ChangeProfileEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ChangeProfileEmailService = TestBed.get(ChangeProfileEmailService);
    expect(service).toBeTruthy();
  });
});
