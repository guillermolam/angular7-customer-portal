import { TestBed } from '@angular/core/testing';

import { BillingObservableService } from './billing.service';

describe('BillingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: BillingObservableService = TestBed.get(BillingObservableService);
    expect(service).toBeTruthy();
  });
});
