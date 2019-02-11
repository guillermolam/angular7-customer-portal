import { TestBed } from '@angular/core/testing';

import { RouteCreateAccountService } from './route-create-account.service';

describe('RouteCreateAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteCreateAccountService = TestBed.get(RouteCreateAccountService);
    expect(service).toBeTruthy();
  });
});
