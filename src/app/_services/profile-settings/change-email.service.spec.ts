import { TestBed } from '@angular/core/testing';

import { ChangeEmailService } from './change-email.service';

describe('ChangeEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ChangeEmailService = TestBed.get(ChangeEmailService);
    expect(service).toBeTruthy();
  });
});
