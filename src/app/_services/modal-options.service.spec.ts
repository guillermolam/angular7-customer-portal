import { TestBed, inject } from '@angular/core/testing';

import { ModalOptionsService } from './modal-options.service';

describe('ModalOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalOptionsService]
    });
  });

  it('should be created', inject([ModalOptionsService], (service: ModalOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
