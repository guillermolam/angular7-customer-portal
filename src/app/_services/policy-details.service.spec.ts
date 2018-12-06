import { TestBed } from '@angular/core/testing';

import { PolicyDetailsService } from './policy-details.service';

describe('PolicyDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: PolicyDetailsService = TestBed.get(PolicyDetailsService);
    expect(service).toBeTruthy();
  });
});
