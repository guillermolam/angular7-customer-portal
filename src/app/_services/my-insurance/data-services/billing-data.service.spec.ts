import { TestBed } from '@angular/core/testing';

import { BillingDataService } from './billing-data.service';

describe('BillingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: BillingDataService = TestBed.get(BillingDataService);
    expect(service).toBeTruthy();
  });
});
