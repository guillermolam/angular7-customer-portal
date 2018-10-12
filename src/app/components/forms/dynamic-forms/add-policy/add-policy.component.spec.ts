import { FormControl, FormGroup }       from '@angular/forms';
import { async, ComponentFixture, 
  TestBed, tick, fakeAsync }            from '@angular/core/testing';
import { TranslateModule }              from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA }             from '@angular/core';
import { RouterTestingModule }          from '@angular/router/testing';
import { HttpClientTestingModule }      from '@angular/common/http/testing';
import { ActivatedRoute, Router }       from '@angular/router';
import { Location }                     from '@angular/common';
import { TextBox }                      from 'mapfre-design-library/lib/_models/form-base-extends/text-box';
import { FormBase }                     from 'mapfre-design-library/lib/_models/form-base';
import { FormBaseControlService }       from 'mapfre-design-library/lib/_services/form-base-control.service';
import { AlertService }                 from 'mapfre-design-library/lib/_services//alert.service';
import { Observable, Observer, 
  observable, ErrorObserver, 
  BehaviorSubject }                     from 'rxjs';

import { AddPolicyComponent }           from './add-policy.component';
import { UserService }                  from '../../../../_services/user.service';
import { User }                         from '../../../../_models/user';
import { FakeAccountResponse }          from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { DashboardComponent }           from '../../../../routes/dashboard/dashboard.component';
import { VerifyAccountComponent }       from '../../../../routes/verify-account/verify-account.component';
import { SignupProcessComponent }       from '../../../../routes/signup/signup-process/signup-process.component';
import { RegExHelper }                  from '../../../../_helpers/regex-helper';
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';

describe('AddPolicyComponent', () => {
  let component: AddPolicyComponent;
  let fixture: ComponentFixture<AddPolicyComponent>;
  let user: any;
  let userService: UserService;
  let authService: AuthenticationService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolicyComponent, SignupProcessComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(
            [
            { path: "signup/:parm", component: SignupProcessComponent }
        ]),
        HttpClientTestingModule,
      ],
      providers: [ UserService, AuthenticationService, FormBaseControlService, RegExHelper],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPolicyComponent);
    userService = fixture.debugElement.injector.get(UserService);
    authService = fixture.debugElement.injector.get(AuthenticationService);
    location = TestBed.get(Location);

  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.legalCheckbox = true;
    spyOn(component,'addPolicyToObject');
  });

  it('should verify policy and route user to createpassword page', fakeAsync(() => {
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('verifyPolicy');
      });
    });
    component.addPolicy();
    tick();
    fixture.detectChanges();
    expect(component.addPolicyToObject).toHaveBeenCalled();
    expect(authService.verifyPolicy).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/createpassword');
  }));

  it('should throw error and redirect to signup/notfound', fakeAsync(()=>{
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 404 });
      });
      return obs;
    });
    component.addPolicy();
    tick();
    fixture.detectChanges();
    expect(component.addPolicyToObject).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/notfound');
  }));


  it('should throw error and redirect to signup/addpolicy', fakeAsync(()=>{
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 400 });
      });
      return obs;
    });
    component.addPolicy();
    tick();
    fixture.detectChanges();
    expect(component.addPolicyToObject).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/bop');
  }));


  it('should throw error and redirect to signup/policybelongstoanother', fakeAsync(()=>{
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 409 });
      });
      return obs;
    });
    component.addPolicy();
    tick();
    fixture.detectChanges();
    expect(component.addPolicyToObject).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/policybelongstoanother');
  }));


  xit('should add policy to the userObject', fakeAsync(()=>{
    spyOn(userService,'updateUser');
    component.addPolicyForm = new FormGroup({
      addPolicy: new FormControl('policy')
    })
    component.addPolicyToObject(user);
    tick();
    expect(userService.updateUser).toHaveBeenCalled();
  }));


  it('should return the true checkbox value', fakeAsync(()=>{
    let e = {target: {checked : true}};
    component.getLegalCheckBoxValue(e);
    fixture.detectChanges();
    expect(component.legalCheckbox).toBeTruthy();
  }));

  it('should return the false checkbox value', fakeAsync(()=>{
    let e = {target: {checked : false}};
    component.getLegalCheckBoxValue(e);
    fixture.detectChanges();
    expect(component.legalCheckbox).toBeFalsy();
  }));
});
