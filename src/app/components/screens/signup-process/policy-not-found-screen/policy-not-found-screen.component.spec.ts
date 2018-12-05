import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { PolicyNotFoundScreenComponent } from './policy-not-found-screen.component';
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
import { DashboardComponent } from '../../../../routes/my-insurance/dashboard.component';
import { VerifyAccountComponent } from '../../../../routes/verify-account/verify-account.component';
import { SignupProcessComponent } from '../../../../routes/signup/signup-process/signup-process.component';
import { Location } from '@angular/common';

// class MockUserService extends UserService{

//     sub = new BehaviorSubject<any>({password: ""});
//     $user = this.sub.asObservable()

//   updateUser(user) {
//     this.sub.next(user);
//   }
 
// }



describe('PolicyNotFoundScreenComponent', () => {
  let component: PolicyNotFoundScreenComponent;
  let fixture: ComponentFixture<PolicyNotFoundScreenComponent>;
  let user: any;
  let userService: UserService;
  let authService: AuthenticationService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyNotFoundScreenComponent,
        DashboardComponent,
        VerifyAccountComponent,
        SignupProcessComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
          { path: "my-insurance", component: DashboardComponent },
          { path: "verifyaccount", component: VerifyAccountComponent },
          { path: "signup/:parm", component: SignupProcessComponent }
      ]
      ),
        HttpClientTestingModule,
      ],
      providers: [ UserService, AuthenticationService],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    // TestBed.overrideComponent(
    //   PolicyNotFoundScreenComponent,
    //   {set: {providers: [{provide: UserService, useClass: MockUserService}]}}
    // )

    fixture = TestBed.createComponent(PolicyNotFoundScreenComponent);
    user = FakeAccountResponse.getUserPolicyData();
    // userService = TestBed.get(UserService);
    userService = fixture.debugElement.injector.get(UserService);
    authService = fixture.debugElement.injector.get(AuthenticationService);
    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    component.userData = user;
    fixture.detectChanges();
  });

  xit('should update policy holdername and number',()=>{
      component.getObservableData(user);
      fixture.detectChanges();
      expect(component.policyHolderName).toBe(`${user.firstName} ${user.middleName} ${user.lastName}`);
      expect(component.policyNumber).toBe(`${user.policyDetails[0].policynumbers.policynumber}`);
  })

  xit('should call updateObservable', fakeAsync(()=>{
    spyOn(userService,'updateUser');
    component.updateObservable(user);
    tick();
    fixture.detectChanges();
    expect(userService.updateUser).toHaveBeenCalled();
  }));

  xit('should call get ovbservable on initialization', ()=>{
    spyOn(component,'getObservableData')
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.getObservableData).toHaveBeenCalled();
  });

  xit('should check the users credential and route them to my-insurance', fakeAsync(() => {
    spyOn(component, 'updateObservable');
    spyOn(authService, 'verifyPolicy').and.callFake(() => {
      return Observable.create((observer: Observer<string>) => {
        observer.next('forgotpassword');
      });
    });
    spyOn(authService, 'login').and.callFake(() => {
      return Observable.create((observer: Observer<string>) => {
        observer.next('forgotpassword');
      });
    });
    userService.updateUser(user);
    fixture.detectChanges();
    component.tryAgain();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/my-insurance');
    expect(component.updateObservable).toHaveBeenCalled();
  }));


  xit('should check the users credential and route them to verifyaccount', fakeAsync(()=>{
    spyOn(component,'updateObservable');
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('forgotpassword');
      });
    });
    spyOn(authService,'login').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('forgotpassword');
      });
    });
    userService.updateUser({password:""});
    tick();
    fixture.detectChanges();
    component.tryAgain();
    fixture.detectChanges();
    tick();
    expect(location.path()).toBe('/verifyaccount');
    expect(component.updateObservable).toHaveBeenCalled();
  }));


  xit('should throw error and redirect to signup/notfound', fakeAsync(()=>{
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 404 });
      });
      return obs;
    });
    component.tryAgain();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/signup/notfound');
  }));

  xit('should throw error and redirect to signup/bop', fakeAsync(()=>{
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 400 });
      });
      return obs;
    });
    component.tryAgain();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/signup/bop');
  }));


  xit('should throw error and redirect to signup/policybelongstoanother', fakeAsync(()=>{
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 409 });
      });
      return obs;
    });
    component.tryAgain();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/signup/policybelongstoanother');
  }));

});
