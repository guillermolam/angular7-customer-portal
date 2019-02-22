import { TestBed } from '@angular/core/testing';

import { AddPolicyDataService } from './add-policy-data.service';

describe('AddPolicyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPolicyDataService = TestBed.get(AddPolicyDataService);
    expect(service).toBeTruthy();
  });
});
