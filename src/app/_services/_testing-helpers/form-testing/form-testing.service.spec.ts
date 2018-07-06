import { TestBed, inject } from '@angular/core/testing';

import { FormTestingService } from './form-testing.service';

describe('FormTestingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormTestingService]
    });
  });

  it('should be created', inject([FormTestingService], (service: FormTestingService) => {
    expect(service).toBeTruthy();
  }));
});
