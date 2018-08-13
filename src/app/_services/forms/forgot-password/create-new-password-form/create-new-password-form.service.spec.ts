import { TestBed, inject } from '@angular/core/testing';

import { CreateNewPasswordFormService } from './create-new-password-form.service';

describe('CreateNewPasswordFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateNewPasswordFormService]
    });
  });

  it('should be created', inject([CreateNewPasswordFormService], (service: CreateNewPasswordFormService) => {
    expect(service).toBeTruthy();
  }));
});
