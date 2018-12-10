import { PolicyDataService } from './data-services/policy-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { environment } from '../../../environments/environment';

import { PolicyDetailsService } from './policy-details.service';

describe('PolicyDataService', () => {

  let policyDataService: PolicyDataService;
  let httpMock: HttpTestingController;
  let policyDetailsService: PolicyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PolicyDataService , PolicyDetailsService ],
      imports: [ HttpClientTestingModule ]
    });

    policyDataService = TestBed.get(PolicyDataService);
    policyDetailsService = TestBed.get(PolicyDetailsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  fit('should update the observable for policy by email', fakeAsync(() => {
    const email = 'testmfre@gmail.com';
    spyOn(policyDataService, 'updatePolicyDetails');
    policyDetailsService.getPolicyDetailsByEmail(email);
    tick();
    const req = httpMock.expectOne(`${environment.backend_server_url}/personal-policies/${email}`);
    expect(req.request.method).toBe('GET');
    req.flush('data');
    expect(policyDataService.updatePolicyDetails).toHaveBeenCalled();
  }));

  fit('should update the observable for documents by policy number', fakeAsync(() => {
    const policyNumber = 'BBWQKQ';
    spyOn(policyDataService, 'updatePolicyDetails');
    policyDetailsService.getDocumentsByPolicy(policyNumber);
    tick();
    const req = httpMock.expectOne(`${environment.backend_server_url}/personal-policies/${policyNumber}/documents`);
    expect(req.request.method).toBe('GET');
    req.flush('data');
    expect(policyDataService.updatePolicyDetails).toHaveBeenCalled();
  }));
});
