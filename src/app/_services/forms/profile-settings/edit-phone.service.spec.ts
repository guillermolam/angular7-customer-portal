import { TestBed } from '@angular/core/testing';

import { EditPhoneService } from './edit-phone.service';

describe('EditPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPhoneService = TestBed.get(EditPhoneService);
    expect(service).toBeTruthy();
  });
});
