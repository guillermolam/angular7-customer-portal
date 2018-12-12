import { TestBed } from '@angular/core/testing';

import { ContactBillingRepService } from './contact-billing-rep.service';

describe('ContactBillingRepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactBillingRepService = TestBed.get(ContactBillingRepService);
    expect(service).toBeTruthy();
  });
});
