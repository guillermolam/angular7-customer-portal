import { TestBed } from '@angular/core/testing';

import { BillingService } from './billing-service.service';

describe('BillingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: BillingService = TestBed.get(BillingService);
    expect(service).toBeTruthy();
  });
});
