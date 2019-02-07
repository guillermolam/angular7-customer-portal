import { TestBed } from '@angular/core/testing';

import { ClientCredentialsService } from './client-credentials.service';

describe('ClientCredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ClientCredentialsService = TestBed.get(ClientCredentialsService);
    expect(service).toBeTruthy();
  });
});
