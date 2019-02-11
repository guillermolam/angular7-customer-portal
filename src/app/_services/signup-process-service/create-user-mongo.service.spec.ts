import { TestBed } from '@angular/core/testing';

import { CreateUserMongoService } from './create-user-mongo.service';

describe('CreateUserMongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateUserMongoService = TestBed.get(CreateUserMongoService);
    expect(service).toBeTruthy();
  });
});
