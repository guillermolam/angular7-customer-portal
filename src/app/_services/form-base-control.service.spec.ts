import { TestBed, inject } from '@angular/core/testing';

import { FormBaseControlService } from './form-base-control.service';

describe('FormBaseControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBaseControlService]
    });
  });

  it('should be created', inject([FormBaseControlService], (service: FormBaseControlService) => {
    expect(service).toBeTruthy();
  }));
});
