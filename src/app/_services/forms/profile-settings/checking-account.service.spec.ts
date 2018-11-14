import { TestBed } from '@angular/core/testing';

import { CheckingAccountService } from './checking-account.service';

describe('CheckingAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckingAccountService = TestBed.get(CheckingAccountService);
    expect(service).toBeTruthy();
  });
});
