import { TestBed } from '@angular/core/testing';

import { ClaimsService } from './claims.service';

describe('ClaimsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ClaimsService = TestBed.get(ClaimsService);
    expect(service).toBeTruthy();
  });
});
