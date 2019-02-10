import { TestBed } from '@angular/core/testing';

import { ErrorRedirectionService } from './error-redirection.service';

describe('ErrorRedirectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorRedirectionService = TestBed.get(ErrorRedirectionService);
    expect(service).toBeTruthy();
  });
});
