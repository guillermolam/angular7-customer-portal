import { TestBed } from '@angular/core/testing';

import { EnrollEftEpayService } from './enroll-eft-epay.service';

describe('EnrollEftEpayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollEftEpayService = TestBed.get(EnrollEftEpayService);
    expect(service).toBeTruthy();
  });
});
