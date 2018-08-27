import { TestBed, inject } from '@angular/core/testing';

import { CreateAccountServiceService } from './create-account-service.service';

describe('CreateAccountServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAccountServiceService]
    });
  });

  it('should be created', inject([CreateAccountServiceService], (service: CreateAccountServiceService) => {
    expect(service).toBeTruthy();
  }));
});
