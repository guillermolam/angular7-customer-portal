import { TestBed } from '@angular/core/testing';

import { PolicyDetailsService } from './policy-details.service';

describe('PolicyDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyDetailsService = TestBed.get(PolicyDetailsService);
    expect(service).toBeTruthy();
  });
});
