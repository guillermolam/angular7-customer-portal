import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { VerifyAccountComponent } from './verify-account.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationService } from '../../_services/_iam/authentication-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, Observer, observable, ErrorObserver, BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../../_services/user.service';
import { Location } from '@angular/common';
import { AlertService } from 'mapfre-design-library/lib/_services/alert.service';
import { ActivatedRoute } from '@angular/router';

describe('VerifyAccountComponent', () => {
  let component: VerifyAccountComponent;
  let fixture: ComponentFixture<VerifyAccountComponent>;
  let authService : AuthenticationService;
  let alertService: AlertService;
  let location: Location;
  let userService : UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAccountComponent,LoginComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
          { path: "login", component: LoginComponent }
      ]
      ),
        HttpClientTestingModule,
      ],
      providers: [ UserService, AuthenticationService, AlertService,
        {provide: ActivatedRoute,
          useValue: {
            queryParams: Observable.of({email: 'test@xyz.com',token: 'abcdef'})
          }}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyAccountComponent);
    authService = fixture.debugElement.injector.get(AuthenticationService);
    alertService = fixture.debugElement.injector.get(AlertService);
    location = TestBed.get(Location);
    userService = fixture.debugElement.injector.get(UserService);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return null if token/email is null', fakeAsync(()=>{
    let valid = component.validateToken(null,null);
    expect(valid).toBeNull();
  }));

  it('should validate the token', fakeAsync(()=>{
    spyOn(authService,'verifyAccountTokenVerification').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('verify');
      });
    });
    spyOn(alertService,'success');
    component.validateToken('email','token');
    tick();
    fixture.detectChanges();
    expect(alertService.success).toHaveBeenCalled();
    expect(location.path()).toBe('/login');
  }));

  it('should initialize user property and validate for token on Initialization', fakeAsync(()=>{
    userService.updateUser({});
    spyOn(component,'validateToken')
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.validateToken).toHaveBeenCalled();
  }))


});
