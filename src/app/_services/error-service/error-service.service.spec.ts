import { TestBed } from '@angular/core/testing';

import { ErrorServiceService } from './error-service.service';

describe('ErrorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ErrorServiceService = TestBed.get(ErrorServiceService);
    expect(service).toBeTruthy();
  });
});
