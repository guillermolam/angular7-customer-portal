import { TestBed } from '@angular/core/testing';

import { PaymentDataServiceService } from './payment-data-service.service';

describe('PaymentDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentDataServiceService = TestBed.get(PaymentDataServiceService);
    expect(service).toBeTruthy();
  });
});
