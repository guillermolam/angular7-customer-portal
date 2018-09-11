import { TestBed, inject } from '@angular/core/testing';

import { EditPolicyService } from './edit-policy.service';

describe('EditPolicyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPolicyService]
    });
  });

  it('should be created', inject([EditPolicyService], (service: EditPolicyService) => {
    expect(service).toBeTruthy();
  }));
});
