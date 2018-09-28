import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CreateNewPasswordComponent } from './create-new-password.component';
import { TranslateModule } from '@ngx-translate/core';
import { CreateNewPasswordFormService } from '../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { AuthenticationService } from '../../_services/_iam/authentication-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, Observer, observable, ErrorObserver } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class MockAuthService extends AuthenticationService{

  tokenVerification(token,email,forgotpassword): Observable<any>{
    let obs = Observable.create((observer: Observer<string>)=>{
      observer.next('forgotpassword');
    });
    return obs;
  }

}


describe('CreateNewPasswordComponent', () => {
  let component: CreateNewPasswordComponent;
  let fixture: ComponentFixture<CreateNewPasswordComponent>;
  let authenticationService : AuthenticationService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [ CreateNewPasswordFormService, AuthenticationService, 
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: Observable.of({token: 'token', email: 'email'})
          }
       }],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    TestBed.overrideComponent(
      CreateNewPasswordComponent,
      {set: {providers: [{provide: AuthenticationService, useClass: MockAuthService}]}}
    )

    authenticationService = TestBed.get(AuthenticationService);
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set successChangePassword to true', ()=>{
    component.checkForConfirmation(true);
    fixture.detectChanges();
    expect(component.successChangePassword).toBeTruthy();
  });


  it('should set successChangePassword to false', ()=>{
    component.checkForConfirmation(false);
    fixture.detectChanges();
    expect(component.successChangePassword).toBeFalsy();
  });


  it('should return false if the token is invalid', ()=>{
    let valid = component.isTokenValid(null,null);
    expect(valid).toBeFalsy()
  });

  it('should verify if the token is valid', fakeAsync(()=>{
    component.isTokenValid('token','email');
    tick();
    fixture.detectChanges();
    expect(component.expiredLink).toBeFalsy();
    expect(component.waitingForResponse).toBeFalsy();
  }));


  it('should verify for the invalid token', fakeAsync(()=>{
    spyOn(fixture.debugElement.injector.get(AuthenticationService),'tokenVerification')
    .and
    .callFake(():Observable<any>=>{
        let obs =   Observable.create((observer: Observer<string>)=>{
          throw observer.error('error');
        });
        return obs;
    });
    fixture.detectChanges();
    component.isTokenValid('token','email');
    tick();
    fixture.detectChanges();
    expect(component.expiredLink).toBeTruthy();
    expect(component.waitingForResponse).toBeFalsy();
  }));


  it('should set successpassword property to true', ()=>{
      component.userConfirmation(true);
      fixture.detectChanges();
      expect(component.successChangePassword).toBeTruthy;
  });

  it('should call isTockenValid if route params exists', ()=>{
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.successChangePassword).toBeTruthy;
});
});
