import { TestBed } from '@angular/core/testing';

import { ChangeAddressService } from './change-address.service';

describe('ChangeAddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeAddressService = TestBed.get(ChangeAddressService);
    expect(service).toBeTruthy();
  });
});
