import { TestBed } from '@angular/core/testing';

import { EditEmailService } from './edit-email.service';

describe('EditEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditEmailService = TestBed.get(EditEmailService);
    expect(service).toBeTruthy();
  });
});
