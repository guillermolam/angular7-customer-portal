import { TestBed } from '@angular/core/testing';

import { DocumentsDataService } from './documents-data.service';

describe('DocumentsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentsDataService = TestBed.get(DocumentsDataService);
    expect(service).toBeTruthy();
  });
});
