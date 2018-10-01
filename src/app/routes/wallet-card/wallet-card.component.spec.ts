import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WalletCardComponent } from './wallet-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { WalletCardService } from '../../_services/_iam/wallet-card.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('WalletCardComponent', () => {
  let component: WalletCardComponent;
  let fixture: ComponentFixture<WalletCardComponent>;
  let walletCardService : WalletCardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WalletCardComponent
       ],
      imports:[
        RouterTestingModule
      ],
      providers: [WalletCardService,{provide: ActivatedRoute,
        useValue: {
          queryParams: Observable.of({email: 'test@xyz.com'})
        }
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletCardComponent);
    component = fixture.componentInstance;
    walletCardService = fixture.debugElement.injector.get(WalletCardService);
    fixture.detectChanges();
  });

  it('should call the wallet card service to generate the pk pass', fakeAsync(()=>{
    spyOn(walletCardService,'generatePkPass');
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(walletCardService.generatePkPass).toHaveBeenCalled();
  }));
});
