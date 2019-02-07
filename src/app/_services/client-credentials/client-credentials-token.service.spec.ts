import { TestBed } from '@angular/core/testing';

import { ClientCredentialsTokenService } from './client-credentials-observable.service';

describe('ClientCredentialsTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ClientCredentialsTokenService = TestBed.get(ClientCredentialsTokenService);
    expect(service).toBeTruthy();
  });
});
