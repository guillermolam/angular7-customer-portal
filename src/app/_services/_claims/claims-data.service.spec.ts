import { TestBed } from '@angular/core/testing';

import { ClaimsDataService } from './claims-data.service';

describe('ClaimsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ClaimsDataService = TestBed.get(ClaimsDataService);
    expect(service).toBeTruthy();
  });
});
