import { TestBed } from '@angular/core/testing';

import { ErrorInterceptionService } from './error-interception.service';

describe('ErrorInterceptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ErrorInterceptionService = TestBed.get(ErrorInterceptionService);
    expect(service).toBeTruthy();
  });
});
