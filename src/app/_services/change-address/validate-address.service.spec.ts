import { TestBed } from '@angular/core/testing';

import { ValidateAddressService } from './validate-address.service';

describe('ValidateAddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ValidateAddressService = TestBed.get(ValidateAddressService);
    expect(service).toBeTruthy();
  });
});
