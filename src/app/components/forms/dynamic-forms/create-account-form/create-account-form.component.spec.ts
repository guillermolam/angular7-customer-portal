import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CreateAccountFormComponent } from './create-account-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationService } from '../../../../_services/_iam/authentication-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, Observer, observable, ErrorObserver, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../_services/user.service';
import { User } from '../../../../_models/user';
import { FakeAccountResponse } from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { DashboardComponent } from '../../../../routes/dashboard/dashboard.component';
import { VerifyAccountComponent } from '../../../../routes/verify-account/verify-account.component';
import { SignupProcessComponent } from '../../../../routes/signup/signup-process/signup-process.component';
import { Location } from '@angular/common';
import { AlertService } from '../../../../_services/alert.service';
import { FormBaseControlService } from '../../../../_services/form-base-control.service';
import { RegExHelper } from '../../../../_helpers/regex-helper';

describe('CreateAccountFormComponent', () => {
  let component: CreateAccountFormComponent;
  let fixture: ComponentFixture<CreateAccountFormComponent>;
  let user: any;
  let userService: UserService;
  let authService: AuthenticationService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountFormComponent, SignupProcessComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
          { path: "signup/:parm", component: SignupProcessComponent }
      ]
      ),
        HttpClientTestingModule,
      ],
      providers: [ UserService, AuthenticationService, AlertService, FormBaseControlService, RegExHelper],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountFormComponent);
    userService = fixture.debugElement.injector.get(UserService);
    authService = fixture.debugElement.injector.get(AuthenticationService);
    location = TestBed.get(Location);
    user = FakeAccountResponse.getUserData();
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the user object', fakeAsync(()=>{
    let object = {
      signUpFirst_name:   'first',
      signUpMI_name:      'middle',
      signUpLast_name:    'last',
      signUpEmail:        'test@xyz.com'
    }
    spyOn(userService,'updateUser');
    component.createUserObject(object,null)
    tick();
    fixture.detectChanges();
    expect(userService.updateUser).toHaveBeenCalled();
    expect(component.user.firstName).toBe(object.signUpFirst_name);
    expect(component.user.lastName).toBe(object.signUpLast_name);
    expect(component.user.middleName).toBe(object.signUpMI_name);
    expect(component.user.email).toBe(object.signUpEmail);
  }));

  it('should update the user object', fakeAsync(()=>{
    let object = {
      signUpFirst_name:   'first',
      signUpMI_name:      'middle',
      signUpLast_name:    'last',
      signUpEmail:        'test@xyz.com'
    }
    let policyDetails = [{
      InsName1:                 null,
      effDate:                  '12/12/2018',
      expDate:                  '12/12/2018',
      policynumbers:             { policynumber: 'BB0490' },
      policyStatus:             'cancelled',
      policyType:               'home',
      status:                   null,
    }]
    spyOn(userService,'updateUser');
    component.createUserObject(object,policyDetails)
    tick();
    fixture.detectChanges();
    expect(userService.updateUser).toHaveBeenCalled();
    expect(component.user.policyDetails).toEqual(policyDetails);
   
  }));


  it('should call register() to register the user', fakeAsync(()=>{
    userService.updateUser(user);
    spyOn(component,'createUserObject');
    spyOn(authService,'verifyUser').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('verifyUser');
      });
    });
    component.register();
    tick();
    fixture.detectChanges();
    expect(component.createUserObject).toHaveBeenCalled();
    expect(authService.verifyUser).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/createpassword');
  }));

  it('should throw error and redirect to signup/emailinuse', fakeAsync(()=>{
    spyOn(authService,'verifyUser').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 400 });
      });
      return obs;
    });
    component.register();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/signup/emailinuse');
  }));


  it('should throw error and redirect to signup/addpolicy', fakeAsync(()=>{
    spyOn(authService,'verifyUser').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 403 });
      });
      return obs;
    });
    component.register();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/signup/addpolicy');
  }));

});
