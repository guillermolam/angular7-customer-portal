import { TestBed } from '@angular/core/testing';

import { PaperlessService } from './paperless.service';

describe('PaperlessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: PaperlessService = TestBed.get(PaperlessService);
    expect(service).toBeTruthy();
  });
});
