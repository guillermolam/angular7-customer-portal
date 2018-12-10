import { TestBed } from '@angular/core/testing';

import { BillingDetailsService } from './billing-details.service';

describe('BillingDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingDetailsService = TestBed.get(BillingDetailsService);
    expect(service).toBeTruthy();
  });
});
