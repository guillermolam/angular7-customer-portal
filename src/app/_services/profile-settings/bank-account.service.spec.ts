import { TestBed } from '@angular/core/testing';

import { BankAccountService } from './bank-account.service';

describe('BankAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    expect(service).toBeTruthy();
  });
});
