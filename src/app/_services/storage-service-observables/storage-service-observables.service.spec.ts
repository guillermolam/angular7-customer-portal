import { TestBed } from '@angular/core/testing';

import { StorageServiceObservablesService } from './storage-service-observables.service';

describe('StorageServiceObservablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [StorageServiceObservablesService]
  });
});

  fit('should be created', () => {
    const service: StorageServiceObservablesService = TestBed.get(StorageServiceObservablesService);
    expect(service).toBeTruthy();
  });
});
