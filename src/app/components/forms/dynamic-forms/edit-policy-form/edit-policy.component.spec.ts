import { FormBase, TextBox, FormBaseControlService, RegExHelper }   from 'mapfre-design-library';
import { EditPolicyComponent } from './edit-policy.component';
import { FormControl } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationService } from '../../../../_services/_iam/authentication-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, Observer, observable, ErrorObserver, BehaviorSubject } from 'rxjs';
import { UserService } from '../../../../_services/user.service';
import { SignupProcessComponent } from '../../../../routes/signup/signup-process/signup-process.component';
import { Location } from '@angular/common';

import { FormGroup } from '@angular/forms';

class MockFormBasetService extends FormBaseControlService{
  toFormGroup() {
    let res = new FormGroup({
      value: new FormControl('formbase')
    });
      return res;
  }
}

describe('EditPolicyComponent', () => {
  let component: EditPolicyComponent;
  let fixture: ComponentFixture<EditPolicyComponent>;
  let user: any;
  let userService: UserService;
  let authService: AuthenticationService;
  let location: Location;
  let fbControlService: FormBaseControlService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPolicyComponent , SignupProcessComponent ],
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

    TestBed.overrideComponent(
      EditPolicyComponent,
      {set: {providers: [{provide: FormBaseControlService, useClass: MockFormBasetService}]}}
    )


    fixture = TestBed.createComponent(EditPolicyComponent);
    fbControlService = TestBed.get(FormBaseControlService);
    userService = fixture.debugElement.injector.get(UserService);
    authService = fixture.debugElement.injector.get(AuthenticationService);
    location = TestBed.get(Location);    
    user = {
      editFirst_name: "first",
      editMI_name : "middle",
      editLast_name: "last",
      editEmail: 'test@xyz.com',
      editPolicyNumber: 12345
    }
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    component.editPolicyForm = new FormGroup({});
  });

  xit('should create', () => {
    let input: FormBase<any>[] = [
      new TextBox({
        editFirst_name: "first",
        editMI_name : "middle",
        editLast_name: "last",
        editPolicyNumber: 12345
      })
    ];
    expect(component).toBeTruthy();
  });



  xit('should create user object', fakeAsync(()=>{
    let fakeUser = {
        addPolicyAttempts:                 3,
        firstName:                        "first",
        middleName:                       "middle",
        lastName:                         "last",
        email:                            'test@xyz.com',
        policyDetails:                    [{
          policynumber:                   { policynumber: 12345 }
        }]
      }
    // component.userData = {};
    // component.userData.addPolicyAttempts = 2;
    spyOn(userService,'updateUser');
    spyOn(component,'prefillData');
    component.createUserObject(user);
    tick();
    fixture.detectChanges();
    expect(userService.updateUser).toHaveBeenCalled();
    expect(component.user).toEqual(fakeUser);
  }));

  xit('should edit the policy', fakeAsync(()=>{
    spyOn(component,'createUserObject');
    spyOn(component,'prefillData');
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('verifyPolicy');
      });
    });
    component.editPolicy();
    tick();
    fixture.detectChanges();
    expect(component.createUserObject).toHaveBeenCalled();
    expect(authService.verifyPolicy).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/createpassword');
    // expect(component.user).toEqual();
  }));



  xit('should throw error and redirect to signup/notfound', fakeAsync(()=>{
    spyOn(component,'createUserObject');
    spyOn(component,'prefillData');
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 404 });
      });
      return obs;
    });
    component.editPolicy();
    tick();
    fixture.detectChanges();
    expect(component.createUserObject).toHaveBeenCalled();
    expect(authService.verifyPolicy).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/notfound');
  }));


  xit('should throw error and redirect to signup/bop', fakeAsync(()=>{
    spyOn(component,'createUserObject');
    spyOn(component,'prefillData');
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 400 });
      });
      return obs;
    });
    component.editPolicy();
    tick();
    fixture.detectChanges();
    expect(component.createUserObject).toHaveBeenCalled();
    expect(authService.verifyPolicy).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/bop');
  }));


  xit('should throw error and redirect to signup/policybelongstoanother', fakeAsync(()=>{
    spyOn(component,'createUserObject');
    spyOn(component,'prefillData');
    spyOn(authService,'verifyPolicy').and.callFake(()=>{
      let obs =   Observable.create((observer: Observer<string>)=>{
        throw observer.error({status: 409 });
      });
      return obs;
    });
    component.editPolicy();
    tick();
    fixture.detectChanges();
    expect(component.createUserObject).toHaveBeenCalled();
    expect(authService.verifyPolicy).toHaveBeenCalled();
    expect(location.path()).toBe('/signup/policybelongstoanother');
  }));


  xit('should get the prefill data', fakeAsync(()=>{
    let fakePrefill = {
      firstName:                        "first",
      middleName:                       "middle",
      lastName:                         "last",
      policyDetails:                    [{
        policynumber:                   { policynumber: 12345 }
      }]
    }
    component.editPolicyForm = new FormGroup({
          editFirst_name: new FormControl(),
          editMI_name : new FormControl(),
          editLast_name: new FormControl(),
          editPolicyNumber: new FormControl()
    });
    spyOn(component,'ngOnInit');
    component.prefillData(fakePrefill);
    tick();
    fixture.detectChanges();
    expect(component.editPolicyForm.get("editFirst_name").value).toBe(fakePrefill.firstName);
    expect(component.editPolicyForm.get("editMI_name").value).toBe(fakePrefill.middleName);
    expect(component.editPolicyForm.get("editLast_name").value).toBe(fakePrefill.lastName);
    expect(component.editPolicyForm.get("editPolicyNumber").value).toBe(fakePrefill.policyDetails[0].policynumber.policynumber);
  }));

  xit('should Initialize', fakeAsync(()=>{
    spyOn(component,'prefillData');
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.editPolicyForm.get('value').value).toBe('formbase');
    expect(component.prefillData).toHaveBeenCalled();
  }));

});
