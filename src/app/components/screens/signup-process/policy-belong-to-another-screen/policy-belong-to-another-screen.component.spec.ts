import { AlertService } from './../../../../_services/alert.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SignupProcessComponent } from './../../../../routes/signup/signup-process/signup-process.component';
import { AuthenticationService } from './../../../../_services/_iam/authentication-service.service';
import { UserService } from './../../../../_services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed,fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { PolicyBelongToAnotherScreenComponent } from './policy-belong-to-another-screen.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observer } from 'rxjs';


describe('PolicyBelongToAnotherScreenComponent', () => {
  let component: PolicyBelongToAnotherScreenComponent;
  let fixture: ComponentFixture<PolicyBelongToAnotherScreenComponent>;
  let authService: AuthenticationService;
  let alertService: AlertService;
  let location: Location;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyBelongToAnotherScreenComponent, SignupProcessComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(
          [
          { path: "signup/:parm", component: SignupProcessComponent }
      ]),
        HttpClientTestingModule
      ],
      providers:[
        UserService,
        AuthenticationService,
        AlertService
    ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyBelongToAnotherScreenComponent);
    authService = TestBed.get(AuthenticationService);
    userService = fixture.debugElement.injector.get(UserService);
    alertService = fixture.debugElement.injector.get(AlertService);
    location = TestBed.get(Location);

  }));

  beforeEach(() => {
    component = fixture.componentInstance;
  });

  it('should redirect ro createpassword page', fakeAsync(() => {
    spyOn(component,'createUserObject');
    spyOn(authService,'confirmPolicyAndAccount').and.callFake(()=>{
      let obs = Observable.create((observer: Observer<string>)=>{
        observer.next('confirmPolicyAndAccount');
      });
      return obs;
    });
    component.confirmPolicy();
    tick();
    expect(authService.confirmPolicyAndAccount).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/createpassword');
  }));

  it('should throw error', fakeAsync(() => {
    spyOn(component,'createUserObject');
    spyOn(alertService,'error');
    spyOn(authService,'confirmPolicyAndAccount').and.callFake(()=>{
      let obs = Observable.create((observer: Observer<string>)=>{
        throw observer.error('There was an issue');
      });
      return obs;
    });
    component.confirmPolicy();
    tick();
    expect(authService.confirmPolicyAndAccount).toHaveBeenCalled();
    expect(alertService.error).toHaveBeenCalled();
    
  }));


  it('should create usr object', fakeAsync(()=>{

    let user = {
      editFirst_name: "first",
      editMI_name : "middle",
      editLast_name: "last",
      editEmail: 'test@xyz.com',
      editPolicyNumber: 12345
    }
    spyOn(userService,'updateUser');
    component.createUserObject(user);
    tick();
    expect(component.user.firstName).toBe(user.editFirst_name);
    expect(component.user.middleName).toBe(user.editMI_name);
    expect(component.user.lastName).toBe(user.editLast_name);
    expect(component.user.email).toBe(user.editEmail);
    expect(userService.updateUser).toHaveBeenCalled();

  }));
});
