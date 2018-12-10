import { TestBed } from '@angular/core/testing';

import { PolicyDataService } from './policy-data.service';

describe('PolicyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: PolicyDataService = TestBed.get(PolicyDataService);
    expect(service).toBeTruthy();
  });
});
