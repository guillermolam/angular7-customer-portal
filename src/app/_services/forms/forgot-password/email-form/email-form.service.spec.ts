import { TestBed, inject } from '@angular/core/testing';

import { EmailFormService } from './email-form.service';

describe('EmailFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailFormService]
    });
  });

  it('should be created', inject([EmailFormService], (service: EmailFormService) => {
    expect(service).toBeTruthy();
  }));
});
