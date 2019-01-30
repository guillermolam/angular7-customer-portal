import { BillingDataService } from './data-services/billing-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { BillingDetailsService } from './billing-details.service';

describe('BillingDetailsService', () => {

  let httpMock: HttpTestingController;
  let billingDataService: BillingDataService;
  let billingDetailsService: BillingDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BillingDetailsService , BillingDataService ],
      imports: [ HttpClientTestingModule ]
    });

    billingDataService = TestBed.get(BillingDataService);
    billingDetailsService = TestBed.get(BillingDetailsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  xit('should update the observable for document by policyNumber', fakeAsync(() => {
    const policyNumber = 'BBWQKQ';
    spyOn(billingDataService, 'updateBillingDetails');
    billingDetailsService.getCurrentBillByPolicy(policyNumber);
    tick();
    const req = httpMock.expectOne(`${environment.backend_server_url}/billing/${policyNumber}/currentbill`);
    expect(req.request.method).toBe('GET');
    req.flush('data');
    expect(billingDataService.updateBillingDetails).toHaveBeenCalled();
  }));
});
