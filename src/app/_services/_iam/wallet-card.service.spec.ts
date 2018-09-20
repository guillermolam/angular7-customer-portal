// import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

// import { 
//   HttpModule,
//   Http,
//   BaseRequestOptions,
//   Response,
//   ResponseOptions
// } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';

// import { WalletCardService } from './wallet-card.service';


// describe('WalletCardService', () => {

//   let service: WalletCardService;
//   let backend: MockBackend;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         WalletCardService,
//         MockBackend,
//         BaseRequestOptions,
//         {
//           provide: Http,
//           useFactory: (backend,options) => new Http(backend,options),
//           deps: [MockBackend, BaseRequestOptions]
//         } 
//       ]
//     });

//     backend = TestBed.get(MockBackend);
//     service = TestBed.get(WalletCardService);

//   });

//   it('should return the Policy details', fakeAsync(()=>{

//     let fakeResponse = {
//       "policyNumber":             "12345",
//       "firstName":                "CONRAD",
//       "middleName":               "",
//       "lastName":                 "GAGNE",
//       "email":                    "testmc@gmail.com",
//       "stream":                   "pkpassdata"
//     };

//     backend.connections.subscribe( connection =>{
//       connection.mockRespond(new Response(new ResponseOptions({
//         body: JSON.stringify(fakeResponse)
//       })));
//     });


    


//   }));
// });
