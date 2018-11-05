import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { WalletCardService } from './wallet-card.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../../environments/environment.dev';

describe('WalletCardService', () => {

  let httpMock: HttpTestingController;
  let walletService: WalletCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WalletCardService
      ], imports: [
          HttpClientTestingModule,
          RouterTestingModule
        ]
    });

    httpMock = TestBed.get(HttpTestingController);
    walletService = TestBed.get(WalletCardService);
  });

  it('should return the Policy details', fakeAsync( () => {
    const email = 'testmc@gmail.com';
    const arrayBuffer = new ArrayBuffer(1);

    walletService.generatePkPass(email).subscribe( (response) => {
        expect(response).toEqual(arrayBuffer);
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/accounts/wallet/${email}`);
    expect(req.request.method).toBe('GET');
    expect(req.request.body).toBeFalsy();
    expect(req.request.responseType).toBe('arraybuffer');
    req.flush(new ArrayBuffer(1));

    }));
});
