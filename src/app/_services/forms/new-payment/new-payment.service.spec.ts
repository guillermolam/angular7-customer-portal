import { TestBed } from '@angular/core/testing';

import { NewPaymentService } from './new-payment.service';

describe('NewPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewPaymentService = TestBed.get(NewPaymentService);
    expect(service).toBeTruthy();
  });
});
