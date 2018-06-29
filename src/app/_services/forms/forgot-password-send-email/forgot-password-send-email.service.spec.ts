import { TestBed, inject } from '@angular/core/testing';

import { ForgotPasswordSendEmailService } from './forgot-password-send-email.service';

describe('ForgotPasswordSendEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotPasswordSendEmailService]
    });
  });

  it('should be created', inject([ForgotPasswordSendEmailService], (service: ForgotPasswordSendEmailService) => {
    expect(service).toBeTruthy();
  }));
});
