import { TestBed } from '@angular/core/testing';

import { PolicyDocumentsDataService } from './policy-documents-data.service';

describe('PolicyDocumentsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: PolicyDocumentsDataService = TestBed.get(PolicyDocumentsDataService);
    expect(service).toBeTruthy();
  });
});
