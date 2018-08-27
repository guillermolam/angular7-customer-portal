import { TestBed, inject } from '@angular/core/testing';

import { AddPolicyService } from './add-policy.service';

describe('AddPolicyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPolicyService]
    });
  });

  it('should be created', inject([AddPolicyService], (service: AddPolicyService) => {
    expect(service).toBeTruthy();
  }));
});
