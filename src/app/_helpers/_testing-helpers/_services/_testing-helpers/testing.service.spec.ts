import { TestBed, inject } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('estingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });
  });

  xit('should be created', inject([TestingService], (service: TestingService) => {
    expect(service).toBeTruthy();
  }));
});
